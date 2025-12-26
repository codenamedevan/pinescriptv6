# Release notes

### December  2025

#### Updated line  wrapping

Scripts now have improved line wrapping behavior. Previously, all multiline text representing a  _single line_  of code required indenting each line after the first by any number of spaces that was  _not_  a multiple of four, because Pine reserved four-space indentation for local code blocks.

We’ve removed the indentation restriction for all parts of an expression or statement enclosed in  _parentheses_, including operations, function calls, and function parameter declarations. Scripts can now indent wrapped lines enclosed in parentheses by  _zero or more_  spaces, including multiples of four. For example:

### Code Example
```pine
//@version=6

// Before the update, wrapped lines in this code that start at multiples of four spaces caused compilation errors.

indicator(
    "Line wrapping between parentheses demo", // Indented by four spaces.
        overlay = true                        // Indented by eight spaces.
)                                             // No indentation.

float median = 0.5 * (
    ta.highest(20) + ta.lowest(20) // Indented by four spaces.
)                                  // No indentation.

plot(
median,              // No indentation.
  "Median",          // Indented by two spaces.
   chart.fg_color,   // Indented by three spaces.
    3                // Indented by four spaces.
)                    // No indentation.
```
However, if a line-wrapped expression is not enclosed in parentheses, all subsequent lines still require an indentation that is not a multiple of four spaces. For example:

### Code Example
```pine
//@version=6
indicator("Invalid line wrap demo", overlay = true)

// The second line that starts with `*` in this wrapped expression causes a compilation error.
// For the script to compile successfully, do any of the following:
// - Move that part of the expression to line 9.
// - Add another leading space to line 10 so that it doesn't start after a multiple of four spaces.
// - Enclose the entire expression in another set of parentheses. 
float median = 0.5 
    * ( 
    ta.highest(20) + ta.lowest(20)
)

plot(median)
```

## November 2025 

We’ve added a new variable, syminfo.isin, which holds a string containing the 12-character International Securities Identification Number (ISIN) for the security represented by the symbol, or an empty string if no ISIN is available. An ISIN uniquely identifies a security globally and does not vary across exchanges, unlike ticker symbols. As such, programmers can use this variable to identify a symbol’s underlying stock or other instrument, regardless of the name listed by an exchange. For example:

Holds a string representing a symbol's associated International Securities Identification Number (ISIN), or an empty string if there is no ISIN information available for the symbol. An ISIN is a 12-character alphanumeric code that uniquely identifies a security globally. Unlike ticker symbols, which can vary across exchanges, the ISIN for a security is consistent across exchanges. As such, programmers can use the ISIN to identify an underlying financial instrument, regardless of the exchange or the symbol name listed by an exchange.
For example, the ISIN associated with NASDAQ:AAPL and GETTEX:APC is US0378331005, because both symbols refer to the common stock from Apple Inc. In contrast, the ISIN for TSX:AAPL is CA03785Y1007, because the symbol refers to a different instrument: the Apple Inc. Canadian Depositary Receipt (CDR).

### Code Example
```pine
//@version=6
indicator("ISIN demo")

// Define inputs for two symbols to compare.
string symbol1Input = input.symbol("NASDAQ:AAPL", "Symbol 1")
string symbol2Input = input.symbol("GETTEX:APC",  "Symbol 2")

if barstate.islastconfirmedhistory
    // Retrieve ISIN strings for `symbol1Input` and `symbol2Input`.
    var string isin1 = request.security(symbol1Input, "", syminfo.isin)
    var string isin2 = request.security(symbol2Input, "", syminfo.isin)

    // Log the retrieved ISIN codes. 
    log.info("Symbol 1 ISIN: " + isin1)
    log.info("Symbol 2 ISIN: " + isin2)

    // Log an error message if one of the symbols does not have ISIN information.
    if isin1 == "" or isin2 == ""
        log.error("ISIN information is not available for both symbols.")
    // If both symbols do have ISIN information, log a message to confirm whether both refer to the same security.
    else if isin1 == isin2
        log.info("Both symbols refer to the same security.")
    else
        log.info("The two symbols refer to different securities.")
```

## October 2025

The time() and time_close() functions feature a new parameter: timeframe_bars_back. In contrast to the bars_back parameter, which determines the bar offset on the script’s main timeframe for the timestamp calculation, timeframe_bars_back determines the bar offset on the separate timeframe specified by the timeframe argument. If the timeframe_bars_back value is positive, the function calculates the timestamp of the past bar that is N bars back on the specified timeframe. If negative, it calculates the expected timestamp of the bar that is N bars forward on that timeframe.

If a call to time() or time_close() includes arguments for both the bars_back and timeframe_bars_back parameters, it determines the timestamp corresponding to the bars_back offset first. Then, it applies the timeframe_bars_back offset to that time to calculate the final timestamp. For example:

### Code Example
```pine
//@version=6
indicator("`bars_back` and `timeframe_bars_back` demo")

//@variable The number of bars back on the script's main timeframe (chart timeframe).
int barsBackInput = input.int(10, "Chart bar offset")
//@variable The number of bars back on the "1M" timeframe.
int tfBarsBackInput = input.int(3, "'1M' bar offset")

//@variable The opening UNIX timestamp of the current "1M" bar.
int monthTime = time("1M")
//@variable The opening time of the "1M" bar that contains the bar from `barsBackInput` bars back on the main timeframe. 
int offsetTime1 = time("1M", bars_back = barsBackInput)
//@variable The "1M" opening time that is `tfBarsBackInput` monthly bars back, relative to the "1M" bar that opens at `offsetTime1`.
//          This `time()` call first determines the "1M" bar time corresponding to `barsBackInput` bars back on the 
//          main timeframe, just like the previous call. Then, it calculates and returns the "1M" opening time that is 
//          `tfBarsBackInput` *monthly* bars back relative to that time.
int offsetTime2 = time("1M", bars_back = barsBackInput, timeframe_bars_back = tfBarsBackInput)

// Plot the values for visual comparison.
plot(monthTime, "No offset")
plot(offsetTime1, "`bars_back`", color.red)
plot(offsetTime2, "`bars_back` + `timeframe_bars_back`", color.purple)
// Log formatted timestamps in the Pine Logs pane.
log.info("\n{0}\n{1}\n{2}", str.format_time(monthTime), str.format_time(offsetTime1), str.format_time(offsetTime2))
```

