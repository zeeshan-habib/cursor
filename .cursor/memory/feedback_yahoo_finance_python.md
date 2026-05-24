---
name: Yahoo Finance data fetching — use Python script, not MCP
description: Yahoo Finance MCP is unreliable and drops connections constantly. Always use the Python/Bash script approach instead.
type: feedback
originSessionId: 3037db50-98c8-446e-9a2d-bb7adc70eec2
---
Always use the Bash/Python script to fetch Yahoo Finance data. Never rely on the Yahoo Finance MCP as the primary data source.

**Why:** The Yahoo Finance MCP disconnects on every session and fails even on single calls. During an extended portfolio analysis session (April 15, 2026) it dropped dozens of times. The Python urllib approach hitting Yahoo Finance's unofficial API directly is completely reliable.

**How to apply:** The four ready-to-run scripts are codified in CLAUDE.md under "Yahoo Finance Python Scripts":
1. Bulk price fetch — all portfolio symbols at once
2. Full single-stock quote — price, 52-week range, P/E, analyst rating, earnings date
3. 30-day historical data
4. Recent news headlines

Use `python3 -c "..."` via the Bash tool. The Yahoo Finance MCP can be tried as a fallback if the Python script somehow fails, but this has never been needed.
