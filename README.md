# Theodore Ouyang — Portfolio

A public, bilingual archive of essays, research notes, and reflections. Each
published entry is listed below with direct links to its Chinese source, English
source, and generated reading page.

## Published writing / 已整理文章

<!-- portfolio:index:start -->
| ID | Date | Article / 文章 | Read |
|---|---|---|---|
| R-001 | 2026-08-02 | π₀：机器人怎样把“看懂任务”变成连续动作<br>π₀: How a Robot Turns Understanding into Continuous Action | [中文](research/2026-08-02-pi0-vla-flow/README.zh-CN.md) · [English](research/2026-08-02-pi0-vla-flow/README.en.md) · [Web](https://130u.github.io/portfolio/pi0/) |
<!-- portfolio:index:end -->

## Collections

- [Articles](articles/) — polished long-form writing.
- [Research](research/) — evidence-led research notes and working papers.
- [Reflections](reflections/) — shorter observations and evolving ideas.

## Publishing model

Every piece lives in its own folder with one validated `post.json` manifest and
canonical Markdown for each language. Astro scans those sources at build time
to generate the homepage, collection archives, article pages, RSS, sitemap, and
structured metadata. The browser receives complete static HTML; JavaScript only
enhances language switching and paired-section layout.

```powershell
npm.cmd ci
npm.cmd run content:index
npm.cmd run check
npm.cmd run build
```

Create a new draft with:

```powershell
npm.cmd run content:new -- --collection research --slug short-slug --title-zh "中文标题" --title-en "English title"
```

The scaffold serializes ID allocation and advances `content-sequence.json`, so
stable collection numbers are never reused; gaps are valid and can record a
failed or abandoned allocation. The counter is flushed and atomically replaced
before the draft directory is published. Do not hand-edit it downward or delete
a published manifest to recycle its ID. CI remains the authoritative guard
against conflicts created in separate worktrees or on separately synced devices.

The operational rules are documented in [Publishing Standard](PUBLISHING_STANDARD.md)
and the framework decision in [ADR-001](ARCHITECTURE.md).

GitHub Pages must use **Settings → Pages → Source: GitHub Actions** once for the
repository. After that one-time repository setting, every successful push to
`main` validates, builds, and deploys the site automatically.

## Source-of-truth rule

The Markdown files in this repository are the canonical editable sources.
Generated HTML under `_site/` is disposable. If a separate website adapts an
article, substantive edits begin here so copies do not drift. Original media
belongs under the article folder; published routes and section anchors are
treated as stable public interfaces.

`130U/130U.github.io` is not part of this build and is not modified by this
repository.

## Rights

No license has been added. Unless a file says otherwise, reuse permission is not
granted.
