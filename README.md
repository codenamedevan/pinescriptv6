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

### Option 1: Global install for any agent (recommended)
One command, no clone, works on any machine with Node 18+:

```bash
npx pinescript-v6 install
```

This copies the reference to `~/.pinescript-v6` and wires it into every agent that reads files:

| Agent | What it gets |
|---|---|
| Claude Code | `~/.claude/skills/pinescript-v6/` (skill) + `~/.claude/agents/pinescript-developer` (subagent), available in every project |
| Codex | a managed block in `~/.codex/AGENTS.md` pointing at the docs |
| Cursor / Windsurf | `~/.cursor/rules/pinescript-v6.md` |
| Anything else reading a global `AGENTS.md` | `~/.config/AGENTS.md` |

Existing content in those instruction files is preserved — only the block between
`<!-- BEGIN pinescript-v6 -->` and `<!-- END pinescript-v6 -->` is managed, and
re-running the installer updates it in place. `npx pinescript-v6 uninstall` removes everything.

**MCP (for agents that prefer tools over files):**

```bash
claude mcp add -s user pinescript-v6 -- npx -y pinescript-v6 mcp
codex  mcp add     pinescript-v6 -- npx -y pinescript-v6 mcp
```

Any other MCP client: `{"command": "npx", "args": ["-y", "pinescript-v6", "mcp"]}`.
The server exposes three tools — `pinescript_manifest` (routing table, call first),
`pinescript_doc` (read one reference file), `pinescript_search` (grep the reference).

### Option 2: Claude Code Plugin
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

### Option 3: AI Code Editors, manual setup (Cursor, Windsurf, Copilot)
If you use AI-native editors like Cursor or Windsurf:
1. Clone this repository locally.
2. In your chat interface, reference specific documentation based on what you are building.
   * *Building an indicator?* Reference [@functions/ta.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/ta.md) and [@functions/drawing.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/drawing.md).
   * *Building a strategy?* Reference [@functions/strategy.md](https://github.com/jabez4jc/pinescriptv6/blob/main/reference/functions/strategy.md).
   * *Getting errors?* Reference @concepts/common_errors.md.

### Option 4: Claude Projects / Custom GPTs
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

* **[.claude-plugin/](https://github.com/jabez4jc/pinescriptv6/tree/main/.claude-plugin)**: `plugin.json` + `marketplace.json` — makes this repo installable as a Claude Code plugin (Option 2 above).
* **[skills/pinescript-v6/](https://github.com/jabez4jc/pinescriptv6/tree/main/skills/pinescript-v6)**: The Claude Code skill that routes Pine Script requests to the right reference file. Self-contained — bundles its own copy of the docs so it works if copied out on its own.
* **[agents/pinescript-developer.md](https://github.com/jabez4jc/pinescriptv6/blob/main/agents/pinescript-developer.md)** + **[agents/pinescript-developer/](https://github.com/jabez4jc/pinescriptv6/tree/main/agents/pinescript-developer)**: The `pinescript-developer` subagent definition and its bundled reference copy — also self-contained; copy both together.
* **[bin/cli.mjs](https://github.com/jabez4jc/pinescriptv6/blob/main/bin/cli.mjs)**: The `npx pinescript-v6` CLI — global installer (`install` / `uninstall`) and MCP server (`mcp`).
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

## 🔄 Maintaining the Bundles (contributors)

The root-level `concepts/`, `reference/`, `visuals/`, `writing_scripts/`,
`release_notes.md`, `pine_script_execution_model.md`, and `LLM_MANIFEST.md`
are the **single canonical source**. The copies inside `skills/pinescript-v6/`
and `agents/pinescript-developer/` are generated from them — never hand-edit
those copies directly, edits will be overwritten.

1. Edit the canonical root files.
2. Regenerate the bundles: `./scripts/sync-bundles.sh`
3. Commit everything together.

To avoid forgetting step 2, enable the provided pre-commit hook once per clone:
```
git config core.hooksPath .githooks
```
It re-runs the sync script and stages the regenerated bundles automatically
on every commit. As a backstop, [`.github/workflows/verify-bundle-sync.yml`](https://github.com/jabez4jc/pinescriptv6/blob/main/.github/workflows/verify-bundle-sync.yml)
re-runs the same script in CI and fails the build if any bundle is out of
sync with the canonical docs — so drift can't land on `main` even if the hook
was skipped or bypassed.

Run `npm test` (`./tests/test-cli.sh`) after touching `bin/cli.mjs` — it exercises
install/uninstall against a throwaway `HOME` and does an MCP handshake.
Publishing a new npm version runs `sync-bundles.sh` automatically via `prepack`:
```
npm version patch && npm publish
```

---

*Disclaimer: This repository is a community-maintained restructuring of the official documentation designed for AI efficiency. It is not affiliated with TradingView.*
