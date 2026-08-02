function normalizeSiteUrl(value) {
  return value.replace(/\/+$/, "");
}

function normalizeBasePath(value) {
  const clean = value.trim().replace(/^\/+|\/+$/g, "");
  return clean ? `/${clean}` : "";
}

// PUBLIC_SITE_URL is set to the independent production host during publishing.
// The fallback is intentionally unrelated to the personal website.
export const siteUrl = normalizeSiteUrl(
  process.env.PUBLIC_SITE_URL ?? "https://research-notes-130u.jiligualapiqiu.chatgpt.site",
);
export const basePath = normalizeBasePath(process.env.PUBLIC_BASE_PATH ?? "");

export function publicUrl(path = "") {
  const clean = path.replace(/^\/+/, "");
  return new URL(`${basePath}/${clean}`, siteUrl).href;
}
