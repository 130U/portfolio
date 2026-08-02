import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { basePath, siteUrl } from "./site.config.mjs";

function rehypeRemoveDocumentTitle() {
  return (tree) => {
    let removed = false;
    function visit(node) {
      if (!node.children) return;
      node.children = node.children.filter((child) => {
        if (!removed && child.type === "element" && child.tagName === "h1") {
          removed = true;
          return false;
        }
        visit(child);
        return true;
      });
    }
    visit(tree);
  };
}

export default defineConfig({
  site: siteUrl,
  base: basePath,
  output: "static",
  outDir: "./_site",
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeRemoveDocumentTitle, rehypeKatex],
    }),
  },
});
