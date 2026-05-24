---
owner: ray-sanza, vlad
last_updated: 2026-05-14
review_cadence: monthly
next_review: 2026-06-14
source: internal
refs: []
---

# MSHR Domain Overview

## What MSHR Is

The Main Street Health Report (MSHR) is Homebase's aggregated small business economy report. It takes operational signal data from across the Homebase platform — shifts, time clocks, hires, separations — and rolls it up to produce economy-level employment metrics for U.S. small businesses.

The repo is internal: it records all context, metric definitions, table locations, and production logic so that Claude (and analysts) can query Databricks and produce the report without manual re-explanation. The outputs of that process are used to build public-facing reports published by leadership and the GTM team.

## Report Purpose

MSHR answers the question: *What is happening with employment, hiring, and workforce health at U.S. small businesses right now?*

It is not a product health report. It does not measure Homebase's own growth or retention. It uses Homebase's data as a signal layer for the external economy — specifically the segment of the U.S. labor market that small businesses represent.

Consumers of the output:
- **Internal**: Leadership (CRO and above) and GTM team use the data to build narratives, press releases, and research publications.
- **External / public**: Reports derived from this domain are published externally as Homebase's research voice on small business employment.

## Report Tracks

Two production tracks exist:

| Track | Cadence | Trigger |
|---|---|---|
| Monthly MSHR | Every month | Calendar-driven; fixed data cutoff and publish schedule |
| Ad Hoc MSHR | As needed | Leadership or GTM request; specific question or event-driven |

Both tracks draw from the same underlying data and metric definitions. The ad hoc track may scope to a subset of metrics or a specific time window.

## Production Cycle

<!-- STUB: Fill in once production steps are confirmed — expected shape:
  1. Data cutoff (last day of prior month)
  2. Databricks notebook run (table refresh)
  3. Metric calculation and QA
  4. Draft narrative / slide assembly
  5. Review by Ray Sanza / Vlad
  6. Publish / distribute
-->

## Key Workflows

| Workflow | File | Description |
|---|---|---|
| Monthly report production | workflows/monthly-report.md | End-to-end steps for the regular monthly MSHR |
| Ad hoc report production | workflows/adhoc-report.md | Steps for scoped, event-driven MSHR requests |
| Data sourcing | workflows/data-sourcing.md | How to identify, refresh, and validate source tables in Databricks |

## Domain Boundaries

| In scope | Out of scope |
|---|---|
| Aggregated employment metrics derived from Homebase platform data | Homebase product health metrics (DAU, retention, revenue) |
| U.S. small business economy signals | Individual company or location-level data (not aggregated) |
| Monthly and ad hoc public-facing report production | Real-time dashboards or operational alerting |

## Ownership

| Role | Person |
|---|---|
| DRI / Executive sponsor | Ray Sanza (Chief Revenue Officer) |
| Data owner / production lead | Vlad (former manager) |
| Analyst | <!-- STUB: add name --> |

## Cadence

- **Monthly**: Fixed schedule; data cutoff and publish date TBD once production steps are confirmed.
- **Ad hoc**: No fixed schedule; triggered by leadership or GTM request.
