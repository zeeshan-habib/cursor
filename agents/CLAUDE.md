# agents/
Scheduled automation and one-click agent entry points for investments and immigration.

| Path | When to load |
|---|---|
| `CLAUDE.md` | Load when setting up, debugging, or extending any agent |
| `portfolio-agent/` | Daily investment surveillance (Mon–Fri 8:30am ET) |
| `spousal-pr-agent/` | Weekly outland spousal PR accountability nudge (Mon 9:00am ET) |

## One-click (Cursor)

| Agent | Invoke | Model |
|---|---|---|
| **Investments — full review** | `@portfolio-review` in a new Agent chat | Sonnet |
| **Investments — trade idea** | `@trade-idea` | Sonnet |
| **Spousal PR — application coach** | `@spousal-pr` in a new Agent chat | Sonnet |

## Scheduled (launchd)

| Agent | Schedule | Output |
|---|---|---|
| Portfolio surveillance | Mon–Fri 8:30am ET | `agents/portfolio-agent/briefings/YYYY-MM-DD.md` |
| Spousal PR weekly nudge | Mon 9:00am ET | `agents/spousal-pr-agent/check-ins/YYYY-MM-DD.md` |

Install instructions are in each agent folder's `.plist` file comments.
