---
name: project-mshr-domain
description: "Main Street Health Report domain build — staging in personal repo, transferring to Pioneer Works; owners, structure, workflow"
metadata: 
  node_type: memory
  type: project
  originSessionId: 8ccc7260-8be9-47ad-8380-e47c763f5b25
---

# Main Street Health Report (MSHR) Domain

Zee is building a context repo domain for Homebase's Main Street Health Report. The domain teaches Claude the full MSHR context so it can query Databricks and produce the report without re-explanation.

**Why:** MSHR is a monthly + ad hoc small business economy report (turnover, hiring, employment) that Homebase produces from its own platform data. Leadership (Ray Sanza, CRO) and GTM use it internally; outputs become public-facing reports and press releases.

**How to apply:** When Zee asks about MSHR, context files, metrics, or data tables related to this — treat this as an ongoing build. Files live in `zeeshan-habib/cursor/homebase/` during development. When complete, transfer to `pioneerworks/homebase-context` via a single clean PR.

## Key Facts

- **Pioneer Works** = Homebase's GitHub org (`pioneerworks/homebase-context`)
- **Branch protection**: `pioneerworks/homebase-context` requires all changes via pull request — no direct pushes to main
- **Staging workflow**: Build and iterate in `zeeshan-habib/cursor/homebase/` (no approvals needed), then one clean PR to Pioneer Works when done
- **PR #69** open on `pioneerworks/homebase-context` branch `feat/mshr-domain-scaffold` as placeholder — keep open until final transfer
- **Owners**: Ray Sanza (CRO, DRI) + Vlad (data/analytics lead, former manager)
- **Cadence**: Monthly (calendar-driven) + ad hoc (leadership/GTM request)

## Current File State (`zeeshan-habib/cursor/homebase/`)

| File | Status |
|---|---|
| `homebase-context-structure.md` | ✅ complete — full Pioneer Works repo architecture reference |
| `domains/mshr/CLAUDE.md` | ✅ complete |
| `domains/mshr/domain-overview.md` | ✅ complete — purpose, owners, two tracks, boundaries |
| `domains/mshr/customers.md` | ✅ complete — internal→public two-tier model |
| `domains/mshr/data-model.md` | ⏳ stub — waiting for Databricks table names |
| `domains/mshr/okrs-and-metrics.md` | ⏳ stub — waiting for metric definitions |
| `domains/mshr/workflows/CLAUDE.md` | ✅ complete |
| `domains/mshr/workflows/monthly-report.md` | ✅ complete (stubs for production steps) |
| `domains/mshr/workflows/adhoc-report.md` | ✅ complete |
| `domains/mshr/workflows/data-sourcing.md` | ✅ stub — waiting for table names + notebook paths |
| `data/product-areas/mshr/mshr.md` | ⏳ stub — waiting for metric + table details |

## What's Coming Next

Zee will provide metrics one by one, each with:
- Metric name + definition
- Source Databricks table(s) (catalog.schema.table)
- Calculation logic (numerator, denominator, filters)
- Notebook path

Add each metric to `okrs-and-metrics.md` (definition) and `data-model.md` / `data-sourcing.md` (table + query pattern).

## Pioneer Works Repo Architecture (key rules)

Three strict layers:
- `global/` — business context (entity model, product suite, glossary)
- `domains/` — product/domain knowledge
- `data/` — metric definitions + schema (canonical source; never define metrics in domain files)

Every folder has a `CLAUDE.md` with "File | When to load" table. Every file has YAML front matter (owner, last_updated, review_cadence, next_review, source, refs). Incomplete sections use `<!-- STUB: description -->`.
