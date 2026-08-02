import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { published } from "../lib/site";

export async function GET(context) {
  const posts = published(await getCollection("posts"));
  const base = import.meta.env.BASE_URL;

  return rss({
    title: "Theodore Ouyang — Portfolio",
    description: "Bilingual research notes, essays, and reflections.",
    site: new URL(base, context.site),
    items: posts.map((post) => ({
      title: post.data.languages.en.title,
      description: post.data.languages.en.summary,
      pubDate: new Date(post.data.publishedAt),
      link: new URL(`${base}${post.data.slug}/`, context.site).href,
      categories: post.data.topics,
      customData: `<language>zh-CN, en</language>`,
    })),
  });
}
