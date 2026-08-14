#!/usr/bin/env bash
# Regenerates the standalone doc bundles under skills/pinescript-v6/ and
# agents/pinescript-developer/ from the canonical root-level docs.
#
# Root-level concepts/, reference/, visuals/, writing_scripts/,
# release_notes.md, pine_script_execution_model.md, and LLM_MANIFEST.md are
# the single source of truth. Never hand-edit the copies under skills/ or
# agents/ directly — edit the root files and re-run this script.
set -euo pipefail
cd "$(dirname "$0")/.."

SOURCE_DIRS=(concepts reference visuals writing_scripts)
SOURCE_FILES=(release_notes.md pine_script_execution_model.md)
TARGETS=(skills/pinescript-v6 agents/pinescript-developer)

for target in "${TARGETS[@]}"; do
  mkdir -p "$target"
  for dir in "${SOURCE_DIRS[@]}"; do
    rsync -a --delete "$dir/" "$target/$dir/"
  done
  for file in "${SOURCE_FILES[@]}"; do
    cp "$file" "$target/$file"
  done
  cp LLM_MANIFEST.md "$target/MANIFEST.md"
done

echo "Synced canonical docs into: ${TARGETS[*]}"
