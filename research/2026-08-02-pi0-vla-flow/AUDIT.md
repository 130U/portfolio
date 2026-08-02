# π₀ 双语读书笔记审计 / Bilingual Reading Note Audit

审计日期 / Audit date: 2026-08-02
状态 / Status: passed, ready for publication from `main`

## 1. 交付边界 / Delivery boundary

- 唯一被修改的远程目标是 `130U/portfolio`；参考仓库 `130U/130U.github.io` 仅作只读设计观察。
- The only writable target is `130U/portfolio`. `130U/130U.github.io` was used as a read-only design reference.
- 中文与英文 Markdown 是 canonical sources；HTML/CSS/JavaScript 是派生阅读界面。
- The Chinese and English Markdown files are canonical. HTML, CSS, and JavaScript are derived presentation layers.

## 2. 双语结构审计 / Bilingual structure audit

| Check | 中文 | English | Result |
|---|---:|---:|---|
| Total lines | 806 | 806 | Pass |
| Ordered section anchors | 57 | 57 | Exact order match |
| Display-equation blocks | 31 | 31 | Count and structure match |
| External source links | 27 | 27 | URL order match |
| Main chapters | 15 | 15 | One-to-one |
| Source and verification appendices | 2 | 2 | One-to-one |

Translation policy: one-to-one means semantic-block alignment, not rigid
sentence-for-sentence translation. Every paired block preserves the same facts,
numbers, formulas, evidence identity, causal direction, and qualifications.

## 3. 关键事实一致性 / Critical-fact consistency

The following were checked in both languages:

- roughly 3B PaliGemma + roughly 300M action expert + roughly 3.3B total;
- \(H=50\) physical action steps and \(K=10\) Euler integration steps;
- 20 Hz: execute 16 steps and replan after about 0.8 s;
- 50 Hz: execute 25 steps and replan after about 0.5 s;
- more than 10,000 hours, roughly 903M proprietary timesteps, seven robot configurations, and 68 broad tasks;
- 9.1% as a sampling-mixture weight, not the raw share of elapsed data;
- 1/5/10-hour adaptation experiments and 5–20-minute long-task demonstrations.

## 4. 必须保留的证据边界 / Mandatory evidence boundaries

1. π₀ is Physical Intelligence’s first generalist policy and the defining start
   of its π-series; it is not the first VLA or embodied-intelligence paper.
2. Claims such as “first,” “largest,” or “new SOTA” remain author claims and
   retain “to our knowledge” or equivalent wording.
3. The 0.75–1.00 direct-prompting range is an approximate reading of Figure 7,
   not an exact numerical table.
4. “Above 50%” in the complex-task discussion is partial progress, not complete
   task success.
5. `zero-shot` in v1 does not mean the broader task family was absent from
   pretraining; v4 uses `direct prompting` / `out-of-box`.
6. Forward Euler numerically integrates the learned vector field. It does not
   prove that ten steps recover a paired demonstration action.
7. The paper uses \(\tau=0\) for noise and \(\tau=1\) for action. Current openpi
   code uses the reverse time convention and negative integration steps; the two
   are equivalent under \(t=1-\tau\).
8. Eighteen dimensions describe the paper-era padded cross-robot interface.
   Current `Pi0Config` defaults to `action_dim=32`; the main derivation therefore
   keeps the action dimension generic as \(d\).
9. WAM is treated as an emerging, nonstandard label. The π₀-versus-WM/WAM
   section is marked as interpretation, not as a result established by π₀.
10. The experiments validate the complete recipe but do not cleanly identify
    the causal contribution of VLM scale, Flow Matching, data scale,
    post-training, and systems engineering separately.

## 5. 网页与无障碍审计 / Web and accessibility audit

Local production build checks:

- `npm run check`: pass;
- `npm run build`: pass;
- the Draft 2020-12 manifest schema is executed by AJV, while Astro applies a strict matching Zod contract;
- publication status is read only from `post.json`; canonical Markdown does not duplicate a stale draft/review label;
- all 20 unique external URLs are registered in `SOURCES.yaml`, and every registered URL appears in both language sources;
- stable collection numbers use a strict committed high-water registry, fsynced atomic replacement, and an exclusive local allocation lock; gaps are retained, while CI blocks cross-worktree or cross-device ID conflicts;
- 58 rendered rows including the preamble, 116 language panes, and 17 TOC entries;
- Chinese, English, and bilingual modes update `?lang=`, `lang`, `aria-pressed`, visibility, and persisted state;
- Arrow keys, Home, and End move focus within the language-control group; activating a focused control changes the reading mode;
- language controls remain hidden when JavaScript is unavailable, while both complete documents and the no-JavaScript TOC remain readable;
- 114 language-prefixed source anchors and 58 enhanced paired rows retain unique DOM IDs; TOC links resolve to the visible paired row;
- no browser console warnings or errors;
- desktop and 390 × 844 responsive checks show no horizontal page overflow;
- all three language controls retain a 44 px minimum height on mobile;
- the sticky header keeps all three collection links and the language switcher available while reading; a real-pointer mode change preserved the active paired section within one CSS pixel;
- bilingual desktop mode aligns each semantic block side by side; mobile mode stacks each Chinese block immediately before its English pair;
- 62 display equations and 162 total math elements are pre-rendered as KaTeX HTML + MathML with no runtime math CDN;
- the root and collection README indexes are generated from `post.json` and match the published registry;
- build QA validates local fragment targets, canonical URLs, and `TechArticle` JSON-LD identity, dates, languages, and citation;
- `prefers-reduced-motion`, increased-contrast, forced-colors, skip link, focus-visible, and semantic headings are covered.

## 6. Publication decision

- The reader's interpretive π₀-versus-WM/WAM analysis remains in the public note and is explicitly labeled as interpretation rather than paper evidence.
- The default reading mode remains `中英对照`; Chinese-only and English-only states remain shareable through `?lang=zh` and `?lang=en`.
- GitHub Actions is validation-only. This repository's GitHub Pages site remains
  disabled; production publishing uses an independent provider URL from the
  exact validated `main` commit.
