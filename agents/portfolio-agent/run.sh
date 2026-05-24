#!/bin/bash
# Portfolio Pre-Market Surveillance Agent
# Runs weekdays at 8:30am ET via launchd

BRIEFINGS_DIR="$HOME/agents/portfolio-agent/briefings"
TEMPLATE="$HOME/agents/portfolio-agent/prompt-template.txt"
DATE=$(date '+%Y-%m-%d')
BRIEFING="$BRIEFINGS_DIR/$DATE.md"
LOG="$BRIEFINGS_DIR/$DATE.log"

# Skip weekends (6=Sat, 7=Sun)
DAY=$(date +%u)
if [ "$DAY" -ge 6 ]; then
    echo "Weekend — skipping" >> "$LOG" 2>&1
    exit 0
fi

# Skip if already ran today
if [ -f "$BRIEFING" ]; then
    echo "Briefing already exists for $DATE" >> "$LOG" 2>&1
    exit 0
fi

mkdir -p "$BRIEFINGS_DIR"
export PATH="$HOME/.bun/bin:$PATH"

# Replace __DATE__ placeholder in template with today's date
PROMPT=$(sed "s/__DATE__/$DATE/g" "$TEMPLATE")

# Run Claude headlessly — capture output, script writes the file
echo "Running surveillance for $DATE..." >> "$LOG" 2>&1
OUTPUT=$(echo "$PROMPT" | claude -p --model claude-haiku-4-5-20251001 2>> "$LOG")
STATUS=$?

if [ -n "$OUTPUT" ]; then
    echo "$OUTPUT" > "$BRIEFING"
    echo "Briefing written: $BRIEFING" >> "$LOG" 2>&1
    # Send notification if Claude flagged urgent items
    if echo "$OUTPUT" | grep -q "^NOTIFY:"; then
        osascript -e 'display notification "Urgent items in portfolio briefing" with title "Portfolio Alert" sound name "Default"'
    fi
else
    echo "No output from Claude (exit $STATUS) — check $LOG" >> "$LOG" 2>&1
fi
