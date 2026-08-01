# Theodore Ouyang — Portfolio

A public archive of my essays, research notes, and reflections.

## Collections

- [Articles](articles/) — polished long-form writing.
- [Research](research/) — evidence-led research notes and working papers.
- [Reflections](reflections/) — shorter observations and personal thinking.
- [Assets](assets/) — original diagrams and images, grouped by post slug.

## Source-of-truth rule

The Markdown file in this repository is the canonical editable source. When a
piece is published on [theodoreoy.com](https://www.theodoreoy.com/), the website
may adapt it to its current Next.js/TSX presentation, but substantive edits
should begin here so the two copies do not drift.

For a published piece:

1. keep the text in one Markdown file;
2. keep original media under `assets/<slug>/`;
3. copy only optimized website derivatives into the website repository;
4. record the public `canonical_url` and the source commit in the post metadata.

Start new work from [the post template](templates/post.md).

## File naming

Use `YYYY-MM-DD-short-slug.md` for dated writing. Research projects that need
multiple files can use a folder named after the same short slug.

## Rights

No license has been added. Unless a file says otherwise, reuse permission is not
granted.
