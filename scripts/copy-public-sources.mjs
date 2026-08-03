import { copyFile, cp, mkdir, readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import { exists, loadPosts, repoRoot, safeChildPath } from "./lib/content.mjs";

const outputDir = join(repoRoot, "_site");
const posts = (await loadPosts({ includeDrafts: false })).filter((post) => post.data.status === "published");
const publicAssetExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

for (const post of posts) {
  const routeDir = join(outputDir, post.data.slug);
  await mkdir(routeDir, { recursive: true });
  for (const language of Object.values(post.data.languages)) {
    await copyFile(safeChildPath(post.sourceDir, language.file), join(routeDir, language.file));
  }
  const supplementalFiles = new Set([
    post.data.audit?.file,
    post.data.collection === "research" ? "SOURCES.yaml" : undefined,
    "MIGRATION.md",
    "MIGRATION_MANIFEST.sha256",
  ].filter(Boolean));
  for (const file of supplementalFiles) {
    const source = safeChildPath(post.sourceDir, file);
    if (await exists(source)) await copyFile(source, join(routeDir, file));
  }
  const entries = await readdir(post.sourceDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile() || !publicAssetExtensions.has(extname(entry.name).toLowerCase())) continue;
    await copyFile(safeChildPath(post.sourceDir, entry.name), join(routeDir, entry.name));
  }

  const sourceSnapshot = safeChildPath(post.sourceDir, "source-snapshot");
  if (await exists(sourceSnapshot)) {
    await cp(sourceSnapshot, join(routeDir, "source-snapshot"), { recursive: true });
  }
}

console.log(`Copied canonical Markdown sources and local media for ${posts.length} published post(s).`);
