---
artifact: adr
version: "1.0"
created: 2026-08-02
status: accepted
---

# ADR-001: Adopt a version-locked Astro static publishing architecture

## Status

Accepted

**Date:** 2026-08-02
**Decider:** Theodore Ouyang

## Context

`130U/portfolio` is a long-lived writing archive whose Markdown files are the
canonical sources. It needs a maintainable article index, bilingual Chinese and
English reading modes, aligned comparison, mathematical notation, and a small
client-side footprint. Publication uses an independent provider URL. The
personal-site repository, its custom domain, and every derived route remain
outside both the writable and deployment scope.

The architecture must preserve these constraints:

- the production site must not inherit, redirect through, or publish below the
  personal site's custom domain;
- this repository's GitHub Pages site remains disabled;
- each language remains an independently readable canonical Markdown file;
- the current π₀ pair has 57 ordered bilingual anchors, which must remain a
  build-blocking invariant;
- mathematics is rendered during the build, with no runtime MathJax CDN;
- only an exact, validated `main` commit may be published; pull requests may
  build and validate but must not publish;
- framework and integration versions are exact-pinned with a committed lockfile.

## Decision

We will use Astro's default static-output architecture and initially pin the
stable Astro 7.1 patch line (`astro@7.1.4` on the decision date). Dependency
upgrades will occur only through reviewed pull requests that pass content,
build, link, accessibility, and visual checks.

We will:

1. Load each article's `post.json` and paired Markdown sources through two
   build-time Astro Content Collections. The manifest collection validates
   identity, route, lifecycle, titles, summaries, dates, topics, paper metadata,
   and audit state; the document collection validates `postId` and `lang`. CI
   also executes the checked-in Draft 2020-12 JSON Schema with AJV so unknown or
   misspelled fields cannot be silently discarded.
   Stable collection IDs are allocated under an exclusive local lock and backed
   by a strict, atomically replaced high-water registry; numbers may be skipped
   but never reused. CI uniqueness checks remain authoritative across separate
   worktrees and separately synced devices.
2. Keep prose in plain Markdown by default. MDX is allowed only when an article
   genuinely requires an embedded component.
3. Generate one stable `/<slug>/` route containing both languages as static
   HTML. A small progressive-enhancement script provides Chinese, English, and
   aligned bilingual modes while preserving a shareable `?lang=` parameter.
   Without JavaScript, both complete documents remain readable.
4. Keep the existing bilingual audit as a build gate. Astro's schema validates
   metadata, but a repository check must separately enforce the 57 logical
   `data-pair-id` values, language-prefixed unique DOM IDs, and paired equation
   and source-link invariants.
5. Configure `site` from `PUBLIC_SITE_URL` and use the domain root as the default
   base. Generated links, assets, canonicals, RSS, and sitemap entries must be
   tested from the same production build.
6. Render mathematics at build time through Astro's maintained Unified adapter,
   `remark-math`, and `rehype-katex`:

   ```js
   import { unified } from "@astrojs/markdown-remark";
   import { defineConfig } from "astro/config";
   import rehypeKatex from "rehype-katex";
   import remarkMath from "remark-math";

   export default defineConfig({
     markdown: {
       processor: unified({
         remarkPlugins: [remarkMath],
         rehypePlugins: [rehypeKatex],
       }),
     },
   });
   ```

   The corpus uses the portable `$...$` and `$$...$$` delimiters supported by
   GitHub, `remark-math`, and KaTeX. The former `\(...\)` and `\[...\]`
   delimiters were mechanically normalized without changing equation bodies.
   Runtime CDN rendering is not an acceptable fallback.
7. Keep GitHub Actions validation-only. The build also stages a minimal static
   Worker artifact (`dist/client` plus `dist/server/index.js`) for an independent
   host. Publishing is a separate, explicit operation tied to the exact pushed
   `main` commit; no GitHub Pages deployment permission is granted to CI.

## Consequences

### Positive

- Canonical Markdown remains portable while hand-written parsing, TOC generation,
  and page assembly are replaced by maintained framework facilities.
- Content Collections provide typed, build-time metadata validation and scale to
  future articles without introducing a database or CMS.
- Static output is provider-neutral and sends no framework runtime JavaScript by
  default; only explicit progressive-enhancement scripts ship client code.
- Both locale documents are present in the initial static HTML, improving
  accessibility and archival durability while a shareable query parameter
  selects Chinese, English, or aligned comparison mode.
- Build-time mathematics removes a runtime CDN dependency and avoids delaying
  article rendering on third-party JavaScript.

### Negative

- The repository gains Node.js, Astro, a lockfile, and a framework upgrade
  obligation; current Astro requires Node.js 22.12 or newer.
- The repository intentionally uses Astro's optional Unified adapter instead of
  the newer default Sätteri processor because the established KaTeX plugins
  provide deterministic build-time formula output. These versions are pinned
  and covered by a rendered-math regression check.
- Existing `\(...\)` and `\[...\]` formulas required a one-time delimiter
  conversion to the Markdown math convention.
- Astro does not prove semantic translation equivalence; bilingual consistency
  remains a repository-specific responsibility.
- Independent publishing adds a small packaging layer and a second source push;
  the committed SHA and packaged build must always identify the same source.

### Neutral

- The decision governs publishing infrastructure, not article ownership or prose.
  `research/` remains the source archive, and publication continues to be a
  derived representation of those files.

## Alternatives Considered

### Eleventy

Eleventy is a mature, flexible static site generator and would preserve a very
small runtime footprint. It was not selected because this project would need more
custom code for typed content schemas, translation pairing, and bilingual routing,
where Astro provides first-party content and i18n primitives. Eleventy remains a
reasonable fallback if Astro's dependency or upgrade cost becomes unacceptable.

### Continue the custom generator

The current dependency-light generator offers complete control and low initial
setup cost. It was not selected as the long-term architecture because maintaining
a Markdown parser, sanitization boundary, math pipeline, locale routing, and
accessibility behavior creates an expanding security and maintenance surface as
the archive grows.

## References

- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Markdown in Astro](https://docs.astro.build/en/guides/markdown-content/)
- [Astro internationalization routing](https://docs.astro.build/en/guides/internationalization/)
- [Astro static and on-demand rendering](https://docs.astro.build/en/guides/on-demand-rendering/)
- [Astro deployment guides](https://docs.astro.build/en/guides/deploy/)
- [GitHub Pages custom-domain inheritance](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages#using-a-custom-domain-across-multiple-repositories)
- [Astro islands and default client-JavaScript behavior](https://docs.astro.build/en/concepts/islands/)
- [Astro 7 release and Sätteri adoption](https://astro.build/blog/astro-7/)
- [Astro 7.1 release](https://astro.build/blog/astro-710/)
- [remark-math and rehype-katex](https://github.com/remarkjs/remark-math)
- [Astro package releases](https://www.npmjs.com/package/astro)
- [Eleventy documentation](https://www.11ty.dev/docs/)
