# Pine Script v6 Reference for LLMs

**Current Version:** v6  
**Source:** [TradingView Pine Script™ v6 Reference Manual](https://www.tradingview.com/pine-script-reference/v6/)

## 🤖 What is this?
This repository contains the official Pine Script v6 documentation, restructured and "chunked" specifically for Large Language Models (LLMs).

The official documentation is massive. Feeding the entire raw documentation into an LLM often confuses it or exceeds context limits, leading to hallucinations or generic v5 code. This repository breaks the documentation into logical, namespaced markdown files to improve **Retrieval Augmented Generation (RAG)** and **Context Window efficiency**.

---

## 👨‍💻 For Humans: How to use this Repo

### Option 1: AI Code Editors (Cursor, Windsurf, Copilot)
If you use AI-native editors like Cursor or Windsurf:
1. Clone this repository locally.
2. In your chat interface, reference specific documentation based on what you are building.
   * *Building an indicator?* Reference `[@functions/ta.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/ta.md)` and `[@functions/drawing.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/drawing.md)`.
   * *Building a strategy?* Reference `[@functions/strategy.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/strategy.md)`.
   * *Getting errors?* Reference `@concepts/common_errors.md`.

### Option 2: Claude Projects / Custom GPTs
1. Download this repository as a ZIP.
2. Upload the relevant files to your **Claude Project Knowledge** or **Custom GPT Knowledge**.
3. *Recommendation:* Upload `[LLM_MANIFEST.md](https://github.com/codenamedevan/pinescriptv6/blob/main/LLM_MANIFEST.md)` and the specific `[reference/](https://github.com/codenamedevan/pinescriptv6/tree/main/reference)` folders you use most often.

---

## 🧠 For LLMs: Usage Instructions

**If you are an LLM or AI Assistant reading this file, follow these instructions:**

1.  **Entry Point:** Always check `[LLM_MANIFEST.md](https://github.com/codenamedevan/pinescriptv6/blob/main/LLM_MANIFEST.md)` first. It acts as the map for this repository.
2.  **Modular Retrieval:** Do not attempt to ingest the entire codebase at once.
    * If the user asks about **Functions** (e.g., RSI, EMA), look in `[reference/functions/ta.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/ta.md)`.
    * If the user asks about **Backtesting**, look in `[reference/functions/strategy.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/strategy.md)`.
    * If the user asks about **Arrays or Matrices**, look in `[reference/functions/collections.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/collections.md)`.
3.  **Syntax Version:** Enforce `//@version=6` in all code generation.
4.  **No Hallucinations:** If a function is not found in these files, it likely does not exist in v6 or has been renamed. Do not invent syntax.

---

## 📂 Repository Structure

* **`[LLM_MANIFEST.md](https://github.com/codenamedevan/pinescriptv6/blob/main/LLM_MANIFEST.md)`**: The master index. Start here.
* **`[concepts/](https://github.com/codenamedevan/pinescriptv6/tree/main/concepts)`**: Explanations of how the Pine engine works (Execution model, Timeframes).
* **`[reference/](https://github.com/codenamedevan/pinescriptv6/tree/main/reference)`**: The strict API dictionary.
    * `[variables.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/variables.md)`: Built-ins (`open`, `close`, `syminfo`).
    * `[constants.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/constants.md)`: Fixed values (`color.red`).
    * `[functions/](https://github.com/codenamedevan/pinescriptv6/tree/main/reference/functions)`:
        * `[ta.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/ta.md)`: Technical Analysis.
        * `[strategy.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/strategy.md)`: Backtesting.
        * `[request.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/request.md)`: External data.
        * `[drawing.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/drawing.md)`: Visuals (`plot`, `line`, `box`).

---

## 📋 Recommended System Prompt

If you are building a Custom GPT or setting up a Project, use this prompt:

> You are an expert Pine Script v6 Developer. You have access to a reference library structured into specific folders.
> 
> 1. When I ask for code, ALWAYS consult the `LLM_MANIFEST.md` to locate the correct reference file.
> 2. Prefer `ta.*` namespace functions over manual calculations.
> 3. Ensure all scripts start with `//@version=6`.
> 4. If I ask for a Strategy, strictly check `[reference/functions/strategy.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/strategy.md)` for the latest order placement syntax.
> 5. If I ask for complex visuals, check `[reference/functions/drawing.md](https://github.com/codenamedevan/pinescriptv6/blob/main/reference/functions/drawing.md)` for `polyline` and `box` capabilities.

---

*Disclaimer: This repository is a community-maintained restructuring of the official documentation designed for AI efficiency. It is not affiliated with TradingView.*
