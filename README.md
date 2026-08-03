# Research Notes

Evidence-led writing on artificial intelligence, robotics, and technical
strategy by Theodore Ouyang. Every work is preserved as a complete Chinese
edition and a complete English edition; the reading site shows one language at
a time.

[中文阅读](https://research-notes-130u.jiligualapiqiu.chatgpt.site/) ·
[Read in English](https://research-notes-130u.jiligualapiqiu.chatgpt.site/?lang=en) ·
[Research](research/) · [Articles](articles/) · [Reflections](reflections/)

## Work

<!-- portfolio:index:start -->
### [R-001 · π₀：机器人怎样把“看懂任务”变成连续动作](research/2026-08-02-pi0-vla-flow/)

2026-08-02 · Research

[中文全文](research/2026-08-02-pi0-vla-flow/README.zh-CN.md) · [English version](research/2026-08-02-pi0-vla-flow/README.en.md) · [Read on web](https://research-notes-130u.jiligualapiqiu.chatgpt.site/pi0/)

### [A-001 · From Vision and Instructions to Robot Actions: Two Emerging Paths](articles/2026-08-03-from-vision-and-instructions-to-robot-actions/)

2026-07-29 · Article

[中文全文](articles/2026-08-03-from-vision-and-instructions-to-robot-actions/README.zh-CN.md) · [English version](articles/2026-08-03-from-vision-and-instructions-to-robot-actions/README.en.md) · [Read on web](https://research-notes-130u.jiligualapiqiu.chatgpt.site/from-vision-and-instructions-to-robot-actions/)

### [R-002 · Manifold 海外世界模型竞争格局](research/2026-08-03-manifold-world-model-landscape/)

2026-07-14 · Research

[中文全文](research/2026-08-03-manifold-world-model-landscape/README.zh-CN.md) · [English version](research/2026-08-03-manifold-world-model-landscape/README.en.md) · [Read on web](https://research-notes-130u.jiligualapiqiu.chatgpt.site/manifold-world-model-landscape/)
<!-- portfolio:index:end -->

## Repository

Each work lives in its own folder. The report, sources, audit trail, figures,
and any preserved research archive travel together instead of being scattered
across the repository.

```text
portfolio/
├─ research/
│  └─ YYYY-MM-DD-project/
│     ├─ README.zh-CN.md
│     ├─ README.en.md
│     ├─ post.json
│     ├─ SOURCES.yaml
│     └─ source-snapshot/      # when a project includes a full archive
├─ articles/
├─ reflections/
└─ src/                        # shared reading interface
```

## Research and provenance

Markdown inside each project folder is the canonical editable source. A
`post.json` manifest drives the website and indexes; `SOURCES.yaml`, `AUDIT.md`,
`MIGRATION.md`, and `source-snapshot/` preserve the available evidence and
provenance for projects that need them. Generated HTML under `_site/` is
disposable.

## Maintenance

The repository uses a version-locked Astro static build. Operational details
live in the [Publishing Standard](PUBLISHING_STANDARD.md); architectural
decisions live in [ADR-001](ARCHITECTURE.md).

GitHub Actions validates the archive, but GitHub Pages remains disabled. The
public reading site is hosted independently from the validated repository.

## Rights

No blanket license is granted. Unless a file says otherwise, reuse permission
is not implied; third-party materials remain subject to their original rights.
