import type { CollectionEntry } from "astro:content";

export type PostEntry = CollectionEntry<"posts">;

export const collectionCopy = {
  article: { zh: "文章", en: "Articles", path: "articles" },
  research: { zh: "研究", en: "Research", path: "research" },
  reflection: { zh: "思考", en: "Reflections", path: "reflections" },
} as const;

export function published(posts: PostEntry[]) {
  return posts
    .filter((post) => post.data.status === "published")
    .sort((a, b) => {
      const dateOrder = Date.parse(b.data.publishedAt ?? "") - Date.parse(a.data.publishedAt ?? "");
      return dateOrder || a.data.id.localeCompare(b.data.id);
    });
}

export function formatDate(value: string | null, locale: "zh-CN" | "en" = "en") {
  if (!value) return locale === "zh-CN" ? "尚未发布" : "Not published";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: locale === "en" ? "short" : "long",
    day: "2-digit",
    timeZone: "UTC",
  }).format(new Date(value));
}

export function articleHref(slug: string) {
  return `${import.meta.env.BASE_URL}${slug}/`;
}

export function collectionHref(collection: keyof typeof collectionCopy) {
  return `${import.meta.env.BASE_URL}${collectionCopy[collection].path}/`;
}
