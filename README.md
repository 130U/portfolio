# Theodore Ouyang — Portfolio

A public archive of my essays, research notes, and reflections.

## Collections

- [Articles](articles/) — polished long-form writing.
- [Research](research/) — evidence-led research notes and working papers, including the bilingual [π₀ deep reading](research/2026-08-02-pi0-vla-flow/).
- [Reflections](reflections/) — shorter observations and personal thinking.
- [Assets](assets/) — original diagrams and images, grouped by post slug.

## Source-of-truth rule

The Markdown file in this repository is the canonical editable source. When a
piece is published on [theodoreoy.com](https://www.theodoreoy.com/), the website
may adapt it to its current Next.js/TSX presentation, but substantive edits
should begin here so the two copies do not drift.

For a published piece:

1. keep a single canonical Markdown source per language; bilingual pairs must share the same ordered section anchors;
2. keep original media under `assets/<slug>/`;
3. generate the public presentation from those Markdown sources rather than maintaining a second prose copy;
4. copy only optimized website derivatives into the website repository when a separate publisher is used;
5. record the public `canonical_url` and the source commit in the post metadata.

Start new work from [the post template](templates/post.md).

## File naming

Use `YYYY-MM-DD-short-slug.md` for dated writing. Research projects that need
multiple files can use a folder named after the same short slug.

## Static reading site

The small static reader in [`docs/`](docs/) renders the canonical bilingual
Markdown at build time. It has no package-install step; an exact MathJax 3.2.2
CDN version progressively enhances equation rendering while raw TeX remains as
the fallback. The reader supports Chinese, English, and aligned bilingual modes.

```powershell
npm.cmd run check
npm.cmd run build
python -m http.server 4173 --directory _site
```

The Pages workflow is manual: enable GitHub Pages with “GitHub Actions” as its
source after review, then dispatch the workflow from `main`. The source website
repository is not part of this build and is never modified by it.

## Rights

No license has been added. Unless a file says otherwise, reuse permission is not
granted.
