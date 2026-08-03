# Migration record

This entry preserves the current public, sanitized snapshot of the standalone research repository inside the portfolio. It does not delete or modify the source repository.

## Source identity

- Repository: `https://github.com/130U/manifold-world-model-research`
- Default branch: `main`
- Source commit: `6273e90ff03d575c46f3122ef6378ad1c2e96720`
- Source tree: `e6ea5713ccc87638467fb782905f26c3618f3716`
- Research cutoff: `2026-07-14`
- Migration date: `2026-08-03`

## Snapshot boundary

- Destination: `source-snapshot/`
- Included: all 389 files tracked at the source commit, preserving relative paths and bytes
- Tracked bytes: `13,057,234`
- Excluded: the source repository's `.git/` directory and complete Git history
- Reason for exclusion: avoid a nested repository and avoid reintroducing historical material outside the source project's current public-release audit
- Verification: every migrated tracked file was compared by SHA-256 with the source checkout; mismatches: `0`

The original project intentionally excluded two derived Content Lock ZIP byte packages that contained local-machine metadata and no unique content. This migration does not recreate them. Their hashes and canonical member files remain in the audited snapshot.

## Integrity

[`MIGRATION_MANIFEST.sha256`](MIGRATION_MANIFEST.sha256) records one SHA-256 digest for every file in `source-snapshot/`. The snapshot's own public-release audit, file manifest, governance documents, NOTICE, decision logs, evidence ledger, red-team records, and final PPTX remain unchanged.

- Migration manifest SHA-256: `7107f24dac03ccc060188595c09f7bc6ef4d70f21061df5f2a573aea70e7eb45`

The ten historical `Madarame87` references remain only inside the byte-identical snapshot. Current portfolio navigation and attribution do not depend on those links.
