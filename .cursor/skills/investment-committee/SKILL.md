---
name: investment-committee
description: Run parallel multi-strategy analysis with four subagents (Value, Momentum, Options, Contrarian) and synthesize a consensus recommendation.
disable-model-invocation: true
---

# Investment Committee

Run a parallel multi-strategy analysis on: $ARGUMENTS
(Pass a ticker like "MSFT" or "my portfolio" for a full review)

## Spawn 4 subagents in parallel using the Agent tool

Each agent gets live data independently: price via Yahoo Finance Python script, analyst consensus via MCP, 5 recent news headlines via WebSearch.

---

### Agent 1 — Value Investor (Benjamin Graham)
**Mandate:** Margin of safety, intrinsic value, P/E vs sector average, debt-to-equity, dividend sustainability, payout ratio.
**Question to answer:** Is this trading below intrinsic value with a sufficient margin of safety?
**Output:** BUY / HOLD / SELL | Intrinsic value estimate | Margin of safety % | Conviction 1–5

### Agent 2 — Momentum / CANSLIM
**Mandate:** Relative strength vs index (30-day return vs SPY/TSX), earnings acceleration (YoY growth rate), revenue growth rate, 52-week position (near high = bullish, near low = caution), institutional buying signals.
**Question to answer:** Is this stock in a confirmed uptrend with accelerating fundamentals?
**Output:** BUY / HOLD / SELL | Momentum score 1–5 | Trend direction | Conviction 1–5

### Agent 3 — Options Income Strategist
**Mandate:** For existing holdings, identify covered call or cash-secured put opportunities. Look at IV context, premium yield vs dividend yield, strike selection (OTM 5–10% for calls, ATM for puts).
**Question to answer:** Can we generate income from this position without capping upside excessively?
**Output:** COVERED CALL / CASH SECURED PUT / SKIP | Suggested strike + expiry | Estimated premium yield | Conviction 1–5
**Note:** Wealthsimple non-registered account only. Max 1 lot at a time. Spreads preferred for budget control.

### Agent 4 — Contrarian / Mean Reversion
**Mandate:** Identify quality stocks trading >15% below their 52-week high with strong analyst consensus. Look for oversold conditions, sentiment extremes, or temporary macro headwinds masking solid fundamentals.
**Question to answer:** Is the current price a temporary dip in a strong company, or a deserved re-rating?
**Output:** ACCUMULATE / WAIT / AVOID | Reversion target price | Timeframe estimate | Conviction 1–5

---

## After all 4 agents complete — Meta-Synthesis

Produce a consensus matrix:

| Strategy | Action | Conviction | Key Reason |
|----------|--------|------------|------------|
| Value | | | |
| Momentum | | | |
| Options | | | |
| Contrarian | | | |
| **CONSENSUS** | | | |

**Interpretation:**
- 4/4 Buy → Strong conviction — flag for immediate action
- 3/4 Buy → High conviction — proceed with normal position sizing
- 2/4 Buy → Mixed — note the disagreement, wait for a clearer signal or size down 50%
- 0–1/4 Buy → Avoid or hold only

**Final recommendation:** one of Strong Buy / Buy / Hold / Avoid, with suggested entry, stop-loss, and position size pulled from the trade-idea format.

Save the full report to agents/portfolio-agent/committee-YYYY-MM-DD.md (replace with today's date).
