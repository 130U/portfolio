import { readFile } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import { parse as parseYaml } from "yaml";
import {
  collectionFolders,
  exists,
  loadPosts,
  readLanguageSource,
  repoRoot,
  safeChildPath,
} from "./lib/content.mjs";
import { validatePostData } from "./lib/validate-post.mjs";
import { validateSequenceData } from "./lib/validate-sequence.mjs";

const failures = [];
const posts = await loadPosts();
const seen = { id: new Set(), slug: new Set(), series: new Set() };
let firstAnchorCount = 0;

try {
  const sequence = JSON.parse(await readFile(join(repoRoot, "content-sequence.json"), "utf8"));
  const validation = validateSequenceData(sequence);
  if (!validation.valid) throw new Error(validation.errors.join("; "));
  for (const collection of Object.keys(collectionFolders)) {
    const highWatermark = sequence.collections[collection];
    const observed = Math.max(0, ...posts.filter((post) => post.data.collection === collection).map((post) => post.data.seriesNo));
    if (highWatermark < observed) {
      throw new Error(`${collection} high-water mark ${highWatermark} is below the observed series number ${observed}`);
    }
  }
} catch (error) {
  failures.push(`content-sequence.json: ${error.message}`);
}

function fail(post, message) {
  failures.push(`${post.data?.id ?? post.relativeDir}: ${message}`);
}

function attribute(attributes, name) {
  return attributes.match(new RegExp(`\\b${name}=["']([^"']+)["']`, "i"))?.[1];
}

function anchors(source) {
  return [...source.matchAll(/<a\b([^>]*)><\/a>/gi)].flatMap((match) => {
    const pairId = attribute(match[1], "data-pair-id");
    if (!pairId) return [];
    return [{ pairId, id: attribute(match[1], "id"), index: match.index ?? 0, length: match[0].length }];
  });
}

function externalLinks(source) {
  return [...source.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1]);
}

function displayEquations(source) {
  return [...source.matchAll(/^\$\$\s*\n([\s\S]*?)\n\$\$\s*$/gm)].map((match) => match[1]);
}

function equationStructure(equation) {
  return equation.replace(/\\text\{[^{}]*\}/g, "\\text{…}").replace(/\s+/g, " ").trim();
}

