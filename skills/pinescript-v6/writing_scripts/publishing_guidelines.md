# Pine Script v6 — Publishing Guidelines

**Purpose:** Authoritative guidance for LLMs generating, reviewing, or documenting
Pine Script publications. Covers house rules, compliance, publication types, and the
complete description formatting reference.

**LLM Routing:** Retrieve this file whenever the user asks about:
- Publishing a script (public, private, protected, invite-only, or paid)
- House rules, Script Publishing Rules, or Vendor Requirements
- Choosing a visibility or privacy type
- Description formatting, BBCode tags, or markup syntax
- Whether they can charge for a script
- Release notes format or update workflow

---

## 1. Privacy Types — Public vs Private

Privacy type controls **discoverability**. Set once at publish time and **cannot be changed**.

| Privacy | Discoverable? | Editable after publish? | Moderator review? |
|---------|--------------|------------------------|-------------------|
| **Public** | Yes — Community Scripts feed, search, profile | 15 minutes only | Yes |
| **Private** | No — URL access only | Always | No (while private) |

### Public

- Appears in the Community Scripts feed and all TradingView search surfaces.
- Script moderators review against House Rules and Script Publishing Rules.
- If non-compliant, the publication becomes **hidden** and the author is notified.
- Authors have **exactly 15 minutes** to edit or delete after publishing. After that the
  publication is final and cannot be changed or removed.
- **Recommended:** Always publish a private draft first to validate all content.

### Private

- Not visible in Community Scripts. Accessible only via direct URL.
- Always editable and deletable by the author — ideal for drafts.
- **Critical:** Private scripts are strictly for private use. Linking to private scripts
  in public TradingView content, social networks, or any public channel means the script
  is no longer considered private under TradingView rules.
- Selling access to private scripts is **prohibited**.

---

## 2. Visibility Types — Open, Protected, Invite-Only

Visibility type controls **who can see the source code and use the script**. Set once at
publish time and **cannot be changed**.

| Visibility | Source code viewable? | Who can use it? | Plan required | Can charge? |
|------------|----------------------|-----------------|---------------|-------------|
| **Open** | Anyone | Anyone | Any | No |
| **Protected** | Author only | Anyone | Paid plan | No |
| **Invite-only** | Author only | Invited users only | Premium+ | Yes (public only) |

### Open (Open-Source)

- Source code visible to any user on the script page and in the Pine Editor (read-only).
- Default licence: **Mozilla Public License 2.0**. Authors may specify an alternative.
- Reuse rules — all three must be met:
  - Credit the original author explicitly in the description and code.
  - Make **meaningful improvements** — near-identical copies will be hidden.
  - Publish reused code open-source unless the original author grants explicit written
    permission to go closed-source.
- Eligible for **Editors' Picks** (original, valuable, well-documented, compliant).
- **Always free.** Authors cannot charge for open-source scripts.

### Protected (Closed-Source, Free)

- Source code hidden from all users except the author.
- Any user can add and use the script freely.
- Requires a **paid TradingView plan** to publish.
- Description **must** explain what unique qualities justify protecting the code.
  Protected scripts that replicate open-source behaviour will be hidden.
- **Always free.** Authors cannot charge for protected scripts.

### Invite-Only (Closed-Source, Access-Controlled)

- Source code hidden; only **explicitly invited** users can add the script to their chart.
- Requires a **Premium or higher TradingView plan** to publish.
- Authors selling access are classified as **vendors** (see Section 4).
- The **"Author's instructions"** field is mandatory — must contain how users request access.
- **Only public invite-only scripts can be sold.** Private scripts cannot be sold.

---

## 3. House Rules & Compliance Checklist

Applies to **all** public script publications. Verify every item before generating or
approving a description.

### Pre-Publish Checklist

- [ ] Description begins in **English** (other languages may follow)
- [ ] Title uses **standard ASCII only** — no emoji, no ALL CAPS words
      (abbreviations are fine: RSI, EMA, VWAP, ATR, POC, RMA)
- [ ] **Zero performance claims** without substantiation — no "90% win rate",
      "guaranteed profit", "never loses", etc.
