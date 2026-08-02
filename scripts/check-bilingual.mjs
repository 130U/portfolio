import { access, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = dirname(scriptDir);
const researchDir = join(repoRoot, "research", "2026-08-02-pi0-vla-flow");
const paths = {
  zh: join(researchDir, "README.zh-CN.md"),
  en: join(researchDir, "README.en.md"),
};

const [zh, en] = await Promise.all([
  readFile(paths.zh, "utf8"),
  readFile(paths.en, "utf8"),
]);

const anchors = (source) => [...source.matchAll(/<a\s+id=["']([^"']+)["']\s*><\/a>/gi)].map((match) => match[1]);
const externalLinks = (source) => [...source.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map((match) => match[1]);
const displayEquations = (source) => [...source.matchAll(/^\\\[\n([\s\S]*?)\n\\\]$/gm)].map((match) => match[1]);
const zhAnchors = anchors(zh);
const enAnchors = anchors(en);
const zhLinks = externalLinks(zh);
const enLinks = externalLinks(en);
const zhEquations = displayEquations(zh);
const enEquations = displayEquations(en);
const failures = [];

if (zhAnchors.length < 15) failures.push(`Expected at least 15 aligned sections; found ${zhAnchors.length}.`);
if (JSON.stringify(zhAnchors) !== JSON.stringify(enAnchors)) {
  failures.push(`Section anchors differ.\nzh: ${zhAnchors.join(", ")}\nen: ${enAnchors.join(", ")}`);
}
if (JSON.stringify(zhLinks) !== JSON.stringify(enLinks)) {
  failures.push("External source links differ between the Chinese and English sources.");
}
if (zhEquations.length !== enEquations.length || zhEquations.length < 20) {
  failures.push(`Display-equation counts differ or are unexpectedly low: zh=${zhEquations.length}, en=${enEquations.length}.`);
}

for (const [label, source] of [["zh", zh], ["en", en]]) {
  for (const token of ["PaliGemma", "H=50", "K=10", "Euler", "WAM"]) {
    if (!source.replaceAll(" ", "").includes(token)) failures.push(`${label} source is missing required token: ${token}`);
  }
}

for (const relativePath of [
  "docs/index.html",
  "docs/pi0/index.html",
  "docs/assets/site.css",
  "docs/assets/site.js",
  "docs/assets/markdown.js",
  "docs/assets/article.js",
]) {
  try {
    await access(join(repoRoot, relativePath));
  } catch {
    failures.push(`Missing site file: ${relativePath}`);
  }
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exitCode = 1;
} else {
  console.log(
    `Bilingual audit passed: ${zhAnchors.length} aligned sections, ${zhEquations.length} display equations, ${zhLinks.length} external links.`,
  );
}
