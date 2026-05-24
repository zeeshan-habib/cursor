---
name: commit
description: End-of-session commit workflow to snapshot all changes to GitHub with a descriptive message and safe staging rules.
disable-model-invocation: true
---

# commit — GitHub Sync Workflow

Run this after any session that changes repo files. Zee primarily works out of GitHub — the remote repo is the source of truth. Local-only changes are not acceptable unless he explicitly opts out.

## When to run

- **Default:** end of every session that touched repo files
- **Also:** after completing a multi-file task mid-session if Zee is done with that chunk of work
- **Skip:** question-only sessions with no file changes, or if Zee says "don't commit yet"

## Steps

1. **Run `git status`** to see what changed. Group the changes mentally:
   - Config files: `AGENTS.md`, `COACHING.md`, `BACKLOG.md`, `.gitignore`
   - Portfolio data: `portfolio.csv`, `net-worth.csv`, `wardrobe.csv`
   - Skills: `.cursor/skills/**`
   - Memory: `.cursor/memory/**`
   - Agent files: `agents/portfolio-agent/**`

2. **Run `git diff`** on the changed files to understand what actually changed (don't just go by filename).

3. **Draft a commit message** using this format:
   - One short subject line (under 60 chars), present tense: "Add X", "Update Y", "Fix Z"
   - If multiple areas changed, list them: "Update BACKLOG, add commit skill, fix portfolio.csv"
   - Do NOT write generic messages like "session updates" or "misc changes"

4. **Stage only tracked files** — never use `git add .` or `git add -A`:
   ```bash
   git add -u
   ```
   Then check if any new files need to be explicitly added (new skills, new memory files, COACHING.md, etc.) and add them by name.

5. **Commit and push:**
   ```bash
   git commit -m "your message here"
   git push
   ```

6. **Confirm** by showing the commit hash and a one-line summary of what was pushed.

## Rules
- Never commit Cursor settings files that contain API keys — only template or example configs are safe.
- Never commit `agents/portfolio-agent/briefings/` — auto-generated daily data, excluded by .gitignore.
- If nothing has changed since the last commit, say so — don't create an empty commit.
- If BACKLOG.md was updated this session, always include it in the commit.

## Reminder
The insights report flagged 237 hours of work across 27 sessions with only 4 commits. Run the commit skill at the end of every session. It takes 2 minutes and means nothing is ever lost.