function headingLevels(source) {
  const matches = anchors(source);
  return matches.map((match, index) => {
    const start = match.index + match.length;
    const end = matches[index + 1]?.index ?? source.length;
    const heading = source.slice(start, end).match(/^(#{2,6})\s+/m);
    return { id: match.pairId, level: heading?.[1].length ?? 0 };
  });
}

function time(value) {
  return value ? Date.parse(value) : Number.NaN;
}

for (const post of posts) {
  const schema = validatePostData(post.data);
  if (!schema.valid) {
    for (const error of schema.errors) fail(post, `manifest schema: ${error}`);
    continue;
  }

  for (const [kind, value] of [
    ["id", post.data.id],
    ["slug", post.data.slug],
    ["series", `${post.data.collection}:${post.data.seriesNo}`],
  ]) {
    if (seen[kind].has(value)) fail(post, `duplicate ${kind}: ${value}`);
    seen[kind].add(value);
  }

  const expectedId = `${post.data.collection}.${String(post.data.seriesNo).padStart(3, "0")}`;
  if (post.data.id !== expectedId) fail(post, `id must match collection and seriesNo: ${expectedId}`);

  const [folder, articleDirectory, ...extra] = post.relativeDir.split("/");
  if (extra.length || collectionFolders[post.data.collection] !== folder) {
    fail(post, `collection does not match its folder: ${post.data.collection}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(articleDirectory ?? "")) {
    fail(post, "article directory must use YYYY-MM-DD-short-slug");
  } else {
    const directoryDate = articleDirectory.slice(0, 10);
    const parsedDirectoryDate = new Date(`${directoryDate}T00:00:00Z`);
    if (Number.isNaN(parsedDirectoryDate.getTime()) || parsedDirectoryDate.toISOString().slice(0, 10) !== directoryDate) {
      fail(post, `article directory contains an invalid calendar date: ${directoryDate}`);
    }
  }

  if (!(await exists(join(post.sourceDir, "README.md")))) fail(post, "missing article README.md entrypoint");
  if (post.data.status === "published") {
    if (!post.data.publishedAt) fail(post, "published content requires publishedAt");
    if (post.data.audit?.status !== "passed") fail(post, "published content must have a passed audit");
    if (!post.data.audit?.reviewedAt) fail(post, "published content requires audit.reviewedAt");
    if (post.data.audit?.openIssueCount !== 0) fail(post, "published content requires zero open audit issues");
  }
  if (post.data.publishedAt && time(post.data.updatedAt) < time(post.data.publishedAt)) {
    fail(post, "updatedAt cannot precede publishedAt");
  }
  if (post.data.audit?.reviewedAt && time(post.data.audit.reviewedAt) < time(post.data.updatedAt)) {
    fail(post, "audit.reviewedAt cannot predate updatedAt");
  }
  if (post.data.audit?.file && !(await exists(safeChildPath(post.sourceDir, post.data.audit.file)))) {
    fail(post, `missing audit file: ${post.data.audit.file}`);
  }

  let zh;
  let en;
  try {
    [zh, en] = await Promise.all([readLanguageSource(post, "zh-CN"), readLanguageSource(post, "en")]);
  } catch (error) {
    fail(post, error.message);
    continue;
  }

  for (const [language, shortLanguage, source] of [["zh-CN", "zh", zh], ["en", "en", en]]) {
    let parsed;
    try {
      parsed = matter(source);
    } catch (error) {
      fail(post, `${language} frontmatter is invalid: ${error.message}`);
      continue;
    }
    if (parsed.data.postId !== post.data.id) fail(post, `${language} source has the wrong postId`);
    if (parsed.data.lang !== language) fail(post, `${language} source has the wrong lang`);
    if (/<script\b/i.test(parsed.content)) fail(post, `${language} source contains a script tag`);
    for (const image of parsed.content.matchAll(/!\[([^\]]*)\]\([^)]+\)/g)) {
      if (!image[1].trim()) fail(post, `${language} source contains an image without alt text`);
    }

    const records = anchors(parsed.content);
    if (records.some((record) => record.id !== `${shortLanguage}-${record.pairId}`)) {
      fail(post, `${language} anchors must use id="${shortLanguage}-<pair-id>"`);
    }
    const renderedIds = records.map((record) => record.id);
    if (new Set(renderedIds).size !== renderedIds.length) fail(post, `${language} source contains duplicate anchor ids`);
  }

  const zhAnchors = anchors(zh).map((anchor) => anchor.pairId);
  const enAnchors = anchors(en).map((anchor) => anchor.pairId);
  firstAnchorCount ||= zhAnchors.length;
  if (!zhAnchors.length) fail(post, "bilingual sources contain no stable section anchors");
  if (new Set(zhAnchors).size !== zhAnchors.length) fail(post, "Chinese source contains duplicate pair ids");
  if (new Set(enAnchors).size !== enAnchors.length) fail(post, "English source contains duplicate pair ids");
  if (JSON.stringify(zhAnchors) !== JSON.stringify(enAnchors)) fail(post, "bilingual pair-id order differs");
  if (JSON.stringify(headingLevels(zh)) !== JSON.stringify(headingLevels(en))) fail(post, "paired heading levels differ");
  if (JSON.stringify(externalLinks(zh)) !== JSON.stringify(externalLinks(en))) fail(post, "external source links differ");

  const zhEquations = displayEquations(zh);
  const enEquations = displayEquations(en);
  if (zhEquations.length !== enEquations.length) {
    fail(post, `display-equation count differs: zh=${zhEquations.length}, en=${enEquations.length}`);
  } else if (JSON.stringify(zhEquations.map(equationStructure)) !== JSON.stringify(enEquations.map(equationStructure))) {
    fail(post, "display-equation mathematical structure differs");
  }

  if (post.data.collection === "research" && post.data.status === "published") {
    const sourcesPath = join(post.sourceDir, "SOURCES.yaml");
    if (!(await exists(sourcesPath))) {
      fail(post, "published research requires SOURCES.yaml");
    } else {
      try {
        const sources = parseYaml(await readFile(sourcesPath, "utf8"));
        if (!Array.isArray(sources) || !sources.length) throw new Error("source registry must be a non-empty list");
        const zhExternalLinks = new Set(externalLinks(zh));
        const enExternalLinks = new Set(externalLinks(en));
        const sourceIds = new Set();
        const sourceUrls = new Set();
        let primaryCount = 0;
        for (const source of sources) {
          if (!source || typeof source !== "object") throw new Error("each source must be an object");
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(source.id ?? "")) throw new Error(`invalid source id: ${source.id}`);
          if (sourceIds.has(source.id)) throw new Error(`duplicate source id: ${source.id}`);
          sourceIds.add(source.id);
          if (!source.title || !source.type || typeof source.primary !== "boolean") throw new Error(`${source.id} is missing title, type, or primary`);
          const url = new URL(source.url);
          if (!/^https?:$/.test(url.protocol)) throw new Error(`${source.id} must use an HTTP(S) URL`);
          if (sourceUrls.has(source.url)) throw new Error(`duplicate source URL: ${source.url}`);
          sourceUrls.add(source.url);
          if (!zhExternalLinks.has(source.url) || !enExternalLinks.has(source.url)) throw new Error(`${source.id} is not linked from both language sources`);
          if (source.primary) primaryCount += 1;
        }
        if (!primaryCount) throw new Error("source registry must include at least one primary source");
        for (const url of zhExternalLinks) {
          if (!sourceUrls.has(url)) throw new Error(`external source is not registered: ${url}`);
        }
      } catch (error) {
        fail(post, `SOURCES.yaml: ${error.message}`);
      }
    }
  }
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Content audit passed: ${posts.length} post(s); first bilingual pair has ${firstAnchorCount} aligned sections.`);
}
