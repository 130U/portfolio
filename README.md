# Research Notes

**A bilingual, evidence-led research archive by Theodore Ouyang.**

围绕人工智能、机器人与技术路径，把复杂问题整理成可审阅、可引用、可复核的判断。

Every work is preserved as a complete Chinese edition and a complete English edition, with its evidence boundary and audit trail kept close to the writing.

**[中文阅读](https://research-notes-130u.jiligualapiqiu.chatgpt.site/)** ·
**[Read in English](https://research-notes-130u.jiligualapiqiu.chatgpt.site/?lang=en)** ·
[Research](research/) · [Articles](articles/) · [Reflections](reflections/)

`Astro 7` `TypeScript` `Bilingual` `Evidence-led` `GitHub Pages disabled`

## At a glance

- **Three published works:** two research dossiers and one technical essay.
- **Complete bilingual editions:** language switching preserves the reader's position instead of replacing full works with summaries.
- **Reviewable provenance:** manifests, source ledgers, audit notes, and preserved research archives travel with the relevant work.
- **Independent reading surface:** the static Astro site is hosted separately from `theodoreoy.com` and from GitHub Pages.

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

## What this repository demonstrates

| Layer | What is shown |
| --- | --- |
| Research | Source-led analysis with explicit separation between evidence, claims, explanation, and interpretation |
| Editorial | Complete Chinese and English editions with stable metadata and collection indexes |
| Product | A responsive reading interface with persistent language choice, accessible navigation, and compact-screen outlines |
| Engineering | Schema validation, deterministic index generation, static-site auditing, and a version-locked Astro build |

## Repository map

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

## Local verification

```powershell
npm ci
npm run check
npm run build
```

`npm run check` validates content manifests, generated indexes, and Astro types. The build then copies public source artifacts and audits the generated site.

## Maintenance and deployment boundary

The repository uses a version-locked Astro static build. Operational details
live in the [Publishing Standard](PUBLISHING_STANDARD.md); architectural
decisions live in [ADR-001](ARCHITECTURE.md).

GitHub Actions validates the archive, but **GitHub Pages remains disabled**. The public reading site is hosted independently so this project cannot inherit or alter the custom-domain behavior of the separate personal-site repository.

## Rights

No blanket license is granted. Unless a file says otherwise, reuse permission
is not implied; third-party materials remain subject to their original rights.
