import { cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { repoRoot } from "./lib/content.mjs";

const staticDir = join(repoRoot, "_site");
const distDir = join(repoRoot, "dist");

await rm(distDir, { recursive: true, force: true });
await mkdir(join(distDir, "client"), { recursive: true });
await mkdir(join(distDir, "server"), { recursive: true });
await cp(staticDir, join(distDir, "client"), { recursive: true });
await cp(join(repoRoot, "worker", "index.js"), join(distDir, "server", "index.js"));

console.log("Sites artifact prepared: dist/client + dist/server/index.js");
