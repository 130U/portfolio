import { getCollection } from "astro:content";
import { published } from "../lib/site";

export async function GET(context) {
  const posts = published(await getCollection("posts"));
  const base = import.meta.env.BASE_URL;
  const registry = posts.map((post) => ({
    ...post.data,
    url: new URL(`${base}${post.data.slug}/`, context.site).href,
  }));

  return new Response(`${JSON.stringify(registry, null, 2)}\n`, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
