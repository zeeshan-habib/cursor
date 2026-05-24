---
owner: vlad
last_updated: 2026-05-14
review_cadence: monthly
next_review: 2026-06-14
source: internal
refs: []
---

# Monthly MSHR Production Workflow

## Overview

The monthly MSHR runs on a fixed calendar cadence. It produces the full set of employment metrics for the prior month and feeds the public-facing report that leadership and GTM publish.

## Production Steps

<!-- STUB: Fill in exact steps once confirmed. Expected shape:

  Step 1 — Data cutoff
    - Cutoff date: last calendar day of the prior month
    - Confirm all source tables have been refreshed through cutoff date
    - Table: [to be filled in once data-model.md is complete]

  Step 2 — Notebook run
    - Run the Databricks notebook: [notebook path TBD]
    - Expected runtime: [TBD]
    - Check for row count anomalies vs prior month

  Step 3 — Metric calculation and QA
    - Run metric validation checks (see okrs-and-metrics.md for definitions)
    - Flag any metric that moves >X% month-over-month for manual review
    - Compare to prior month values before signing off

  Step 4 — Draft assembly
    - [Who builds the slide/narrative? Vlad? Analyst? TBD]

  Step 5 — Review
    - Ray Sanza reviews; Vlad signs off on data accuracy

  Step 6 — Publish / distribute
    - [Where is it published? Internal deck? Press release? TBD]
-->

## Data Requirements

IF running this workflow → load `data-model.md` and `../../../data/product-areas/mshr/mshr.md` for table names and query patterns.

## QA Checklist

<!-- STUB: Add QA checks once metric definitions are complete -->

- [ ] All source tables refreshed through cutoff date
- [ ] Row counts within expected range vs prior month
- [ ] No nulls on required metric fields
- [ ] Month-over-month deltas reviewed and flagged if >threshold
- [ ] Ray Sanza sign-off received
