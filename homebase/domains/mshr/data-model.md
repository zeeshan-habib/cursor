---
owner: <!-- STUB: name -->
last_updated: 2026-05-14
review_cadence: quarterly
next_review: 2026-08-14
source: stub
refs:
  - global/business-overview.md
  - data/schema-reference.md
---
# MSHR Data Model

Load when you need to understand what data MSHR is built from, how MSHR entities relate to core Homebase entities, or how raw product data becomes publishable report data.

## Data Sources

<!-- STUB: What underlying Homebase data feeds into MSHR?
E.g., scheduling signals, timecard volumes, hiring activity, payroll runs.
For each source:
- What it measures
- Which Homebase product generates it
- How it is anonymized or aggregated for external publication -->

| Data Source | Homebase Product | What it captures | Aggregation applied |
|---|---|---|---|
| <!-- STUB --> | <!-- STUB --> | <!-- STUB --> | <!-- STUB --> |

## Key Entities

<!-- STUB: What are the main units of analysis in MSHR?
Define any MSHR-specific groupings (e.g., vertical, region, size band)
that differ from standard Homebase entity definitions. -->

### <!-- STUB: Entity 1 -->
<!-- STUB: Definition and how it maps to Homebase's company/location/job model -->

### <!-- STUB: Entity 2 -->
<!-- STUB: Definition -->

## Relationship to Core Homebase Entities

| MSHR Concept | Maps to Homebase Entity | Caveats |
|---|---|---|
| <!-- STUB: e.g. "Small business" --> | <!-- STUB: e.g. Company --> | <!-- STUB: e.g. Filtered to 1-50 employees --> |

## Anonymization and Privacy Rules

<!-- STUB: What rules govern what data can appear in MSHR?
E.g., minimum sample sizes, geographic suppression thresholds, industry suppression.
Critical — the model must not suggest surfacing data below these thresholds. -->

| Rule | Applies to | Threshold |
|---|---|---|
| <!-- STUB: e.g. Minimum location count --> | <!-- STUB: e.g. Any geo/vertical cut --> | <!-- STUB: e.g. n >= 100 --> |

## Common Confusion Points

| Confusion | Clarification |
|---|---|
| <!-- STUB --> | <!-- STUB --> |
