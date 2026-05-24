---
owner: ray-sanza, vlad
last_updated: 2026-05-14
review_cadence: monthly
next_review: 2026-06-14
source: internal
refs: []
---

# MSHR Workflows

This folder contains the production workflows for both MSHR report tracks.

## File Index

| File | When to load |
|---|---|
| monthly-report.md | When producing the regular monthly MSHR — covers data cutoff, notebook run, QA, and publish steps |
| adhoc-report.md | When producing a scoped or event-driven MSHR on leadership/GTM request |
| data-sourcing.md | When identifying, refreshing, or validating source tables in Databricks before a report run |

## Which Workflow to Use

IF the request is a scheduled monthly report → load `monthly-report.md`
IF the request is leadership- or GTM-driven, scoped to a specific question or event → load `adhoc-report.md`
IF the question is about which tables to use, how to refresh them, or whether data is current → load `data-sourcing.md`
