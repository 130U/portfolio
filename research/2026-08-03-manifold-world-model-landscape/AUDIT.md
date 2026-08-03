# Audit

Status: passed
Reviewed: 2026-08-03
Open issues: 0

## Publication scope

- Published object: `research.002`
- Research cutoff: `2026-07-14`
- Source language: Chinese
- Public route: `/manifold-world-model-landscape/`
- Scope kept separate from the later WAM/VLA and WorldScape Policy 2.0 research projects
- No change to the personal-site repository or GitHub Pages configuration

## Reader-facing content

- The Chinese report preserves the source project's complete public narrative: research design, three Deep Research inputs, decision trail, qualification gates, five-object selection, dossiers, red team, content lock, retrospective, AI contribution, conclusions, and audit route.
- A conclusion-first section now states the three delivery paths, the non-ranking status of the final five, the paid-production evidence ceiling, Manifold's public-anchor boundary, and three recommended action areas.
- The English companion preserves the same 18 section anchors, heading levels, core numbers, evidence boundaries, and external source order in a shorter semantic companion.
- The page uses a desk-research evidence legend: source fact, company report, partner first-party, independent counter-evidence, conditional analysis, and unresolved.
- The interface reuses the existing restrained typography, 46rem single-language measure, stacked medium-screen reading mode, compact-screen outline behavior, visible focus treatment, and reduced-motion support. No article-specific motion or decorative UI was added.

## Evidence and claims

- Final public counts are fixed at 141 registered sources, 141 source cards, 111 atomic claims, 58 support/counter-evidence queries, and 63 page-to-evidence mappings.
- Historical intermediate counts remain in the immutable snapshot but are not presented as the final state.
- The final deck is PPTX v1.4. The project produced no PDF, and this page offers no PDF claim or download.
- Six core first-party entry points are registered in `SOURCES.yaml` and linked in identical order from both language sources.
- Company, partner, and independent evidence are not upgraded into customer-first-party proof of paid production adoption.

## Snapshot integrity

- Source commit: `6273e90ff03d575c46f3122ef6378ad1c2e96720`
- Source tree: `e6ea5713ccc87638467fb782905f26c3618f3716`
- Migrated tracked files: 389
- Migrated tracked bytes: 13,057,234
- Per-file SHA-256 comparison against the source checkout: 0 mismatches
- Source repository audit: passed
- Reader text audit: 318 files passed
- Complete Git history and `.git/` were intentionally excluded; the current sanitized public snapshot is preserved byte-for-byte.
- The ten historical `Madarame87` references remain only inside the immutable snapshot so its original manifest and audit baseline stay valid. Current navigation does not depend on them.
- `MIGRATION_MANIFEST.sha256` contains 389 entries; manifest SHA-256: `7107f24dac03ccc060188595c09f7bc6ef4d70f21061df5f2a573aea70e7eb45`.

## Build and structural validation

- `git diff --cached --check` outside the byte-identical source snapshot: passed
- Historical whitespace inside the source snapshot is retained deliberately because normalization would invalidate its original hashes
- `npm.cmd run check`: passed with 0 errors, 0 warnings, and 0 hints
- `npm.cmd run build`: passed
- Built-site audit: 8 HTML pages and 3 published article routes passed
- Canonical Markdown, Sources, Audit, Migration record, checksum manifest, and source snapshot are copied to the independent Sites artifact
- All rendered local references and fragments resolve in the built artifact
- The cold source snapshot is excluded from Astro/TypeScript diagnostics and does not register nested portfolio posts

## Visual asset decision

A bespoke social-preview image was generated and given one correction pass. Both drafts rendered the written funnel counts correctly but depicted a different number of diagram nodes. They were rejected rather than shipping a visually misleading research graphic. The article therefore retains the site's existing text-based social metadata.

## Refresh triggers

The report is a dated snapshot, not a live market database. Revisit it when product access, licensing, customer-first-party production evidence, benchmark protocols, geographic status, Manifold delivery units, or any of the archived monitoring triggers materially change.
