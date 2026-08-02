export const siteUrl = "https://www.theodoreoy.com";
export const basePath = "/portfolio";

export function publicUrl(path = "") {
  const clean = path.replace(/^\/+/, "");
  return new URL(`${basePath}/${clean}`, siteUrl).href;
}
