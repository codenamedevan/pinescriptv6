# Pine Script v6 Reference for LLMs

**Current Version:** v6  
**Source:** [TradingView Pine Script™ v6 Reference Manual](https://www.tradingview.com/pine-script-reference/v6/) & [Welcome to Pine Script® v6](https://www.tradingview.com/pine-script-docs/welcome/)

## Recent Release Coverage
The repository now explicitly surfaces the additions documented in [release_notes.md](https://github.com/jabez4jc/pinescriptv6/blob/main/release_notes.md):

- `request.footprint()` and the `footprint` / `volume_row` types
- `syminfo.isin`
- `time()` / `time_close()` support for `timeframe_bars_back`
- Updated line-wrapping rules for expressions enclosed in parentheses

These updates are reflected in:

- [reference/functions/request.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/request.md)
- [reference/functions/general.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/general.md)
- [reference/types.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/types.md)
- [reference/variables.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/variables.md)
- [writing_scripts/style_guide.md](https://github.com/jabez4jc/pinescriptv6/blob/main/writing_scripts/style_guide.md)

## 🤖 What is this?
This repository contains the official Pine Script v6 documentation, restructured and "chunked" specifically for Large Language Models (LLMs).

The official documentation is massive. Feeding the entire raw documentation into an LLM often confuses it or exceeds context limits, leading to hallucinations or generic v5 code. This repository breaks the documentation into logical, namespaced markdown files to improve **Retrieval Augmented Generation (RAG)** and **Context Window efficiency**.

On top of the raw docs, the repo also ships as a **Claude Code plugin** — a `pinescript-v6` skill that auto-routes to the right file, and a `pinescript-developer` subagent for writing/reviewing Pine Script v6 code.

---

## 👨‍💻 For Humans: How to use this Repo

### Option 1: Claude Code Plugin (recommended for Claude Code users)
This repo is self-hosting as a plugin marketplace, so no separate marketplace repo is needed.

```
/plugin marketplace add jabez4jc/pinescriptv6
/plugin install pinescript-v6@pinescriptv6
```

This installs:
* **`pinescript-v6` skill** — auto-triggers on Pine Script work and routes through [LLM_MANIFEST.md](https://github.com/jabez4jc/pinescriptv6/blob/main/LLM_MANIFEST.md) to the correct reference file instead of relying on stale v4/v5 training data.
* **`pinescript-developer` agent** — a subagent specialized in writing, refactoring, debugging, and reviewing Pine Script v6 (repainting checks, `var`/`varip` correctness, drawing-object limits, publishing compliance).

To try it locally before pushing changes, point the marketplace at a local path instead of the GitHub repo:
```
/plugin marketplace add /path/to/your/local/pinescriptv6
```

### Option 2: AI Code Editors (Cursor, Windsurf, Copilot)
If you use AI-native editors like Cursor or Windsurf:
1. Clone this repository locally.
2. In your chat interface, reference specific documentation based on what you are building.
   * *Building an indicator?* Reference [@functions/ta.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/ta.md) and [@functions/drawing.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/drawing.md).
   * *Building a strategy?* Reference [@functions/strategy.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/strategy.md).
   * *Getting errors?* Reference @concepts/common_errors.md.

### Option 3: Claude Projects / Custom GPTs
1. Download this repository as a ZIP.
2. Upload the relevant files to your **[Claude Project Knowledge](https://support.claude.com/en/articles/9517075-what-are-projects)** ([YouTube Help Here](https://www.youtube.com/watch?v=GJ5jTgcbRHA)) or **[Custom GPT Knowledge](https://help.openai.com/en/articles/8843948-knowledge-in-gpts)**.
3. *Recommendation:* Upload [LLM_MANIFEST.md](https://github.com/jabez4jc/pinescriptv6/blob/main/LLM_MANIFEST.md) and the specific [reference/](https://github.com/jabez4jc/pinescriptv6/tree/main/reference) folders you use most often.

---

## 🧠 For LLMs: Usage Instructions

**If you are an LLM or AI Assistant reading this file, follow these instructions:**

1.  **Entry Point:** Always check [LLM_MANIFEST.md](https://github.com/jabez4jc/pinescriptv6/blob/main/LLM_MANIFEST.md) first. It acts as the map for this repository.
2.  **Modular Retrieval:** Do not attempt to ingest the entire codebase at once.
    * If the user asks about **Functions** (e.g., RSI, EMA), look in [reference/functions/ta.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/ta.md).
    * If the user asks about **Backtesting**, look in [reference/functions/strategy.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/strategy.md).
    * If the user asks about **Arrays or Matrices**, look in [reference/functions/collections.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/collections.md).
3.  **Syntax Version:** Enforce //@version=6 in all code generation.
4.  **No Hallucinations:** If a function is not found in these files, it likely does not exist in v6 or has been renamed. Do not invent syntax.

---

## 📂 Repository Structure

* **[.claude-plugin/](https://github.com/jabez4jc/pinescriptv6/tree/main/.claude-plugin)**: `plugin.json` + `marketplace.json` — makes this repo installable as a Claude Code plugin (Option 1 above).
* **[skills/pinescript-v6/](https://github.com/jabez4jc/pinescriptv6/tree/main/skills/pinescript-v6)**: The Claude Code skill that routes Pine Script requests to the right reference file.
* **[agents/pinescript-developer.md](https://github.com/jabez4jc/pinescriptv6/blob/main/agents/pinescript-developer.md)**: The `pinescript-developer` subagent definition.
* **[LLM_MANIFEST.md](https://github.com/jabez4jc/pinescriptv6/blob/main/LLM_MANIFEST.md)**: The master index. Start here.
* **[concepts/](https://github.com/jabez4jc/pinescriptv6/tree/main/concepts)**: Explanations of how the Pine engine works (Execution model, Timeframes).
* **[reference/](https://github.com/jabez4jc/pinescriptv6/tree/main/reference)**: The strict API dictionary.
    * [variables.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/variables.md): Built-ins (`open`, `close`, `syminfo`).
    * [constants.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/constants.md): Fixed values (`color.red`).
    * [functions/](https://github.com/jabez4jc/pinescriptv6/tree/main/reference/functions):
        * [ta.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/ta.md): Technical Analysis.
        * [strategy.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/strategy.md): Backtesting.
        * [request.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/request.md): External data.
        * [drawing.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/drawing.md): Visuals (`plot`, `line`, `box`).
* **[visuals/](https://github.com/jabez4jc/pinescriptv6/tree/main/visuals)**: Drawing/plotting cookbook — plots, bar coloring, tables, lines/boxes, fills, backgrounds, text/shapes, levels.
* **[writing_scripts/](https://github.com/jabez4jc/pinescriptv6/tree/main/writing_scripts)**: Style guide, debugging, profiling/limitations, and publishing guidelines.

---

## 📋 Recommended System Prompt

If you are building a Custom GPT or setting up a Project, use this prompt:

> You are an expert Pine Script v6 Developer. You have access to a reference library structured into specific folders.
> 
> 1. When I ask for code, ALWAYS consult the [LLM_MANIFEST.md](https://github.com/jabez4jc/pinescriptv6/blob/main/LLM_MANIFEST.md) to locate the correct reference file.
> 2. Prefer `ta.*` namespace functions over manual calculations.
> 3. Ensure all scripts start with `//@version=6`.
> 4. If I ask for a Strategy, strictly check [reference/functions/strategy.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/strategy.md) for the latest order placement syntax.
> 5. If I ask for complex visuals, check [reference/functions/drawing.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/drawing.md) for `polyline` and `box` capabilities.

---

*Disclaimer: This repository is a community-maintained restructuring of the official documentation designed for AI efficiency. It is not affiliated with TradingView.*
