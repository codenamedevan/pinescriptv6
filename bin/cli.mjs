#!/usr/bin/env node
// pinescript-v6 CLI: install the docs bundle globally for any agent, or run it
// as an MCP server.
import { readFile, readdir, rm, cp, mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PKG = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const HOME = homedir();
const BEGIN = "<!-- BEGIN pinescript-v6 -->";
const END = "<!-- END pinescript-v6 -->";

const DOC_DIRS = ["concepts", "reference", "visuals", "writing_scripts"];
const DOC_FILES = [
  "LLM_MANIFEST.md",
  "release_notes.md",
  "pine_script_execution_model.md",
];

// Where the shared copy of the docs lives once installed. Everything else
// (skill, agent, rules) points at this.
const DOCS = path.join(HOME, ".pinescript-v6");

async function installDocs() {
  await rm(DOCS, { recursive: true, force: true });
  await mkdir(DOCS, { recursive: true });
  for (const d of DOC_DIRS) await cp(path.join(PKG, d), path.join(DOCS, d), { recursive: true });
  for (const f of DOC_FILES) await cp(path.join(PKG, f), path.join(DOCS, f));
  await cp(path.join(DOCS, "LLM_MANIFEST.md"), path.join(DOCS, "MANIFEST.md"));
  return DOCS;
}

async function installClaude() {
  const skill = path.join(HOME, ".claude", "skills", "pinescript-v6");
  await rm(skill, { recursive: true, force: true });
  await cp(path.join(PKG, "skills", "pinescript-v6"), skill, { recursive: true });

  const agents = path.join(HOME, ".claude", "agents");
  await mkdir(agents, { recursive: true });
  await cp(path.join(PKG, "agents", "pinescript-developer.md"), path.join(agents, "pinescript-developer.md"));
  await rm(path.join(agents, "pinescript-developer"), { recursive: true, force: true });
  await cp(path.join(PKG, "agents", "pinescript-developer"), path.join(agents, "pinescript-developer"), { recursive: true });
  return [skill, path.join(agents, "pinescript-developer.md")];
}

const POINTER = (docs) => `${BEGIN}
## Pine Script v6

When the task involves TradingView Pine Script (\`//@version=6\`, \`ta.*\`,
\`strategy.*\`, \`request.*\`, plot/line/box/label drawing, repainting, or
TradingView publishing), do not answer from memory — training data is heavily
weighted toward stale v4/v5 syntax.

A chunked Pine Script v6 reference is installed at \`${docs}\`.
Read \`${path.join(docs, "MANIFEST.md")}\` first; it is a routing table from
intent to the specific reference file. Retrieve the exact signature before
using any built-in, and emit \`//@version=6\` on every script.
${END}`;

// Replaces the managed block in a markdown instructions file, leaving the rest
// of the user's file untouched.
async function upsertBlock(file, body) {
  await mkdir(path.dirname(file), { recursive: true });
  let cur = existsSync(file) ? await readFile(file, "utf8") : "";
  const i = cur.indexOf(BEGIN);
  const j = cur.indexOf(END);
  if (i !== -1 && j !== -1) cur = cur.slice(0, i) + body + cur.slice(j + END.length);
  else cur = cur.trimEnd() + (cur.trim() ? "\n\n" : "") + body + "\n";
  await writeFile(file, cur);
  return file;
}

async function install() {
  const docs = await installDocs();
  const written = [docs, ...(await installClaude())];
  written.push(await upsertBlock(path.join(HOME, ".codex", "AGENTS.md"), POINTER(docs)));
  written.push(await upsertBlock(path.join(HOME, ".cursor", "rules", "pinescript-v6.md"), POINTER(docs)));
  written.push(await upsertBlock(path.join(HOME, ".config", "AGENTS.md"), POINTER(docs)));

  console.log("Installed:");
  for (const w of written) console.log("  " + w);
  console.log(`
For MCP-based agents, register:

  claude:  claude mcp add -s user pinescript-v6 -- npx -y pinescript-v6 mcp
  codex:   codex mcp add pinescript-v6 -- npx -y pinescript-v6 mcp
  other:   {"command": "npx", "args": ["-y", "pinescript-v6", "mcp"]}
`);
}

async function uninstall() {
  const targets = [
    DOCS,
    path.join(HOME, ".claude", "skills", "pinescript-v6"),
    path.join(HOME, ".claude", "agents", "pinescript-developer.md"),
    path.join(HOME, ".claude", "agents", "pinescript-developer"),
    path.join(HOME, ".cursor", "rules", "pinescript-v6.md"),
  ];
  for (const t of targets) await rm(t, { recursive: true, force: true });
  for (const f of [path.join(HOME, ".codex", "AGENTS.md"), path.join(HOME, ".config", "AGENTS.md")]) {
    if (!existsSync(f)) continue;
    const cur = await readFile(f, "utf8");
    const i = cur.indexOf(BEGIN);
    const j = cur.indexOf(END);
    if (i !== -1 && j !== -1) await writeFile(f, (cur.slice(0, i) + cur.slice(j + END.length)).trim() + "\n");
  }
  console.log("Removed pinescript-v6 from ~/.pinescript-v6, ~/.claude, ~/.cursor, ~/.codex.");
}

// --- MCP server -------------------------------------------------------------

async function walk(dir, base = dir, out = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, base, out);
    else if (e.name.endsWith(".md")) out.push(path.relative(base, p));
  }
  return out;
}

