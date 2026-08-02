import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { publicUrl } from "../../site.config.mjs";

const scriptDir = dirname(fileURLToPath(import.meta.url));
export const repoRoot = dirname(dirname(scriptDir));
export const collectionFolders = {
  article: "articles",
  research: "research",
  reflection: "reflections",
};

async function findManifests(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await findManifests(path)));
    else if (entry.isFile() && entry.name === "post.json") files.push(path);
  }
  return files;
}

export async function loadPosts({ includeDrafts = true } = {}) {
  const manifestPaths = [];
  for (const folder of Object.values(collectionFolders)) {
    manifestPaths.push(...(await findManifests(join(repoRoot, folder))));
  }

  const posts = await Promise.all(
    manifestPaths.map(async (manifestPath) => {
      const data = JSON.parse(await readFile(manifestPath, "utf8"));
      return {
        data,
        manifestPath,
        sourceDir: dirname(manifestPath),
        relativeDir: relative(repoRoot, dirname(manifestPath)).split(sep).join("/"),
      };
    }),
  );

  return posts
    .filter((post) => includeDrafts || post.data.status === "published")
    .sort((a, b) => {
      const dateOrder = Date.parse(b.data.publishedAt ?? "") - Date.parse(a.data.publishedAt ?? "");
      return dateOrder || a.data.id.localeCompare(b.data.id);
    });
}

export function safeChildPath(parent, child) {
  if (typeof child !== "string" || !child || child.includes("\\")) {
    throw new Error(`Invalid repository-relative path: ${String(child)}`);
  }
  const target = resolve(parent, child);
  const prefix = `${resolve(parent)}${sep}`;
  if (!target.startsWith(prefix)) throw new Error(`Path escapes article directory: ${child}`);
  return target;
}

export async function readLanguageSource(post, language) {
  const entry = post.data.languages?.[language];
  if (!entry) throw new Error(`${post.data.id} has no ${language} metadata.`);
  return readFile(safeChildPath(post.sourceDir, entry.file), "utf8");
}

export async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

export function webUrl(post) {
  return publicUrl(`${post.data.slug}/`);
}
