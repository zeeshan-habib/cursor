#!/bin/bash
# Portfolio Pre-Market Surveillance Agent
# Runs weekdays at 8:30am ET via launchd (see com.portfolio.surveillance.plist)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
BRIEFINGS_DIR="$SCRIPT_DIR/briefings"
TEMPLATE="$SCRIPT_DIR/prompt-template.txt"
DATE=$(date '+%Y-%m-%d')
BRIEFING="$BRIEFINGS_DIR/$DATE.md"
LOG="$BRIEFINGS_DIR/$DATE.log"

# Skip weekends (6=Sat, 7=Sun)
DAY=$(date +%u)
if [ "${FORCE_RUN:-}" != "1" ] && [ "$DAY" -ge 6 ]; then
    echo "Weekend — skipping" >> "$LOG" 2>&1
    exit 0
fi

# Skip if already ran today
if [ -f "$BRIEFING" ]; then
    echo "Briefing already exists for $DATE" >> "$LOG" 2>&1
    exit 0
fi

mkdir -p "$BRIEFINGS_DIR"
export PATH="$HOME/.nvm/versions/node/v24.16.0/bin:$HOME/.bun/bin:/opt/homebrew/bin:$PATH"

PROMPT=$(sed -e "s/__DATE__/$DATE/g" -e "s|__REPO_ROOT__|$REPO_ROOT|g" "$TEMPLATE")

if ! command -v claude >/dev/null 2>&1; then
    echo "claude CLI not found — install Claude Code or run surveillance from Cursor with @portfolio-review" >> "$LOG" 2>&1
    exit 1
fi

echo "Running surveillance for $DATE (repo: $REPO_ROOT)..." >> "$LOG" 2>&1
OUTPUT=$(echo "$PROMPT" | claude -p --model claude-haiku-4-5-20251001 2>> "$LOG") || STATUS=$?
STATUS=${STATUS:-0}

if [ -n "$OUTPUT" ]; then
    echo "$OUTPUT" > "$BRIEFING"
    echo "Briefing written: $BRIEFING" >> "$LOG" 2>&1
    if echo "$OUTPUT" | grep -q "^NOTIFY:"; then
        osascript -e 'display notification "Urgent items in portfolio briefing" with title "Portfolio Alert" sound name "Default"'
    fi
else
    echo "No output from Claude (exit $STATUS) — check $LOG" >> "$LOG" 2>&1
    exit "$STATUS"
fi