// Rejects anything that escapes the docs root (path traversal via ../ or absolute).
function safeDoc(rel) {
  const p = path.resolve(PKG, rel);
  if (!p.startsWith(PKG + path.sep)) throw new Error(`path outside docs root: ${rel}`);
  return p;
}

async function mcp() {
  const { McpServer } = await import("@modelcontextprotocol/sdk/server/mcp.js");
  const { StdioServerTransport } = await import("@modelcontextprotocol/sdk/server/stdio.js");
  const { z } = await import("zod");

  const server = new McpServer({ name: "pinescript-v6", version: "1.0.0" });
  const text = (s) => ({ content: [{ type: "text", text: s }] });

  server.registerTool(
    "pinescript_manifest",
    {
      description:
        "Routing table for the Pine Script v6 reference. Call this FIRST for any Pine Script question, then fetch the file it points to with pinescript_doc.",
      inputSchema: {},
    },
    async () => text(await readFile(path.join(PKG, "LLM_MANIFEST.md"), "utf8"))
  );

  server.registerTool(
    "pinescript_doc",
    {
      description: "Read one Pine Script v6 reference file by its manifest-relative path, e.g. 'reference/functions/ta.md'.",
      inputSchema: { file: z.string().describe("path relative to the docs root, as listed in the manifest") },
    },
    async ({ file }) => text(await readFile(safeDoc(file), "utf8"))
  );

  server.registerTool(
    "pinescript_search",
    {
      description: "Case-insensitive substring search across the Pine Script v6 reference. Returns matching lines with file:line.",
      inputSchema: { query: z.string(), limit: z.number().optional() },
    },
    async ({ query, limit = 50 }) => {
      const needle = query.toLowerCase();
      const hits = [];
      for (const dir of DOC_DIRS) {
        for (const rel of await walk(path.join(PKG, dir))) {
          const full = path.join(dir, rel);
          const lines = (await readFile(path.join(PKG, full), "utf8")).split("\n");
          lines.forEach((line, n) => {
            if (hits.length < limit && line.toLowerCase().includes(needle))
              hits.push(`${full}:${n + 1}: ${line.trim()}`);
          });
          if (hits.length >= limit) break;
        }
      }
      return text(hits.length ? hits.join("\n") : `No matches for "${query}".`);
    }
  );

  await server.connect(new StdioServerTransport());
}

const cmd = process.argv[2];
if (cmd === "install") await install();
else if (cmd === "uninstall") await uninstall();
else if (cmd === "mcp") await mcp();
else if (cmd === "path") console.log(PKG);
else {
  console.log(`pinescript-v6 — Pine Script v6 reference for AI coding agents

  npx pinescript-v6 install     install globally (Claude Code, Codex, Cursor, any AGENTS.md agent)
  npx pinescript-v6 uninstall   remove it
  npx pinescript-v6 mcp         run as an MCP stdio server
  npx pinescript-v6 path        print the packaged docs root
`);
  process.exit(cmd ? 1 : 0);
}