- [ ] No external links, social handles, or promotional content in the **title**
- [ ] Chart shows **only what is necessary** — no extra indicators, no drawing clutter
- [ ] Source code is open-source (MPL 2.0) unless protected/invite-only is justified
- [ ] No copying or paraphrasing another publication without explicit credit
- [ ] Closed-source descriptions explain **why the code requires protection**
- [ ] No unsubstantiated statements about capabilities or profitability

### Originality Requirements

- Publish only scripts that are **original** and provide genuine community value.
- Do not publish scripts that rehash, mimic, or copy existing public scripts.
- Do not publish scripts that combine indicators without a clear, unique purpose.

### Description Content Requirements

- Cover: purpose, how it works, how to use it, why it is original.
- For closed-source: explain unique qualities that justify hiding the code.
- Emoji and non-ASCII characters: use sparingly. Avoid all-caps prose.
- Unsubstantiated performance claims → script hidden by moderators.

### Chart Requirements

- Chart must demonstrate this script's outputs clearly.
- Remove **all** unnecessary indicators and drawing tools before publishing.
- The chart is not for showcasing complex multi-indicator setups.

---

## 4. Vendor Requirements (Invite-Only / Paid Scripts)

Authors who sell access to invite-only scripts are **vendors** and must comply with both
House Rules and Vendor Requirements.

- **Only public invite-only scripts can be sold.** No other type.
- Private scripts cannot be sold. Open-source and protected scripts are always free.
- TradingView does not process payments. All transactions are strictly between vendor
  and user — TradingView has no involvement.
- The "Author's instructions" field must clearly explain how to request and pay for
  access (contact details, external purchase link, etc.).
- Vendors are solely responsible for delivery, support, and legal compliance.

### Vendor Description Requirements

- Explain what the script does and why its unique value justifies payment.
- No unsubstantiated profitability or performance claims.
- Must begin with an English explanation.
- Must not impersonate TradingView or imply official endorsement.

---

## 5. Publication Type Decision Tree

```
Is the script for personal use, drafting, or small-group testing?
  └─ YES → Privacy: PRIVATE
           Always use private draft workflow before going public.

Is the script for the full TradingView community?
  └─ YES → Privacy: PUBLIC → then ask:

    Should the source code be visible?
      ├─ YES → Visibility: OPEN (open-source, MPL 2.0, free)
      │        Best for: community contribution, Editors' Picks eligibility,
      │        educational scripts, indicator libraries.
      │
      └─ NO → Should anyone be able to use it, or only specific users?
                ├─ ANYONE → Visibility: PROTECTED (closed-source, free)
                │           Requires: paid plan.
                │           Must justify in description why code is protected.
                │
                └─ SPECIFIC USERS ONLY → Visibility: INVITE-ONLY (closed-source, gated)
                                          Requires: Premium+ plan.
                                          Can charge users — vendor rules apply.
```

---

## 6. Publication Workflow

### For Public Scripts (All Visibility Types)

1. Write and test the script — no compile errors, behaviour matches description.
2. Clean the chart — remove everything not needed to demonstrate the script.
3. **Publish a private draft** — Privacy: Private. Validate widget, description, chart.
   Fix all errors (private scripts are always editable).
4. Copy the validated description text from the private draft's Edit window.
5. Create the **public publication** — paste the verified description. Set correct
   visibility. Check the House Rules acknowledgement box.
6. **You have 15 minutes** — verify the live script page immediately. Title and
   description are final after 15 minutes.
7. Optionally delete the private draft.

### For Updates to Existing Public Scripts

- Push updates via the **script update** flow — do not create a new publication.
- Privacy and visibility types cannot be changed on existing publications.
- Append a Release Notes block **below** the original description (never replace it):

```
[b]Release Notes — YYYY-MM-DD[/b]
[list]
[*]Change 1
[*]Change 2
[/list]
```

---

## 7. Description Formatting — BBCode Reference

TradingView description fields use **BBCode-style markup only**. Markdown, HTML, and
all other formats render as raw literal text and will not format correctly.

