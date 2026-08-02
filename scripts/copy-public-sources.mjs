import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { exists, loadPosts, repoRoot, safeChildPath } from "./lib/content.mjs";

const outputDir = join(repoRoot, "_site");
const posts = (await loadPosts({ includeDrafts: false })).filter((post) => post.data.status === "published");

for (const post of posts) {
  const routeDir = join(outputDir, post.data.slug);
  await mkdir(routeDir, { recursive: true });
  for (const language of Object.values(post.data.languages)) {
    await copyFile(safeChildPath(post.sourceDir, language.file), join(routeDir, language.file));
  }
  const supplementalFiles = new Set([
    post.data.audit?.file,
    post.data.collection === "research" ? "SOURCES.yaml" : undefined,
  ].filter(Boolean));
  for (const file of supplementalFiles) {
    const source = safeChildPath(post.sourceDir, file);
    if (await exists(source)) await copyFile(source, join(routeDir, file));
  }
}

console.log(`Copied canonical Markdown sources for ${posts.length} published post(s).`);
