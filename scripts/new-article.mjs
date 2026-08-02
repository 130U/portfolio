import { randomUUID } from "node:crypto";
import { mkdir, open, readFile, rename, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { collectionFolders, exists, loadPosts, repoRoot } from "./lib/content.mjs";
import { validatePostData } from "./lib/validate-post.mjs";
import { validateSequenceData } from "./lib/validate-sequence.mjs";

const transientWindowsErrors = new Set(["EACCES", "EBUSY", "ENOTEMPTY", "EPERM"]);

async function withFilesystemRetry(operation) {
  let lastError;
  for (let attempt = 0; attempt < 6; attempt += 1) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      if (!transientWindowsErrors.has(error.code) || attempt === 5) throw error;
      await delay(40 * (2 ** attempt));
    }
  }
  throw lastError;
}

async function removeWithRetry(path, options) {
  return withFilesystemRetry(() => rm(path, options));
}

async function atomicWriteJson(path, data, temporaryRoot) {
  const temporaryPath = join(temporaryRoot, `sequence-${randomUUID()}.json`);
  let handle;
  try {
    handle = await open(temporaryPath, "wx");
    await handle.writeFile(`${JSON.stringify(data, null, 2)}\n`, "utf8");
    await handle.sync();
    await handle.close();
    handle = undefined;
    await withFilesystemRetry(() => rename(temporaryPath, path));
  } catch (error) {
    await handle?.close().catch(() => {});
    await removeWithRetry(temporaryPath, { force: true }).catch((cleanupError) => {
      console.warn(`Warning: could not remove temporary sequence file ${temporaryPath}: ${cleanupError.message}`);
    });
    throw error;
  }
}

const args = Object.fromEntries(
  process.argv.slice(2).reduce((pairs, token, index, source) => {
    if (token.startsWith("--")) pairs.push([token.slice(2), source[index + 1]]);
    return pairs;
  }, []),
);
const collection = args.collection;
const slug = args.slug;
const titleZh = args["title-zh"];
const titleEn = args["title-en"];

if (!collectionFolders[collection] || !slug || !titleZh || !titleEn) {
  console.error('Usage: npm run content:new -- --collection research --slug short-slug --title-zh "标题" --title-en "Title"');
  process.exit(1);
}
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw new Error("slug must be lowercase kebab-case");

const today = new Date().toISOString().slice(0, 10);
const directory = join(repoRoot, collectionFolders[collection], `${today}-${slug}`);
const temporaryRoot = join(repoRoot, ".content-tmp");
const sequencePath = join(repoRoot, "content-sequence.json");
const lockPath = join(temporaryRoot, "allocation.lock");
await mkdir(temporaryRoot, { recursive: true });

let allocationLock;
try {
  allocationLock = await open(lockPath, "wx");
  await allocationLock.writeFile(`${process.pid} ${new Date().toISOString()}\n`, "utf8");
} catch (error) {
  if (allocationLock) {
    await allocationLock.close().catch(() => {});
    await removeWithRetry(lockPath, { force: true }).catch(() => {});
  }
  if (error.code === "EEXIST") {
    throw new Error("Another content:new allocation is active. If no process is running, remove .content-tmp/allocation.lock and retry.");
  }
  throw error;
}