The toolbar in the "Publish script" description field inserts these tags automatically,
but they can also be typed directly.

### Complete Tag Reference

| Purpose | Syntax | Notes |
|---------|--------|-------|
| **Bold** | `[b]text[/b]` | Section headings and input parameter names |
| *Italic* | `[i]text[/i]` | Sparingly, for single-word emphasis |
| ~~Strikethrough~~ | `[s]text[/s]` | Release notes for removed/deprecated items |
| Pine code block | `[pine]code[/pine]` | Syntax-highlighted block; always on its own line |
| Bulleted list | `[list][*]item[/list]` | Each item starts with `[*]` on its own line |
| Numbered list | `[list=1][*]item[/list]` | Same structure, `[list=1]` opening tag |
| Block quotation | `[quote]text[/quote]` | Multi-line; for external definitions or citations |
| Hyperlink | `[url=URL]label[/url]` | TradingView/docs links only; no ads |
| Chart image | `[image]URL[/image]` | TradingView snapshot URL only |
| Symbol link | `$EXCHANGE:SYMBOL` | Inline; no tags — `$` prefix creates the link |

### Tag Usage — Full Detail

#### Bold `[b][/b]`
The primary structural element. Use for every section heading and for input parameter
names within the Inputs list.
```
[b]How It Works[/b]

[b]Inputs[/b]

[list=1]
[*][b]Lookback Length[/b] — description here.
[/list]
```

#### Italic `[i][/i]`
Use sparingly. One or two words per paragraph at most. Overuse reduces impact.
```
The signal fires only when volume is [i]above[/i] the 20-bar average.
```

#### Strikethrough `[s][/s]`
Rarely needed. Use in release notes to show a changed default or a removed feature.
```
[s]Default: 14[/s] Changed to: 20
```

#### Pine Code Block `[pine][/pine]`
Renders with full Pine Script syntax highlighting. Always start on a new line after
the opening tag. Use for the key calculation only — not the full script.
```
[pine]
// Delta confirmation using native footprint data
fp    = request.footprint(ticksPerRow)
delta = fp.delta(fp)
weakZone := delta > 0 and zoneType == "supply"
[/pine]
```

#### Bulleted List `[list][*]...[/list]`
Each bullet item must begin with `[*]` on its own line inside the `[list]` tags.
Use for: colour key, usage tips, feature lists, recommended pairings.
```
[list]
[*]Green fill — bullish delta confirmation (demand zone confirmed)
[*]Red fill — bearish delta confirmation (supply zone confirmed)
[*]Grey fill — zone not yet confirmed by order flow
[*]50% opacity — weak zone (delta opposes zone type)
[/list]
```

#### Numbered List `[list=1][*]...[/list]`
Same structure as the bulleted list. Use `[list=1]` as the opening tag.
Use for: input documentation (always), step-by-step instructions, ordered procedures.
```
[list=1]
[*][b]Lookback Length[/b] — Bars used to detect pivot highs and lows. Lower (e.g. 5): more zones, more noise. Higher (e.g. 20): fewer, stronger zones. Default: 10.
[*][b]Delta Threshold[/b] — Minimum absolute delta to confirm a zone. 0 accepts any delta; higher values require stronger confirmation. Default: 0.
[*][b]Ticks Per Row[/b] — Price range per footprint row, in ticks. Smaller values give finer granularity; larger values give broader rows. Default: 4.
[/list]
```

#### Block Quotation `[quote][/quote]`
Use to cite an external definition or a well-known formula. One per description maximum.
```
[quote]VWAP is calculated as the cumulative sum of (price × volume) divided by cumulative volume over the session.[/quote]
```

#### Hyperlink `[url=URL]label[/url]`
Allowed only for links to TradingView pages and official reference materials
(e.g., TradingView Help Center, Pine Script documentation). **Never link to social
media, personal websites, storefronts, or any promotional content** — this violates
House Rules and will result in the publication being hidden.
```
[url=https://www.tradingview.com/pine-script-docs/concepts/strategies/]Pine Script Strategy Documentation[/url]
```

