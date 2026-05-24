---
owner: Zee
last_updated: 2026-05-15
review_cadence: quarterly
next_review: 2026-08-15
---

# Style Guide — zeeshan-habib/claude

Rules for writing and maintaining files in this repo. The goal: every file should give an AI (or Zee) exactly what it needs and nothing it doesn't.

---

## Core Principle

**Only write what the model can't infer from training data.**
If it's general knowledge (how a TFSA works, what SQL is, what a P/E ratio means) — skip it. Only document what's proprietary: Zee's specific numbers, decisions, behavioral patterns, account states, and preferences.

---

## File Format

Every non-CLAUDE.md file starts with YAML front matter:

```yaml
---
owner: Zee
last_updated: YYYY-MM-DD
review_cadence: monthly | quarterly | annual
next_review: YYYY-MM-DD
refs:
  - path/to/related-file.md
---
```

First line after front matter: one sentence — what this file covers and when to load it.

---

## CLAUDE.md Convention (every folder)

```markdown
# Folder Name
One-line description of the domain.

| File | When to load |
|---|---|
| `file.md` | Load when: [specific trigger question or task] |
```

**File not listed in a CLAUDE.md = invisible to AI.** Always update the folder's CLAUDE.md when adding a new file.

---

## Content Rules

| Rule | Detail |
|---|---|
| Tables > prose | Use tables for comparisons, lists with attributes, multi-field data |
| IF/THEN > narrative | "If TFSA drops 20%, PLOC limit shrinks" not "The PLOC is affected by TFSA value" |
| Imperative verbs | "Load coaching.md" not "It may be helpful to load coaching.md" |
| One idea per bullet | No nested bullets. Break complex ideas into separate lines. |
| No general knowledge | Skip anything the model already knows from training |
| Stub placeholders | `<!-- STUB: description of what goes here -->` for planned but unwritten sections |

---

## File Size Targets

| Type | Target |
|---|---|
| CLAUDE.md index | Under 30 lines |
| Identity / profile files | 1K–2K chars |
| Domain / strategy files | 2K–5K chars |
| Data / schema files | As needed |
| Playbooks with scripts | No limit — completeness required |

**If a file exceeds its target:** audit line by line. Ask: "Would the model get this wrong without this line?" If no — delete it.

---

## Staleness Protocol

- **Monthly review files:** `me/finances.md`, `investments/theses.md`, `BACKLOG.md`
- **Quarterly review files:** `me/coaching.md`, `career/maintainx.md`, `investments/playbook.md`, `lifestyle/travel.md`
- **Annual review files:** `me/identity.md`, `career/background.md`, `STYLE-GUIDE.md`

To find stale files: check `next_review` dates in front matter. If past due, update content and reset `last_updated` + `next_review`.

---

## What NOT to put in this repo

- Git history, recent changes, commit logs — use `git log`
- Debugging solutions — the fix is in the code; the commit message has context
- Anything already documented in CLAUDE.md that's general Claude behavior
- Ephemeral task details — use BACKLOG.md for tasks, not identity files
