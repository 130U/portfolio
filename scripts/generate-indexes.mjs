import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { collectionFolders, loadPosts, repoRoot, webUrl } from "./lib/content.mjs";

const checkOnly = process.argv.includes("--check");
const startMarker = "<!-- portfolio:index:start -->";
const endMarker = "<!-- portfolio:index:end -->";

function displayId(post) {
  return `${post.data.collection[0].toUpperCase()}-${String(post.data.seriesNo).padStart(3, "0")}`;
}
function dateOnly(value) {
  return value ? value.slice(0, 10) : "—";
}

function replaceGenerated(source, generated, file) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker);
  if (start === -1 || end === -1 || end < start) {
    throw new Error(`${file} is missing a valid generated index boundary.`);
  }
  return `${source.slice(0, start + startMarker.length)}\n${generated.trim()}\n${source.slice(end)}`;
}

function rootIndex(posts) {
  if (!posts.length) return "\n_No published writing yet._\n";
  const rows = posts.map((post) => {
    const zh = `${post.relativeDir}/${post.data.languages["zh-CN"].file}`;
    const en = `${post.relativeDir}/${post.data.languages.en.file}`;
    return `| ${displayId(post)} | ${dateOnly(post.data.publishedAt)} | ${post.data.languages["zh-CN"].title}<br>${post.data.languages.en.title} | [中文](${zh}) · [English](${en}) · [Web](${webUrl(post)}) |`;
  });
  return [
    "",
    "| ID | Date | Article / 文章 | Read |",
    "|---|---|---|---|",
    ...rows,
    "",
  ].join("\n");
}

function collectionIndex(posts, folder) {
  if (!posts.length) return "\n_No published writing in this collection yet._\n";
  const rows = posts.map((post) => {
    const articleFolder = post.relativeDir.slice(folder.length + 1);
    return `| ${displayId(post)} | ${dateOnly(post.data.publishedAt)} | [${post.data.languages["zh-CN"].title}](${articleFolder}/${post.data.languages["zh-CN"].file})<br>[${post.data.languages.en.title}](${articleFolder}/${post.data.languages.en.file}) | ${post.data.topics.join(", ")} | [Web](${webUrl(post)}) |`;
  });
  return [
    "",
    "| ID | Date | 中文标题 / English title | Topics | Web |",
    "|---|---|---|---|---|",
    ...rows,
    "",
  ].join("\n");
}

async function updateFile(path, generated, drift) {
  const source = await readFile(path, "utf8");
  const next = replaceGenerated(source, generated, path);
  if (next === source) return;
  if (checkOnly) drift.push(path);
  else await writeFile(path, next, "utf8");
}

const posts = (await loadPosts({ includeDrafts: false })).filter((post) => post.data.status === "published");
const drift = [];
await updateFile(join(repoRoot, "README.md"), rootIndex(posts), drift);

for (const [collection, folder] of Object.entries(collectionFolders)) {
  await updateFile(
    join(repoRoot, folder, "README.md"),
    collectionIndex(posts.filter((post) => post.data.collection === collection), folder),
    drift,
  );
}

if (drift.length) {
  console.error(`Generated README indexes are stale:\n${drift.map((path) => `- ${path}`).join("\n")}\nRun npm run content:index.`);
  process.exitCode = 1;
} else {
  console.log(checkOnly ? "README indexes are current." : "README indexes generated.");
}
