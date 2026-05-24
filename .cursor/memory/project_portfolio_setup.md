---
name: Portfolio Setup & Tools
description: Investment portfolio setup, tools, custom skills, and reference files for this user
type: project
originSessionId: 642323f7-8ca0-41dd-b99c-545a414bb11e
---
## Portfolio File
Located at `investments/portfolio.csv` — contains all holdings across RRSP, TFSA, FHSA, Non-Reg with columns:
Symbol, Shares, AvgCostBasis, Currency, Sector, DateBought, Account, Notes, LastPrice, LastPriceDate

## Investment Playbook
Located at `AGENTS.md` and `investments/playbook.md` — defines the full investment framework including Python scripts for Yahoo Finance data.

## Custom Skill — /portfolio-review
Located at `.cursor/skills/portfolio-review/SKILL.md`

**Current version upgrades (as of 2026-04-18):**
- Output format: 2 tables only (Portfolio Values + What to Buy This Week), 1 line per holding max
- Added EV framing: (P_win × upside%) − (P_loss × downside%) on every recommendation
- Added structured THESIS / KEY RISK / MAX LOSS / MARGIN OF SAFETY format
- Added behavioral bias audit (6-bias checklist run silently before recommendations)
- Added ETF-specific evaluation: expense ratio, tracking error, factor tilt, withholding tax rules
- Added Non-Reg account mandate (PLOC-funded, EV > 10% hurdle, capital gains only)
- RBC Morningstar check: one-line optional note at end of report only — never repeated per reco
- Data source: Yahoo Finance Python scripts (not MCP) for all prices

## Domain Reference Files
Located at `~/Desktop/references/` — created 2026-04-18:
- `options-pricing.md` — Black-Scholes, Greeks, IV Rank rules
- `options-strategies.md` — tastytrade DTE studies, win rates, entry/exit rules
- `etf-portfolio.md` — factor premia, ETF evaluation, Canadian withholding tax
- `quant-systematic.md` — Kelly criterion, Sharpe thresholds, backtest rules
- `behavioral-risk.md` — Graham margin of safety, cognitive bias inventory

## MCP Servers Configured
- Yahoo Finance (cloud, via claude.ai marketplace)
- SEC EDGAR (`secedgar-mcp-server`)
- Google Drive (cloud, via claude.ai marketplace)

**How to apply:** Load portfolio.csv and AGENTS.md / investments/playbook.md context when reviewing stocks. Reference files at ~/Desktop/references/ provide deeper domain knowledge when needed.
