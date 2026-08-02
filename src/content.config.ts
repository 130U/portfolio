import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const languageEntry = (file: "README.zh-CN.md" | "README.en.md") => z.object({
  file: z.literal(file),
  title: z.string().min(1).max(240),
  summary: z.string().min(1).max(1200),
}).strict();

const uniqueStrings = (values: string[]) => new Set(values).size === values.length;

const posts = defineCollection({
  loader: glob({
    base: ".",
    pattern: "{articles,research,reflections}/**/post.json",
  }),
  schema: z.object({
    schemaVersion: z.literal(1),
    id: z.string().max(100).regex(/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/),
    seriesNo: z.number().int().positive(),
    slug: z.string().max(120).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    collection: z.enum(["article", "research", "reflection"]),
    status: z.enum(["draft", "review", "published"]),
    publishedAt: z.iso.datetime({ offset: true }).nullable(),
    updatedAt: z.iso.datetime({ offset: true }),
    featured: z.boolean(),
    readingMinutes: z.number().int().positive(),
    sourceLanguage: z.enum(["zh-CN", "en"]),
    languages: z.object({
      "zh-CN": languageEntry("README.zh-CN.md"),
      en: languageEntry("README.en.md"),
    }).strict(),
    topics: z.array(z.string().min(1).max(60)).min(1).max(20).refine(uniqueStrings, "Topics must be unique"),
    paper: z
      .object({
        title: z.string().min(1).max(500),
        authors: z.array(z.string().min(1).max(160)).min(1).refine(uniqueStrings, "Authors must be unique").optional(),
        publishedAt: z.iso.date().optional(),
        venue: z.string().min(1).max(200).optional(),
        url: z.url(),
        arxivId: z.string().regex(/^[0-9]{4}\.[0-9]{4,5}(?:v[0-9]+)?$/).optional(),
        doi: z.string().min(3).max(200).optional(),
      }).strict()
      .optional(),
    audit: z
      .object({
        status: z.enum(["pending", "passed", "needs-revision"]),
        file: z.literal("AUDIT.md"),
        reviewedAt: z.iso.datetime({ offset: true }).nullable().optional(),
        reviewedBy: z.string().min(1).max(160).optional(),
        openIssueCount: z.number().int().nonnegative().optional(),
      }).strict()
      .optional(),
  }).strict().superRefine((data, context) => {
    const issue = (path: (string | number)[], message: string) => context.addIssue({ code: "custom", path, message });
    if (data.status === "published") {
      if (data.publishedAt === null) issue(["publishedAt"], "Published posts require a publication timestamp");
      if (!data.audit) issue(["audit"], "Published posts require an audit");
      else {
        if (data.audit.status !== "passed") issue(["audit", "status"], "Published posts require a passed audit");
        if (!data.audit.reviewedAt) issue(["audit", "reviewedAt"], "Published posts require an audit timestamp");
        if (data.audit.openIssueCount !== 0) issue(["audit", "openIssueCount"], "Published posts require zero open issues");
      }
    }
    if (data.publishedAt && Date.parse(data.updatedAt) < Date.parse(data.publishedAt)) {
      issue(["updatedAt"], "updatedAt cannot precede publishedAt");
    }
    if (data.audit?.reviewedAt && Date.parse(data.audit.reviewedAt) < Date.parse(data.updatedAt)) {
      issue(["audit", "reviewedAt"], "The audit cannot predate the current content revision");
    }
  }),
});

const documents = defineCollection({
  loader: glob({
    base: ".",
    pattern: "{articles,research,reflections}/**/README.{zh-CN,en}.md",
  }),
  schema: z.object({
    postId: z.string().regex(/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/),
    lang: z.enum(["zh-CN", "en"]),
  }).strict(),
});

export const collections = { posts, documents };
