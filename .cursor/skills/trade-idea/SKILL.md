---
name: trade-idea
description: Generate a structured trade idea with live price data, analyst consensus, position sizing, stop-loss, and account placement for a Canadian growth investor.
disable-model-invocation: true
---

# Trade Idea

Generate a structured trade idea for: $ARGUMENTS

## Steps

1. Fetch current price using the Yahoo Finance Python bulk script from investments/playbook.md
2. Fetch analyst data (target mean/high/low, consensus, P/E, earnings date) via Yahoo Finance MCP — fall back to Python v10/quoteSummary if MCP fails
3. Fetch 30-day historical data to calculate trend and distance from 52w high/low
4. Fetch last 5 news headlines
5. Read investments/portfolio.csv to determine:
   - Current allocation % if already held (never push single stock above 10%)
   - Suggested position size: target 5–8% of total portfolio
   - Best account: TFSA for growth stocks, RRSP for ETFs/dividends, FHSA for capital preservation only, Non-Reg for capital gains plays (PLOC-funded — must justify 10%+ return)

## Output — always produce exactly this table, no exceptions

| Field | Value |
|-------|-------|
| Ticker | |
| Exchange & Currency | TSX (CAD) or NYSE/NASDAQ (USD — Norbert's Gambit needed) |
| Current Price | |
| 30-Day Trend | % return |
| Distance from 52w High | % |
| Entry Range | price range |
| Stop-Loss | $X.XX (X% below entry) — anchored to 200-day MA where possible |
| Price Target | analyst mean / high |
| Upside to Mean Target | % |
| Suggested Position Size | $X,XXX CAD (~X% of portfolio) |
| Suggested Account | |
| Earnings Date | date — ⚠️ BINARY RISK if within 14 days |
| Analyst Consensus | Strong Buy / Buy / Hold / Sell (score) SB:X B:X H:X S:X |
| Risk Score | 1–5 |
| Verdict | Strong Buy / Buy / Hold — Wait for Dip / Avoid |

**Thesis (2 sentences max):** Why this fits the growth mandate.
**Key Risk (1 sentence):** What breaks the thesis.

## Hard rules
- Stop-loss must be shown in both % and absolute dollar amount
- If earnings within 14 days: flag ⚠️ EARNINGS RISK — recommend waiting or sizing to 50% of normal position
- If upside to analyst mean target < 10%: flag ⚠️ LOW UPSIDE
- If adding to an existing position would push it above 10% of portfolio: flag ⚠️ CONCENTRATION and cap the suggestion
- Always note if Norbert's Gambit is required (USD stock, CAD cash)
- Never recommend a position without checking news + analyst rating + price trend
