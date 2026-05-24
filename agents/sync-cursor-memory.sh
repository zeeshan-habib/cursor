#!/usr/bin/env bash
set -euo pipefail
SRC="/Users/zeeshanhabib/claude/.claude/projects/-Users-administrator/memory"
DEST="/Users/zeeshanhabib/cursor/.cursor/memory"
mkdir -p "$DEST"
rsync -av "$SRC/" "$DEST/"
mv "$DEST/project_claude_repo.md" "$DEST/project_cursor_repo.md"
sed -i '' \
  -e 's|zeeshan-habib/claude|zeeshan-habib/cursor|g' \
  -e 's|Claude repo|Cursor repo|g' \
  -e 's|name: Primary Claude Repo|name: Primary Cursor Repo|g' \
  -e 's|primary Claude Code config|primary Cursor config|g' \
  -e 's|Claude Code configuration|Cursor configuration|g' \
  "$DEST/project_cursor_repo.md"
sed -i '' \
  -e 's|project_claude_repo.md|project_cursor_repo.md|g' \
  -e 's|Primary Claude Repo|Primary Cursor Repo|g' \
  -e 's|zeeshan-habib/claude|zeeshan-habib/cursor|g' \
  "$DEST/MEMORY.md"
ls -1 "$DEST"
