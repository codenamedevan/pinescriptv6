#!/usr/bin/env bash
# Smoke test for bin/cli.mjs: install/uninstall against a throwaway HOME, plus
# an MCP handshake. Run: ./tests/test-cli.sh
set -euo pipefail
cd "$(dirname "$0")/.."

T=$(mktemp -d)
trap 'rm -rf "$T"' EXIT
mkdir -p "$T/.codex"
printf '# my rules\nkeep me\n' > "$T/.codex/AGENTS.md"

HOME=$T node bin/cli.mjs install > /dev/null
[ -f "$T/.claude/skills/pinescript-v6/SKILL.md" ] || { echo "FAIL: skill not installed"; exit 1; }
[ -f "$T/.claude/agents/pinescript-developer/MANIFEST.md" ] || { echo "FAIL: agent bundle not installed"; exit 1; }
[ -f "$T/.pinescript-v6/MANIFEST.md" ] || { echo "FAIL: shared docs not installed"; exit 1; }
grep -q "keep me" "$T/.codex/AGENTS.md" || { echo "FAIL: clobbered user AGENTS.md"; exit 1; }

# Re-installing must not duplicate the managed block.
HOME=$T node bin/cli.mjs install > /dev/null
[ "$(grep -c 'BEGIN pinescript-v6' "$T/.codex/AGENTS.md")" = 1 ] || { echo "FAIL: not idempotent"; exit 1; }

HOME=$T node bin/cli.mjs uninstall > /dev/null
[ ! -e "$T/.pinescript-v6" ] || { echo "FAIL: docs not removed"; exit 1; }
grep -q "pinescript-v6" "$T/.codex/AGENTS.md" && { echo "FAIL: block not removed"; exit 1; }
grep -q "keep me" "$T/.codex/AGENTS.md" || { echo "FAIL: user content lost on uninstall"; exit 1; }

# MCP: tools/list must answer, and path traversal must be rejected.
OUT=$({ printf '%s\n' \
  '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"t","version":"1"}}}' \
  '{"jsonrpc":"2.0","method":"notifications/initialized"}' \
  '{"jsonrpc":"2.0","id":2,"method":"tools/list"}' \
  '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"pinescript_doc","arguments":{"file":"../../../etc/passwd"}}}'; sleep 3; } | node bin/cli.mjs mcp)
grep -q pinescript_search <<< "$OUT" || { echo "FAIL: mcp tools/list"; exit 1; }
grep -q "outside docs root" <<< "$OUT" || { echo "FAIL: path traversal not blocked"; exit 1; }

echo "PASS"
