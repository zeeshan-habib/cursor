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

Requires **Claude Code CLI** (`claude` in PATH) for headless runs.

---

## Install scheduled agents (one-time)

Run from repo root (`cursor/`):

```bash
mkdir -p ~/Library/LaunchAgents
cp agents/portfolio-agent/com.portfolio.surveillance.plist ~/Library/LaunchAgents/
cp agents/spousal-pr-agent/com.spousal-pr.weekly.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.portfolio.surveillance.plist
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.spousal-pr.weekly.plist
```

**Verify they're loaded:**

```bash
launchctl list | grep -E 'portfolio|spousal'
```

Expected output:

```text
-	0	com.portfolio.surveillance
-	0	com.spousal-pr.weekly
```

**Test manually (don't wait for schedule):**

```bash
cd /Users/zeeshanhabib/cursor
FORCE_RUN=1 bash agents/portfolio-agent/run.sh
FORCE_RUN=1 bash agents/spousal-pr-agent/run.sh
```

Check output in `agents/portfolio-agent/briefings/` and `agents/spousal-pr-agent/check-ins/`.

---

## Troubleshooting

| Error | Meaning | Fix |
|---|---|---|
| `cp: .../LaunchAgents: No such file or directory` | Folder doesn't exist yet | Run `mkdir -p ~/Library/LaunchAgents` first |
| `Bootstrap failed: 5: Input/output error` | Agent **already loaded** | Safe to ignore. Verify with `launchctl list \| grep portfolio` |
| `claude CLI not found` in log | Claude Code not installed | Install Claude Code; or use `@portfolio-review` / `@spousal-pr` in Cursor instead |
| No briefing file created | Weekend skip, already ran today, or Claude error | Use `FORCE_RUN=1`; check `briefings/*.log` or `check-ins/*.log` |

**Reinstall after editing a plist** (boot out first, then bootstrap):

```bash
launchctl bootout gui/$(id -u)/com.portfolio.surveillance
launchctl bootout gui/$(id -u)/com.spousal-pr.weekly
cp agents/portfolio-agent/com.portfolio.surveillance.plist ~/Library/LaunchAgents/
cp agents/spousal-pr-agent/com.spousal-pr.weekly.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.portfolio.surveillance.plist
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.spousal-pr.weekly.plist
```

**Uninstall:**

```bash
launchctl bootout gui/$(id -u)/com.portfolio.surveillance
launchctl bootout gui/$(id -u)/com.spousal-pr.weekly
rm ~/Library/LaunchAgents/com.portfolio.surveillance.plist
rm ~/Library/LaunchAgents/com.spousal-pr.weekly.plist
```

**Note:** Mac must be awake at scheduled time. If asleep, launchd runs the job when it wakes.

Per-agent install notes also appear in each `.plist` file comment block.