#### Chart Image `[image]URL[/image]`
Renders a chart snapshot inline in the description. URL must be a TradingView snapshot
(`https://www.tradingview.com/x/XXXX/`) or TradingView idea URL. These tags are
optional — snapshot URLs pasted directly into the description also render automatically.
Clean the chart before taking the snapshot, exactly as you would for the publication chart.
```
[image]https://www.tradingview.com/x/AbCdEfGh/[/image]
```

#### Symbol Link `$EXCHANGE:SYMBOL`
The `$` prefix before a valid symbol creates an inline hyperlink to that symbol's
TradingView overview page. No opening/closing tags required.
```
This indicator is optimised for $CME:ES1!, $CME:NQ1!, and $NASDAQ:AAPL.
```

### Tags That Do NOT Work

These will render as raw text — do not use them:

| Unsupported | Common mistake | Correct alternative |
|-------------|---------------|---------------------|
| `# Heading` | Markdown habit | `[b]Heading[/b]` |
| `## Heading` | Markdown habit | `[b]Heading[/b]` |
| `**bold**` | Markdown habit | `[b]bold[/b]` |
| `_italic_` or `*italic*` | Markdown habit | `[i]italic[/i]` |
| `` `code` `` | Markdown inline code | Plain text or `[pine]code[/pine]` |
| `---` | Markdown divider | Blank line or new `[b]` heading |
| `<b>bold</b>` | HTML | `[b]bold[/b]` |
| `<i>italic</i>` | HTML | `[i]italic[/i]` |
| Any `<html>` tag | HTML | BBCode equivalent |
| Nested `[list]` inside `[list]` | Attempted sub-lists | Flatten to a single list level |
| `[table]` | Not available | Bulleted list with dashes or plain prose |

### Recommended Formatting Patterns by Section

**Title line** (first line of description):
```
[b]Script Name Here[/b]
```

**Overview** — plain prose paragraphs, no lists or code:
```
[b]Overview[/b]

One to three paragraphs. Plain language. No lists, no code blocks here.
```

**How It Works** — prose, optional code snippet, optional colour key:
```
[b]How It Works[/b]

Plain explanation of core logic.

[pine]
delta = fp.delta(fp)
[/pine]

Colour coding:
[list]
[*]Green — confirmed demand zone
[*]Red — confirmed supply zone
[/list]
```

**Inputs** — always a numbered list with bold parameter names:
```
[b]Inputs[/b]

[list=1]
[*][b]Parameter Name[/b] — What it controls. Low: X. High: Y. Default: Z.
[/list]
```

**Usage Notes** — always a bulleted list:
```
[b]Usage Notes[/b]

[list]
[*]Actionable tip one.
[*]Actionable tip two.
[/list]
```

**Release Notes** (updates only) — appended below original description:
```
[b]Release Notes — YYYY-MM-DD[/b]
[list]
[*]Added: delta threshold input.
[*]Fixed: POC marker rendering on first bar.
[/list]
```

---

## 8. LLM Behaviour Rules

When generating or reviewing a publication:

1. **Identify the publication type first** — open-source community tool, protected
   proprietary, paid invite-only, or private draft. Ask if not clear from context.
2. **Apply the correct compliance checklist** — Section 3 for all public scripts;
   Section 4 additionally for invite-only/paid.
3. **Use BBCode exclusively** — never output Markdown or HTML in description text.
   Every heading uses `[b][/b]`. Every list uses `[list]` or `[list=1]`.
4. **Never generate performance claims** even if the user requests them. Explain why
   they violate House Rules and offer to describe what the script measures instead.
5. **For closed-source descriptions** — always include a paragraph explaining the
   unique qualities that justify protecting the code.
6. **For invite-only descriptions** — always include a placeholder for the Author's
   Instructions field (contact method for access requests).
7. **Recommend the private draft workflow** before any public publication, especially
   for first-time authors.
8. **Flag chart guidance** — remind the user to clean the chart. Never describe a
   chart with multiple indicators or drawing tools.
9. **Release notes go below the original** — when updating, append; never replace.
