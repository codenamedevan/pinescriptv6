# Pine Script v6 Documentation Manifest

**Purpose:** This file acts as a directory map for Large Language Models (LLMs). Use this manifest to determine which specific documentation files to retrieve based on the user's request.

**Protocol:** 1.  Identify the user's intent (e.g., "Drawing a line", "Calculating RSI", "Backtesting").
2.  Locate the relevant file path below.
3.  Retrieve ONLY that file to conserve context window.

## 0. Latest Release Updates

*Use these files first when the user asks about recently added Pine v6 features from the release notes.*

* **`release_notes.md`**
  * **Content:** Chronological summary of recent Pine Script v6 additions and behavior changes.
  * **Keywords:** `request.footprint`, `volume_row`, `syminfo.isin`, `timeframe_bars_back`, `line wrapping`.

## 0.5. Publishing Guidelines

*Use this file when the user asks about publishing, house rules, visibility types,
formatting tags, paid scripts, or vendor requirements.*

* **`writing_scripts/publishing_guidelines.md`**
  * **Content:** House rules compliance checklists; privacy types (public/private);
    visibility types (open/protected/invite-only); vendor requirements for paid scripts;
    publication type decision tree; full BBCode formatting reference with usage examples
    for every supported tag; unsupported tag list; per-section formatting patterns;
    and LLM behaviour rules.
  * **Keywords:** `publish`, `house rules`, `open-source`, `protected`, `invite-only`,
    `private`, `paid script`, `vendor`, `Script Publishing Rules`, `Vendor Requirements`,
    `Editors' picks`, `MPL 2.0`, `15 minutes`, `BBCode`, `[b]`, `[i]`, `[list]`,
    `[pine]`, `[url]`, `[image]`, `[quote]`, `[s]`, `$SYMBOL`, `formatting`, `markup`,
    `performance claims`, `compliance`, `description`, `release notes`.

---
### NEW ROUTING ENTRIES (add to the "## Routing Logic for LLMs" section):

* **IF** user asks about publishing, visibility types, or house rules:
  + retrieve `writing_scripts/publishing_guidelines.md`

* **IF** user asks about BBCode, description formatting, or markup tags:
  + retrieve `writing_scripts/publishing_guidelines.md` (Section 7 — Formatting Reference)

* **IF** user asks whether they can charge for or sell a script:
  + retrieve `writing_scripts/publishing_guidelines.md` (Section 4 — Vendor Requirements)

* **IF** user asks about the difference between protected vs invite-only vs open-source:
  + retrieve `writing_scripts/publishing_guidelines.md` (Section 2 — Visibility Types)

* **IF** user asks how to format release notes or update an existing script:
  + retrieve `writing_scripts/publishing_guidelines.md` (Section 6 — Publication Workflow)
 
## 1. Syntax and Core Concepts

*Use these files when the user asks about language mechanics, execution flow, or type errors.*

* **`concepts/execution_model.md`**
  * **Content:** How the script executes bar-by-bar, historical vs. real-time context, and the `var` keyword.
  * **Keywords:** `barstate`, `history`, `realtime`, `calc_on_every_tick`, `var`, `varip`.

* **`concepts/timeframes.md`**
  * **Content:** Handling multi-timeframe data and preventing repainting.
  * **Keywords:** `request.security`, `timeframe.period`, `repainting`, `HTF`.

* **`concepts/colors_and_display.md`**
  * **Content:** Defining colors, gradients, and transparency.
  * **Keywords:** `color.new`, `color.from_gradient`, `bgcolor`.

* **`concepts/common_errors.md`**
  * **Content:** Explanations for common runtime and compile-time errors.
  * **Keywords:** "Series string", "Undeclared identifier", "max_bars_back".

## 2. API Reference (The Dictionary)

*Use these files for looking up built-in variables, constants, and keywords.*

* **`reference/variables.md`**
  * **Content:** Built-in read-only variables regarding the bar, symbol, or status.
  * **Keywords:** `open`, `high`, `low`, `close`, `volume`, `time`, `syminfo.ticker`, `syminfo.isin`, `timeframe.multiplier`, `bar_index`.

