---
owner: vlad
last_updated: 2026-05-14
review_cadence: as-needed
next_review: 2026-06-14
source: internal
refs: []
---

# Ad Hoc MSHR Production Workflow

## Overview

Ad hoc MSHR reports are produced on request from leadership or the GTM team. They are typically scoped to a specific question, time window, or external event (e.g., a policy announcement, a media inquiry, a conference keynote).

## When to Use This Workflow

IF the request comes from Ray Sanza, Vlad, or GTM outside of the monthly schedule → use this workflow.
IF the request specifies a particular metric subset, geography, or time window → use this workflow.
IF the request is "same as last month but for [specific segment]" → use this workflow.

## Production Steps

<!-- STUB: Fill in once confirmed. Expected shape:

  Step 1 — Scope definition
    - What question is being answered? Who is asking?
    - What metrics are needed? (subset of full MSHR or full set?)
    - What time window? (single month, rolling 3mo, YoY?)
    - What geographic or sector cuts? (national / state / industry?)

  Step 2 — Data pull
    - Confirm source tables cover the requested window
    - Run the relevant subset of the Databricks notebook or a scoped query
    - Table: [to be filled in once data-model.md is complete]

  Step 3 — QA
    - Same metric validation checks as monthly workflow
    - Flag anything that looks anomalous given the scope

  Step 4 — Output format
    - [Slide deck? Data file? One-pager? Depends on requester — TBD]

  Step 5 — Deliver to requester
    - Ray Sanza or Vlad confirms before external use
-->

## Key Differences from Monthly Workflow

| Dimension | Monthly | Ad Hoc |
|---|---|---|
| Trigger | Calendar | Request from leadership / GTM |
| Scope | Full metric set | Subset defined by request |
| Time window | Prior full month | Flexible |
| Output | Standard report format | Varies by request |
| Sign-off | Ray Sanza | Ray Sanza or Vlad |
