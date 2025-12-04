# Pine Script v6 Documentation Manifest

**Purpose:** This file acts as a directory map for Large Language Models (LLMs). Use this manifest to determine which specific documentation files to retrieve based on the user's request.

**Protocol:** 1.  Identify the user's intent (e.g., "Drawing a line", "Calculating RSI", "Backtesting").
2.  Locate the relevant file path below.
3.  Retrieve ONLY that file to conserve context window.

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
  * **Keywords:** `open`, `high`, `low`, `close`, `volume`, `time`, `syminfo.ticker`, `timeframe.multiplier`, `bar_index`.

* **`reference/constants.md`**
  * **Content:** Fixed constants used as arguments for functions.
  * **Keywords:** `color.red`, `shape.triangle`, `plot.style_line`, `size.small`, `alert.freq_once_per_bar`.

* **`reference/types.md`**
  * **Content:** Data type definitions and type-casting functions.
  * **Keywords:** `int`, `float`, `bool`, `color`, `string`, `line`, `label`, `box`, `simple`, `series`, `input`.

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
  * **Keywords:** `request.security`, `request.financial`, `request.seed`, `request.currency_rate`.

* **`reference/functions/drawing.md` (Visuals)**
  * **Content:** Plotting data on the chart and drawing geometric shapes.
  * **Keywords:** `plot`, `plotshape`, `plotchar`, `line.new`, `box.new`, `label.new`, `polyline.new`, `fill`.

* **`reference/functions/collections.md` (Arrays, Maps, Matrices)**
  * **Content:** Advanced data structures for complex logic.
  * **Keywords:** `array.new`, `array.push`, `matrix.new`, `matrix.mult`, `map.new`, `map.put`.

* **`reference/functions/general.md` (Math, Strings, Inputs)**
  * **Content:** Core math, string manipulation, and user inputs.
  * **Keywords:** `math.abs`, `math.round`, `str.tostring`, `str.format`, `input.int`, `input.bool`, `alert()`.

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
