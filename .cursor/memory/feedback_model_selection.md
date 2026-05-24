---
name: Model Selection & Token Hygiene
description: Rules for which Claude model to use per task type, session hygiene habits, and token-saving behaviours the user has explicitly confirmed
type: feedback
originSessionId: f400d21a-225d-48c6-b2e7-85c4b495bc4a
---
Use the right model for the right task — confirmed and agreed by the user on 2026-04-17.

**Model rules:**

| Task | Model |
|------|-------|
| Quick single lookups, simple writing, formatting, one-off price checks | Haiku |
| Portfolio review, fashion styling, financial/tax planning, plan execution | Sonnet |
| Planning something new (skill design, architecture, multi-phase strategy) | Opus |

If unclear which model fits, ask at the start: offer Haiku / Sonnet / Opus with one-line descriptions and let the user choose.

**Why:** Token burn is driven by long sessions and tool output bloat more than model choice — but using Opus for execution tasks adds 3–5× cost with no benefit.

**How to apply:**
- Always confirm model at session start for ambiguous tasks
- If user requests Opus for an execution task (not planning), flag: "Heads up — Opus is 3–5× more expensive here. Sonnet handles this equally well. Want to switch?"
- Never silently run Opus on portfolio review or fashion styling

---

**Session hygiene rules (user-confirmed):**

One task per conversation — never combine portfolio review, fashion, planning, etc. in a single session. Mixed long sessions balloon context and burn tokens fast.

**Why:** Confirmed after a session that combined portfolio review + stop-loss planning + fashion skill build + Korea outfit styling — context ballooned severely.

**How to apply:** At the start of a new major task in an existing session, suggest: "Want to start a fresh conversation for this? It'll keep things faster and cheaper."

---

**Python-first for financial data:**

Always use Yahoo Finance Python/v8 scripts for prices. Fall back to Yahoo Finance MCP only if Python fails. Never use `get_insights` unless specifically needed — it returns 50–100× more data than necessary (full SEC filing lists, report text) and explodes context size.

**Why:** During a portfolio review, 7× `get_insights` calls generated ~100,000+ tokens of unused SEC filing data.

**How to apply:** Default to Bash/Python scripts. If MCP is used and returns massive output, warn the user and suggest using Python instead next time.

---

**/compact reminder:**

If a session has covered more than one major task or context feels long, proactively suggest: "This session is getting long — consider running `/compact` before we continue. It'll summarise context and save tokens."

**Why:** User confirmed this as a preferred habit after learning about context window accumulation.
