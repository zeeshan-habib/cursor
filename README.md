# cursor — Zee's Personal AI System

This repo is Zee's **secondary self** — the persistent context, portfolio data, memory, and skills that power his Cursor setup across sessions and machines. An AI reading this repo should be able to act as an informed version of Zee across investments, career, life planning, and personal context.

Migrated from [zeeshan-habib/claude](https://github.com/zeeshan-habib/claude) on 2026-05-23.

## Repo at a Glance

| Folder | What it is | Key files |
|---|---|---|
| `me/` | Who Zee is | `coaching.md` — $1M plan + life phases; `identity.md` — personal profile; `finances.md` — net worth + budget |
| `career/` | Professional context | `maintainx.md` — current role + 90-day plan; `background.md` — skills + history |
| `investments/` | Portfolio + trading | `playbook.md` — investor rules + Python scripts; `portfolio.csv` — live holdings; `theses.md` — per-position WHY |
| `homebase/` | Consulting work context | `domains/mshr/` — Main Street Health Report; `global/` — Homebase business overview |
| `side-hustle/` | CAEDUNIT + POD business | `CAEDUNIT-financials.md` — corp tax + consulting income; `pod-business.md` — Shopify portrait store |
| `lifestyle/` | Fashion, travel, family | `travel.md` — points strategy; `wardrobe.csv` — inventory; `parents/` — care plan |
| `agents/` | Automation | `portfolio-agent/` — weekday pre-market surveillance (8:30am ET) |
| `.cursor/` | Cursor behavior | `skills/` — project skills; `memory/` — cross-session memory; `rules/` — always-on rules |

**Every folder has a `CLAUDE.md`** — open that first. It tells you what's inside and when to load each file.

**Root files:** `AGENTS.md` (session rules + navigation), `BACKLOG.md` (task tracker), `STYLE-GUIDE.md` (authoring rules).

---

## Open This Repo in Cursor

1. **File → Open Folder…** → select `/Users/zeeshanhabib/cursor`
2. Or from Terminal: `cursor /Users/zeeshanhabib/cursor`
3. Trust the folder when prompted

Once open, new Agent chats inherit this repo as workspace context.

---

## Project Skills

Invoke by name in chat (e.g. "run portfolio-review skill"):

| Skill | Purpose |
|---|---|
| `portfolio-review` | Full portfolio review across all 4 accounts |
| `trade-idea` | Structured trade recommendation for a ticker |
| `investment-committee` | 4-strategy parallel analysis + consensus matrix |
| `career-coach` | Career strategy, comp, LinkedIn, promotion path |
| `fashion-stylist` | Outfit recommendations from style profile + wardrobe |
| `commit` | End-of-session git commit workflow |
| `investments` | General investment analyst persona |

Skills live in `.cursor/skills/*/SKILL.md`.

---

## GitHub

- Primary repo: `zeeshan-habib/cursor`
- Use `gh` CLI for all GitHub operations (PRs, issues, API)
- Auth: `gh auth login` (already configured on your machine)

```bash
gh repo view zeeshan-habib/cursor
gh pr create
```

---

## File Structure

```
cursor/
├── AGENTS.md                    ← master playbook (navigation, personas, tool fallback)
├── BACKLOG.md                   ← cross-domain task tracker
├── README.md                    ← this file
├── STYLE-GUIDE.md               ← authoring rules
├── repo-map.yaml                ← machine-readable file map
├── .gitignore                   ← whitelist-style
│
├── .cursor/
│   ├── rules/master-playbook.mdc
│   ├── skills/                  ← portfolio-review, trade-idea, career-coach, etc.
│   └── memory/                  ← cross-session memory (MEMORY.md index)
│
├── me/                          ← identity, coaching, finances
├── career/                      ← MaintainX, background
├── investments/                 ← portfolio.csv, playbook, theses
├── homebase/                    ← MSHR consulting context
├── side-hustle/                 ← CAEDUNIT, POD business
├── lifestyle/                   ← travel, wardrobe, parents
└── agents/                      ← portfolio surveillance, gelato-mcp
```

---

## New Machine Setup

```bash
# 1. Clone repo
git clone git@github.com:zeeshan-habib/cursor.git ~/cursor
cursor ~/cursor

# 2. Install GitHub CLI + auth
brew install gh
gh auth login

# 3. Activate surveillance agent (optional)
cp agents/portfolio-agent/com.portfolio.surveillance.plist ~/Library/LaunchAgents/
launchctl load ~/Library/LaunchAgents/com.portfolio.surveillance.plist
```

---

## Keeping This Repo Updated

After any change (new trade, stop-loss update, portfolio CSV update):

```bash
cd ~/cursor && git add -u && git commit -m "brief description" && git push
```

Use the `commit` skill at end of sessions for a structured commit workflow.

---

*Last updated: 2026-05-23*
