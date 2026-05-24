---
name: Portfolio Review Output Format
description: User wants concise portfolio review output — 1 line per holding, 2 tables max, no verbose sections
type: feedback
originSessionId: 642323f7-8ca0-41dd-b99c-545a414bb11e
---
Keep /portfolio-review output minimal and scannable:

**Rule**: Two tables only — no prose sections, no Section A/B/C/D/E headers in the output.

1. **Portfolio Values table**: one row per holding with Symbol, Shares, Avg Cost, Price, Value, Return%, Reco, Reason (1 line max)
2. **What to Buy This Week table**: one row per account with Buy, Shares, Cost, Why (1 line), Stop-Loss, Max Loss

**Why:** User finds long reports with multiple sections overwhelming. They want to scan a table and act, not read paragraphs.

**How to apply:** All internal analysis (EV, bias audit, politician trades, ETF checks) runs silently. Only surfaces in the table cells — never as separate sections. One optional line at the end for RBC/Morningstar.

Do NOT ask the user to check RBC Direct Investing on every recommendation. Mention it once at the very end of the full report only.
