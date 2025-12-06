
# [Debugging](https://www.tradingview.com/pine-script-docs/writing/debugging/#debugging)

## [Introduction](https://www.tradingview.com/pine-script-docs/writing/debugging/#introduction)

TradingView’s close integration between the Pine Editor and the Supercharts interface enables efficient, interactive debugging of Pine Script® code. Pine scripts can create dynamic outputs in multiple locations, on and off the chart. Programmers can use these outputs to validate their scripts’ behaviors and ensure everything works as expected.

Understanding the most effective tools and methods for inspecting a script helps programmers quickly find and fix potential problems in their code, which improves the overall coding experience. This page explains the script outputs that are the most useful for debugging, along with helpful tips and techniques.

TipEffective debugging in the Pine Script environment requires an understanding of the  [Execution model](https://www.tradingview.com/pine-script-docs/language/execution-model/),  [Time series](https://www.tradingview.com/pine-script-docs/language/execution-model/#time-series)  structure, and  [Type system](https://www.tradingview.com/pine-script-docs/language/type-system/). We recommend reviewing these topics, along with  [string formatting](https://www.tradingview.com/pine-script-docs/concepts/strings/#string-conversion-and-formatting), which the following techniques often use.

## [Common debug  outputs](https://www.tradingview.com/pine-script-docs/writing/debugging/#common-debug-outputs)

Pine scripts can create outputs in several ways, each of which has different advantages. While programmers can use any of them to debug their code, some outputs are more optimal for debugging than others.

The functions in the  `log.*`  namespace log  _interactive messages_  in the  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  pane. These logging functions are the most convenient and flexible tools for debugging Pine code. Scripts can call  `log.*()`  functions on any execution from global or local scopes, enabling programmers to analyze historical and realtime script behaviors in depth with minimal code, for example:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Common-debug-outputs-1.BHcS65Yd_1uSzSw.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Common debug outputs - Pine Logs")  
  
//@variable The natural logarithm of the current `high - low` range.  
float  logRange  =  math.log(high  -  low)  
  
// Plot the `logRange`.  
plot(logRange,  "logRange")  
  
if  barstate.isconfirmed  
// Generate an "error" or "info" message on the confirmed bar, depending on whether `logRange` is defined.  
switch  
na(logRange) =>  log.error("Undefined `logRange` value.")  
=>  log.info("`logRange` value: "  +  str.tostring(logRange))  
else  
// Generate a "warning" message for unconfirmed values.  
log.warning("Unconfirmed `logRange` value: "  +  str.tostring(logRange))  
``

Pine  [drawings](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-drawings)  display visuals in the main chart pane or the script’s separate pane. Although they do not output results in other locations, such as the Data Window or Pine Logs pane, drawings provide convenient ways to visualize a script’s data and logic within global or local scopes.  [Labels](https://www.tradingview.com/pine-script-docs/visuals/text-and-shapes/#labels)  are the most flexible drawings for debugging, because they can display colored shapes with formatted text and tooltips at any available chart location, for example:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Common-debug-outputs-2.CKqA9BHP_Z1uVzW9.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Common debug outputs - Pine drawings",  overlay  =  true)  
  
//@variable Is `true` when a new bar opens on the "1D" timeframe.  
bool  newDailyBar  =  timeframe.change("1D")  
//@variable The previous bar's `bar_index` from when `newDailyBar` last occurred.  
int  closedIndex  =  ta.valuewhen(newDailyBar,  bar_index  -  1,  0)  
//@variable The previous bar's `close` from when `newDailyBar` last occurred.  
float  closedPrice  =  ta.valuewhen(newDailyBar,  close[1],  0)  
  
if  newDailyBar  
// Draw a line from the previous `closedIndex` and `closedPrice` to the current values.  
line.new(closedIndex[1],  closedPrice[1],  closedIndex,  closedPrice,  width  =  2)  
//@variable A string containing debug information to display in a label.  
string  debugText  =  "'1D' bar closed at: \n("  +  str.tostring(closedIndex) +  ", "  +  str.tostring(closedPrice) +  ")"  
//@variable Draws a label at the current `closedIndex` and `closedPrice`.  
label  debugLabel  =  label.new(closedIndex,  closedPrice,  debugText,  color  =  color.purple,  textcolor  =  color.white)  
``

The  `plot*()`  functions can help to debug numeric values, conditions, and colors from a script’s global scope. They can output results in up to  _four_  locations: the main chart pane or the script’s pane, the status line, the price scale, and the Data Window. The display on the chart provides a quick view of the series’ history, and the numbers in the other output locations show calculated information for specific bars:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Common-debug-outputs-3.CzcytxBb_Z2bBFEK.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Common debug outputs - Plots")  
  
// Plot the `bar_index` in all available locations.  
plot(bar_index,  "bar_index",  color.teal,  3)  
``

The  [bgcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_bgcolor)  function displays colors in the background of the main chart pane or the script’s pane. The  [barcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_barcolor)  function colors the main chart’s bars or candles. Although these outputs are less flexible than Pine Logs, drawings, and plots, they provide a quick way to inspect calculated colors and visualize conditions from the global scope:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Common-debug-outputs-4.B7ERq33__1pA6gm.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Common debug outputs - Background and bar colors")  
  
//@variable Is `true` if the `close` is rising over 2 bars.  
bool  risingPrice  =  ta.rising(close,  2)  
  
// Highlight the chart background and color the main chart bars based on `risingPrice`.  
bgcolor(risingPrice  ?  color.new(color.green,  70) :  na,  title=  "`risingPrice` highlight")  
barcolor(risingPrice  ?  color.aqua  :  chart.bg_color,  title  =  "`risingPrice` bar color")  
``

Programmers can use any of these outputs individually or in combination to debug their scripts, depending on the data types and structures that require inspection. See the sections below for detailed information about these outputs and various debugging techniques.

## [Pine  Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)

_Pine Logs_  are interactive, user-defined messages that scripts can create from within global or local scopes at  _any point_  during code executions on the chart’s dataset or requested datasets. They provide a simple, powerful way for programmers to inspect a script’s calculations, logic, and execution flow with human-readable text. Using Pine Logs is the primary, most universal technique for debugging Pine Script code.

Pine Logs do not appear on the chart or in the Data Window. Instead, scripts print logged messages with prefixed date and time information in the dedicated  _Pine Logs pane_. The  [inspection](https://www.tradingview.com/pine-script-docs/writing/debugging/#inspecting-logs)  and  [filtering](https://www.tradingview.com/pine-script-docs/writing/debugging/#filtering-logs)  options in the Pine Logs pane help users analyze and navigate logs efficiently.

To access the pane, select “Pine Logs” from the Pine Editor’s “More” menu or from the “More” menu in the status line of a script on the chart that uses the  `log.*()`  functions:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-1.BKWDgKSp_1nRFYd.webp)

NoticeOnly  _personal_  scripts can generate Pine Logs. A published script  **cannot**  create logs, even if its source code contains  `log.*()`  function calls. Published  [libraries](https://www.tradingview.com/pine-script-docs/concepts/libraries/)  can export functions containing  `log.*()`  calls for use in personal scripts, but they cannot generate logs directly.

### [Creating  logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#creating-logs)

Scripts create Pine Logs by calling the functions in the  `log.*`  namespace:  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info),  [log.warning()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.warning), or  [log.error()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.error). All these logging functions have the following two signatures:

```

```

Where:

-   The first overload prints the specified “string”  `message`  in the Pine Logs pane.
-   The second overload creates a  [formatted string](https://www.tradingview.com/pine-script-docs/concepts/strings/#formatting-strings)  based on its  `formatString`  and additional arguments, similar to  [str.format()](https://www.tradingview.com/pine-script-reference/v6/#fun_str.format), then displays the resulting text inside the pane.

Each  `log.*()`  function has a different  _logging level_, allowing programmers to  _categorize_  the messages shown in the Pine Logs pane:

-   The  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  function creates a message with the “info” level (gray text).
-   The  [log.warning()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.warning)  function creates a message with the “warning” level (orange text).
-   The  [log.error()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.error)  function creates a message with the “error” level (red text).

This simple script demonstrates the difference between all three  `log.*()`  functions. It calls  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info),  [log.warning()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.warning), and  [log.error()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.error)  on the first chart bar to print the values of three  [literal strings](https://www.tradingview.com/pine-script-docs/concepts/strings/#literal-strings)  in the Pine Logs pane:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Creating-logs-1.FAyoXrvo_Z1E0n8e.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

`//@version=6  
indicator("Logging levels demo",  overlay  =  true)  
  
// Display logs with all three logging levels in the Pine Logs pane on the first bar.  
if  barstate.isfirst  
log.info("This is an 'info' message.")  
log.warning("This is a 'warning' message.")  
log.error("This is an 'error' message.")  
`

Note that:

-   The Pine Logs pane can  _filter_  messages by their logging level using the menu accessible from the rightmost icon above the logs. See the  [Filtering logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#filtering-logs)  section to learn more.

Scripts can generate logs at  _any point_  during their executions, allowing programmers to track information from historical bars, and monitor script behaviors on open realtime bars.

During historical executions, scripts log a new message  _once_  for each  `log.*()`  call on any bar. During realtime executions, scripts can call the  `log.*()`  functions to log messages for  _any available tick_, regardless of whether the bar is confirmed. The logs created on realtime ticks are  _not_  subject to  [rollback](https://www.tradingview.com/pine-script-docs/language/execution-model/#executions-on-realtime-bars). All logs remain available in the Pine Logs pane until the script restarts.

The example script below calculates the average ratio of each bar’s  `close - open`  value to its  `high - low`  range. When the range is nonzero, the script prints the values of the calculation’s variables in the Pine Logs pane using  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  if the bar is confirmed or  [log.warning()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.warning)  if the bar is still open (_unconfirmed_). If the bar’s range is zero, making the calculated ratio  _undefined_, the script logs an “error” message using  [log.error()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.error):

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Creating-logs-2.BvPUb-vU_Z2iPvlc.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Historical and realtime logs demo",  "Average bar ratio")  
  
//@variable The current bar's change from the `open` to `close`.  
float  numerator  =  close  -  open  
//@variable The current bar's `low` to `high` range.  
float  denominator  =  high  -  low  
//@variable The ratio of the bar's open-to-close change to its full range.  
float  ratio  =  numerator  /  denominator  
//@variable The average `ratio` over 10 *non-na* values.  
float  average  =  ta.sma(ratio,  10)  
  
// Plot the `average`.  
plot(average,  "average",  color.purple,  3)  
  
if  barstate.isconfirmed  
switch  denominator  
// Log an "error" message when the `denominator` is 0.  
0.0  =>  log.error("Division by 0 on confirmed bar!\nBar excluded from the average.")  
// Otherwise, log an "info" message containing a formatted representation of the variables' confirmed values.  
=>  log.info(  
"Values (Confirmed):  
\nnumerator: {0,number,#.########}  
\ndenominator: {1,number,#.########}  
\nratio: {2,number,#.########}  
\naverage: {3,number,#.########}",  
numerator,  denominator,  ratio,  average  
)  
else  
switch  denominator  
// Log an "error" message for the unconfirmed bar when the `denominator` is 0.  
0.0  =>  log.error("Division by 0 on unconfirmed bar!")  
// Otherwise, log a "warning" message containing a formatted representation of the unconfirmed values.  
=>  log.warning(  
"Values (unconfirmed):  
\nnumerator: {0,number,#.########}  
\ndenominator: {1,number,#.########}  
\nratio: {2,number,#.########}  
\naverage: {3,number,#.########}",  
numerator,  denominator,  ratio,  average  
)  
``

Note that:

-   Programmers can use  [barstate.isconfirmed](https://www.tradingview.com/pine-script-reference/v6/#var_barstate.isconfirmed)  in the conditions that trigger  `log.*()`  calls to allow logs for any realtime bar only once, on its  _closing tick_, as shown in the example code.
-   Users can pause realtime logs by selecting the “Disable logging” button at the top of the Pine Logs pane.
-   Allowing logging on any tick of an open bar can result in a large number of logged messages over time. Therefore, we recommend including unique information in the messages or using different logging levels for easy  _filtering_  from the Pine Logs pane.
-   The Pine Logs pane can display the most recent 10,000 logs for historical bars. If a programmer needs to view earlier logs, they can add logic in the code to filter specific  `log.*()`  calls. See the  [Custom code filters](https://www.tradingview.com/pine-script-docs/writing/debugging/#custom-code-filters)  section for an example.

The following sections use the example script above to demonstrate the Pine Logs pane’s log  [inspection](https://www.tradingview.com/pine-script-docs/writing/debugging/#inspecting-logs)  and  [filtering](https://www.tradingview.com/pine-script-docs/writing/debugging/#filtering-logs)  features.

## [Inspecting  logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#inspecting-logs)

When a script generates a log by calling any  `log.*()`  function call, the Pine Logs pane automatically prefixes the logged message with an  [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations)  _timestamp_  representing the log’s assigned time, expressed in the  [chart’s time zone](https://www.tradingview.com/pine-script-docs/concepts/time/#time-zones). The timestamp prefixed to a log on a historical bar represents the bar’s  _opening time_, whereas the timestamp for a realtime log represents the  _system time_  of the log event:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Inspecting-logs-1.8xpvIK8H_ZRFiym.webp)

Additionally, each log includes “Source code” and “Scroll to bar” options, which appear when hovering over the message in the Pine Logs pane. These features provide convenient ways for users to inspect and verify a log’s conditions:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Inspecting-logs-2.jaYYYDxx_Z15QxA8.webp)

The “Source code” option opens the script in the Pine Editor and highlights the code line containing the specific  `log.*()`  call that triggered the log event:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Inspecting-logs-3.Dxr9Y90y_Zxn0Xn.webp)

The “Scroll to bar” option navigates the chart to the bar where the  `log.*()`  call occurred, then displays a temporary label above the bar, containing its date and time information:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Inspecting-logs-4.CnvC925K_Z1zJvwq.webp)

Note that:

-   The label’s time information depends on the chart’s timeframe. For example, the label on a “1D” chart contains only the weekday and date, whereas the label on an intraday chart also includes the time of day.

It’s important to note that every script on the chart that generates logs maintains an  _independent_  log history. The Pine Logs pane shows logs for only  _one_  script at a time. To inspect the logs from a specific script when multiple are on the chart, select its title from the dropdown menu at the top of the pane:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Inspecting-logs-5.ClRTwv_F_wt4Ks.webp)

## [Filtering  logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#filtering-logs)

The Pine Logs pane displays up to 10,000 logged messages from script executions on historical bars. It then appends a new log for each  `log.*()`  call executed on  _any_  realtime tick.

To help users navigate high volumes of logs efficiently, the pane includes  _filters_  that isolate logs based on  [logging level](https://www.tradingview.com/pine-script-docs/writing/debugging/#logging-level),  [start date and time](https://www.tradingview.com/pine-script-docs/writing/debugging/#start-date), or  [search queries](https://www.tradingview.com/pine-script-docs/writing/debugging/#character-and-pattern-search). Users can apply these log filters individually or in combination to show only the messages that meet specific criteria. The filters are accessible from the icons below the “x” in the top-right portion of the pane:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Filtering-logs-1.Qt-I6kcm_czrNs.webp)

For custom filtering options, programmers can use conditional logic to activate specific  `log.*()`  calls selectively across a script’s executions. See the  [Custom code filters](https://www.tradingview.com/pine-script-docs/writing/debugging/#custom-code-filters)  section below to learn more.

### [Logging  level](https://www.tradingview.com/pine-script-docs/writing/debugging/#logging-level)

Selecting the rightmost icon above the messages in the Pine Logs pane opens a “Filter levels” dropdown menu containing checkboxes for each logging level (“Info”, “Warning”, and “Error”). To remove logs with a specific logging level from the displayed results, uncheck the level from this menu.

In the example below, we deactivated the “info” and “warning” levels for our script’s logs, allowing only “error” messages in the Pine Logs pane:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Filtering-logs-Logging-level-1.CqbnhwLx_1LsDVq.webp)

Note that:

-   Deactivating logging levels in this menu hides the relevant messages but  _does not_  stop the execution of those  `log.*()`  calls in the code. For instance, a  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  call still executes and adds to the historical log count even when the “Info” option is unchecked.

### [Start  date](https://www.tradingview.com/pine-script-docs/writing/debugging/#start-date)

The “Start date” option above the logs in the Pine Logs pane opens a dialog box where users can specify a starting date and time to filter the displayed messages:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Filtering-logs-Start-date-1.IZNVl8zX_1IJI6K.webp)

After the user sets the filter in the dialog box, a tag showing the selected date and time appears above the logs, indicating it is active. With this filter, only logs with prefixed timestamps from the specified start point onward appear in the Pine Logs pane:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Filtering-logs-Start-date-2.BDbP45dS_Z2gRUox.webp)

### [Character and pattern  search](https://www.tradingview.com/pine-script-docs/writing/debugging/#character-and-pattern-search)

The “Search” option above the logs in the Pine Logs pane opens a search bar where users can  _match_  logs containing specific character sequences or patterns, similar to the Pine Editor’s “Find/Replace” tool for matching code.

When the search bar is not empty, the pane shows only the messages that fully or partially match the text or pattern, with the matched portion of each message highlighted in blue for visual reference.

Below, we searched “Confirmed” to identify all logs from our example script that contain the term anywhere in their text:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Filtering-logs-Character-and-pattern-search-1.D-1crEOA_3Qle8.webp)

Note that:

-   The filtered results include logs containing “confirmed” with a lowercase “c” because the search filter performs  _case-insensitive_  matching on ASCII characters by default.
-   The results also include logs containing “unconfirmed” because the default filter behavior does not exclusively match  _whole-word_  terms.

The rightmost icon in the search bar opens a dropdown menu containing three options to adjust the search filter’s behavior:  [Match case](https://www.tradingview.com/pine-script-docs/writing/debugging/#match-case),  [Whole word](https://www.tradingview.com/pine-script-docs/writing/debugging/#whole-word), and  [Regex](https://www.tradingview.com/pine-script-docs/writing/debugging/#regex):

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Filtering-logs-Character-and-pattern-search-2.CGclA-al_Z1shTsN.webp)

#### [Match  case](https://www.tradingview.com/pine-script-docs/writing/debugging/#match-case)

The “Match case” search option activates  _case-sensitive_  matching. With this setting, the filter’s results include only the logs containing the search query with identical cases for ASCII letter characters.

Here, we enabled the “Match case” setting for our “Confirmed” search, preventing all the script’s logs containing “confirmed” with a  _lowercase_  “c” from appearing in the results:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Filtering-logs-Character-and-pattern-search-Match-case-1.BprO1bQS_ZS51dB.webp)

Note that:

-   The “Match case” setting  _does not_  affect the search behavior for Unicode letter characters outside the ASCII range (U+0000 - U+007F).

#### [Whole  word](https://www.tradingview.com/pine-script-docs/writing/debugging/#whole-word)

The “Whole word” search option activates  _whole-word_  matching. With this setting enabled, the filter includes logs containing the searched term, but only if it is separated from other text by  _whitespace_  characters or any of the following non-word characters:  `.`  (period),  `,`  (comma),  `:`  (colon),  `;`  (semicolon),  `'`  (apostrophe), or  `"`  (quotation mark).

For example, searching for “Confirmed” in our script’s logs with the “Whole word” setting prevents the messages containing “unconfirmed” from appearing in the results:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Filtering-logs-Character-and-pattern-search-Whole-word-1.-3nPjDxx_2fuj3g.webp)

Note that:

-   With the “Whole word” setting active, the search filter  _cannot_  match terms containing whitespaces or the other non-word characters listed above.
-   Whole-word search queries can include other Unicode characters outside the ASCII range.

#### [Regex](https://www.tradingview.com/pine-script-docs/writing/debugging/#regex)

The “Regex” search option enables advanced, flexible log filtering with  [regular expressions (regex)](https://en.wikipedia.org/wiki/Regular_expression). In contrast to plain text searches, which only match  _literal_  character sequences, regex searches can match variable  _text patterns_  based on the rules defined by the query’s syntax.

With regular expressions, the Pine Logs search filter can isolate logs containing various text structures, simple or complex, such as dates and times with a defined format, alphanumeric sequences with varying digits or letters, sequences of characters within specified Unicode subsets, and more.

For instance, this regex search query specifies that the displayed logs must contain “average:”, with optional trailing whitespace characters, followed by a sequence of characters representing a number greater than 0.5 and less than or equal to 1.0:

```

```

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Filtering-logs-Character-and-pattern-search-Regex-1.CnCNzCEk_ZbCaXx.webp)

The more advanced search query below specifies that the logs must contain prefixed timestamps representing any time of day equal to or after 09:30 and before 16:00 in the chart’s time zone:

```

```

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Filtering-logs-Character-and-pattern-search-Regex-2.BubI1o13_2wLk1s.webp)

For more information about regular expressions, consult the  [Regex syntax reference](https://www.tradingview.com/pine-script-docs/concepts/strings/#regex-syntax-reference)  in this manual’s  [Strings](https://www.tradingview.com/pine-script-docs/concepts/strings/)  page. Most of the described syntax works the same within the Pine Logs search filter, with a few notable differences:

-   The strings used as  `regex`  arguments in  [str.match()](https://www.tradingview.com/pine-script-reference/v6/#fun_str.match)  calls require  _two_  consecutive backslashes (`\\`) for specifying escape sequences in the pattern (e.g.,  `"\\w"`  means the regex matches a character from the  `\w`  class). In contrast, the Pine Logs search filter requires only a  _single_  backslash for escape sequences. Double backslashes in the search bar match the literal  `\`  character.
-   The regex search query can use the syntax  `\xhh`  or  `\uhhhh`  to reference Unicode code points in the  [Basic Multilingual Plane](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane), where each  `h`  is a  _hexadecimal_  digit (e.g.,  `\x67`  and  `\u0067`  refer to U+0067, the  `a`  character). However, the full-range syntax (`\x{...}`) is not supported.
-   The search query  _cannot_  use Unicode property references, such as  `\p{Lu}`,  `\p{IsGreek}`, etc.
-   The search query can use only the  `^`  and  `$`  _boundary assertions_  to match a logged message’s start and end boundaries. The  `\A`,  `\Z`, and  `\z`  assertions are  _not_  supported.
-   The search query cannot use  _pattern modifiers_  globally (e.g.,  `(?m)^abc`). However, it can use some modifiers locally inside  _non-capturing groups_  (e.g.,  `(?m:^abc)`).

### [Custom code  filters](https://www.tradingview.com/pine-script-docs/writing/debugging/#custom-code-filters)

If the filtering options in the Pine Logs pane are not sufficient, programmers can control specific  `log.*()`  calls using  [inputs](https://www.tradingview.com/pine-script-docs/concepts/inputs/)  and conditional logic.

The script below calculates an RMA of  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close)  prices and creates a compound condition from four distinct individual conditions. It plots the RMA on the chart and highlights the background when the  `compoundCondition`  value is  `true`. For debugging, the script uses  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  to display a formatted string representing the  `close`  and  `rma`  values, the values of all the “bool” variables that form the compound condition, and the final  `compoundCondition`  value.

The  `filterLogsInput`,  `logStartInput`, and  `logEndInput`  variables define a custom  _time filter_  for generating logs. When  `filterLogsInput`  is  `true`, the script uses the  [time inputs](https://www.tradingview.com/pine-script-docs/concepts/inputs/#time-input)  assigned to  `logStartInput`  and  `logEndInput`  to filter the  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  calls, allowing a new log only when the bar’s  [time](https://www.tradingview.com/pine-script-reference/v6/#var_time)  is within the specified range:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-logs-Filtering-logs-Custom-code-filters-1.BDemxPLh_ZSKvHT.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Custom code filters demo",  overlay  =  true)  
  
//@variable The length for moving average calculations.  
int  lengthInput  =  input.int(20,  "Length",  2)  
  
//@variable If `true`, only allows logs within the input time range.  
bool  filterLogsInput  =  input.bool(true,  "Only log in time range",  group  =  "Log filter")  
//@variable The starting time for logs if `filterLogsInput` is `true`.  
int  logStartInput  =  input.time(0,  "Start time",  group  =  "Log filter",  confirm  =  true)  
//@variable The ending time for logs if `filterLogsInput` is `true`.  
int  logEndInput  =  input.time(0,  "End time",  group  =  "Log filter",  confirm  =  true)  
  
//@variable The RMA of `close` prices.  
float  rma  =  ta.rma(close,  lengthInput)  
  
//@variable Is `true` when `close` exceeds the `rma`.  
bool  priceBelow  =  close  <=  rma  
//@variable Is `true` when the current `close` is greater than the max of the previous `hl2` and `close`.  
bool  priceRising  =  close  >  math.max(hl2[1],  close[1])  
//@variable Is `true` when the `rma` is positively accelerating.  
bool  rmaAccelerating  =  rma  -  2.0  *  rma[1] +  rma[2] >  0.0  
//@variable Is `true` when the difference between `rma` and `close` exceeds 2 times the current ATR.  
bool  closeAtThreshold  =  rma  -  close  >  ta.atr(lengthInput) *  2.0  
//@variable Is `true` when all the above conditions occur.  
bool  compoundCondition  =  priceBelow  and  priceRising  and  rmaAccelerating  and  closeAtThreshold  
  
// Plot the `rma`.  
plot(rma,  "RMA",  color.teal,  3)  
// Highlight the chart background when the `compoundCondition` occurs.  
bgcolor(compoundCondition  ?  color.new(color.aqua,  80) :  na,  title  =  "Compound condition highlight")  
  
//@variable If `filterLogsInput` is `true`, is only `true` in the input time range. Otherwise, always `true`.  
bool  showLog  =  filterLogsInput  ?  time  >=  logStartInput  and  time  <=  logEndInput  :  true  
  
// Log results for a confirmed bar when `showLog` is `true`.  
if  barstate.isconfirmed  and  showLog  
log.info(  
"\nclose:             {0,number,#.#####}  
\nrma:               {1,number,#.#####}  
\npriceBelow:        {2}  
\npriceRising:       {3}  
\nrmaAccelerating:   {4}  
\ncloseAtThreshold:  {5}  
\n  
\ncompoundCondition: {6}",  
close,  rma,  priceBelow,  priceRising,  rmaAccelerating,  closeAtThreshold,  compoundCondition  
)  
``

Note that:

-   The  `input.*()`  calls assigned to the  `filterLogsInput`,  `logStartInput`, and  `logEndInput`  variables include a  `group`  argument to group the inputs in the “Settings/Inputs” tab.
-   Users can adjust time input values directly on the chart by selecting the script’s status line and moving the displayed time markers with the mouse pointer. Additionally, users can select “Reset points” in the script’s “More” menu to clear the inputs and choose new values.
-   The  `formatString`  argument of the  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  call uses the Em Space character (U+2003) to align the represented values vertically in the logged text. In contrast to the standard space and tab characters, leading or repeated Em and En spaces are  _not_  removed from the Pine Logs pane’s displayed messages.

## [Pine  drawings](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-drawings)

Pine’s  [drawing types](https://www.tradingview.com/pine-script-docs/language/type-system/#drawing-types)  create chart drawings with specified properties. Scripts can place drawings at any valid chart location during code executions on any bar. Programmers can use these types in a script’s global or local scopes to visualize numeric data, conditions, colors, and strings on the chart. The flexibility of Pine drawings makes them helpful for debugging scripts when other methods do not suffice, namely when a programmer wants to inspect information graphically outside the  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  pane.

However, before debugging a script using drawings, it is crucial to note the following limitations:

-   The  `expression`  argument of a  `request.*()`  call  _cannot_  depend on code that creates or modifies drawings. Likewise, an indicator that specifies another context in its declaration statement cannot create drawings from  _anywhere_  in the code. To debug code that executes on requested data, use  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  instead.
-   In contrast to Pine Logs, drawings do not have built-in navigation features. Therefore, users must manually scroll across the chart to inspect drawings created on specific bars.
-   Scripts can maintain only a  _limited_  number of objects of each drawing type. When the number of drawings exceeds the limit, Pine’s garbage collector automatically  _removes_  the oldest ones.

The sections below explain some simple debugging methods using  [labels](https://www.tradingview.com/pine-script-docs/visuals/text-and-shapes/#labels)  and  [tables](https://www.tradingview.com/pine-script-docs/visuals/tables/). These drawings, especially  _labels_, are the most effective for on-chart debugging because they can use dynamic  [strings](https://www.tradingview.com/pine-script-docs/concepts/strings/)  to express information from other data types as custom text.

### [Labels](https://www.tradingview.com/pine-script-docs/writing/debugging/#labels)

[Labels](https://www.tradingview.com/pine-script-docs/visuals/text-and-shapes/#labels)  display colored shapes and text at specified chart coordinates. In contrast to the outputs of the  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  and  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  functions, labels can display text from “series string” values that change across script executions. Programmers often use labels to visualize the logic of  [conditional structures](https://www.tradingview.com/pine-script-docs/language/conditional-structures/)  and show text representing information from a script’s global or local scopes.

The most common techniques for debugging with labels include:

-   Drawing a label containing key information anchored to  _every_  bar that requires inspection.
-   Drawing a single label containing information from specific executions at the  _end_  of the dataset or visible chart.

#### [Drawing on successive  bars](https://www.tradingview.com/pine-script-docs/writing/debugging/#drawing-on-successive-bars)

When inspecting values of varying magnitudes or different types across bars, a simple approach is to create  [formatted strings](https://www.tradingview.com/pine-script-docs/concepts/strings/#formatting-strings)  containing the necessary debug information and display them in  [labels](https://www.tradingview.com/pine-script-docs/visuals/text-and-shapes/#labels)  on each bar requiring analysis.

In this example, we’ve modified the “Average bar ratio” script from the  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  section above. Instead of creating formatted text and displaying information using  `log.*()`  function calls, this script formats the values separately, then calls  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  to show the results on the chart within labels anchored to each bar’s  [high](https://www.tradingview.com/pine-script-reference/v6/#var_high):

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-drawings-Labels-Drawing-on-successive-bars-1.Y0IdYgw-_Z1vuQ7m.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Drawing on successive bars demo",  "Average bar ratio")  
  
//@variable The current bar's change from the `open` to `close`.  
float  numerator  =  close  -  open  
//@variable The current bar's `low` to `high` range.  
float  denominator  =  high  -  low  
//@variable The ratio of the bar's open-to-close change to its full range.  
float  ratio  =  numerator  /  denominator  
//@variable The average `ratio` over 10 *non-na* values.  
float  average  =  ta.sma(ratio,  10)  
  
// Plot the `average`.  
plot(average,  "average",  color.purple,  3)  
  
if  barstate.isconfirmed  
if  denominator  ==  0  
string  debugText  =  "Division by 0 on confirmed bar!\nBar excluded from the average."  
label.new(bar_index,  high,  debugText,  color  =  color.red,  textcolor  =  #000000,  force_overlay  =  true)  
else  
string  debugText  =  str.format(  
"Values (Confirmed):  
\nnumerator: {0,number,#.########}  
\ndenominator: {1,number,#.########}  
\nratio: {2,number,#.########}  
\naverage: {3,number,#.########}",  
numerator,  denominator,  ratio,  average  
)  
label.new(bar_index,  high,  debugText,  textcolor  =  #ffffff,  force_overlay  =  true)  
else  
if  denominator  ==  0  
string  debugText  =  "Division by 0 on unconfirmed bar!"  
label.new(bar_index,  high,  debugText,  color  =  color.red,  textcolor  =  #000000,  force_overlay  =  true)  
else  
string  debugText  =  str.format(  
"Values (unconfirmed):  
\nnumerator: {0,number,#.########}  
\ndenominator: {1,number,#.########}  
\nratio: {2,number,#.########}  
\naverage: {3,number,#.########}",  
numerator,  denominator,  ratio,  average  
)  
label.new(bar_index,  high,  debugText,  color  =  color.orange,  textcolor  =  #000000,  force_overlay  =  true)  
``

Note that:

-   The  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  calls include  `force_overlay = true`, meaning the labels always appear on the main chart pane.
-   Unlike the example in the  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  section, this script’s outputs  **are**  subject to  _rollback_, meaning the information shown on a bar reflects only the bar’s  _latest_  data. The script does  **not**  show information for  _all_  realtime bar updates.

The above example allows users to inspect the script’s confirmed values or latest updates on any bar that has a  [label](https://www.tradingview.com/pine-script-reference/v6/#type_label)  drawing. However, each bar’s results are legible only when the labels do not  _overlap_.

An alternative, more  _compact_  way to display text with labels on successive bars is to utilize the  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  function’s  `tooltip`  parameter instead of the  `text`  parameter, as labels show their tooltips only when the mouse pointer  _hovers_  over them.

In the script version below, we changed all the  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  calls to use  `debugText`  as the  `tooltip`  argument instead of the  `text`  argument. Now, we can view a specific bar’s information without visual clutter from other nearby labels:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-drawings-Labels-Drawing-on-successive-bars-2.oXxEu_CI_Z15EA3a.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Drawing tooltips on successive bars demo",  "Average bar ratio")  
  
//@variable The current bar's change from the `open` to `close`.  
float  numerator  =  close  -  open  
//@variable The current bar's `low` to `high` range.  
float  denominator  =  high  -  low  
//@variable The ratio of the bar's open-to-close change to its full range.  
float  ratio  =  numerator  /  denominator  
//@variable The average `ratio` over 10 *non-na* values.  
float  average  =  ta.sma(ratio,  10)  
  
// Plot the `average`.  
plot(average,  "average",  color.purple,  3)  
  
if  barstate.isconfirmed  
if  denominator  ==  0  
string  debugText  =  "Division by 0 on confirmed bar!\nBar excluded from the average."  
label.new(bar_index,  high,  color  =  color.red,  tooltip  =  debugText,  force_overlay  =  true)  
else  
string  debugText  =  str.format(  
"Values (Confirmed):  
\nnumerator: {0,number,#.########}  
\ndenominator: {1,number,#.########}  
\nratio: {2,number,#.########}  
\naverage: {3,number,#.########}",  
numerator,  denominator,  ratio,  average  
)  
label.new(bar_index,  high,  tooltip  =  debugText,  force_overlay  =  true)  
else  
if  denominator  ==  0  
string  debugText  =  "Division by 0 on unconfirmed bar!"  
label.new(bar_index,  high,  color  =  color.red,  tooltip  =  debugText,  force_overlay  =  true)  
else  
string  debugText  =  str.format(  
"Values (unconfirmed):  
\nnumerator: {0,number,#.########}  
\ndenominator: {1,number,#.########}  
\nratio: {2,number,#.########}  
\naverage: {3,number,#.########}",  
numerator,  denominator,  ratio,  average  
)  
label.new(bar_index,  high,  color  =  color.orange,  tooltip  =  debugText,  force_overlay  =  true)  
``

When drawing labels across successive bars, it’s important to note that the maximum number of labels a script can display is 500. As such, the examples above allow users to inspect information for only the most recent 500 chart bars.

For successive labels on earlier bars, programmers can create conditional logic that limits the drawings to specific  _time ranges_, e.g.:

```

```

Below, we added a condition to the script that draws a label only when the bar’s  [time](https://www.tradingview.com/pine-script-reference/v6/#var_time)  is between the  [chart.left_visible_bar_time](https://www.tradingview.com/pine-script-reference/v6/#var_chart.left_visible_bar_time)  and  [chart.right_visible_bar_time](https://www.tradingview.com/pine-script-reference/v6/#var_chart.right_visible_bar_time)  values. This logic restricts the drawings to  _visible_  chart bars, allowing us to scroll through the chart and inspect labels on any bar:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-drawings-Labels-Drawing-on-successive-bars-3.DxYYTLXs_Z1pHas.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Drawing in visible ranges demo",  "Average bar ratio")  
  
//@variable The current bar's change from the `open` to `close`.  
float  numerator  =  close  -  open  
//@variable The current bar's `low` to `high` range.  
float  denominator  =  high  -  low  
//@variable The ratio of the bar's open-to-close change to its full range.  
float  ratio  =  numerator  /  denominator  
//@variable The average `ratio` over 10 *non-na* values.  
float  average  =  ta.sma(ratio,  10)  
  
// Plot the `average`.  
plot(average,  "average",  color.purple,  3)  
  
if  time  >=  chart.left_visible_bar_time  and  time  <=  chart.right_visible_bar_time  
if  barstate.isconfirmed  
if  denominator  ==  0  
string  debugText  =  "Division by 0 on confirmed bar!\nBar excluded from the average."  
label.new(bar_index,  high,  color  =  color.red,  tooltip  =  debugText,  force_overlay  =  true)  
else  
string  debugText  =  str.format(  
"Values (Confirmed):  
\nnumerator: {0,number,#.########}  
\ndenominator: {1,number,#.########}  
\nratio: {2,number,#.########}  
\naverage: {3,number,#.########}",  
numerator,  denominator,  ratio,  average  
)  
label.new(bar_index,  high,  tooltip  =  debugText,  force_overlay  =  true)  
else  
if  denominator  ==  0  
string  debugText  =  "Division by 0 on unconfirmed bar!"  
label.new(bar_index,  high,  color  =  color.red,  tooltip  =  debugText,  force_overlay  =  true)  
else  
string  debugText  =  str.format(  
"Values (unconfirmed):  
\nnumerator: {0,number,#.########}  
\ndenominator: {1,number,#.########}  
\nratio: {2,number,#.########}  
\naverage: {3,number,#.########}",  
numerator,  denominator,  ratio,  average  
)  
label.new(bar_index,  high,  color  =  color.orange,  tooltip  =  debugText,  force_overlay  =  true)  
``

Note that:

-   The script  _restarts_  each time the  [UNIX timestamps](https://www.tradingview.com/pine-script-docs/concepts/time/#unix-timestamps)  of the  [chart.left_visible_bar_time](https://www.tradingview.com/pine-script-reference/v6/#var_chart.left_visible_bar_time)  or  [chart.right_visible_bar_time](https://www.tradingview.com/pine-script-reference/v6/#var_chart.right_visible_bar_time)  variables change after the user scrolls or zooms on the chart.

#### [Drawing at the end of the  chart](https://www.tradingview.com/pine-script-docs/writing/debugging/#drawing-at-the-end-of-the-chart)

When debugging information does not change frequently across executions, or only the information from a specific execution requires inspection, programmers often display it using  [labels](https://www.tradingview.com/pine-script-docs/visuals/text-and-shapes/#labels)  anchored to the  _end_  of the chart.

The following example displays price and chart information in four separate labels at the end of the chart. The script’s  `printLabel()`  function renders a specified string in a label that always anchors to the last available time in the dataset, regardless of when the function call occurs:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-drawings-Labels-Drawing-at-the-end-of-the-chart-1.5mqpohZu_ub26N.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Drawing labels at the end of the chart demo",  "Chart info",  true)  
  
//@function Draws a label to display the `info` text at the latest available time.  
// Each instance of a call to this function updates its label text across executions.  
//@param info The string to display.  
//@param price Optional. The y-coordinate of the label. If `na`, the function draws the label above the last bar.  
// The default is `na`.  
//@param textColor Optional. The color of the displayed text. If `na`, the label uses `chart.fg_color`.  
// The default is `na`.  
//@param size Optional. The size of the label in typographic points. The default is 18.  
//@returns A `label` object with dynamic text.  
printLabel(string  info,  simple  float  price  =  na,  simple  color  textColor  =  na,  simple  int  size  =  18) =>  
var  int  anchorTime  =  math.max(last_bar_time,  chart.right_visible_bar_time)  
var  color  col  =  nz(textColor,  chart.fg_color)  
var  yloc  =  na(price) ?  yloc.abovebar  :  yloc.price  
var  label  result  =  label.new(  
anchorTime,  price,  na,  xloc.bar_time,  yloc,  na,  label.style_none,  col,  size,  force_overlay  =  true  
)  
result.set_text(info)  
  
// Call `printLabel()` on the first bar to display "Chart info:" and formatted chart information.  
if  barstate.isfirst  
printLabel("Chart info:"  +  str.repeat("\n",  6),  textColor  =  color.teal)  
printLabel(  
str.format(  
"Symbol: {0}, Type: {1}, Timeframe: {2}\nStandard chart: {3}, Replay active: {4}",  
ticker.standard(),  syminfo.type,  timeframe.period,  chart.is_standard,  
str.contains(syminfo.tickerid,  "replay")  
) +  str.repeat("\n",  3)  
)  
  
// On the last available bar, call `printLabel()` to display the latest OHLCV values and total bar count.  
if  barstate.islast  
printLabel(  
str.format(  
"O: {0,number,#.#####}, H: {1,number,#.#####}, L: {2,number,#.#####}, C: {3,number,#.#####},  
V: {4}",  
open,  high,  low,  close,  str.tostring(volume,  format.volume)  
) +  "\n"  
)  
printLabel("Total bars: "  +  str.tostring(bar_index  +  1))  
``

Note that:

-   The  `printLabel()`  function draws  _one_  label per function call instance. The label’s  `x`  property is the maximum of the  [last_bar_time](https://www.tradingview.com/pine-script-reference/v6/#var_last_bar_time)  and  [chart.right_visible_bar_time](https://www.tradingview.com/pine-script-reference/v6/#var_chart.right_visible_bar_time)  values, ensuring it appears above the last available bar.
-   On each execution of a  `printLabel()`  instance, the label’s  `text`  property updates to reflect the latest  `info`  value.
-   The  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  call in the  `printLabel()`  function includes  `force_overlay = true`, meaning the drawing always appears in the main chart pane.
-   This script uses  _four_  distinct  `printLabel()`  calls. The first three append repeated newline characters (`\n`) in the  `info`  argument to prevent the label text from overlapping.

### [Tables](https://www.tradingview.com/pine-script-docs/writing/debugging/#tables)

[Tables](https://www.tradingview.com/pine-script-docs/visuals/tables/)  display text within cells arranged in columns and rows at fixed locations in the chart pane’s visual space. In contrast to other  [drawing types](https://www.tradingview.com/pine-script-docs/language/type-system/#drawing-types), which create visuals on the chart at specified  _coordinates_, tables appear at one of nine unique,  _bar-agnostic_  locations defined by the  `position.*`  constants.

Because tables appear at consistent relative locations in the pane, unaffected by scroll or zoom actions, programmers occasionally use them for on-chart debugging. The most common technique is to draw a  _single-cell_  table containing information from specific script executions.

This example contains a  `printTable()`  function that calls  [table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new)  and  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  to create a single-cell table that displays dynamic text in a relative location on the main chart pane. The script uses a single call to this function to display the same chart information shown by the example script from the  [previous section](https://www.tradingview.com/pine-script-docs/writing/debugging/#drawing-at-the-end-of-the-chart):

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Pine-drawings-Tables-1.D2zJtwRb_Z1ADabn.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Debugging with single-cell tables demo",  "Chart info",  true)  
  
//@function Draws a single-cell table to display the `info` text in the top-right corner of the chart.  
//@param info The string to display.  
//@param textColor Optional. The color of the displayed text. If `na`, the table uses `chart.fg_color`.  
// The default is `na`.  
//@param size Optional. The size of the table's text in typographic points. The default is 18.  
//@returns A single-cell table with dynamic text.  
printTable(string  info,  simple  color  textColor  =  na,  simple  int  size  =  18) =>  
var  color  col  =  nz(textColor,  chart.fg_color)  
var  table  result  =  table.new(position.top_right,  1,  1,  na,  force_overlay  =  true)  
table.cell(result,  0,  0,  info,  text_color  =  col,  text_size  =  size)  
  
// Call `printTable()` on the latest available bar to display chart information in the top-right corner.  
if  barstate.islast  
printTable(  
str.format(  
"Chart info:  
\n\nSymbol: {0},  Type: {1},  Timeframe: {2}\nStandard  chart: {3},  Replay  active: {4}  
\n\nO: {5,number,#.#####}, H: {6,number,#.#####}, L: {7,number,#.#####}, C: {8,number,#.#####}, V: {9}  
\nTotalBars: {10}",  
ticker.standard(),  syminfo.type,  timeframe.period,  chart.is_standard,  
str.contains(syminfo.tickerid,  "replay"),  open,  high,  low,  close,  str.tostring(volume,  format.volume),  
bar_index  +  1  
)  
)  
``

Note that:

-   Every new table drawing  _replaces_  any existing one that has the same specified position. Therefore, scripts cannot call the  `printTable()`  function multiple times to place multiple drawings in a single location, unlike the  `printLabel()`  function from the previous section.
-   This script calls  `printTable()`  only on the last historical bar and all realtime bars because updating tables on each historical bar is an unnecessary use of runtime resources. See the  [Reducing drawing updates](https://www.tradingview.com/pine-script-docs/writing/profiling-and-optimization/#reducing-drawing-updates)  section of the  [Profiling and optimization](https://www.tradingview.com/pine-script-docs/writing/profiling-and-optimization/)  page for more information.

## [Plots and chart  colors](https://www.tradingview.com/pine-script-docs/writing/debugging/#plots-and-chart-colors)

The built-in  `plot*()`  functions display results from a value’s series in up to four locations: the chart pane, the script’s status line, the Data Window, and the price scale. Programmers often use these output functions as a quick way to display the history of a script’s numeric values, conditions, and colors. Two other functions,  [bgcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_bgcolor)  and  [barcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_barcolor), color a chart pane’s background and the main chart’s bars or candles. Although not as versatile as other output functions, they offer a quick way to display conditions and colors on the chart.

All these functions, especially  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot),  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar), and  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape), can serve as helpful tools for debugging a script’s calculations and logic. For instance, the outputs of a single  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  call can show the complete available history of a script’s series on the chart and provide information for any bar in other locations.

Before using plots or chart colors for debugging, it is important to note the following limitations:

-   Unlike  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  or  [drawings](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-drawings), these outputs  _cannot_  display results for values that are accessible from local scopes only. Scripts must  [extract](https://www.tradingview.com/pine-script-docs/writing/debugging/#extracting-data-from-local-scopes)  values from local scopes into the  _global scope_  to debug them with plots or chart colors.
-   The only  `plot*()`  functions that can display  _text_  on the chart —  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  and  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  — require “const string” values. Therefore, they cannot display dynamic strings or calculated  [string conversions](https://www.tradingview.com/pine-script-docs/concepts/strings/#string-conversion-and-formatting)  of other types.
-   Similar to drawings, plots  _do not_  have built-in navigation features. Users must scroll across the chart to find plotted information for specific bars.
-   The maximum  _plot count_  for any script is 64. Each call to these functions contributes a different number to the total, depending on its arguments. See the  [Plot limits](https://www.tradingview.com/pine-script-docs/writing/limitations/#plot-limits)  section of the  [Limitations](https://www.tradingview.com/pine-script-docs/writing/limitations/)  page to learn more.

### [Plotting  numbers](https://www.tradingview.com/pine-script-docs/writing/debugging/#plotting-numbers)

One of the simplest methods to inspect global numeric series (“int” or “float” values) is to plot them using the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot),  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar), or  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function. The outputs on the chart pane provide a graphical view of the series’ history. The other possible output locations (status line, price scale, and Data Window) show formatted numbers representing the values calculated on a specific bar.

Let’s look at a simple debugging example. The following script calculates a custom oscillator whose value is the average of three separate oscillators. It displays the  `oscillator`  value in four output locations using a  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  call:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Plots-and-chart-colors-Plotting-numbers-1._9pJe3gC_Zj4NpU.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Plotting numbers demo")  
  
//@variable The length of each oscillator.  
int  lengthInput  =  input.int(20,  "Length",  2)  
  
//@variable The correlation between `close` and `bar_index` over `lengthInput` bars.  
float  osc1  =  ta.correlation(close,  bar_index,  lengthInput)  
//@variable The RSI of `close` over `lengthInput` bars, scaled to the range [-1, 1].  
float  osc2  = (ta.rsi(close,  lengthInput) -  50) /  50  
//@variable The percent rank of `close` compared to `lengthInput` past values, scaled to the range [-1, 1].  
float  osc3  = (ta.percentrank(close,  lengthInput) -  50) /  50  
  
//@variable The average of `osc1`, `osc2`, and `osc3`.  
float  oscillator  =  math.avg(osc1,  osc2,  osc3)  
  
// Plot the `oscillator`.  
plot(oscillator,  "Combined oscillator",  color.purple,  3)  
``

The above script’s outputs allow inspection of the final  `oscillator`, but not the three constituent oscillators that determine its value. Because the script calculates all three series in the global scope, we can inspect them using additional plots. Here, we add three  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  calls to the script to display each oscillator, allowing us to verify the script’s calculated values and understand how they affect the final result:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Plots-and-chart-colors-Plotting-numbers-2.DpbWG2QO_cQIdm.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Plotting numbers demo")  
  
//@variable The length of each oscillator.  
int  lengthInput  =  input.int(20,  "Length",  2)  
  
//@variable The correlation between `close` and `bar_index` over `lengthInput` bars.  
float  osc1  =  ta.correlation(close,  bar_index,  lengthInput)  
//@variable The RSI of `close` over `lengthInput` bars, scaled to the range [-1, 1].  
float  osc2  = (ta.rsi(close,  lengthInput) -  50) /  50  
//@variable The percent rank of `close` compared to `lengthInput` past values, scaled to the range [-1, 1].  
float  osc3  = (ta.percentrank(close,  lengthInput) -  50) /  50  
  
//@variable The average of `osc1`, `osc2`, and `osc3`.  
float  oscillator  =  math.avg(osc1,  osc2,  osc3)  
  
// Plot the `oscillator`.  
plot(oscillator,  "Combined oscillator",  color.purple,  3)  
  
// Plot the `osc1`, `osc2`, and `osc3` series for inspection.  
plot(osc1,  "osc1",  color.red,  2,  plot.style_circles,  join  =  true)  
plot(osc2,  "osc2",  color.maroon,  2,  plot.style_circles,  join  =  true)  
plot(osc3,  "osc3",  color.blue,  2,  plot.style_circles,  join  =  true)  
``

Note that:

-   The numbers in the script’s status line and the Data Window represent the values plotted on the bar at the mouse pointer’s location. When the pointer is  _not_  on the chart, these numbers represent the  _latest_  bar’s data.
-   The labels in the price scale show the latest  _non-na_  values available in the plotted series up to the last visible bar. If a plotted series does not have a non-na value at any point before that bar, the price scale does  _not_  show a label for it.

TipWhen debugging numbers, it is crucial to consider the  _decimal precision_  (i.e., number of  _fractional digits_) required to inspect them effectively. Programmers can set the precision for a script’s plots using the  `precision`  parameter of the  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator),  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy), or  `plot*()`  functions. Alternatively, users can change the precision from the “Precision” field in the script’s “Settings” menu or the chart’s settings. Note that when a  `plot*()`  function includes a  `precision`  argument, it uses that value to determine the output’s decimal precision, ignoring the script’s global precision setting.

#### [Plotting without affecting the  scale](https://www.tradingview.com/pine-script-docs/writing/debugging/#plotting-without-affecting-the-scale)

Debugging multiple numeric series by plotting them on the chart can make the results hard to read if the plots affect the price scale, especially if each plotted series has a significantly different value range. Programmers can specify a plot’s  _display locations_  to avoid distorting the scale by passing a  `display.*`  constant or expression to the  `display`  parameter of the  `plot*()`  call.

Let’s look at a simple example that calculates a few numeric series with different ranges. This script calculates a weighted moving average with custom weights and plots the result on the chart:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Plots-and-chart-colors-Plotting-numbers-Plotting-without-affecting-the-scale-1.DCLyJ8at_8SNnK.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Plotting without affecting the scale demo",  "Weighted average",  true,  precision  =  5)  
  
//@variable The number of bars in the average.  
int  lengthInput  =  input.int(20,  "Length",  1)  
  
//@variable The weight applied to the price on each bar.  
float  weight  =  math.pow(close  -  open,  2)  
  
//@variable The numerator of the average.  
float  numerator  =  math.sum(weight  *  close,  lengthInput)  
//@variable The denominator of the average.  
float  denominator  =  math.sum(weight,  lengthInput)  
  
//@variable The weighted average over `lengthInput` bars.  
float  average  =  numerator  /  denominator  
  
// Plot the `average`.  
plot(average,  "Weighted average",  linewidth  =  3)  
``

Note that:

-   This script includes  `precision = 5`  in the  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  declaration statement, which specifies that it plots numbers with five fractional digits instead of using the chart’s default precision setting.

Suppose we want to inspect  _all_  the values in the  `average`  calculation using plots. If we use  `plot*()`  functions with the default  `display`  argument ([display.all](https://www.tradingview.com/pine-script-reference/v6/#const_display.all)), the plotted results appear in all possible locations, including the chart pane. Unlike the example script from the  [Plotting numbers](https://www.tradingview.com/pine-script-docs/writing/debugging/#plotting-numbers)  section, this script’s visuals become hard to read in the pane because each plot has a significantly different range:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Plots-and-chart-colors-Plotting-numbers-Plotting-without-affecting-the-scale-2.JCRilku2_uWE4Y.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Plotting without affecting the scale demo",  "Weighted average",  true,  precision  =  5)  
  
//@variable The number of bars in the average.  
int  lengthInput  =  input.int(20,  "Length",  1)  
  
//@variable The weight applied to the price on each bar.  
float  weight  =  math.pow(close  -  open,  2)  
  
//@variable The numerator of the average.  
float  numerator  =  math.sum(weight  *  close,  lengthInput)  
//@variable The denominator of the average.  
float  denominator  =  math.sum(weight,  lengthInput)  
  
//@variable The weighted average over `lengthInput` bars.  
float  average  =  numerator  /  denominator  
  
// Plot the `average`.  
plot(average,  "Weighted average",  linewidth  =  3)  
  
// Create debug plots for the `weight`, `numerator`, and `denominator`.  
plot(weight,  "weight",  color.purple)  
plot(numerator,  "numerator",  color.teal)  
plot(denominator,  "denominator",  color.maroon)  
``

We can change the  `display`  argument in each debug  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  call to view all the calculated values while preserving the chart’s scale. Below, we set the argument to  `display.all - display.pane`, meaning all the debug plots show information in all locations  _except_  the chart pane. Now, we can visualize how the calculated values affect each bar’s  `average`  result without distorting the scale:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Plots-and-chart-colors-Plotting-numbers-Plotting-without-affecting-the-scale-3.BdsQvxR3_Z2nxNp8.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Plotting without affecting the scale demo",  "Weighted average",  true,  precision  =  5)  
  
//@variable The number of bars in the average.  
int  lengthInput  =  input.int(20,  "Length",  1)  
  
//@variable The weight applied to the price on each bar.  
float  weight  =  math.pow(close  -  open,  2)  
  
//@variable The numerator of the average.  
float  numerator  =  math.sum(weight  *  close,  lengthInput)  
//@variable The denominator of the average.  
float  denominator  =  math.sum(weight,  lengthInput)  
  
//@variable The weighted average over `lengthInput` bars.  
float  average  =  numerator  /  denominator  
  
// Plot the `average`.  
plot(average,  "Weighted average",  linewidth  =  3)  
  
//@variable The display locations of all debug plots.  
debugLocations  =  display.all  -  display.pane  
// Create debug plots for the `weight`, `numerator`, and `denominator`.  
plot(weight,  "weight",  color.purple,  display  =  debugLocations)  
plot(numerator,  "numerator",  color.teal,  display  =  debugLocations)  
plot(denominator,  "denominator",  color.maroon,  display  =  debugLocations)  
``

Note that:

-   The  `display.*`  constants support  _addition_  and  _subtraction_  operations for customized display settings. This script uses subtraction to remove  [display.pane](https://www.tradingview.com/pine-script-reference/v6/#const_display.pane)  from the output locations allowed by  [display.all](https://www.tradingview.com/pine-script-reference/v6/#const_display.all). Operations that remove valid display constants more than once do not cause errors. For instance, this script produces the  _same_  outputs if it subtracts  [display.pane](https://www.tradingview.com/pine-script-reference/v6/#const_display.pane)  once, twice, or more times in the  `debugLocations`  expression.

### [Plotting and coloring  conditions](https://www.tradingview.com/pine-script-docs/writing/debugging/#plotting-and-coloring-conditions)

Programmers can inspect a script’s conditions (“bool” values) with the  `plot*()`,  [bgcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_bgcolor), and  [barcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_barcolor)  functions in several ways, including:

-   Using the “bool” condition as the  `series`  argument in a  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  or  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  call. The call creates a shape/character with specified text on the chart when the condition is  `true`, and it shows a  _numeric text_  representation of the condition in the status line and Data Window (`1`  for  `true`  and  `0`  for  `false`).
-   Creating a logical expression that returns different “int” or “float” values for the condition’s  `true`  and  `false`  states, then using the result as the  `series`  argument in a  `plot*()`  call. When using  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  or  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape), note that these functions show visuals on the chart only when the  `series`  value is not  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  or 0.
-   Creating a logical expression that returns different “color” values based on the condition’s  `true`  or  `false`  state, then using the result to color the chart with  [bgcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_bgcolor)  or  [barcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_barcolor), or to color a plot or fill.

The following example uses the above methods to debug a simple condition. The script calculates an RSI with an input length and defines a  `crossBelow`  condition that is  `true`  when the RSI crosses 30. It uses  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar), and  [bgcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_bgcolor)  calls to visualize the  `crossBelow`  condition in different ways:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Plots-and-chart-colors-Plotting-and-coloring-conditions-1.BhI2H3mP_1CXbkm.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Plotting and coloring conditions demo")  
  
//@variable The length of the RSI.  
int  lengthInput  =  input.int(14,  "Length",  1)  
  
//@variable The calculated RSI value.  
float  rsi  =  ta.rsi(close,  lengthInput)  
  
//@variable Is `true` when the `rsi` crosses below 30, `false` otherwise.  
bool  crossBelow  =  ta.crossunder(rsi,  30.0)  
  
// Plot the `rsi`.  
plot(rsi,  "RSI",  color.rgb(136,  76,  146),  linewidth  =  3)  
  
// Plot a circle near the top of the pane when `crossBelow` is `true`.  
// The status line and Data Window show 1 when the condition is `true` and 0 when it is `false`.  
plotshape(crossBelow,  "plotshape debug",  shape.circle,  location.top,  color.red,  size  =  size.small)  
  
// Plot the `⤰` character at the `rsi` value when `crossBelow` is `true`.  
// The status line and Data Window show the `rsi` value when the condition is `true` and `na` when it is `false`.  
plotchar(crossBelow  ?  rsi  :  na,  "plotchar debug",  "⤰",  location.absolute,  color.maroon,  size  =  size.normal)  
  
// Highlight the background when `crossBelow` is `true`. Does not add information to the status line or Data Window.  
bgcolor(crossBelow  ?  color.new(color.red,  60) :  na,  title  =  "bgcolor debug")  
``

Note that:

-   The  `plot*()`  functions that display text or shapes on the chart —  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar), and  [plotarrow()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotarrow)  —  _do not_  display data in the price scale.
-   The  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  call uses  `crossUnder`  as its  `series`  argument. The chart pane shows a shape at the top when the condition occurs. The status line and Data Window show 1 when the  `series`  is  `true`  and 0 when it is  `false`.
-   The  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  call plots the result of a ternary expression that returns the  `rsi`  when  `crossUnder`  is  `true`  and  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  otherwise. It shows the character U+2930 at the  `rsi`  location when the expression does not evaluate to  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na). Because the  `series`  argument is a “float” value, the number in the status line and Data Window represents that value directly.
-   The  [bgcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_bgcolor)  call highlights the chart’s background when  `crossUnder`  is  `true`, but it does not display information in the status line or Data Window.

The  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  and  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  functions have a  `text`  parameter that adds “const string” text to the plotted shapes/characters. When debugging multiple global conditions, it is often helpful to call these functions with  `text`  arguments to label each condition for simple on-chart inspection. The arguments can contain the newline character (`\n`  [escape sequence](https://www.tradingview.com/pine-script-docs/concepts/strings/#escape-sequences)), allowing scripts to plot multiple shapes in identical locations with non-overlapping text.

Let’s explore a debugging example using this approach. The script below calculates an RSI and its median over  `lengthInput`  bars. Then, it creates five singular conditions and uses them to form a  _compound condition_. The script plots the  `rsi`  and  `median`  values with the  `plot()`  function, and it colors the background with  [bgcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_bgcolor)  when the  `compoundCondition`  is  `true`:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Plots-and-chart-colors-Plotting-and-coloring-conditions-2.1wtCT3lE_ZhTEf7.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Plotting and coloring compound conditions demo")  
  
//@variable The length of the RSI and median RSI calculations.  
int  lengthInput  =  input.int(14,  "Length",  2)  
  
//@variable The RSI of `close` with a smoothing factor defined by `lengthInput`.  
float  rsi  =  ta.rsi(close,  lengthInput)  
//@variable The median of the `rsi` over `lengthInput` bars.  
float  median  =  ta.median(rsi,  lengthInput)  
  
//@variable Condition #1: Is `true` when the 1-bar `rsi` change switches from 1 to -1.  
bool  changeNegative  =  ta.change(math.sign(ta.change(rsi))) ==  -2  
//@variable Condition #2: Is `true` when the previous bar's `rsi` is greater than 70.  
bool  prevAbove70  =  rsi[1] >  70.0  
//@variable Condition #3: Is `true` when the current `close` is lower than the previous bar's `open`.  
bool  closeBelow  =  close  <  open[1]  
//@variable Condition #4: Is `true` when the `rsi` is between 60 and 70.  
bool  betweenLevels  =  bool(math.max(70.0  -  rsi,  0.0) *  math.max(rsi  -  60.0,  0.0))  
//@variable Condition #5: Is `true` when the `rsi` is above the `median`.  
bool  aboveMedian  =  rsi  >  median  
  
//@variable Is `true` when the first condition occurs alongside conditions 2 and 3 or 4 and 5.  
bool  compundCondition  =  changeNegative  and ((prevAbove70  and  closeBelow) or (betweenLevels  and  aboveMedian))  
  
//Plot the `rsi` and the `median`.  
plot(rsi,  "RSI",  color.teal,  3)  
plot(median,  "RSI Median",  color.gray,  2)  
  
// Highlight the background red when the `compundCondition` occurs.  
bgcolor(compundCondition  ?  color.new(color.red,  60) :  na,  title  =  "compundCondition")  
``

To verify that the script’s logic works as intended, we can inspect each of the conditions that affect the final  `compoundCondition`  value. Below, we added five  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  calls to display information for these conditions, each with the same  `location`  argument. To label the conditions on the chart, each  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  call uses a string containing newline characters (`\n`) and a digit from 1 to 5 as the  `text`  argument. With these outputs, we can see which sets of conditions trigger each  `compoundCondition`  occurrence:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Plots-and-chart-colors-Plotting-and-coloring-conditions-3.STxZruzR_Z1OOA4S.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Plotting and coloring compound conditions demo")  
  
//@variable The length of the RSI and median RSI calculations.  
int  lengthInput  =  input.int(14,  "Length",  2)  
  
//@variable The RSI over `lengthInput` bars.  
float  rsi  =  ta.rsi(close,  lengthInput)  
//@variable The median of the `rsi` over `lengthInput` bars.  
float  median  =  ta.median(rsi,  lengthInput)  
  
//@variable Condition #1: Is `true` when the 1-bar `rsi` change switches from 1 to -1.  
bool  changeNegative  =  ta.change(math.sign(ta.change(rsi))) ==  -2  
//@variable Condition #2: Is `true` when the previous bar's `rsi` is greater than 70.  
bool  prevAbove70  =  rsi[1] >  70.0  
//@variable Condition #3: Is `true` when the current `close` is lower than the previous bar's `open`.  
bool  closeBelow  =  close  <  open[1]  
//@variable Condition #4: Is `true` when the `rsi` is between 60 and 70.  
bool  betweenLevels  =  bool(math.max(70.0  -  rsi,  0.0) *  math.max(rsi  -  60.0,  0.0))  
//@variable Condition #5: Is `true` when the `rsi` is above the `median`.  
bool  aboveMedian  =  rsi  >  median  
  
//@variable Is `true` when the first condition occurs alongside conditions 2 and 3 or 4 and 5.  
bool  compundCondition  =  changeNegative  and ((prevAbove70  and  closeBelow) or (betweenLevels  and  aboveMedian))  
  
//Plot the `rsi` and the `median`.  
plot(rsi,  "RSI",  color.teal,  3)  
plot(median,  "RSI Median",  color.gray,  2)  
  
// Highlight the background red when the `compundCondition` occurs.  
bgcolor(compundCondition  ?  color.new(color.red,  60) :  na,  title  =  "compundCondition")  
  
// Use `plotshape()` to show `compundCondition` values in the status line and Data Window.  
plotshape(  
compundCondition,  "compundCondition (1 and (2 and 3) or (4 and 5))",  
color  =  chart.fg_color,  display  =  display.all  -  display.pane  
)  
  
// Plot characters on the chart and numbers in the status line and Data Window when conditions 1-5 occur.  
plotchar(changeNegative,  "changeNegative (1)",  "",  location.top,  text  =  "1",  textcolor  =  chart.fg_color)  
plotchar(prevAbove70,  "prevAbove70 (2)",  "",  location.top,  text  =  "\n2",  textcolor  =  chart.fg_color)  
plotchar(closeBelow,  "closeBelow (3)",  "",  location.top,  text  =  "\n\n3",  textcolor  =  chart.fg_color)  
plotchar(betweenLevels,  "betweenLevels (4)",  "",  location.top,  text  =  "\n\n\n4",  textcolor  =  chart.fg_color)  
plotchar(aboveMedian,  "aboveMedian (5)",  "",  location.top,  text  =  "\n\n\n\n5",  textcolor  =  chart.fg_color)  
``

Note that:

-   The  `char`  argument of each  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  call is an empty string, meaning the function displays its  `text`  value without a character above it.
-   Because each  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  call outputs results at the same relative location (`location.top`), we included different numbers of leading  `\n`  sequences in the  `text`  arguments to move the displayed numerals down and ensure they do not overlap.
-   The  `title`  argument of each  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  call contains the condition number to distinguish it in the Data Window.
-   The  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  call’s title describes the compound condition’s structure in the Data Window.

To learn more about the  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  and  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  functions and how their outputs differ from  [labels](https://www.tradingview.com/pine-script-docs/visuals/text-and-shapes/#labels), refer to the  [Text and shapes](https://www.tradingview.com/pine-script-docs/visuals/text-and-shapes/)  page.

## [Tips and  techniques](https://www.tradingview.com/pine-script-docs/writing/debugging/#tips-and-techniques)

The following sections explain several additional tips and helpful techniques for effective Pine Script debugging.

### [Decomposing  expressions](https://www.tradingview.com/pine-script-docs/writing/debugging/#decomposing-expressions)

One of the best practices for efficient debugging is to  _split expressions_, especially those with multiple calculations or logical operations, into  _smaller parts_  assigned to separate variables. Decomposing expressions enables programmers to inspect each critical part individually, making it easier to verify calculations or logic and isolate potential issues in the code. Additionally, complex code broken down into smaller parts is typically simpler to read, maintain, and  [profile](https://www.tradingview.com/pine-script-docs/writing/profiling-and-optimization/#profiling-a-script).

The following script calculates a custom oscillator representing the smoothed median change in the differences between the  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close)  price and two EMAs over different lengths. The script performs all the calculations in a single expression assigned to the  `osc`  variable. Then, it creates a compound condition in another expression assigned to the  `upSignal`  variable and uses that variable to trigger  [order placement commands](https://www.tradingview.com/pine-script-docs/concepts/strategies/#order-placement-and-cancellation). The script plots the  `osc`  series as columns with different colors based on the  `upSignal`  value:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Decomposing-expressions-1.DPZlbAAY_Z1JS6lp.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
strategy("Decomposing expressions demo")  
  
//@variable The length used for the first part of the oscillator.  
int  length1Input  =  input.int(20)  
//@variable The length used for the second part of the oscillator.  
int  length2Input  =  input.int(40)  
//@variable Oscillator smoothing length.  
int  smoothingInput  =  input.int(10)  
  
//@variable The maximum of `length1Input` and `length2Input`.  
int  maxLength  =  math.max(length1Input,  length2Input)  
  
//@variable The smoothed median change in the differences between `close` and two EMAs over different lengths.  
float  osc  =  ta.ema(  
math.avg(  
ta.change(close  -  ta.ema(close,  length1Input),  length1Input),  
ta.change(close  -  ta.ema(close,  length2Input),  length2Input)  
),  smoothingInput  
)  
  
//@variable `true` if `osc` is positive, above the last two-bar average, and below twice the stdev for `maxLength` bars.  
bool  upSignal  =  osc  <  2  *  ta.stdev(osc,  maxLength) and  osc  >  0  and  math.avg(osc[1],  osc[2]) <  osc  
  
// Plot the `osc` as columns colored based on the `upSignal`.  
plot(osc,  "Custom oscillator",  upSignal  ?  color.aqua  :  color.gray,  style  =  plot.style_columns)  
  
// Place a "Buy" market order when `upSignal` is `true`, and a closing market order when it is `false`.  
if  upSignal  
strategy.entry("Buy",  strategy.long)  
else  
strategy.close("Buy")  
``

Because the  `osc`  and  `upSignal`  values depend on multiple calculations and conditions, inspecting only the final values does not provide complete information about the script’s behaviors. To verify the script’s workings, we can decompose the expressions assigned to  `osc`  and  `upCondition`  into smaller parts and inspect them individually.

The script version below declares several extra variables to hold  _different parts_  of the original  `osc`  and  `upCondition`  expressions. With this expanded structure, we can inspect each part of the calculations and logic step-by-step using various outputs. In this script, we included a single  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  call at the end that displays  [formatted text](https://www.tradingview.com/pine-script-docs/concepts/strings/#formatting-strings)  containing each variable’s information in the  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  pane:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Decomposing-expressions-2.CWIhg_Os_1r2usz.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
strategy("Decomposing expressions demo")  
  
//@variable The length used for the first part of the oscillator.  
int  length1Input  =  input.int(20)  
//@variable The length used for the second part of the oscillator.  
int  length2Input  =  input.int(40)  
//@variable Oscillator smoothing length.  
int  smoothingInput  =  input.int(10)  
  
//@variable The maximum of `length1Input` and `length2Input`.  
int  maxLength  =  math.max(length1Input,  length2Input)  
  
//#region Split the `osc` calculations into smaller parts:  
  
// 1. Calculate the EMAS over `length1Input` and `length2Input` bars.  
float  ema1  =  ta.ema(close,  length1Input),  float  ema2  =  ta.ema(close,  length2Input)  
// 2. Calculate the differences between `close` and `ema1` and `ema2`.  
float  diff1  =  close  -  ema1,  float  diff2  =  close  -  ema2  
// 3. Calculate the changes in `diff1` and `diff2` over `length1Input` and `length2Input` bars.  
float  change1  =  ta.change(diff1,  length1Input),  float  change2  =  ta.change(diff2,  length2Input)  
// 4. Calculate the median of `change1` and `change2`.  
float  medChange  =  math.avg(change1,  change2)  
//#endregion  
  
//@variable The smoothed median change in the differences between `close` and two EMAs over different lengths.  
float  osc  =  ta.ema(medChange,  smoothingInput)  
  
//#region Split the `upSignal` calculations and logic into smaller parts:  
  
// 1. Assign the calculations in the expression to separate variables.  
float  oscDev  =  2  *  ta.stdev(osc,  maxLength),  float  pastAvg  =  math.avg(osc[1],  osc[2])  
// 2. Assign each singular condition to a separate variable.  
bool  cond1  =  osc  <  oscDev,  bool  cond2  =  osc  >  0,  bool  cond3  =  pastAvg  <  osc  
//#endregion  
  
//@variable Is `true` if `osc` is positive, above the past two-bar average, and below twice its stdev over `maxLength` bars.  
bool  upSignal  =  cond1  and  cond2  and  cond3  
  
// Plot the `osc` as columns colored based on the `upSignal`.  
plot(osc,  "Custom oscillator",  upSignal  ?  color.aqua  :  color.gray,  style  =  plot.style_columns)  
  
// Place a "Buy" market order when `upSignal` is `true`, and a closing market order when it is `false`.  
if  upSignal  
strategy.entry("Buy",  strategy.long)  
else  
strategy.close("Buy")  
  
// Call `log.info()` to display a formatted message containing debug information in the Pine Logs pane.  
if  barstate.isconfirmed  
log.info(  
"\nema1: {0,number,0.00000}, diff1: {1,number,0.00000}, change1: {2,number,0.00000}  
\nema2: {3,number,0.00000},  diff2: {4,number,0.00000},  change2: {5,number,0.00000}  
\nmedChange: {6,number,0.00000}\n\nosc: {7,number,0.00000}\n----  
\noscDev: {8,number,0.00000}\npastAvg: {9,number,0.00000}  
\ncond1: {10},  cond2: {11},  cond3: {12}\n\nupSignal: {13}",  
ema1,  diff1,  change1,  ema2,  diff2,  change2,  medChange,  osc,  oscDev,  pastAvg,  cond1,  cond2,  cond3,  upSignal  
)  
``

Note that:

-   This script declares some extra variables on the  _same line_, separated by commas, to reduce the number of lines added to the code.
-   The script calls  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  only when  [barstate.isconfirmed](https://www.tradingview.com/pine-script-reference/v6/#var_barstate.isconfirmed)  is  `true`, preventing unnecessary logs on the ticks of unconfirmed bars.
-   All the placeholders with the  `number`  modifier in the  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  call’s formatting string include the  `0.00000`  pattern, which forces the formatted numbers to always show five fractional digits. Refer to the  [Formatting strings](https://www.tradingview.com/pine-script-docs/concepts/strings/#formatting-strings)  section of the  [Strings](https://www.tradingview.com/pine-script-docs/concepts/strings/)  page for more information.
-   The Pine Logs pane displays up to 10,000 historical logs. To view earlier logs, add another condition to the  [if](https://www.tradingview.com/pine-script-reference/v6/#kw_if)  structure that limits the  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  call to specific bars. See the  [Custom code filters](https://www.tradingview.com/pine-script-docs/writing/debugging/#custom-code-filters)  section above for an example that restricts  `log.*()`  calls using  [time inputs](https://www.tradingview.com/pine-script-docs/concepts/inputs/#time-input).

### [Extracting data from local  scopes](https://www.tradingview.com/pine-script-docs/writing/debugging/#extracting-data-from-local-scopes)

The  _scope_  of an identifier (e.g., a variable) refers to the part of a script where it is defined and  _accessible_  during the script’s execution.

All identifiers declared outside  [user-defined functions](https://www.tradingview.com/pine-script-docs/language/user-defined-functions/),  [methods](https://www.tradingview.com/pine-script-docs/language/methods/#user-defined-methods),  [loops](https://www.tradingview.com/pine-script-docs/language/loops/),  [conditional structures](https://www.tradingview.com/pine-script-docs/language/conditional-structures/), or  [user-defined type](https://www.tradingview.com/pine-script-docs/language/type-system/#user-defined-types)  and  [enum type](https://www.tradingview.com/pine-script-docs/language/type-system/#enum-types)  declarations belong to the  _global scope_. Identifiers in the global scope are accessible to most  _inner_  (local) scopes after declaration. Every Pine script has exactly  **one**  global scope.

All user-defined functions, methods, loops, and conditional structures in a script create unique, separate  _local scopes_. All identifiers within a local scope belong exclusively to that scope, meaning their values or references are  _inaccessible_  to any  _outer_  or  _containing_  scope.

A common practice when debugging variables declared in a local scope is to extract their data to an outer scope or the global scope, making it usable in debugging outputs with different scope requirements.

The following sections explain techniques for extracting data from local scopes using  [return expressions](https://www.tradingview.com/pine-script-docs/writing/debugging/#extraction-using-return-expressions)  and  [reference types](https://www.tradingview.com/pine-script-docs/writing/debugging/#extraction-using-reference-types). We demonstrate these techniques on the following script, which contains a  `customMA()`  function that calculates a custom adaptive moving average of a  `source`  series based on the distance from its current value to its 25th and 75th percentiles over  `length`  bars. The script contains a local function scope, and a nested block scope from the  [if](https://www.tradingview.com/pine-script-reference/v6/#kw_if)  structure that sets the  `outerRange`  value:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Extracting-data-from-local-scopes-1.7noUNshc_fuFiN.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Extracting from local scopes initial demo",  overlay  =  true)  
  
//@variable The number of bars in the `customMA()` calculation.  
int  lengthInput  =  input.int(50,  "Length",  2)  
  
//@function Calculates a moving average that changes only when `source` is outside the first and third quartiles.  
//@param source The series of values to process.  
//@param length The number of bars in the quartile calculation.  
//@returns The adaptive moving average value.  
customMA(float  source,  int  length) =>  
//@variable The custom moving average.  
var  float  result  =  na  
// Calculate the 25th and 75th `source` percentiles (first and third quartiles) over `length` bars.  
float  q1  =  ta.percentile_linear_interpolation(source,  length,  25)  
float  q3  =  ta.percentile_linear_interpolation(source,  length,  75)  
//@variable The distance from `source` to its interquartile range.  
float  outerRange  =  0.0  
// Calculate the `outerRange` value when `source` is not `na`.  
if  not  na(source)  
float  upperRange  =  source  -  q3  
float  lowerRange  =  q1  -  source  
outerRange  :=  math.max(upperRange,  lowerRange,  0.0)  
//@variable The total range of `source` values over `length` bars.  
float  totalRange  =  ta.range(source,  length)  
//@variable Half the ratio of the `outerRange` to the `totalRange`.  
float  alpha  =  0.5  *  outerRange  /  totalRange  
// Mix the `source` with the `result` based on the `alpha` value.  
result  := (1.0  -  alpha) *  nz(result,  source) +  alpha  *  source  
// Return the `result`.  
result  
  
//@variable The `customMA()` of `close` over `lengthInput` bars.  
float  maValue  =  customMA(close,  lengthInput)  
  
// Plot the `maValue`.  
plot(maValue,  "Custom MA",  color.blue,  3)  
``

#### [Extraction using return  expressions](https://www.tradingview.com/pine-script-docs/writing/debugging/#extraction-using-return-expressions)

In Pine Script, any  [user-defined function](https://www.tradingview.com/pine-script-docs/language/user-defined-functions/)  or  [method](https://www.tradingview.com/pine-script-docs/language/methods/#user-defined-methods)  call,  [loop](https://www.tradingview.com/pine-script-docs/language/loops/), or  [conditional structure](https://www.tradingview.com/pine-script-docs/language/conditional-structures/)  _returns_  the result of the  _final_  expression or nested structure within its local scope. Scripts can use these structures’ returned results, excluding  [void](https://www.tradingview.com/pine-script-docs/language/type-system/#void), by assigning them to variables declared in the  _outer_  scope.

When debugging functions and conditional structures that contain multiple local variables, a common technique to extract data from their scopes is to return  [tuples](https://www.tradingview.com/pine-script-docs/language/type-system/#tuples)  containing the data that requires inspection.

Here, we’ve modified the  [previous](https://www.tradingview.com/pine-script-docs/writing/debugging/#extracting-data-from-local-scopes)  example script’s  `customMA()`  function to return a tuple containing values calculated from the local scopes. With this change, the script can call the function with a  _tuple declaration_  to make all the data available to the global scope. The script plots the  `q1Dbg`  and  `q3Dbg`  values, highlights the background when  `alphaDbg`  is 0, and uses  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  to display a formatted string containing all the extracted data in the  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  pane:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Extracting-data-from-local-scopes-Extraction-using-return-expressions-1.gNLzCXLM_ZdahrJ.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Extraction using return expressions demo",  overlay  =  true)  
  
//@variable The number of bars in the `customMA()` calculation.  
int  lengthInput  =  input.int(50,  "Length",  2)  
  
//@function Calculates a moving average that changes only when `source` is outside the first and third quartiles.  
//@param source The series of values to process.  
//@param length The number of bars in the quartile calculation.  
//@returns The adaptive moving average value.  
customMA(float  source,  int  length) =>  
//@variable The custom moving average.  
var  float  result  =  na  
// Calculate the 25th and 75th `source` percentiles (first and third quartiles) over `length` bars.  
float  q1  =  ta.percentile_linear_interpolation(source,  length,  25)  
float  q3  =  ta.percentile_linear_interpolation(source,  length,  75)  
//@variable The distance from `source` to its interquartile range.  
float  outerRange  =  0.0  
// To extract `upperRange` and `lowerRange` values, we need to make them accessible to the function's main scope.  
// Here, we added a tuple at the end of the `if` statement's local block, then declared a tuple in the function's  
// scope to hold the returned values.  
[upper,  lower] =  if  not  na(source)  
float  upperRange  =  source  -  q3  
float  lowerRange  =  q1  -  source  
outerRange  :=  math.max(upperRange,  lowerRange,  0.0)  
[upperRange,  lowerRange]  
//@variable The total range of `source` values over `length` bars.  
float  totalRange  =  ta.range(source,  length)  
//@variable Half the ratio of the `outerRange` to the `totalRange`.  
float  alpha  =  0.5  *  outerRange  /  totalRange  
// Mix the `source` with the `result` based on the `alpha` value.  
result  := (1.0  -  alpha) *  nz(result,  source) +  alpha  *  source  
// Return a tuple containing the `result` and other local variables.  
[result,  q1,  q3,  upper,  lower,  outerRange,  totalRange,  alpha]  
  
//@variable The `customMA()` of `close` over `lengthInput` bars.  
[maValue,  q1Dbg,  q3Dbg,  upperDbg,  lowerDbg,  outerRangeDbg,  totalRangeDbg,  alphaDbg] =  customMA(close,  lengthInput)  
  
// Plot the `maValue`.  
plot(maValue,  "Custom MA",  color.blue,  3)  
  
// When the bar is confirmed, log an "info" message containing formatted debug information for each variable.  
if  barstate.isconfirmed  
log.info(  
"maValue: {0,number,#.#####}\nq1Dbg: {1,number,#.#####}, q3Dbg: {2,number,#.#####}  
\nupperDbg: {3,number,#.#####}, lowerDbg: {4,number,#.#####}  
\nouterRangeDbg: {5,number,#.#####}, totalRangeDbg: {6,number,#.#####}  
\nalphaDbg: {7,number,#.#####}",  
maValue,  q1Dbg,  q3Dbg,  upperDbg,  lowerDbg,  outerRangeDbg,  totalRangeDbg,  alphaDbg  
)  
  
// Display the extracted `q1` and `q3` data in all plot locations.  
plot(q1Dbg,  "q1Dbg",  color.new(color.maroon,  50))  
plot(q3Dbg,  "q3Dbg",  color.new(color.teal,  50))  
// Highlight the chart's background when the extracted `alpha` value is 0.  
bgcolor(alphaDbg  ==  0.0  ?  color.new(color.orange,  90) :  na,  title  =  "`alpha == 0.0` highlight")  
``

Note that:

-   We added a tuple at the  _end_  of the  [if](https://www.tradingview.com/pine-script-reference/v6/#kw_if)  structure’s block to  _return_  the  `upperRange`  and  `lowerRange`  values from its local scope. The function assigns the result to a two-variable tuple in its main scope, enabling it to include the  [if](https://www.tradingview.com/pine-script-reference/v6/#kw_if)  structure’s local values in the return expression.

#### [Extraction using reference  types](https://www.tradingview.com/pine-script-docs/writing/debugging/#extraction-using-reference-types)

_Reference types_, including all  [special types](https://www.tradingview.com/pine-script-docs/language/type-system/#types)  and  [user-defined types (UDTs)](https://www.tradingview.com/pine-script-docs/language/type-system/#user-defined-types), serve as structures for creating  _objects_. Each object has an associated  _reference_  that distinguishes it and provides access to its data. Unlike fundamental types, variables of reference types  **do not**  store values directly. Instead, they hold the references for specific objects in memory.

An advanced, flexible way to extract data from local scopes is to initialize reference-type objects — such as instances of  [collections](https://www.tradingview.com/pine-script-docs/language/type-system/#collections)  or UDTs — in the global scope and store local variable data in their elements or fields.

This technique is especially useful for extracting data from  [user-defined functions](https://www.tradingview.com/pine-script-docs/language/user-defined-functions/)  and  [methods](https://www.tradingview.com/pine-script-docs/language/methods/#user-defined-methods). Although functions can access global variables, they cannot  _reassign_  them like global  [conditional structures](https://www.tradingview.com/pine-script-docs/language/conditional-structures/)  and  [loops](https://www.tradingview.com/pine-script-docs/language/loops/)  can. Consequently, they  _cannot update_  the data held by global variables of fundamental types. However, scripts do not modify reference types by reassigning their variables; they access objects via their references and use  _methods_  or  _field reassignments_  to update their data. As such, scripts  _can_  update global collections or UDT instances from inside function scopes.

For example, this modified version of our  [initial script](https://www.tradingview.com/pine-script-docs/writing/debugging/#extracting-data-from-local-scopes)  declares a global  `debugData`  variable that holds the reference of a  [map](https://www.tradingview.com/pine-script-reference/v6/#type_map)  with “string” keys and “float” values. Each  [map.put()](https://www.tradingview.com/pine-script-reference/v6/#fun_map.put)  call inside the  `customMA()`  scope modifies the map by adding a  _key-value pair_  containing a local variable’s  _name_  and  _value_. After calling  `customMA()`, the script uses  [map.get()](https://www.tradingview.com/pine-script-reference/v6/#fun_map.get)  calls on  `debugData`  to retrieve the stored information for its debugging outputs:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Extracting-data-from-local-scopes-Extraction-using-reference-types-1.BdAF7qQM_Z1mwS83.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Extraction using reference types demo",  overlay  =  true)  
  
//@variable The number of bars in the `customMA()` calculation.  
int  lengthInput  =  input.int(50,  "Length",  2)  
  
//@variable A global map of "string" keys and "float" values to store debug information from local scopes.  
var  map<string,  float> debugData  =  map.new<string,  float>()  
  
//@function Calculates a moving average that changes only when `source` is outside the first and third quartiles.  
//@param source The series of values to process.  
//@param length The number of bars in the quartile calculation.  
//@returns The adaptive moving average value.  
customMA(float  source,  int  length) =>  
//@variable The custom moving average.  
var  float  result  =  na  
// Calculate the 25th and 75th percentiles (first and third quartiles).  
float  q1  =  ta.percentile_linear_interpolation(source,  length,  25),  debugData.put("q1",  q1)  
float  q3  =  ta.percentile_linear_interpolation(source,  length,  75),  debugData.put("q3",  q3)  
//@variable The distance from `source` to its interquartile range.  
float  outerRange  =  0.0  
// Calculate the `outerRange` value when `source` is not `na`.  
if  not  na(source)  
float  upperRange  =  source  -  q3,  debugData.put("upperRange",  upperRange)  
float  lowerRange  =  q1  -  source,  debugData.put("lowerRange",  lowerRange)  
outerRange  :=  math.max(upperRange,  lowerRange,  0.0),  debugData.put("outerRange",  outerRange)  
//@variable The total range of `source` values over `length` bars.  
float  totalRange  =  ta.range(source,  length),  debugData.put("totalRange",  totalRange)  
//@variable Half the ratio of the `outerRange` to the `totalRange`.  
float  alpha  =  0.5  *  outerRange  /  totalRange,  debugData.put("alpha",  alpha)  
// Mix the `source` with the `result` based on the `alpha` value.  
result  := (1.0  -  alpha) *  nz(result,  source) +  alpha  *  source  
// Return the `result`.  
result  
  
//@variable The `customMA()` of `close` over `lengthInput` bars.  
float  maValue  =  customMA(close,  lengthInput)  
  
// Plot the `maValue`.  
plot(maValue,  "Custom MA",  color.blue,  3)  
  
// When the bar is confirmed, log an "info" message containing formatted debug information for each value.  
if  barstate.isconfirmed  
log.info(  
"maValue: {0,number,#.#####}\nq1: {1,number,#.#####}, q3: {2,number,#.#####}  
\nupperRange: {3,number,#.#####}, lowerRange: {4,number,#.#####}  
\nouterRange: {5,number,#.#####}, totalRange: {6,number,#.#####}  
\nalpha: {7,number,#.#####}",  
maValue,  debugData.get("q1"),  debugData.get("q3"),  debugData.get("upperRange"),  debugData.get("lowerRange"),  
debugData.get("outerRange"),  debugData.get("totalRange"),  debugData.get("alpha")  
)  
  
// Display the extracted `q1` and `q3` data in all plot locations.  
plot(debugData.get("q1"),  "q1",  color.new(color.maroon,  50))  
plot(debugData.get("q3"),  "q3",  color.new(color.teal,  50))  
// Highlight the chart's background when the extracted `alpha` value is 0.  
bgcolor(debugData.get("alpha") ==  0.0  ?  color.new(color.orange,  90) :  na,  title  =  "`alpha == 0.0` highlight")  
``

Note that:

-   The script declares  `debugData`  with the  [var](https://www.tradingview.com/pine-script-reference/v6/#kw_var)  keyword, meaning the assigned map reference  _persists_  across script executions.
-   A function executes its local code only when the script calls it. Therefore, the  `debugData`  map contains new information only after the  `customMA()`  call.
-   Because the  [map.put()](https://www.tradingview.com/pine-script-reference/v6/#fun_map.put)  calls in  `customMA()`  assign keys to the map that do not change across executions, each  `customMA()`  call  _replaces_  the  `debugData`  map’s existing data. Programmers can  _preserve_  data from specific executions with this technique by making a  _copy_  of the global collection after the function call.

### [Inspecting  loops](https://www.tradingview.com/pine-script-docs/writing/debugging/#inspecting-loops)

[Loops](https://www.tradingview.com/pine-script-docs/language/loops/)  are structures that execute a local code block repeatedly based on a  _counter_  ([for](https://www.tradingview.com/pine-script-reference/v6/#kw_for)), the  _contents_  of a  [collection](https://www.tradingview.com/pine-script-docs/language/type-system/#collections)  ([for…in](https://www.tradingview.com/pine-script-reference/v6/#kw_for...in)), or a  _condition_  ([while](https://www.tradingview.com/pine-script-reference/v6/#kw_while)). These structures allow scripts to perform repetitive tasks without redundant lines of code.

Because loops can execute their local code multiple times, programmers must use techniques to track local variables  _across iterations_  to debug them effectively. As with other structures, there are many ways to inspect loops. These sections cover two helpful techniques:  [collecting loop information](https://www.tradingview.com/pine-script-docs/writing/debugging/#collecting-loop-information)  and  [tracing loop executions](https://www.tradingview.com/pine-script-docs/writing/debugging/#tracing-loop-executions).

#### [Collecting loop  information](https://www.tradingview.com/pine-script-docs/writing/debugging/#collecting-loop-information)

One of the most effective loop inspection techniques is to use  [collections](https://www.tradingview.com/pine-script-docs/language/type-system/#collections)  or  [strings](https://www.tradingview.com/pine-script-docs/concepts/strings)  to gather information from the local scope on each iteration requiring inspection, then use the information in output functions  _after_  the loop terminates.

Let’s look at a simple loop debugging example using this technique. The following script calculates the average rate of change in the  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close)  price over lengths from 1 to  `lookbackInput`  bars inside a  [for](https://www.tradingview.com/pine-script-reference/v6/#kw_for)  loop. It declares an  `aroc`  variable in the global scope, sums the rates of change inside the loop, and then divides the sum by the  `lookbackInput`  to calculate the average:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Inspecting-loops-Collecting-loop-information-1.CbIJsIuS_1XDLYo.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Collecting loop information demo",  "Average ROC")  
  
//@variable The number of past bars in the calculation.  
int  lookbackInput  =  input.int(20,  "Lookback",  1)  
  
//@variable The average ROC of `close` prices over each length from 1 to `lookbackInput` bars.  
float  aroc  =  0.0  
  
// Calculation loop.  
for  length  =  1  to  lookbackInput  
//@variable The `close` value `length` bars ago.  
float  pastClose  =  close[length]  
//@variable The `close` rate of change over `length` bars.  
float  roc  = (close  -  pastClose) /  pastClose  
// Add the `roc` to the `aroc` value.  
aroc  +=  roc  
  
// Divide `aroc` by the `lookbackInput` to get the average.  
aroc  /=  lookbackInput  
  
// Plot the `aroc` series.  
plot(aroc,  "aroc",  color.blue,  3)  
``

To debug the script’s loop and ensure it works as intended, we can collect data from the local scope on each iteration and pass the result to the available output functions after the loop ends. In the script version below, we demonstrate two extraction methods. The first declares a global  `logText`  variable and concatenates  [formatted strings](https://www.tradingview.com/pine-script-docs/concepts/strings/#formatting-strings)  containing each loop iteration’s  `length`  and  `roc`  values. The second declares a global  `rocArray`  variable and pushes each iteration’s  `roc`  value into the referenced  [array](https://www.tradingview.com/pine-script-reference/v6/#type_array).

After terminating the loop, the script calls  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  to display the  `logText`  in the  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  pane if the bar is confirmed. It then displays a “string” representation of the  `rocArray`  inside  [label](https://www.tradingview.com/pine-script-reference/v6/#fun_label)  tooltips. Lastly, it shows the array’s  _first_  and  _last_  element values in all possible plot locations with the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Inspecting-loops-Collecting-loop-information-2.CS9aDiYb_2aGugI.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Collecting loop information demo",  "Average ROC",  max_labels_count  =  500)  
  
//@variable The number of bars in the calculation.  
int  lookbackInput  =  input.int(20,  "Lookback",  1)  
  
//@variable An array containing the `roc` value from each loop iteration.  
array<float> debugValues  =  array.new<float>()  
//@variable A string containing information about the `roc` value on each iteration.  
string  logText  =  ""  
  
//@variable The average ROC of `close` over lags from 1 to `lookbackInput` bars.  
float  aroc  =  0.0  
  
// Calculation loop.  
for  length  =  1  to  lookbackInput  
//@variable The `close` value `length` bars ago.  
float  pastClose  =  close[length]  
//@variable The `close` rate of change over `length` bars.  
float  roc  = (close  -  pastClose) /  pastClose  
// Add the `roc` to `aroc`.  
aroc  +=  roc  
  
// Concatenate a new "string" representation with the `debugText`.  
logText  +=  "\nlength: "  +  str.tostring(length) +  ", roc: "  +  str.tostring(roc)  
// Push the `roc` value into the `debugValues` array.  
array.push(debugValues,  roc)  
  
// Divide `aroc` by the `lookbackInput`.  
aroc  /=  lookbackInput  
  
// Plot the `aroc`.  
plot(aroc,  "aroc",  color.blue,  3)  
  
// Log the `logText` in the Pine Logs pane when the bar is confirmed.  
if  barstate.isconfirmed  
log.info(logText)  
  
// Draw a label with a tooltip containing a "string" representation of the `debugValues` array.  
label.new(bar_index,  aroc,  color  =  color.new(color.blue,  70),  tooltip  =  str.tostring(debugValues))  
  
// Plot the `roc` values from the first and last iteration.  
plot(array.first(debugValues),  "First iteration roc",  color.new(color.teal,  50),  2)  
plot(array.last(debugValues),  "Last iteration roc",  color.new(color.maroon,  50),  2)  
``

Note that:

-   Scripts can generate  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  and  [drawings](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-drawings)  directly from within a loop’s local scope. However, because loops usually execute their local code  _more than once_, calling  `log.*()`  or  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  functions inside the scope can result in numerous logs or  [labels](https://www.tradingview.com/pine-script-docs/visuals/text-and-shapes/#labels)  per bar. Logging on each iteration helps trace execution patterns, but it also limits the number of  _historical_  bars with available debug data. See the next section,  [Tracing loop executions](https://www.tradingview.com/pine-script-docs/writing/debugging/#tracing-loop-executions), for an example.
-   [Strings](https://www.tradingview.com/pine-script-docs/concepts/strings/)  can contain up to  _40,960_  characters, and large strings or repeated  [concatenation](https://www.tradingview.com/pine-script-docs/concepts/strings/#concatenation)  can impact a script’s performance. Therefore, extracting loop information with string concatenation is suitable for relatively  _small_  loops or inspecting specific variables. To extract large amounts of data from loops, use  [collections](https://www.tradingview.com/pine-script-docs/language/type-system/#collections)  instead.

#### [Tracing loop  executions](https://www.tradingview.com/pine-script-docs/writing/debugging/#tracing-loop-executions)

An alternative way to inspect a loop, without collecting information for use in the  _outer scope_, is to add  `log.*()`  calls directly to the loop’s  _local block_. Each iteration that activates the call results in a new message in the  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  pane, allowing programmers to trace the loop’s execution pattern in detail.

This simple script calculates a pseudorandom sample from a  [binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution)  using a  [for](https://www.tradingview.com/pine-script-reference/v6/#kw_for)  loop. The plotted  `sample`  series represents the number of  [math.random()](https://www.tradingview.com/pine-script-reference/v6/#fun_math.random)  calls across  `trialsInput`  iterations that return a value not exceeding the  `probabilityInput`  value. On each iteration where  `success`  is  `false`, the loop  _skips_  the rest of its block and moves to the next iteration. On other iterations, it increments the  `sample`  value by one:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Inspecting-loops-Tracing-loop-executions-1.KSzq3fPt_Z1u18SW.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Tracing loop executions demo",  "Binomial sample")  
  
//@variable The probability that each random trial succeeds.  
float  probabilityInput  =  input.float(0.5,  "Success probability",  0.0,  1.0)  
//@variable The number of random trials to test.  
float  trialsInput  =  input.int(10,  "Trials",  1)  
  
//@variable Random sample from a binomial distribution, i.e., the number of successes from `trialsInput` random trials.  
int  sample  =  0  
  
// Execute `trialsInput` loop iterations to calculate the `sample`.  
for  trial  =  1  to  trialsInput  
//@variable A pseudorandom value between 0 and 1.  
float  randValue  =  math.random()  
//@variable `true` if the `randValue` is less than or equal to the `probabilityInput`, `false` otherwise.  
bool  success  =  randValue  <=  probabilityInput  
// Skip the rest of the iteration if `success` is `false`.  
if  not  success  
continue  
// Otherwise, add 1 to the `sample`.  
sample  +=  1  
  
// Plot the `sample` as teal columns.  
plot(sample,  "Binomial sample",  color.teal,  1,  plot.style_columns)  
``

Below, we added  `log.*()`  function calls to generate  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  at specific points in the loop’s local block across iterations. Each loop iteration creates two new logs. The first log shows formatted text containing the local  `trial`,  `randValue`, and  `success`  variables’ values. The second log depends on the  [if](https://www.tradingview.com/pine-script-reference/v6/#kw_if)  statement. When the statement’s local code executes, the log is a  `"CONTINUE"`  message with the “warning” level. Otherwise, the second log is an “info” message containing the current iteration’s  `sample`  value:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Inspecting-loops-Tracing-loop-executions-2.f9od3pWY_Z2l30GG.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Tracing loop executions demo")  
  
//@variable The probability that each random trial succeeds.  
float  probabilityInput  =  input.float(0.5,  "Success probability",  0.0,  1.0)  
//@variable The number of random trials to test.  
float  trialsInput  =  input.int(10,  "Trials",  1)  
  
//@variable Random sample from a binomial distribution, i.e., the number of successes from `trialsInput` random trials.  
int  sample  =  0  
  
// Log a message to mark the point before the start of the loop.  
log.warning("---------------- LOOP START (bar {0,number,#})",  bar_index)  
  
// Execute `trialsInput` loop iterations to calculate the `sample`.  
for  trial  =  1  to  trialsInput  
//@variable A pseudorandom value between 0 and 1.  
float  randValue  =  math.random()  
//@variable `true` if the `randValue` is less than or equal to the `probabilityInput`, `false` otherwise.  
bool  success  =  randValue  <=  probabilityInput  
// Log a message containing the `trial`, `randValue`, and `success` information.  
log.info("trial: {0}, randValue: {1,number,#.########}, success: {2}",  trial,  randValue,  success)  
// Skip the rest of the iteration if `success` is `false`.  
if  not  success  
// Log a message before the `continue` statement.  
log.warning("CONTINUE")  
continue  
// Otherwise, add 1 to the `sample`.  
sample  +=  1  
// Log a message showing the iteration's `sample` value.  
log.info("sample: {0}",  sample)  
  
// Log a message to mark the point after the loop ends.  
log.warning("---------------- LOOP END\n\n")  
  
// Plot the `sample` as teal columns.  
plot(sample,  "Binomial sample",  color.teal,  1,  plot.style_columns)  
``

Note that:

-   The script includes  [log.warning()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.warning)  calls before and after the loop to mark its start and end in the Pine Logs pane. The message marking the start of the loop also displays the current  [bar_index](https://www.tradingview.com/pine-script-reference/v6/#var_bar_index)  value.
-   The Pine Logs pane shows only the most recent 10,000 logs created on historical bars. Because this script creates multiple logs per bar, the earliest message in the pane is from less than 10,000 bars back. Programmers can use conditional logic that limits  `log.*()`  calls in order to inspect a loop’s execution flow on earlier bars with this technique. See the  [Custom code filters](https://www.tradingview.com/pine-script-docs/writing/debugging/#custom-code-filters)  section to learn more.

### [Debugging  collections](https://www.tradingview.com/pine-script-docs/writing/debugging/#debugging-collections)

[Collections](https://www.tradingview.com/pine-script-docs/language/type-system/#collections)  are data structures that store values or references as  _elements_, which scripts access using indices or keys, depending on the type. These structures can contain a lot of information, as the maximum number of elements across all instances of each collection type is 100,000.

Programmers can inspect a collection’s data using various techniques, depending on the types they contain and their sizes. The most common approaches include:

-   Creating a “string” representation of the collection with  [str.tostring()](https://www.tradingview.com/pine-script-reference/v6/#fun_str.tostring)  and displaying the result using  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  or other text outputs.
-   Retrieving specific elements from the collection, then creating  [formatted strings](https://www.tradingview.com/pine-script-docs/concepts/strings/#formatting-strings)  for logging, or using the element values or references in other output processes.

#### [Displaying collection  strings](https://www.tradingview.com/pine-script-docs/writing/debugging/#displaying-collection-strings)

The simplest way to inspect the data of  [arrays](https://www.tradingview.com/pine-script-docs/language/arrays/)  and  [matrices](https://www.tradingview.com/pine-script-docs/language/matrices/)  of “int”, “float”, “bool”, and “string” types is to generate “string” representations with the  [str.tostring()](https://www.tradingview.com/pine-script-reference/v6/#fun_str.tostring)  function, then display the results using  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  or other “string” outputs.

The following script calls  [request.security_lower_tf()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.security_lower_tf)  to retrieve a “float”  [array](https://www.tradingview.com/pine-script-reference/v6/#type_array)  containing  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close)  prices for each lower-timeframe bar within the current chart bar, which it uses to calculate an average intrabar price. Then, it calculates the ratio of the difference between the bar’s price and the intrabar average to the bar’s total range. The script plots the resulting ratio and its EMA in a separate pane:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Debugging-collections-Displaying-collection-strings-1.C-bZsQtI_p3U9Y.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Displaying collection strings demo")  
  
//@variable The length of the EMA.  
int  lengthInput  =  input.int(20,  "EMA length",  1)  
  
//@variable An array of `close` prices requested for the chart's symbol at the 1-minute timeframe.  
array<float> intrabarPrices  =  request.security_lower_tf("",  "1",  close)  
  
//@variable The average `close` price of the intrabars within the current chart bar.  
float  avgPrice  =  intrabarPrices.avg()  
//@variable The bar's total range.  
float  barRange  =  high  -  low  
  
//@variable The difference between `close` and `avgPrice`, normalized by the `barRange`.  
float  ratio  = (close  -  avgPrice) /  barRange  
//@variable The EMA of the `ratio`.  
float  smoothed  =  ta.ema(ratio,  lengthInput)  
  
// Plot the `ratio` series as conditionally-colored columns.  
plot(ratio,  "",  ratio  >  0  ?  color.teal  :  color.maroon,  1,  plot.style_columns)  
// Display the `smoothed` series as a translucent orange area plot.  
plot(smoothed,  "",  color.new(color.orange,  40),  1,  plot.style_area)  
``

To verify the ratio’s calculations, we can inspect the data stored in the  `intrabarPrices`  array by converting it to a “string” value and displaying the result for each bar.

The script version below declares a  `debugText`  variable that holds a  [formatted string](https://www.tradingview.com/pine-script-docs/concepts/strings/#formatting-strings)  representing the  `intrabarPrices`  array, the array’s size, and the  `avgPrice`  value. The script calls the  `log.*()`  functions to display the  `debugText`  value for each bar in the  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  pane:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Debugging-collections-Displaying-collection-strings-2.DKihV-eb_Z159pA0.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Displaying collection strings demo")  
  
//@variable The length of the EMA.  
int  lengthInput  =  input.int(20,  "EMA length",  1)  
  
//@variable An array of `close` prices requested for the chart's symbol at the 1-minute timeframe.  
array<float> intrabarPrices  =  request.security_lower_tf("",  "1",  close)  
  
//@variable The average `close` price of the intrabars within the current chart bar.  
float  avgPrice  =  intrabarPrices.avg()  
//@variable The bar's total range.  
float  barRange  =  high  -  low  
  
//@variable The difference between `close` and `avgPrice`, normalized by the `barRange`.  
float  ratio  = (close  -  avgPrice) /  barRange  
//@variable The EMA of the `ratio`.  
float  smoothed  =  ta.ema(ratio,  lengthInput)  
  
// Plot the `ratio` series as conditionally-colored columns.  
plot(ratio,  "",  ratio  >  0  ?  color.teal  :  color.maroon,  1,  plot.style_columns)  
// Display the `smoothed` series as a translucent orange area plot.  
plot(smoothed,  "",  color.new(color.orange,  40),  1,  plot.style_area)  
  
//@variable A "string" representation of `intrabarPrices`, `intrabarPrices.size()`, and the `avgPrice`.  
string  debugText  =  str.format(  
"\nintrabarPrices: {0}\nsize: {1}\navgPrice: {2,number,#.#####}",  
str.tostring(intrabarPrices),  intrabarPrices.size(),  avgPrice  
)  
  
// Log the `debugText` with the "info" or "warning" level, depending on whether the bar is confirmed.  
switch  
barstate.isconfirmed  =>  log.info(debugText)  
=>  log.warning(debugText)  
``

Note that:

-   The script calls  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  on confirmed bars and  [log.warning()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.warning)  on the open bar. Users can  [filter](https://www.tradingview.com/pine-script-docs/writing/debugging/#filtering-logs)  the logs by  [logging level](https://www.tradingview.com/pine-script-docs/writing/debugging/#logging-level)  to inspect confirmed and unconfirmed bars’ logs separately.
-   For larger collections whose “string” representations  _exceed_  40,960 characters or cause excessive memory use, programmers can split them into  _smaller parts_  and convert them to strings separately. Alternatively, they can inspect  [individual elements](https://www.tradingview.com/pine-script-docs/writing/debugging/#inspecting-individual-elements)  via the  `*.get()`  method or  [for…in](https://www.tradingview.com/pine-script-reference/v6/#kw_for...in)  loops.

TipIn contrast to  [arrays](https://www.tradingview.com/pine-script-docs/language/arrays/)  and  [matrices](https://www.tradingview.com/pine-script-docs/language/matrices/)  of numeric values, Boolean values, or strings,  [maps](https://www.tradingview.com/pine-script-docs/language/maps/)  of such types  _do not_  have built-in “string” representations. However, programmers can inspect a map’s contents with this technique by using  [map.keys()](https://www.tradingview.com/pine-script-reference/v6/#fun_map.keys)  and  [map.values()](https://www.tradingview.com/pine-script-reference/v6/#fun_map.values)  to retrieve  _key_  and  _value_  arrays, then calling  [str.tostring()](https://www.tradingview.com/pine-script-reference/v6/#fun_str.tostring)  to convert those arrays to “string” values.

#### [Inspecting individual  elements](https://www.tradingview.com/pine-script-docs/writing/debugging/#inspecting-individual-elements)

Collections of “color” or non-fundamental types (e.g.,  [labels](https://www.tradingview.com/pine-script-docs/visuals/text-and-shapes/#labels))  _do not_  have built-in “string” representations. Consequently, the technique described in the  [Displaying collection strings](https://www.tradingview.com/pine-script-docs/writing/debugging/#displaying-collection-strings)  section does not work for them.

To inspect a collection that does not have a built-in “string” format, programmers can retrieve elements individually within  [for…in](https://www.tradingview.com/pine-script-reference/v6/#kw_for...in)  loops or using methods such as  `*.get()`, then use those elements in custom “string” constructions or other output routines.

Consider the following example, which calculates the ratio of  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close)  changes to the overall  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close)  range over  `lengthInput`  bars. It plots the resulting  `osc`  in a separate pane, and it draws a  [label](https://www.tradingview.com/pine-script-reference/v6/#type_label)  on the main chart pane each time the variable’s absolute value is 1:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Debugging-collections-Inspecting-individual-elements-1.DejiM-hQ_X72Tr.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Inspecting individual elements demo")  
  
//@variable The number of bars in the calculation.  
int  lengthInput  =  input.int(20,  "Length",  2)  
  
//@variable The change in price across `lengthInput` - 1 bars.  
float  priceChange  =  ta.change(close,  lengthInput  -  1)  
//@variable The total `close` range over `lengthInput` bars.  
float  priceRange  =  ta.range(close,  lengthInput)  
  
//@variable The ratio of the `priceChange` to the `priceRange`.  
float  osc  =  priceChange  /  priceRange  
  
//@variable Teal if `osc` is positive, maroon otherwise.  
color  oscColor  =  osc  >  0  ?  color.teal  :  color.maroon  
  
// Draw a label at the current bar's `bar_index` and `close` displaying `priceChange` when `osc` is 1 or -1.  
if  math.abs(osc) ==  1  
string  labelText  =  str.format("priceChange: {0,number,#.####}",  priceChange)  
label.new(bar_index,  close,  labelText,  color  =  oscColor,  textcolor  =  color.white,  force_overlay  =  true)  
  
// Plot the `osc` using the `oscColor`.  
plot(osc,  "Oscillator",  oscColor,  1,  plot.style_area)  
``

When a script creates  [labels](https://www.tradingview.com/pine-script-docs/visuals/text-and-shapes/#labels), it  _automatically_  maintains an  [array](https://www.tradingview.com/pine-script-reference/v6/#type_array)  containing each active label’s reference. Programmers can access this array using the  [label.all](https://www.tradingview.com/pine-script-reference/v6/#var_label.all)  variable, and thus inspect each individual label’s properties on any bar.

In the version below, the script executes a  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  call to display the current  [bar_index](https://www.tradingview.com/pine-script-reference/v6/#var_bar_index)  and the size of the  [label.all](https://www.tradingview.com/pine-script-reference/v6/#var_label.all)  array for the latest bar. Then, it iterates through the array with a  [for…in](https://www.tradingview.com/pine-script-reference/v6/#kw_for...in)  loop. On each iteration, the script calls  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  to log formatted text containing the array index and the corresponding label’s  `x`,  `y`, and  `text`  properties. Additionally, the script plots the oldest and newest active labels’ y-coordinates on each bar:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Debugging-collections-Inspecting-individual-elements-2.CxLrVvEC_SozMo.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Inspecting individual elements demo")  
  
//@variable The number of bars in the calculation.  
int  lengthInput  =  input.int(20,  "Length",  2)  
  
//@variable The change in price across `lengthInput` - 1 bars.  
float  priceChange  =  ta.change(close,  lengthInput  -  1)  
//@variable The total `close` range over `lengthInput` bars.  
float  priceRange  =  ta.range(close,  lengthInput)  
  
//@variable The ratio of the `priceChange` to the `priceRange`.  
float  osc  =  priceChange  /  priceRange  
  
//@variable Teal if `osc` is positive, maroon otherwise.  
color  oscColor  =  osc  >  0  ?  color.teal  :  color.maroon  
  
// Draw a label at the current bar's `bar_index` and `close` displaying `priceChange` when `osc` is 1 or -1.  
if  math.abs(osc) ==  1  
string  labelText  =  str.format("priceChange: {0,number,#.####}",  priceChange)  
label.new(bar_index,  close,  labelText,  color  =  oscColor,  textcolor  =  color.white,  force_overlay  =  true)  
  
// Plot the `osc` using the `oscColor`.  
plot(osc,  "Oscillator",  oscColor,  1,  plot.style_area)  
  
// On the first or last tick of the latest bar, inspect all labels on the chart.  
if  barstate.islast  and (barstate.isnew  or  barstate.isconfirmed)  
// Log a message containing the current `bar_index` and `label.all.size()`.  
log.info("Current bar: {0,number,#}, Active labels: {1}",  bar_index,  label.all.size())  
// Loop through the `label.all` array.  
for [i,  lbl] in  label.all  
// Log a message containing the array index (`i`) and the label's `x`, `y`, and `text` properties.  
log.info(  
"{0}, x: {1,number,#}, y: {2,number,#.#####}, text: {3}",  i,  lbl.get_x(),  lbl.get_y(),  lbl.get_text()  
)  
  
// Initialize variables for the oldest and newest active labels.  
label  oldestLabel  =  na  
label  newestLabel  =  na  
// Reassign the variables to the first and last labels in `label.all` when the array is not empty.  
if  label.all.size() >  0  
oldestLabel  :=  label.all.first()  
newestLabel  :=  label.all.last()  
  
// Plot the y-coordinate history of the `oldestLabel` and `newestLabel`.  
plot(label.get_y(oldestLabel),  "oldestLabel y-coordinate",  color.fuchsia,  force_overlay  =  true)  
plot(label.get_y(newestLabel),  "newestLabel y-coordinate",  color.aqua,  force_overlay  =  true)  
``

Note that:

-   It is not possible to obtain  _all_  properties from drawing objects. For example, there is no built-in method to retrieve a label’s color. Some other types, such as  [table](https://www.tradingview.com/pine-script-reference/v6/#type_table), do not have  `*.get_*()`  methods. If an object’s properties are not directly accessible, programmers can create separate variables for the arguments of the drawing’s  `*.new()`  or  `*.set_*()`  function, and then use those variables for debugging.
-   In the above image, the logs show that the  [label.all](https://www.tradingview.com/pine-script-reference/v6/#var_label.all)  array contains 55 elements. By default, Pine limits the number of labels to approximately 50, but the  _precise_  number of active labels varies. Programmers can increase the label drawing limit using the  `max_labels_count`  parameter of the  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  or  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  declaration statement.

### [Debugging objects of  UDTs](https://www.tradingview.com/pine-script-docs/writing/debugging/#debugging-objects-of-udts)

[User-defined types (UDTs)](https://www.tradingview.com/pine-script-docs/language/type-system/#user-defined-types)  define the structures of  [objects](https://www.tradingview.com/pine-script-docs/language/objects/). Objects contain a fixed set of  _fields_, where each field can hold a separate value or reference to another specified type, even to another instance of the  _same_  user-defined type.

Because UDT objects can organize values and references to an arbitrary number of various  _different_  types, Pine does not have a built-in method to convert UDT objects to strings. Instead, to debug these structures, programmers must retrieve data from each  _field_  that requires inspection.

The following example defines a custom  `Data`  type with three fields. The first two fields reference  [arrays](https://www.tradingview.com/pine-script-docs/language/arrays/)  that hold successive price and time values. The third field specifies the number of bars between each new data sample. The script creates a new object of this type with a randomized  `length`  field on the first bar, then updates its arrays on bars whose  [bar_index](https://www.tradingview.com/pine-script-reference/v6/#var_bar_index)  values are divisible by that field.

The script uses  [array.covariance()](https://www.tradingview.com/pine-script-reference/v6/#fun_array.covariance)  and  [array.variance()](https://www.tradingview.com/pine-script-reference/v6/#fun_array.variance)  on the object’s  `prices`  and  `times`  arrays to calculate a time-based slope of the collected data, and then plots the result on the chart:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Debugging-objects-of-udts-1.BNdDHvUW_vOGtv.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Debugging objects of UDTs demo")  
  
//@type A structure for storing time and price information once every `sampleMult` bars.  
//@field prices References an array of "float" price values.  
//@field times References an array of "int" UNIX timestamps.  
//@field sampleMult Number of bars per sample.  
type  Data  
array<float> prices  
array<int> times  
int  sampleMult  
  
//@variable The initial seed for the `math.random()` function.  
int  seedInput  =  input.int(1234,  "Seed",  1)  
  
//@variable References a `Data` object with arrays of 10 elements and a pseudorandom `sampleMult` value.  
var  Data  data  =  Data.new(array.new<float>(10),  array.new<int>(10),  int(math.random(1,  11,  seedInput)))  
  
// Queue new data through the `prices` and `times` arrays of the `Data` object once every `data.sampleMult` bars.  
if  bar_index  %  data.sampleMult  ==  0  
data.prices.push(close)  
data.times.push(time)  
data.prices.shift()  
data.times.shift()  
  
//@variable The time-based slope calculated from the `data` array fields.  
float  slope  =  array.covariance(data.prices,  data.times) /  data.times.variance()  
  
// Plot the `slope` value.  
plot(slope,  "Slope",  slope  >  0  ?  color.teal  :  color.maroon,  3)  
``

To verify and understand the script’s calculations, we can  _extract_  information from the  `Data`  object’s  _fields_  and inspect the data with  [Pine Logs](https://www.tradingview.com/pine-script-docs/writing/debugging/#pine-logs)  or other outputs.

The script version below includes a  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  call inside the  [if](https://www.tradingview.com/pine-script-reference/v6/#kw_if)  structure. The call displays  [formatted text](https://www.tradingview.com/pine-script-docs/concepts/strings/#formatting-strings)  representing information from the  `Data`  object’s  `prices`,  `times`, and  `length`  fields in the Pine Logs pane. Now, we can view each change to the object’s data to confirm the script’s behavior:

![image](https://www.tradingview.com/pine-script-docs/_astro/Debugging-Tips-and-techniques-Debugging-objects-of-udts-2.DboJuwuM_Z1kAouY.webp)

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

``//@version=6  
indicator("Debugging objects of UDTs demo")  
  
//@type A structure for storing time and price information once every `sampleMult` bars.  
//@field prices References an array of "float" price values.  
//@field times References an array of "int" UNIX timestamps.  
//@field sampleMult Number of bars per sample.  
type  Data  
array<float> prices  
array<int> times  
int  sampleMult  
  
//@variable The initial seed for the `math.random()` function.  
int  seedInput  =  input.int(1234,  "Seed",  1)  
  
//@variable References a `Data` object with arrays of 10 elements and a pseudorandom `sampleMult` value.  
var  Data  data  =  Data.new(array.new<float>(10),  array.new<int>(10),  int(math.random(1,  11,  seedInput)))  
  
// Queue new data through the `prices` and `times` arrays of the `Data` object once every `data.sampleMult` bars.  
if  bar_index  %  data.sampleMult  ==  0  
data.prices.push(close)  
data.times.push(time)  
data.prices.shift()  
data.times.shift()  
  
// Log formatted text containing information from the `Data` object's `prices`, `times`, and `sampleMult`  
// fields with the "info" or "warning" level.  
string  fString  =  "Data object fields:\n\nprices: {0}\n\ntimes: {1}\n\nsampleMult: {2}\n-------"  
switch  
barstate.isconfirmed  =>  log.info(fString,  str.tostring(data.prices),  str.tostring(data.times),  data.sampleMult)  
=>  log.warning(fString,  str.tostring(data.prices),  str.tostring(data.times),  data.sampleMult)  
  
//@variable The time-based slope calculated from the `data` array fields.  
float  slope  =  array.covariance(data.prices,  data.times) /  data.times.variance()  
  
// Plot the `slope` value.  
plot(slope,  "Slope",  slope  >  0  ?  color.teal  :  color.maroon,  3)  
``

Note that:

-   The script calls  [log.info()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.info)  on confirmed bars and  [log.warning()](https://www.tradingview.com/pine-script-reference/v6/#fun_log.warning)  on open bars, allowing users to  [filter](https://www.tradingview.com/pine-script-docs/writing/debugging/#filtering-logs)  the results by  [logging level](https://www.tradingview.com/pine-script-docs/writing/debugging/#logging-level)  in the Pine Logs pane.

### [Organization and  readability](https://www.tradingview.com/pine-script-docs/writing/debugging/#organization-and-readability)

Source code that is organized and easy to read is typically simpler to debug. Furthermore, well-written code is more straightforward for programmers to maintain and improve over time. Therefore, we recommend prioritizing organization and readability throughout the script-writing process, especially while debugging.

Below are a few helpful coding recommendations based on our  [Style guide](https://www.tradingview.com/pine-script-docs/writing/style-guide/)  and best practices:

-   Follow the  [script organization](https://www.tradingview.com/pine-script-docs/writing/style-guide/#script-organization)  guidelines. Organizing scripts based on this structure makes different parts of the code simple to locate and inspect.
-   Use  _identifiers_  that you can read, distinguish, and understand. When a code contains unclear identifiers, it is often harder to debug efficiently. See our  [Naming conventions](https://www.tradingview.com/pine-script-docs/writing/style-guide/#naming-conventions)  to learn our recommended identifier format.
-   Use  _type keywords_  to signify the qualified types that variables and parameters can accept. Although Pine can usually  _infer_  variable and parameter types, declaring them explicitly improves readability and helps programmers distinguish between assignment and reassignment operations. Plus, it enables Pine’s autosuggest feature to display more relevant type-based suggestions.
-   Document the code using comments and  [compiler annotations](https://www.tradingview.com/pine-script-docs/language/script-structure/#compiler-annotations)  (`//@function`,  `//@variable`, etc.). The Pine Editor’s autosuggest displays the text from annotations when the mouse pointer hovers over identifiers, making it simple to recall what different parts of the code represent.
