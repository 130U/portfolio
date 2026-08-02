import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = dirname(scriptDir);
const outputDir = join(repoRoot, "_site");
const docsDir = join(repoRoot, "docs");
const researchDir = join(repoRoot, "research", "2026-08-02-pi0-vla-flow");
const contentDir = join(outputDir, "pi0", "content");

await rm(outputDir, { recursive: true, force: true });
await cp(docsDir, outputDir, { recursive: true });
await mkdir(contentDir, { recursive: true });

for (const filename of ["README.zh-CN.md", "README.en.md"]) {
  await cp(join(researchDir, filename), join(contentDir, filename));
}

await writeFile(join(outputDir, ".nojekyll"), "", "utf8");
console.log(`Static site built at ${outputDir}`);