* **`reference/constants.md`**
  * **Content:** Fixed constants used as arguments for functions.
  * **Keywords:** `color.red`, `shape.triangle`, `plot.style_line`, `size.small`, `alert.freq_once_per_bar`.

* **`reference/types.md`**
  * **Content:** Data type definitions and type-casting functions.
  * **Keywords:** `int`, `float`, `bool`, `color`, `string`, `line`, `label`, `box`, `footprint`, `volume_row`, `simple`, `series`, `input`.

* **`reference/keywords.md`**
  * **Content:** Language keywords and control structures.
  * **Keywords:** `if`, `else`, `switch`, `for`, `while`, `export`, `import`, `method`.

## 3. Function Reference (By Namespace)

*Use these files to find syntax for specific function calls.*

* **`reference/functions/ta.md` (Technical Analysis)**
  * **Content:** Math for indicators and signal generation.
  * **Keywords:** `ta.rsi`, `ta.sma`, `ta.ema`, `ta.macd`, `ta.crossover`, `ta.lowest`, `ta.highest`, `ta.pivot`.

* **`reference/functions/strategy.md` (Backtesting)**
  * **Content:** Strategy testing engine, orders, and trade management.
  * **Keywords:** `strategy.entry`, `strategy.close`, `strategy.exit`, `strategy.position_size`, `strategy.equity`, `strategy.risk`.

* **`reference/functions/request.md` (External Data)**
  * **Content:** Requesting data from other symbols, financial data, or seeds.
  * **Keywords:** `request.security`, `request.financial`, `request.footprint`, `request.seed`, `request.currency_rate`.

* **`reference/functions/drawing.md` (Visuals)**
  * **Content:** Plotting data on the chart and drawing geometric shapes.
  * **Keywords:** `plot`, `plotshape`, `plotchar`, `line.new`, `box.new`, `label.new`, `polyline.new`, `fill`.

* **`reference/functions/collections.md` (Arrays, Maps, Matrices)**
  * **Content:** Advanced data structures for complex logic.
  * **Keywords:** `array.new`, `array.push`, `matrix.new`, `matrix.mult`, `map.new`, `map.put`.

* **`reference/functions/general.md` (Math, Strings, Inputs)**
  * **Content:** Core built-ins and general-purpose functions, including `time()` / `time_close()` behavior updates.
  * **Keywords:** `time`, `time_close`, `bars_back`, `timeframe_bars_back`, `math.abs`, `math.round`, `str.tostring`, `str.format`, `input.int`, `input.bool`, `alert()`.

* **`writing_scripts/style_guide.md`**
  * **Content:** Formatting conventions, including the updated line-wrapping rules for wrapped expressions in parentheses.
  * **Keywords:** `style guide`, `line wrapping`, `parentheses`, `indentation`.

## 🧭 Routing Logic for LLMs

* **IF** user asks "Write an RSI indicator":
  * retrieve `reference/functions/ta.md` (for RSI math)
  * retrieve `reference/functions/drawing.md` (for `plot` and `hline`)

* **IF** user asks "Create a moving average crossover strategy":
  * retrieve `reference/functions/ta.md` (for `ta.crossover`)
  * retrieve `reference/functions/strategy.md` (for `strategy.entry`)

* **IF** user asks "Draw a box around the high and low of the last 10 bars":
  * retrieve `reference/functions/drawing.md` (for `box.new`)
  * retrieve `reference/functions/ta.md` (for `ta.highest`, `ta.lowest`)

* **IF** user asks "Why is my variable resetting every bar?":
  * retrieve `concepts/execution_model.md` (check `var` usage)

* **IF** user asks about `request.footprint()`, `footprint`, `volume_row`, or footprint imbalance logic:
  * retrieve `release_notes.md`
  * retrieve `reference/functions/request.md`
  * retrieve `reference/types.md`

* **IF** user asks about `syminfo.isin`:
  * retrieve `release_notes.md`
  * retrieve `reference/variables.md`

* **IF** user asks about `timeframe_bars_back` in `time()` or `time_close()`:
  * retrieve `release_notes.md`
  * retrieve `reference/functions/general.md`

* **IF** user asks about multiline formatting or indentation rules:
  * retrieve `writing_scripts/style_guide.md`
