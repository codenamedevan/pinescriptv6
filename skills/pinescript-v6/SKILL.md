---
name: pinescript-v6
description: Write, review, debug, or explain TradingView Pine Script v6 code (indicators, strategies, libraries). Triggers on Pine Script, //@version=6, ta.*, strategy.*, request.security, plot/line/box/label drawing, repainting, or TradingView publishing questions. Bundles a chunked v6 reference so answers come from verified docs instead of training-data recall, which is frequently stale v4/v5 syntax.
---

# Pine Script v6

This skill bundles a chunked TradingView Pine Script v6 reference manual
alongside it (in the same directory as this file). Treat `MANIFEST.md` next
to this file as the index. Never answer a nontrivial Pine Script question
from memory alone — look the function or concept up in the bundled files
first. Training data over-represents Pine v4/v5; unverified recall reliably
produces deprecated syntax (`study()`, bare `security()`,
`strategy.risk.max_position_size` misuse, old `input()` forms, etc.).

All paths below are relative to this skill's own directory.

## Protocol

1. **Identify intent** — what is the user building or debugging (indicator,
   strategy, library, visual, execution-order question, publishing question)?
2. **Route via the manifest** — open `MANIFEST.md` and follow its routing
   table to the specific file(s). Read only what's needed; some files are
   large and meant to be consulted in slices, not loaded whole.
3. **Retrieve before writing code.** Confirm the exact function signature,
   argument names, and return type in the reference file before using it.
4. **Enforce `//@version=6`** on every script produced or modified.
5. **No hallucinated syntax** — if a function isn't found in these files, it
   doesn't exist in v6 or has been renamed. Say so; don't invent it.

## File map

| Need | File(s) |
|---|---|
| Master index / routing table | `MANIFEST.md` |
| Recent v6 additions (`request.footprint`, `syminfo.isin`, `timeframe_bars_back`, line-wrapping) | `release_notes.md` |
| Bar-by-bar execution, `var`/`varip`, historical vs realtime | `concepts/execution_model.md`, `pine_script_execution_model.md` |
| Multi-timeframe data, repainting | `concepts/timeframes.md` |
| Colors, gradients, transparency | `concepts/colors_and_display.md` |
| Compile/runtime error explanations | `concepts/common_errors.md` |
| Objects (UDTs), methods | `concepts/objects.md`, `concepts/methods.md` |
| Built-in variables (`open`, `close`, `syminfo.*`, `bar_index`) | `reference/variables.md` |
| Constants (`color.red`, `shape.triangle`, `size.small`) | `reference/constants.md` |
| Types & casting (`int`, `float`, `line`, `box`, `footprint`, `volume_row`) | `reference/types.md` |
| Keywords/control structures (`if`, `switch`, `for`, `method`, `export`/`import`) | `reference/keywords.md` |
| Operators | `reference/operators.md` |
| Annotations (`//@version`, `//@strategy_alert_message`, etc.) | `reference/annotations.md` |
| `ta.*` — indicators/signals | `reference/functions/ta.md` |
| `strategy.*` — backtesting, orders, exits | `reference/functions/strategy.md` |
| `request.*` — security/financial/footprint/seed data | `reference/functions/request.md` |
| Drawing (`plot`, `plotshape`, `line.new`, `box.new`, `label.new`, `polyline.new`, `fill`) | `reference/functions/drawing.md` |
| Arrays/matrices/maps | `reference/functions/collections.md` |
| Math/strings/inputs/`alert()` | `reference/functions/general.md` |
| Visual cookbook — plots, bar coloring/plotting, tables, lines/boxes, fills, backgrounds, text/shapes, levels | `visuals/*.md` (`visuals/overview.md` first) |
| Style guide (formatting, indentation, line-wrapping) | `writing_scripts/style_guide.md` |
| Debugging techniques | `writing_scripts/debugging.md` |
| Performance/profiling, `max_bars_back` limits | `writing_scripts/profiling_and_optimization.md`, `writing_scripts/limitations.md` |
| Publishing (house rules, visibility types, vendor/paid scripts, BBCode) | `writing_scripts/publishing_guidelines.md`, `writing_scripts/publishing_scripts.md` |

`visuals/` is not cross-referenced from `MANIFEST.md` itself — use it directly
for any drawing/plotting/visual-styling question.

## Routing examples

- "Write an RSI indicator" → `reference/functions/ta.md` (RSI math) +
  `reference/functions/drawing.md` (`plot`, `hline`).
- "MA crossover strategy" → `reference/functions/ta.md` (`ta.crossover`) +
  `reference/functions/strategy.md` (`strategy.entry`).
- "Box around the high/low of the last 10 bars" → `reference/functions/drawing.md`
  (`box.new`) + `reference/functions/ta.md` (`ta.highest`/`ta.lowest`).
- "Why does my variable reset every bar?" → `concepts/execution_model.md` (`var`).
- Anything about `request.footprint`, `footprint`, `volume_row` → `release_notes.md`
  + `reference/functions/request.md` + `reference/types.md`.
- Publishing / house rules / BBCode / paid scripts → `writing_scripts/publishing_guidelines.md`.

## Output conventions

- Always start scripts with `//@version=6`.
- Prefer `ta.*` namespace functions over hand-rolled math.
- Match `writing_scripts/style_guide.md` formatting (indentation, line-wrapping
  for wrapped parenthesized expressions).
- When the user reports an error message, check `concepts/common_errors.md`
  before guessing a fix.
- When touching strategy code, verify order-placement syntax against
  `reference/functions/strategy.md` — this is the area most likely to still
  contain v4/v5 habits (e.g., old `strategy.risk.*` calls).

## Keeping this skill current

The bundled reference files are a point-in-time copy. If Pine Script v6 gains
new syntax after this skill was packaged, treat any file here as
possibly-stale rather than infallible — cross-check against the current
official TradingView Pine Script v6 reference when something looks off or
missing, and prefer the newer, verified behavior.