try {
  const posts = await loadPosts();
  if (posts.some((post) => post.data.slug === slug)) throw new Error(`slug is already in use: ${slug}`);
  if (await exists(directory)) throw new Error(`article directory already exists: ${directory}`);

  const sequence = JSON.parse(await readFile(sequencePath, "utf8"));
  const sequenceValidation = validateSequenceData(sequence);
  if (!sequenceValidation.valid) throw new Error(`Invalid content-sequence.json:\n${sequenceValidation.errors.join("\n")}`);
  const observedMax = Math.max(0, ...posts.filter((post) => post.data.collection === collection).map((post) => post.data.seriesNo));
  const recordedMax = sequence.collections[collection];
  if (Math.max(observedMax, recordedMax) >= Number.MAX_SAFE_INTEGER) {
    throw new Error(`${collection} sequence is exhausted`);
  }
  const seriesNo = Math.max(observedMax, recordedMax) + 1;
  const id = `${collection}.${String(seriesNo).padStart(3, "0")}`;
  const post = {
    schemaVersion: 1,
    id,
    seriesNo,
    slug,
    collection,
    status: "draft",
    publishedAt: null,
    updatedAt: `${today}T00:00:00Z`,
    featured: false,
    readingMinutes: 1,
    sourceLanguage: "zh-CN",
    languages: {
      "zh-CN": { file: "README.zh-CN.md", title: titleZh, summary: "待填写摘要。" },
      en: { file: "README.en.md", title: titleEn, summary: "Summary to be written." },
    },
    topics: ["Uncategorized"],
    audit: { status: "pending", file: "AUDIT.md", reviewedAt: null, openIssueCount: 0 },
  };

  const validation = validatePostData(post);
  if (!validation.valid) throw new Error(`Generated manifest is invalid:\n${validation.errors.join("\n")}`);

  sequence.collections[collection] = seriesNo;
  await atomicWriteJson(sequencePath, sequence, temporaryRoot);

  const temporaryDirectory = join(temporaryRoot, randomUUID());
  await mkdir(temporaryDirectory, { recursive: true });
  try {
    const writes = await Promise.allSettled([
      writeFile(join(temporaryDirectory, "post.json"), `${JSON.stringify(post, null, 2)}\n`, "utf8"),
      writeFile(join(temporaryDirectory, "README.md"), `# ${titleEn}\n\n- [中文](README.zh-CN.md)\n- [English](README.en.md)\n- [Audit](AUDIT.md)\n`, "utf8"),
      writeFile(join(temporaryDirectory, "README.zh-CN.md"), `---\npostId: ${id}\nlang: zh-CN\n---\n\n# ${titleZh}\n\n<a id="zh-quick-take" data-pair-id="quick-take"></a>\n## 一分钟结论\n\n待写。\n`, "utf8"),
      writeFile(join(temporaryDirectory, "README.en.md"), `---\npostId: ${id}\nlang: en\n---\n\n# ${titleEn}\n\n<a id="en-quick-take" data-pair-id="quick-take"></a>\n## One-minute takeaway\n\nTo be written.\n`, "utf8"),
      writeFile(join(temporaryDirectory, "SOURCES.yaml"), "# Add primary sources with stable IDs.\n[]\n", "utf8"),
      writeFile(join(temporaryDirectory, "AUDIT.md"), `# Audit\n\nStatus: pending\n\n- [ ] Metadata\n- [ ] Bilingual anchors\n- [ ] Sources and evidence boundaries\n- [ ] Build and visual QA\n`, "utf8"),
    ]);
    const writeFailures = writes.filter((result) => result.status === "rejected").map((result) => result.reason);
    if (writeFailures.length) throw new AggregateError(writeFailures, "Could not create every draft file");
    const latestPosts = await loadPosts();
    const conflict = latestPosts.find((candidate) =>
      candidate.data.slug === slug ||
      candidate.data.id === id ||
      (candidate.data.collection === collection && candidate.data.seriesNo === seriesNo)
    );
    if (conflict) throw new Error(`content changed during allocation; conflict with ${conflict.data.id}`);
    await withFilesystemRetry(() => rename(temporaryDirectory, directory));
  } catch (error) {
    await removeWithRetry(temporaryDirectory, { recursive: true, force: true }).catch((cleanupError) => {
      console.warn(`Warning: could not remove temporary article directory ${temporaryDirectory}: ${cleanupError.message}`);
    });
    throw error;
  }

  console.log(`Created ${id} at ${directory}. Run npm run content:index after completing metadata.`);
} finally {
  await allocationLock.close().catch((error) => {
    console.warn(`Warning: could not close the allocation lock: ${error.message}`);
  });
  await removeWithRetry(lockPath, { force: true }).catch((error) => {
    console.warn(`Warning: could not remove ${lockPath}; verify that no content:new process is running before deleting it manually: ${error.message}`);
  });
}
