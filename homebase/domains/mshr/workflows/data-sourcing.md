---
owner: vlad
last_updated: 2026-05-14
review_cadence: monthly
next_review: 2026-06-14
source: internal
refs: []
---

# MSHR Data Sourcing

## Overview

This file describes how to identify, locate, refresh, and validate the Databricks tables and notebooks that power MSHR. Load this file when the question is about which tables to use, whether data is current, or how to run a refresh.

## Source Tables

<!-- STUB: Fill in once Vlad provides table names and notebook paths.
  Expected columns for each entry:
  - Table name (catalog.schema.table)
  - Description
  - Refresh cadence
  - Owner / maintainer
  - Notes (e.g., known data gaps, lag, filters required)
-->

| Table | Description | Refresh cadence | Notes |
|---|---|---|---|
| <!-- STUB --> | <!-- STUB --> | <!-- STUB --> | <!-- STUB --> |

## Notebooks

<!-- STUB: Fill in once notebook paths are provided.
  Expected columns:
  - Notebook path in Databricks
  - What it produces
  - Inputs required
  - Expected runtime
  - Run by whom
-->

| Notebook | What it produces | Inputs | Run by |
|---|---|---|---|
| <!-- STUB --> | <!-- STUB --> | <!-- STUB --> | <!-- STUB --> |

## Data Freshness Check

Before any report run, confirm tables are current:

```sql
-- STUB: Replace with actual table names once known
-- SELECT MAX(date_col) FROM catalog.schema.table
```

## Known Data Issues

<!-- STUB: Document any recurring data quality issues, lags, or gotchas once known -->
