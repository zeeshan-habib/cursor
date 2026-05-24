#!/bin/bash
# Spousal PR Weekly Accountability Agent
# Runs Mondays at 9:00am ET via launchd (see com.spousal-pr.weekly.plist)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
CHECKINS_DIR="$SCRIPT_DIR/check-ins"
TEMPLATE="$SCRIPT_DIR/prompt-template.txt"
DATE=$(date '+%Y-%m-%d')
CHECKIN="$CHECKINS_DIR/$DATE.md"
LOG="$CHECKINS_DIR/$DATE.log"

DAY=$(date +%u)
if [ "${FORCE_RUN:-}" != "1" ] && [ "$DAY" -ne 1 ]; then
    echo "Not Monday — skipping" >> "$LOG" 2>&1
    exit 0
fi

if [ -f "$CHECKIN" ]; then
    echo "Check-in already exists for $DATE" >> "$LOG" 2>&1
    exit 0
fi

mkdir -p "$CHECKINS_DIR"
export PATH="$HOME/.nvm/versions/node/v24.16.0/bin:$HOME/.bun/bin:/opt/homebrew/bin:$PATH"

PROMPT=$(sed -e "s/__DATE__/$DATE/g" -e "s|__REPO_ROOT__|$REPO_ROOT|g" "$TEMPLATE")

if ! command -v claude >/dev/null 2>&1; then
    echo "claude CLI not found — run @spousal-pr manually in Cursor" >> "$LOG" 2>&1
    exit 1
fi

echo "Running spousal PR check-in for $DATE..." >> "$LOG" 2>&1
OUTPUT=$(echo "$PROMPT" | claude -p --model claude-haiku-4-5-20251001 2>> "$LOG") || STATUS=$?
STATUS=${STATUS:-0}

if [ -n "$OUTPUT" ]; then
    echo "$OUTPUT" > "$CHECKIN"
    echo "Check-in written: $CHECKIN" >> "$LOG" 2>&1
    osascript -e 'display notification "Weekly spousal PR check-in ready" with title "Immigration" sound name "Default"'
else
    echo "No output from Claude (exit $STATUS)" >> "$LOG" 2>&1
    exit "$STATUS"
fi
