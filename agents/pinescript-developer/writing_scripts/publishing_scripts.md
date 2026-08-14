
# [Publishing  scripts](https://www.tradingview.com/pine-script-docs/writing/publishing/#publishing-scripts)

## [Introduction](https://www.tradingview.com/pine-script-docs/writing/publishing/#introduction)

TradingView hosts a large global community of Pine Script® programmers, and millions of traders. Script authors can publish their custom  [indicator](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  scripts,  [strategies](https://www.tradingview.com/pine-script-docs/concepts/strategies/), and  [libraries](https://www.tradingview.com/pine-script-docs/concepts/libraries/)  publicly in the  [Community scripts](https://www.tradingview.com/scripts/)  repository, allowing others in our community to use and learn from them. They can also publish  _private_  scripts to create  _drafts_  for public releases, test features, or collaborate with friends.

This page explains the script publishing process and provides recommendations to help authors publish their Pine scripts effectively.

NoticeBefore you publish a script, ensure you read and understand our  [House Rules](https://www.tradingview.com/house-rules/),  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/), and  [Vendor Requirements](https://www.tradingview.com/support/solutions/43000549951-vendor-requirements/).

## [Script  publications](https://www.tradingview.com/pine-script-docs/writing/publishing/#script-publications)

When an  _editable_  script is on the chart and opened in the Pine Editor, users can select the “Publish indicator/strategy/library” button in the top-right corner to open the “Publish script” window and create a  _script publication_:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Script-publications-1.J697I8lX_Z2vfciF.webp)

After the author follows all the necessary steps to  [prepare the publication](https://www.tradingview.com/pine-script-docs/writing/publishing/#preparing-a-publication)  and selects the “Publish private/public script” button on the last page of the “Publish script” window, TradingView generates a dedicated  _script widget_  and  _script page_, which feature options for users to boost, share, report, and comment on the publication.

The script widget is a  _preview_  of the publication that appears in all relevant locations on TradingView, depending on the specified  [privacy](https://www.tradingview.com/pine-script-docs/writing/publishing/#privacy-types)  and  [visibility](https://www.tradingview.com/pine-script-docs/writing/publishing/#visibility-types)  settings. It shows the script’s title, a compressed view of the published chart, and a brief preview of the script’s description. An icon in the top-right corner of the widget indicates whether the published script is an  [indicator](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator),  [strategy](https://www.tradingview.com/pine-script-docs/concepts/strategies/), or  [library](https://www.tradingview.com/pine-script-docs/concepts/libraries/):

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Script-publications-2.G0ylHOYP_Z2tLh7z.webp)

Clicking on the widget opens the script page. The top of the page shows information about the script’s visibility, its title, and an enlarged view of the published chart:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Script-publications-3.s71gTejL_Z1gcreE.webp)

For published  [strategies](https://www.tradingview.com/pine-script-docs/concepts/strategies/), the script page also includes the option for users to view the  [Strategy Tester](https://www.tradingview.com/pine-script-docs/concepts/strategies/#strategy-tester)  report below the title.

Below the chart or strategy report are the publication’s complete description, release notes from script updates, additional information, and user comments.

## [Privacy  types](https://www.tradingview.com/pine-script-docs/writing/publishing/#privacy-types)

Script publications have one of two  _privacy types_, which determine how users can discover them:  [public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public)  or  [private](https://www.tradingview.com/pine-script-docs/writing/publishing/#private). Public scripts are discoverable to all members of the TradingView community, whereas private scripts are accessible only via their URLs. Authors set a script publication’s privacy type using the “Privacy settings” field on the  _second page_  of the “Publish script” window:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Privacy-types-1.CSXHELy0_Z1x20xA.webp)

NoticeEnsure you select the correct option in this field when you  [prepare](https://www.tradingview.com/pine-script-docs/writing/publishing/#preparing-a-publication)  a publication, as you  **cannot**  change a script’s privacy type after you publish it.

### [Public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public)

A script published with the “Public” setting is available in the  [Community scripts](https://www.tradingview.com/scripts/)  feed and discoverable to all TradingView users worldwide. Unlike public ideas, everyone accesses the same  _global repository_  for public scripts, regardless of which localized TradingView version they use.

Users can discover public scripts by navigating the Community scripts feed directly, viewing the  [Scripts](https://www.tradingview.com/u/#published-scripts)  tab of an author’s profile, searching the “Community” tab of the “Indicators, Metrics & Strategies” menu, or specifying script keywords in the search bar at the top of many TradingView pages. We also feature exceptional public scripts in our  [Editors’ picks](https://www.tradingview.com/scripts/editors-picks/).

Because public scripts are available to our global community and are  **not**  for private use, they must meet the criteria defined in our  [House Rules](https://www.tradingview.com/house-rules/),  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/), and  [Vendor Requirements](https://www.tradingview.com/support/solutions/43000549951-vendor-requirements/). Our  _script moderators_  analyze public scripts using these criteria. Script publications that do not follow these rules become  _hidden_  from the community.

NoticeWhen you publish a public script, you have only  **15 minutes**  to edit or delete it. After that period expires, the publication is finalized and  **cannot**  be changed or removed. Therefore, before you publish a public script, validate that everything appears as intended and complies with our rules. The recommended approach is to start with a  [private](https://www.tradingview.com/pine-script-docs/writing/publishing/#private)  script, which you can  _always_  edit or delete.

### [Private](https://www.tradingview.com/pine-script-docs/writing/publishing/#private)

A script published with the “Private” setting is  _not_  available in the  [Community scripts](https://www.tradingview.com/scripts/)  feed, and users cannot find the publication using TradingView’s search features. The script widget is visible only to the author, from their profile’s  [Scripts](https://www.tradingview.com/u/#published-scripts)  tab. Other users cannot see the script widget, and they cannot view the script page without having access to its URL.

Authors can  **always**  edit or delete private script publications, unlike  [public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public)  scripts, using the available options in the top-right corner of the script page. This capability makes private scripts ideal for testing features, collaborating with friends, and creating  [draft publications](https://www.tradingview.com/pine-script-docs/writing/publishing/#private-drafts)  before committing to public releases. To learn more about how private publications differ from public ones, see  [this article](https://www.tradingview.com/support/solutions/43000548335-how-do-private-ideas-and-scripts-differ-from-public-ones/)  in our Help Center.

NoticePrivate scripts are strictly for  **private use**. Our script moderators do not analyze privately published scripts as long as they  _remain_  private. As per our  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/)  and  [Vendor Requirements](https://www.tradingview.com/support/solutions/43000549951-vendor-requirements/), you cannot reference or link to private publications in any public TradingView content. Additionally, if you share links to private scripts in social networks or other public content, those scripts are  _not_  considered private.

## [Visibility  types](https://www.tradingview.com/pine-script-docs/writing/publishing/#visibility-types)

A script publication’s  _visibility type_  determines whether other users can see the source code, and whether anyone or only authorized individuals can use the script. The possible types are  [open-source](https://www.tradingview.com/pine-script-docs/writing/publishing/#open),  [protected](https://www.tradingview.com/pine-script-docs/writing/publishing/#protected), and  [invite-only](https://www.tradingview.com/pine-script-docs/writing/publishing/#invite-only). The “Visibility” options on the  _second page_  of the “Publish script” window specify a script’s visibility type:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Visibility-types-1.CtdHkYFb_Z1YTPEf.webp)

NoticeAs with the  [privacy type](https://www.tradingview.com/pine-script-docs/writing/publishing/#privacy-types), you  **cannot**  change a script’s visibility type after you publish it. Make sure you select the appropriate option while  [preparing](https://www.tradingview.com/pine-script-docs/writing/publishing/#preparing-a-publication)  your publication.

### [Open](https://www.tradingview.com/pine-script-docs/writing/publishing/#open)

A script published with the “Open” setting is  _open-source_, meaning anyone who views the publication or uses the script can access its Pine Script code. Most script publications on TradingView use this setting because it allows programmers to demonstrate their Pine knowledge and provide code for others to verify, learn from, modify, and build upon.

An open-source script’s page displays the source code in an expandable window above the comments. The window also includes the option to view the source code directly inside the Pine Editor in a separate tab:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Visibility-types-Open-1.C0tgTdYX_1V7jDt.webp)

When a user adds the script to their chart, they can also view the source code in the Pine Editor at any time by selecting the “Source code” option in the script’s status line:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Visibility-types-Open-2.CwLD-vSb_Z1gqBcd.webp)

Note that:

-   When a published script’s code is open inside the Pine Editor, it is  _read-only_. Users cannot edit the code without creating a  _working copy_, and any changes to that copied code do  **not**  affect the original published script.
-   All open-source scripts on TradingView use the  [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)  by default. Authors wanting to use alternative licenses can specify them in the source code.
-   All script publications that  _reuse_  code from another open-source script must meet the “Open-source reuse” criteria outlined in our  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/). These rules take precedence over any provisions from an open-source license.

TipOpen-source scripts are eligible for inclusion in our  [Editors’ picks](https://www.tradingview.com/scripts/editors-picks/)  section, which showcases exceptional publications from our growing community of script authors. The Editors’ picks are selected from  [public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public), open-source scripts that are original, provide potential value to users, include a helpful description, and comply with our  [House Rules](https://www.tradingview.com/house-rules/).

### [Protected](https://www.tradingview.com/pine-script-docs/writing/publishing/#protected)

A script published with the “Protected” setting has  _closed-source_  code, meaning the code is protected and not viewable to any user except the author. Although users cannot access the source code, they can add the script to their charts and use it freely. This visibility option is available only to script authors with paid  [plans](https://www.tradingview.com/pricing/).

Closed-source script publications are ideal for authors wanting to share their unique Pine Script creations with the community without exposing their distinct calculations and logic. They are  _not_  for sharing closed-source scripts that reproduce the behaviors of  [open-source](https://www.tradingview.com/pine-script-docs/writing/publishing/#open)  ones. As such, when an author publishes a closed-source script, the publication’s description should include information that helps users understand the script’s unique characteristics that require protecting the code. See our  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/)  to learn more.

### [Invite-only](https://www.tradingview.com/pine-script-docs/writing/publishing/#invite-only)

A script published with the “Invite-only” setting has closed-source code. No user except the author can view the code. Additionally, unlike a  [protected](https://www.tradingview.com/pine-script-docs/writing/publishing/#protected)  script, only users  _invited_  by the author can add the script to their charts and use it. This visibility option is available only to script authors with Premium and higher-tier  [plans](https://www.tradingview.com/pricing/).

Below the description on the invite-only script page, the author can see a  _“Manage access”_  button. This button opens a dialog box where the author specifies which users have access to the script:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Visibility-types-Invite-only-1.CKjJWSSz_Z27d1y8.webp)

Script authors typically use invite-only publications to provide interested users with unique scripts, often in exchange for payment. As such, invite-only script authors are considered  _vendors_. In addition to the  [House Rules](https://www.tradingview.com/house-rules/)  and  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/), which apply to  _all_  script authors, vendors must understand and follow our  [Vendor Requirements](https://www.tradingview.com/support/solutions/43000549951-vendor-requirements/).

Notice

[Public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public)  invite-only scripts are the  **only**  published scripts for which authors can require payment to access. Selling access to  [private](https://www.tradingview.com/pine-script-docs/writing/publishing/#private)  scripts is prohibited, and authors cannot charge users for access to  [open-source](https://www.tradingview.com/pine-script-docs/writing/publishing/#open)  or  [protected](https://www.tradingview.com/pine-script-docs/writing/publishing/#protected)  scripts because they are, by definition,  _free_  to use.

  

TradingView does not benefit from script sales. Transactions concerning invite-only scripts are strictly between  _users_  and  _vendors_; they do not involve TradingView.

## [Preparing a  publication](https://www.tradingview.com/pine-script-docs/writing/publishing/#preparing-a-publication)

At the start of the script publishing process, authors verify and refine their  [source code](https://www.tradingview.com/pine-script-docs/writing/publishing/#source-code)  to ensure correct functionality. Then, they prepare their  [chart visuals](https://www.tradingview.com/pine-script-docs/writing/publishing/#chart)  and, for strategies, the  [strategy report](https://www.tradingview.com/pine-script-docs/writing/publishing/#strategy-report), to showcase their script’s behaviors. After finalizing these details, authors select the “Publish…” button to open the “Publish script” window, where they set the  [title](https://www.tradingview.com/pine-script-docs/writing/publishing/#title-and-description), write a helpful  [description](https://www.tradingview.com/pine-script-docs/writing/publishing/#title-and-description), and then define the publication’s  [settings](https://www.tradingview.com/pine-script-docs/writing/publishing/#publication-settings).

The sections below provide a step-by-step overview of this preparation process and list practical recommendations for creating helpful, user-friendly publications based on our  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/)  and best practices.

### [Source  code](https://www.tradingview.com/pine-script-docs/writing/publishing/#source-code)

When an author publishes a script, the publication creates an independent copy of the source code, which becomes part of the publication’s  _version history_. If the published code contains incorrect or misleading calculations, produces unexpected behaviors, or uses excessive runtime resources, those issues are only fixable through  [script updates](https://www.tradingview.com/pine-script-docs/writing/publishing/#script-updates).

Therefore, regardless of a publication’s intended  [visibility type](https://www.tradingview.com/pine-script-docs/writing/publishing/#visibility-types), we recommend validating the source code  _before_  publishing it to confirm that the script is readable, usable, programmed correctly, and compliant.

When preparing source code to publish:

-   Ensure the code is original to you and provides a potentially helpful script for the community.
-   Use debugging techniques such as  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  to verify that the script works as intended, and to find and fix any issues in its calculations or logic.
-   Fix any higher-timeframe  [request.security()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.security)  calls that use a  _non-offset_  `expression`  argument and  [barmerge.lookahead_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.lookahead_on)  as the  `lookahead`  argument on historical bars. These calls are not suitable for script publications because they cause  _lookahead bias_. See the  [`lookahead`](https://www.tradingview.com/pine-script-docs/concepts/other-timeframes-and-data/#lookahead)  section of the  [Other timeframes and data](https://www.tradingview.com/pine-script-docs/concepts/other-timeframes-and-data/)  page for more information.
-   Use the  [Pine Profiler](https://www.tradingview.com/pine-script-docs/writing/profiling-and-optimization/#pine-profiler)  to analyze the script’s runtime performance. If the script contains unnecessary loops or other inefficient calculations, consider optimizing them to help ensure efficiency and usability.
-   Include  `minval`,  `maxval`, and  `options`  arguments in applicable  `input.*()`  calls to prevent users from supplying  _unintended_  [input](https://www.tradingview.com/pine-script-docs/concepts/inputs/)  values. It is also helpful to include  [runtime.error()](https://www.tradingview.com/pine-script-reference/v6/#fun_runtime.error)  calls for other unintended use cases.
-   Organize the source code, add helpful titles to inputs and plots, use readable names for identifiers, and include informative comments to make the code simpler to maintain and easier to understand. See the  [Style guide](https://www.tradingview.com/pine-script-docs/writing/style-guide/)  page for more information.
-   Document exported functions and types of  [libraries](https://www.tradingview.com/pine-script-docs/concepts/libraries/)  with  [compiler annotations](https://www.tradingview.com/pine-script-docs/language/script-structure/#compiler-annotations). Annotation text is visible when hovering over an imported library’s identifiers or by using parameter hints. Additionally, the  [description](https://www.tradingview.com/pine-script-docs/writing/publishing/#title-and-description)  field of the “Publish script” window automatically adds the text to exported code signatures.
-   Use a meaningful, searchable title relating to the script’s purpose as the  `title`  argument of the  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator),  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy), or  [library()](https://www.tradingview.com/pine-script-reference/v6/#fun_library)  declaration statement. The title field of the “Publish script” window uses this text by default.

### [Chart](https://www.tradingview.com/pine-script-docs/writing/publishing/#chart)

When an author publishes a script, the publication  _copies_  their current chart to showcase the visual outputs. If the author has drawings, images, or other scripts on their chart, the published chart also includes them. Therefore, before opening the “Publish script” window, confirm that the chart is clean and ready for publishing.

When preparing a chart for a script publication:

-   The script must be active on the chart. If the script is not running on the current chart, open its source code in the Pine Editor and select “Add to chart” in the top-right corner.
-   Ensure the chart contains only  _necessary_  visuals and is easy for users to understand. Remove any other scripts, drawings, or images unless using or demonstrating the script  _requires_  them. If the publication requires extra scripts or other visuals on the chart, explain their use in the  [description](https://www.tradingview.com/pine-script-docs/writing/publishing/#title-and-description).
-   The chart’s  _status line_  should show the current symbol and timeframe, and the script’s status line should show its name. These details help users understand what the displayed data represents. Enable the “Title/Titles” checkboxes in the “Status line” tab of the chart’s settings. If the text in the status lines is the same color as the chart’s background, change its color in the “Canvas” tab.
-   The symbol’s price series and the script’s visual outputs should be visible on the chart. If the script is on the chart but hidden, select the “Show” icon in its status line to make it visible. If the symbol’s price series is invisible, select the “Show” option in the “More” menu of the chart’s status line.
-   Show the script’s  _default_  behavior so that users know what to expect when they add it to their charts. If an instance of the script on the chart does not use the default settings, select “Reset settings” from the “Defaults” dropdown tab at the bottom of the script’s “Settings” menu.
-   Do not use a  _non-standard chart_  ([Heikin Ashi](https://www.tradingview.com/support/solutions/43000619436),  [Renko](https://www.tradingview.com/support/solutions/43000502284),  [Line Break](https://www.tradingview.com/support/solutions/43000502273),  [Kagi](https://www.tradingview.com/support/solutions/43000502272),  [Point & Figure](https://www.tradingview.com/support/solutions/43000502276), or  [Range](https://www.tradingview.com/support/solutions/43000474007)) if the script is a  [strategy](https://www.tradingview.com/pine-script-docs/concepts/strategies/), issues  [alerts](https://www.tradingview.com/pine-script-docs/concepts/alerts/), or displays trade signals of  _any kind_  in its outputs. The OHLC series on non-standard charts represent  _synthetic_  (calculated) prices,  **not**  real-world prices. Scripts that create alert conditions or simulate trades on these charts can  **mislead**  users and produce  **unrealistic**  results.

### [Strategy  report](https://www.tradingview.com/pine-script-docs/writing/publishing/#strategy-report)

[Strategies](https://www.tradingview.com/pine-script-docs/concepts/strategies/)  simulate trades based on programmed rules, displaying their hypothetical performance results and properties inside the  [Strategy Tester](https://www.tradingview.com/pine-script-docs/concepts/strategies/#strategy-tester). When an author publishes a strategy script, the script page uses the Strategy Tester’s information to populate its  _“Strategy report”_  display.

Because traders often use a strategy script’s performance information to determine the potential viability of a trading system, programmers must verify that their scripts have  _realistic_  properties and results. Before publishing a strategy script, check its information in the “Strategy Tester” tab to validate that everything appears as intended.

To maintain realism when publishing strategies, follow these guidelines based on our  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/):

-   In the  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  declaration statement, choose an  `initial_capital`  argument representing realistic starting capital for the average trader in the market. Do not use an excessive value to exaggerate hypothetical returns.
-   Specify  `commission_*`  and  `slippage`  arguments that approximate real-world commission and slippage amounts. We also recommend using  `margin_*`  arguments that reflect realistic  [margin/leverage](https://www.tradingview.com/support/solutions/43000717375/)  levels for the chart symbol’s exchange.
-   Set the strategy’s order placement logic to risk  _sustainable_  capital in the simulated trades. In most real-world settings, risking more than 10% of equity on a single trade is  _not_  typically considered sustainable.
-   Choose a dataset and default strategy configuration that produces a reasonable number of simulated trades, ideally  _100 or more_. A strategy report with significantly fewer trades, especially over a short duration, does not typically provide enough information to help traders gauge a strategy’s hypothetical performance.
-   Ensure the strategy uses the default  [properties](https://www.tradingview.com/support/solutions/43000628599-strategy-properties/)  set in the  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  declaration statement, and explain these defaults in the  [description](https://www.tradingview.com/pine-script-docs/writing/publishing/#title-and-description).
-   Resolve any warnings shown in the Strategy Tester before publishing the script.

### [Title and  description](https://www.tradingview.com/pine-script-docs/writing/publishing/#title-and-description)

After preparing the  [source code](https://www.tradingview.com/pine-script-docs/writing/publishing/#source-code),  [chart visuals](https://www.tradingview.com/pine-script-docs/writing/publishing/#chart), and  [strategy report](https://www.tradingview.com/pine-script-docs/writing/publishing/#strategy-report)  for a script publication, open the “Publish Script” window and draft a meaningful title and description to help users understand the script. First, confirm that the correct code is open in the Pine Editor, then select the “Publish…” button in the top-right corner.

The first page of the “Publish Script” window contains two text fields that  _cannot_  be empty:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Preparing-a-publication-Title-and-description-1.Ctto0oi1_1mSOeQ.webp)

The first field determines the publication’s  _title_, which appears at the top of the script widget and page. TradingView also uses the specified title to determine the publication’s  _URL_. By default, this field proposes the text from the  `title`  argument of the script’s declaration statement. It is typically best to use that title. However, some authors prefer to use different or modified titles.

When defining the title of a script publication:

-   Use text that hints at the script’s purpose or functionality. A meaningful title helps users understand and search for the publication.
-   Use English text only. If the script is  [public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public), it is available to the  _global_  TradingView community. To help ensure the script is understandable, English is required by our  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/)  because it is the most common language used for international communication.
-   Include only standard 7-bit ASCII characters to ensure readability and searchability. Do not include emoji or other special characters in this text.
-   Avoid using all capital letters in the text, except for abbreviations such as “RSI”, “EMA”, etc. Text with whole words written in ALL CAPS is distracting for users.
-   Do not include misleading or unsubstantiated statements about the script (e.g., “90% win rate”).
-   Do not include website references, social media handles, or other forms of advertisement.

The second text field determines the publication’s  _description_. The toolbar at the top contains several options that insert  _markup tags_  into the field for adding text formats, Pine code blocks, lists, and more. The script page displays the complete, parsed text from this field below the published chart or strategy report:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Preparing-a-publication-Title-and-description-2.BFSUZFJ4_Z1Ya3IY.webp)

Most of the markup for publication descriptions requires surrounding raw text with an  _opening tag_  (e.g.,  `[b]`) and a matching  _closing tag_  with a forward slash (e.g.,  `[/b]`). Some tags also require additional syntax. Here, we list the available tags and explain how they work:

-   The  `[b][/b]`,  `[i][/i]`, and  `[s][/s]`  tag pairs respectively apply  **bold**,  _italic_, and  strikethrough  formatting to the enclosed text.
-   The  `[pine][/pine]`  tags format the enclosed multi-line text as a Pine code block with syntax highlighting on a new line.
-   The  `[list][/list]`  tags create a bulleted list. Each line between these tags that starts with the special  `[*]`  tag defines a separate bullet. To create a  _numbered_  list, use  `[list=1]`  as the  _opening tag_.
-   The  `[quote][/quote]`  tags format the enclosed multi-line text as a  _block quotation_.
-   The  `[url=][/url]`  tags create a hyperlink to a specified URL. For example,  `[url=https://www.tradingview.com/]myLink[/url]`  formats the text “myLink” as a link to TradingView’s home page. Use these tags to create links to relevant TradingView pages and standard reference materials. Avoid linking to social media or other websites, as our  [House Rules](https://www.tradingview.com/house-rules/)  forbid advertising in publications.
-   The  `[image][/image]`  tags render a  _chart image_  from an enclosed  _URL_  for either a  [snapshot](https://www.tradingview.com/support/solutions/43000482537-how-do-i-take-a-snapshot-and-share-it-afterwards/)  or an idea publication. These tags are  _optional_, as publications can render images from snapshot and idea URLs automatically. Before taking a snapshot,  [prepare the chart](https://www.tradingview.com/pine-script-docs/writing/publishing/#chart)  for readability, as you would for a publication’s chart.
-   The  `$`  character adds a hyperlink to a specific symbol’s  _overview page_  when it precedes a valid  _symbol_  or  _ticker identifier_. For example,  `$AMEX:SPY`  creates a link to the  [SPY symbol overview](https://www.tradingview.com/symbols/AMEX-SPY/).

Writing a helpful description is a  **critical step**  in the script publishing process, as users rely on the provided information to understand a published script. Below, we list a few helpful recommendations for preparing descriptions based on some of the key criteria outlined in our  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/):

-   Include relevant, self-contained details that help users understand the script’s purpose, how it works, how to use it, and why it is original, regardless of the intended  [visibility type](https://www.tradingview.com/pine-script-docs/writing/publishing/#visibility-types). Even if the publication is  [open-source](https://www.tradingview.com/pine-script-docs/writing/publishing/#open), the description should cover this information because not all users understand a script by reading its Pine Script code. Furthermore, an informative description helps users verify that the script works as intended.
-   If the publication is closed-source ([protected](https://www.tradingview.com/pine-script-docs/writing/publishing/#protected)  or  [invite-only](https://www.tradingview.com/pine-script-docs/writing/publishing/#invite-only)), include accurate details about the script’s  _unique qualities_  that require hiding the source code. Closed-source scripts that match the behaviors of open-source scripts  _do not_  benefit our community.
-   Do not make unsubstantiated statements about the script’s capabilities or performance. If the text contains claims about the script, it should include details substantiating them to avoid misleading traders.
-   If the text contains emoji or other non-ASCII characters, ensure it uses them  _sparingly_  to maintain readability. Likewise, avoid using all capital letters throughout the text because it reduces readability.
-   The description  _can_  include languages other than English. However, the text should  _begin_  with an English explanation to help users in  _different regions_  understand the publication. Additionally, if the source code does not use English for input titles or other user interface text, the description should contain English translations of those elements.

### [Publication  settings](https://www.tradingview.com/pine-script-docs/writing/publishing/#publication-settings)

The  _second_  page of the “Publish script” window is where authors specify a script publication’s settings and search tags. This page is accessible only after adding a  [title and description](https://www.tradingview.com/pine-script-docs/writing/publishing/#title-and-description)  for the script on the previous page and selecting the “Continue” button:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Preparing-a-publication-Publication-settings-1.CBK9Pq2e_1Ngf8B.webp)

The two fields at the top of the page specify the script’s  [privacy](https://www.tradingview.com/pine-script-docs/writing/publishing/#privacy-types)  and  [visibility](https://www.tradingview.com/pine-script-docs/writing/publishing/#visibility-types)  types. Ensure both fields use the correct options, as these settings  **cannot**  change after the script is published.

TipEven if you intend to share your script publicly, we recommend publishing a  [private](https://www.tradingview.com/pine-script-docs/writing/publishing/#private)  version first. You can use the private publication as a  _draft_  of the release to ensure the content is correct, then create a new  [public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public)  version with the verified description. See the section on  [private drafts](https://www.tradingview.com/pine-script-docs/writing/publishing/#private-drafts)  below to learn more.

Note that setting the publication’s visibility type to  [invite-only](https://www.tradingview.com/pine-script-docs/writing/publishing/#invite-only)  reveals an additional  _“Author’s instructions”_  field, which cannot remain empty. This field is where vendors provide necessary information for users to  _request access_  to their script, such as direct contact details and links to instructional pages. The contents of this field will appear below the description on the invite-only script page:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Preparing-a-publication-Publication-settings-2.BIum0zP5_2j0vvi.webp)

The remaining input fields on this page provide options to assign  _tags_  (keywords) to the publication for discoverability. The “Category” field contains a menu where the author can select up to  _three_  preset category tags for the publication. If the script is  [public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public), users can search the specified categories to discover it:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Preparing-a-publication-Publication-settings-3.BWQCYFg3_TjS3V.webp)

The publication can also include  _custom_, non-preset search tags for additional discoverability. To add custom tags to the publication, select the “Show more” option, then enter a list of searchable keywords in the “Tags” field:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Preparing-a-publication-Publication-settings-4.CJgiGbDf_Z2gQuPX.webp)

## [Publishing and  editing](https://www.tradingview.com/pine-script-docs/writing/publishing/#publishing-and-editing)

After following all necessary steps to  [prepare](https://www.tradingview.com/pine-script-docs/writing/publishing/#preparing-a-publication)  a script publication, including fine-tuning the source code, cleaning the chart, and adding a helpful  [title and description](https://www.tradingview.com/pine-script-docs/writing/publishing/#title-and-description), select the “Publish…” button at the bottom of the last page of the “Publish script” window to publish the script.

If the publication’s  [privacy type](https://www.tradingview.com/pine-script-docs/writing/publishing/#privacy-types)  is set to  [public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public), there is a checkbox above the “Publish…” button, which the author must select before they can create the publication. This checkbox confirms awareness of the  [House Rules](https://www.tradingview.com/house-rules/)  and the consequence of the script becoming  _hidden_  from the community if it does not follow them:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Publishing-and-editing-1.DcohMtNY_2oKd8i.webp)

When the script is published, the “Publish script” window closes automatically, and TradingView opens the new publication’s script page. The page includes “Edit” and “Delete” buttons in the top-right corner. If the script is public, these buttons are available for only  _15 minutes_. If private, they are  _always_  available.

Selecting the “Edit” button opens the “Edit script” window, where the author can change the title, description, and search tags:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Publishing-and-editing-2.DdXiOIMi_19iWEp.webp)

Note that:

-   The “Privacy settings” and “Visibility” fields on the second page of this window are  **not**  editable.
-   The “Edit script” window does  **not**  provide options to edit the published source code, chart, or strategy report. To change these details, publish a  [script update](https://www.tradingview.com/pine-script-docs/writing/publishing/#script-updates).

## [Script  updates](https://www.tradingview.com/pine-script-docs/writing/publishing/#script-updates)

Authors can  _update_  their  [public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public)  or  [private](https://www.tradingview.com/pine-script-docs/writing/publishing/#private)  scripts over time to add new features, fix bugs, optimize performance, etc. To publish an update to an existing script, confirm that the new source code differs from the code in the last published version. Then, add the updated script to the chart and select the “Publish…” option in the top-right of the Pine Editor to open the “Publish script” window.

After opening the window, select the “Update existing script” option at the top of the first page:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Script-updates-1.Dj2wF476_Z29Ahn9.webp)

In this publishing mode, the first text field specifies the  _existing_  script to update,  **not**  the title of a new publication. Enter the existing publication’s title in the field or select the title from the available options in the dropdown menu:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Script-updates-2.BD7A4eH9_Z1qAoUS.webp)

Below the title field is a checkbox specifying whether the update will affect the publication’s chart. If unchecked (default), the script page will copy the author’s  _current chart_  to showcase the changes. If checked, the publication will continue using its  _existing_  chart display:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Script-updates-3.Dbp2E4kN_21Iw12.webp)

NoticeIf you plan to update the publication’s chart,  [prepare the chart](https://www.tradingview.com/pine-script-docs/writing/publishing/#chart)  before opening the “Publish script” window, just as you would with a new publication.

The text field below the checkbox is where the author explains the  _changes_  made to the script. The publication will display the parsed text from this field beneath the description as dated  _release notes_  on the script page. The contents of this field  **do not**  modify the publication’s original description and are displayed  _in addition_  to it:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Script-updates-4.C4AWjLxS_Z1Oq2Ej.webp)

When publishing release notes, prepare them similarly to the  [description](https://www.tradingview.com/pine-script-docs/writing/publishing/#title-and-description). Provide self-contained information allowing users to understand the changes included in the update, how they impact the script’s functionality, and what benefits the changes provide over the previous version.

NoticeAfter you publish a script update, the release notes are finalized  _immediately_  and  **cannot**  be changed. Therefore, we recommend using  [private drafts](https://www.tradingview.com/pine-script-docs/writing/publishing/#private-drafts)  to validate script updates before committing to  [public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public)  releases.

The bottom of the page contains an expandable  _difference checker_, which displays a side-by-side or inline comparison between the new source code and the last published version. We recommend inspecting and confirming the code differences  _before_  publishing an update, because all updates are preserved in the script’s  _version history_:

![image](https://www.tradingview.com/pine-script-docs/_astro/Publishing-scripts-Script-updates-5.0LHpw9wR_7PUkf.webp)

After confirming the details on the first page of the “Publish script” window, select “Continue” to move to the final page, then select the “Publish new version” button at the bottom to finalize the script update.

Note that:

-   The “Privacy settings” and “Visibility” fields appear grayed out on the last page of the window for script updates because authors  **cannot**  change these settings for existing script publications.

## [Tips](https://www.tradingview.com/pine-script-docs/writing/publishing/#tips)

Use the following tips and our recommendations in the  [Preparing a publication](https://www.tradingview.com/pine-script-docs/writing/publishing/#preparing-a-publication)  section above to create helpful, compliant script publications.

### [Private  drafts](https://www.tradingview.com/pine-script-docs/writing/publishing/#private-drafts)

New script authors occasionally overlook the importance of reviewing their content before sharing it publicly, leading to unintentional errors in their published script descriptions, such as typos, incorrect statements, or House Rule violations.

The title and description of a  [public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public)  script are editable for only 15 minutes. After that time, the content becomes  **final**. If the published text contains mistakes, the author  **cannot**  [edit](https://www.tradingview.com/pine-script-docs/writing/publishing/#publishing-and-editing)  or  [update](https://www.tradingview.com/pine-script-docs/writing/publishing/#script-updates)  the publication to fix them.

In contrast,  [private](https://www.tradingview.com/pine-script-docs/writing/publishing/#private)  scripts are always editable, making them valuable tools for  _drafting_  public script releases. Private drafts help authors avoid uncaught mistakes in their public versions and ensure quality for script users. Therefore, we strongly recommend starting  _every_  script publication with a private draft.

When using private publications as drafts for public releases, follow this simple process:

1.  [Prepare](https://www.tradingview.com/pine-script-docs/writing/publishing/#preparing-a-publication)  the draft publication’s content as you would for a public script, but set the “Privacy settings” field to “Private” on the last page of the “Publish script” window.
2.  Check the private draft’s script widget and script page to verify whether the publication’s content appears as intended. If there are mistakes in the draft’s source code, chart, or strategy report, fix them by publishing an  [update](https://www.tradingview.com/pine-script-docs/writing/publishing/#script-updates). To fix errors in the draft’s title or description, select the “Edit” option on the script page and add the corrected text to the appropriate field.
3.  After validating the draft, open the “Edit script” window and copy the raw text from the description field.
4.  Prepare a new, public script publication using the updated source code and verified description text.
5.  After publishing the public version, you can delete the private draft using the “Delete” option at the top-right of its script page.

### [House  Rules](https://www.tradingview.com/pine-script-docs/writing/publishing/#house-rules)

Many traders use  [public](https://www.tradingview.com/pine-script-docs/writing/publishing/#public)  scripts in their analysis to reinforce trade decisions. Likewise, many programmers learn from public scripts and use published  [libraries](https://www.tradingview.com/pine-script-docs/concepts/libraries/)  in their Pine projects. New and experienced users alike should be able to rely on the script publications from our community for helpful content and original, potentially beneficial tools.

Our  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/)  establish the core criteria for publishing scripts on TradingView, and our  [Vendor Requirements](https://www.tradingview.com/support/solutions/43000549951-vendor-requirements/)  define additional criteria for  [vendors](https://www.tradingview.com/pine-script-docs/writing/publishing/#invite-only). The script moderators curate the  [Community scripts](https://www.tradingview.com/scripts/)  based on these rules and our  [House Rules](https://www.tradingview.com/house-rules/). If a publication does not meet these criteria, it becomes  _hidden_, and our moderators send the author a message explaining the issues that need correction. The author can then  [prepare](https://www.tradingview.com/pine-script-docs/writing/publishing/#preparing-a-publication)  a  _new publication_  with the necessary corrections if they want to share their script publicly.

We recommend all authors review and understand our rules and verify a script publication’s compliance  _before_  publishing it. Below, we list a few simple tips:

**Publish original content**

Publish a script publicly if you believe it is original and might benefit the community. Avoid rehashing, mimicking, or copying existing scripts or other public domain code. Likewise, avoid publishing scripts that combine available indicators or other code without a clear purpose. In other words, aim to provide a helpful tool for the community based on  _your_  unique interests and expertise.

**Reuse code responsibly**

Authors can publish scripts that reuse open-source code from other publications. However, they must meet the “Open-source reuse” criteria in our  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/), which take precedence over all open-source licenses. These criteria include crediting the original author, making meaningful improvements to the code, and sharing the code  [open-source](https://www.tradingview.com/pine-script-docs/writing/publishing/#open)  unless the original author grants  _explicit permission_  to publish it closed-source.

**Use a clear chart**

A script publication’s chart showcases the script’s visual outputs to help users understand how it works. This display is not for demonstrating complex charting setups with multiple scripts or drawing tools. If the chart of a published script contains unnecessary scripts or drawings, it will not add clarity for users, and it can potentially mislead them.

Therefore, when publishing a public script, ensure the chart only includes what is  _necessary_  to demonstrate its outputs and behaviors. See the “Chart” section of our  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/)  to understand our chart criteria, and  [this portion](https://www.tradingview.com/pine-script-docs/writing/publishing/#chart)  of the  [Preparing a publication](https://www.tradingview.com/pine-script-docs/writing/publishing/#preparing-a-publication)  section above for detailed recommendations.

**Provide helpful documentation**

Similar to how users rely on our documentation to understand Pine, users rely on the documentation in an author’s publications to understand their scripts. When a script publication does not include a helpful description that explains the script’s workings and how to use it, users often struggle to understand and use it effectively. Therefore, when sharing a script publicly, include a clear description explaining everything users need to know about it and its use.

See the “Description” and “Language” sections of our  [Script Publishing Rules](https://www.tradingview.com/support/solutions/43000590599-script-publishing-rules/)  to understand the criteria for helpful script descriptions. The  [Title and description](https://www.tradingview.com/pine-script-docs/writing/publishing/#title-and-description)  section above provides detailed recommendations based on these criteria.

For examples of compliant script descriptions, refer to the publications featured in our  [Editors’ picks](https://www.tradingview.com/scripts/editors-picks/). To see examples of our recommended description format, refer to the publications from the  [TradingView](https://www.tradingview.com/u/TradingView/#published-scripts)  and  [PineCoders](https://www.tradingview.com/u/PineCoders/#published-scripts)  accounts.
