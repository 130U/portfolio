import { readFile, readdir } from "node:fs/promises";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { basePath, publicUrl } from "../site.config.mjs";
import { loadPosts, repoRoot } from "./lib/content.mjs";

const outputDir = join(repoRoot, "_site");
const failures = [];
const absoluteBase = `${basePath || ""}/`;

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesUnder(path)));
    else files.push(path);
  }
  return files;
}

async function targetExists(target) {
  try {
    const stats = await import("node:fs/promises").then(({ stat }) => stat(target));
    if (stats.isDirectory()) await readFile(join(target, "index.html"));
    return true;
  } catch {
    return false;
  }
}

const files = await filesUnder(outputDir);
const htmlFiles = files.filter((file) => extname(file) === ".html");

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  if (!html.includes('id="main-content"')) failures.push(`${file}: missing main-content landmark`);
  if (/<script[^>]+src=["']https?:\/\//i.test(html)) failures.push(`${file}: runtime script uses an external CDN`);
  const ids = [...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicateIds.length) failures.push(`${file}: duplicate DOM ids: ${duplicateIds.join(", ")}`);

  const relativeHtml = relative(outputDir, file).split(sep).join("/");
  if (relativeHtml !== "404.html") {
    const route = relativeHtml === "index.html"
      ? ""
      : relativeHtml.endsWith("/index.html")
        ? relativeHtml.slice(0, -"index.html".length)
        : relativeHtml;
    const expectedCanonical = publicUrl(route);
    const canonical = html.match(/<link\b(?=[^>]*\brel=["']canonical["'])[^>]*\bhref=["']([^"']+)["'][^>]*>/i)?.[1];
    if (canonical !== expectedCanonical) failures.push(`${file}: canonical is ${canonical ?? "missing"}; expected ${expectedCanonical}`);
  }

  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const raw = match[1];
    if (/^(?:https?:|mailto:|tel:|data:)/.test(raw)) continue;
    if (raw.startsWith("#")) {
      const fragment = decodeURIComponent(raw.slice(1));
      if (fragment && !ids.includes(fragment)) failures.push(`${file}: broken local fragment ${raw}`);
      continue;
    }
    const clean = decodeURIComponent(raw.split(/[?#]/)[0]);
    if (!clean) continue;
    const target = clean.startsWith(absoluteBase)
      ? join(outputDir, clean.slice(absoluteBase.length))
      : resolve(dirname(file), clean);
    if (!(await targetExists(target))) failures.push(`${file}: broken local reference ${raw}`);
  }
}

const posts = (await loadPosts({ includeDrafts: false })).filter((post) => post.data.status === "published");
for (const post of posts) {
  const path = join(outputDir, post.data.slug, "index.html");
  try {
    const html = await readFile(path, "utf8");
    if (!html.includes(`data-post-id="${post.data.id}"`)) failures.push(`${path}: missing post identity`);
    if ((html.match(/<div class="article-prose" data-language-column=/g) ?? []).length !== 2) failures.push(`${path}: missing static bilingual documents`);
    if (!html.includes('class="katex"')) failures.push(`${path}: build-time math rendering is missing`);
    if ((html.match(/<h1(?:\s|>)/g) ?? []).length !== 1) failures.push(`${path}: article page must contain exactly one h1`);
    if ((html.match(/data-pair-id=/g) ?? []).length !== 114 && post.data.id === "research.001") {
      failures.push(`${path}: expected 114 language-specific pair anchors`);
    }
    if (!html.includes("Conditional Flow Matching") && post.data.id === "research.001") {
      failures.push(`${path}: article prose was not rendered at build time`);
    }

    const expectedCanonical = publicUrl(`${post.data.slug}/`);
    const jsonLdSource = html.match(/<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>([\s\S]*?)<\/script>/i)?.[1];
    if (!jsonLdSource) {
      failures.push(`${path}: missing JSON-LD`);
    } else {
      try {
        const jsonLd = JSON.parse(jsonLdSource);
        if (jsonLd["@type"] !== "TechArticle") failures.push(`${path}: JSON-LD type must be TechArticle`);
        if (jsonLd.mainEntityOfPage !== expectedCanonical) failures.push(`${path}: JSON-LD mainEntityOfPage is incorrect`);
        if (jsonLd.datePublished !== post.data.publishedAt) failures.push(`${path}: JSON-LD datePublished is incorrect`);
        if (jsonLd.dateModified !== post.data.updatedAt) failures.push(`${path}: JSON-LD dateModified is incorrect`);
        if (JSON.stringify(jsonLd.inLanguage) !== JSON.stringify(["zh-CN", "en"])) failures.push(`${path}: JSON-LD inLanguage is incorrect`);
        if (post.data.paper?.url && jsonLd.citation !== post.data.paper.url) failures.push(`${path}: JSON-LD citation is incorrect`);
      } catch (error) {
        failures.push(`${path}: invalid JSON-LD: ${error.message}`);
      }
    }
  } catch {
    failures.push(`${path}: published route was not generated`);
  }

  for (const language of Object.values(post.data.languages)) {
    const sourcePath = join(outputDir, post.data.slug, language.file);
    if (!(await targetExists(sourcePath))) failures.push(`${sourcePath}: canonical Markdown source was not copied`);
  }
  for (const supplemental of [post.data.audit?.file, post.data.collection === "research" ? "SOURCES.yaml" : undefined].filter(Boolean)) {
    const supplementalPath = join(outputDir, post.data.slug, supplemental);
    if (!(await targetExists(supplementalPath))) failures.push(`${supplementalPath}: publication supplement was not copied`);
  }
}

for (const required of ["index.html", "posts.json", "rss.xml", "sitemap-index.xml"]) {
  if (!(await targetExists(join(outputDir, required)))) failures.push(`Missing generated artifact: ${required}`);
}

try {
  const rss = await readFile(join(outputDir, "rss.xml"), "utf8");
  if (!rss.includes(`<link>${publicUrl()}</link>`)) failures.push("rss.xml: channel link is missing the configured base path");
} catch {
  failures.push("rss.xml: could not verify channel link");
}

try {
  const notFound = await readFile(join(outputDir, "404.html"), "utf8");
  if (!/<meta name="robots" content="noindex">/.test(notFound)) failures.push("404.html: missing noindex directive");
} catch {
  failures.push("404.html: could not verify error-page metadata");
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Built-site audit passed: ${htmlFiles.length} HTML pages, ${posts.length} published article route(s).`);
}
