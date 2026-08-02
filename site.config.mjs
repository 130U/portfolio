export const siteUrl = "https://130u.github.io";
export const basePath = "/portfolio";

export function publicUrl(path = "") {
  const clean = path.replace(/^\/+/, "");
  return new URL(`${basePath}/${clean}`, siteUrl).href;
}
