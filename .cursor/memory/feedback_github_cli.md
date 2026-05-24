---
name: GitHub: Use gh CLI, not MCP
description: GitHub MCP has persistent auth failures; always use gh CLI via Bash for all GitHub operations
type: feedback
originSessionId: 6ebb0364-cd19-4f0e-ae44-ad50a523dd10
---
Always use the `gh` CLI (via Bash tool) for all GitHub operations. Never use `mcp__github__*` tools.

**Why:** The GitHub MCP returns "Bad credentials" errors every session despite being configured — the token it holds is unreliable. The `gh` CLI is authenticated via keyring and works consistently.

**How to apply:** Any time a task involves GitHub (browsing files, viewing PRs, reading issues, pushing changes, etc.), reach for `gh api` or `gh repo`/`gh pr`/`gh issue` commands via Bash. Do not attempt the MCP first.
