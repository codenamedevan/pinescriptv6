# Release notes

## 2026

### [April  2026](https://www.tradingview.com/pine-script-docs/release-notes/#april-2026)

#### Multiline  strings

We’ve added support for  multiline strings. A multiline string is a literal “string” value enclosed by  _three_  pairs of quotation marks (e.g.,  `"""..."""`) or apostrophes (e.g.,  `'''...'''`). Unlike  single-line string  syntax (e.g.,  `"..."`), which typically defines a literal string on a single line of code, the multiline syntax can define a literal string across  _multiple_  visible code lines.

All code between the  `"""`  or  `'''`  delimiters in a multiline string definition represents  _literal text_. Each code line between the delimiters defines a separate  _text line_  for the string. The resulting string automatically includes the  _newline_  control character between each separate line; it does  _not_  require the  `\n`  [escape sequence](https://www.tradingview.com/pine-script-docs/concepts/strings/#escape-sequences)  to insert the character at those points. For example:

```pine
//@version=6
indicator("Multiline string demo")

//@variable A multiline string enclosed by `"""` delimiters.
string multilineStr = """This is a multiline string.
Each of these code lines literally represents a separate line of text. 
The newline character is automatically included before each new line. 
We do not have to manually add the `\\n` escape sequence to separate the lines."""

// Log the string's text in the Pine Logs pane on the first bar.
if barstate.isfirst
    log.info(multilineStr)
```

Likewise, multiline strings automatically include all spaces used for indentation in the code, regardless of the code blocks that include their definitions. For example:

```pine
//@version=6
indicator("Indentation in multiline strings demo")

//@variable A multiline string with indentation defined in the global scope.
string globalIndentedStr = """No indentation.
Also no indentation.
 Indented by one space.
    Indented by four spaces.
            Indented by 12 spaces.
"""

if barstate.islastconfirmedhistory
    //@variable A multiline string with indentation defined in a local block.
    //          Although the block requires four spaces of intendation for its statements, the string itself does not.
    //          Any indentation in the definition is still included literally in the string.
    string localIndentedStr = """---
No indentation.
    Indented by four spaces. 
    """

    // Concatenate both strings and display the result in a label.
    label.new(bar_index, 0, globalIndentedStr + localIndentedStr, textalign = text.align_left)
```
Expressions can use multiline strings as operands and arguments, just like single-line strings. Therefore, programmers can use the multiline string syntax to create unique line wrapping formats in their code. For example:

```pine
//@version=6
indicator("Line wrapping expressions with multiline strings demo")

//@variable A string formed by concatenating three multiline strings.
string concatenated = """String 1
""" + """String 2
""" + '''String 3
'''

// Log the resulting string's text in the Pine Logs pane on the first bar.
if barstate.isfirst
    log.info(concatenated)
```
See the Multiline strings section of the Strings page to learn more about multiline strings and how they differ from single-line strings.

### Updated editor settings
The Pine Editor’s settings include a new “Use word wrap by default” checkbox. If selected, the Pine Editor automatically applies word wrapping when the user creates a new script, opens an existing script, or reopens the editor. The user can deactivate or reactivate word wrap for the current editor session at any time by using the  `Alt + Z`/`Option + Z`  hotkey  or the “Toggle Word Wrap” option in the command palette.

### Sorting UDT collections
The array.sort(), array.sort_indices(), and matrix.sort() functions can now sort arrays and matrices that store IDs of user-defined types (UDTs). These functions sort UDT collections by comparing values from one of the “int”, “float”, or “string” fields in the objects referenced by their elements.

The new `sort_field` _parameter_  specifies  _which_  object field a call to these functions compares to sort a UDT collection. It accepts either a  _“const int”_  or  _“const string”_  argument:

-   A “const int” argument specifies a field by its  _field index_, where a value of 0 (the default) refers to the  _first_  field in the  [type declaration](https://www.tradingview.com/pine-script-docs/language/type-system/#user-defined-types).
-   A “const string” argument specifies a field by its assigned  _name_.
For example:


```pine
//@version=6
indicator("Sorting UDT collections demo")

//@type  A custom type for creating objects that store "float", "int", and "string" data.
type Data
    float  price     // Field index 0.
    int    timestamp // Field index 1.
    string note      // Field index 2.

//@function Create a formatted string representation of an array of `Data` IDs.
repr(array<Data> this) =>
    string result = "\n[\n"
    for data in this
        result += str.format(
            "(price: {0,number,0.000}, timestamp: {1,number,0}, note: {2}),\n", 
            data.price, data.timestamp, data.note
        )
    result := str.replace(str.substring(result, 0, str.length(result) - 2), "[ ", "[") + "\n]"

if barstate.islastconfirmedhistory
    //@variable References an array of `Data` objects representing data from a specific timeframe.
    array<Data> reqData = array.new<Data>(1, Data.new(hl2, time, timeframe.period))
    //@variable The typical number of seconds in the chart's timeframe.
    int tfSeconds = timeframe.in_seconds()
    //@variable References an array of timeframe strings.
    array<string> timeframes = array.from(
        timeframe.from_seconds(tfSeconds * 2), timeframe.from_seconds(tfSeconds * 8), 
        timeframe.from_seconds(tfSeconds * 4)
    )

    // Request a `Data` object for each timeframe and push the object's ID into the `reqData` array.
    for tf in timeframes
        reqData.push(request.security("", tf, Data.new(hl2, time, timeframe.period)))

    // Log a message showing the unsorted array's structure.
    log.info("Unsorted" + repr(reqData))

    //#region Display the structure of the array after sorting it using each field. 

    // First, let's sort the `reqData` array using the default `sort_field` argument (0) and log the result.
    // The default value refers to the *first field* listed in the `Data` type declaration (`price`). 
    array.sort(reqData)
    log.info("Sorted using field 0 ('price')" + repr(reqData))

    // Next, let's sort the array using the field named `timestamp` (at index 1) and log the result.
    reqData.sort(sort_field = "timestamp")
    log.info("Sorted using field named 'timestamp' (index 1)" + repr(reqData))

    // Lastly, let's sort the array using the field at index 2 (`note`) and log the result.
    reqData.sort(sort_field = 2)
    log.info("Sorted using field 2 ('note')" + repr(reqData))
    //#endregion
```

Refer to the [Sorting arrays of user-defined types](https://www.tradingview.com/pine-script-docs/language/arrays/#sorting-arrays-of-user-defined-types) section of the [Arrays](https://www.tradingview.com/pine-script-docs/language/arrays/) page and the [Sorting matrices of user-defined types](https://www.tradingview.com/pine-script-docs/language/matrices/#sorting-matrices-of-user-defined-types) section of the [Matrices](https://www.tradingview.com/pine-script-docs/language/matrices/) page to learn more about sorting UDT collections and the `sort_field` parameter.

```pine

```


### January 2026

Footprint requests
We’ve added a new request.footprint() function and two new data types, footprint and volume_row. These features enable scripts to retrieve and work with volume footprint data for a chart’s dataset:

The _request.footprint()_ function requests volume footprint information for the current bar. It returns either the reference (ID) of a footprint object, or na if no footprint data is available for the bar.
A footprint object contains the available volume footprint data retrieved for a specific bar. Scripts can use IDs of this type with the new footprint.*() functions to retrieve a bar’s overall footprint information, such as its total “buy” or “sell” volume and overall volume delta, or to retrieve volume_row IDs for individual rows within the footprint, including those for the bar’s Point of Control (POC) and Value Area (VA) boundaries.
A volume_row object contains data for a specific footprint row. Scripts can use IDs of this type with the new volume_row.*() functions to retrieve a footprint row’s information, including its price levels, volume values, volume delta, and imbalances.
Programmers who have a Premium or Ultimate plan can use these features to create scripts that analyze volume footprint information across bars or perform custom footprint-based calculations. For example:

```pine
//@version=6
indicator("Footprint requests demo", overlay = true, behind_chart = false, max_labels_count = 50)

//@variable The number of ticks to use as the price interval for each footprint row.
int numTicksInput = input.int(100, "Ticks per footprint row", minval = 1) 
//@variable The percentage of each footprint's total volume to use for calculating the Value Area (VA).
int vaInput = input.int(70, "Value Area percentage", minval = 1)

//@variable References a `footprint` object for the current bar, or holds `na` if no footprint data is available.
footprint reqFootprint = request.footprint(numTicksInput, vaInput)

// If footprint data is available for the bar, retrieve overall and row-wise information for the footprint.
[vaUpper, vaLower, pocUpper, pocLower] = if not na(reqFootprint)
    // Retrieve bar's total buy volume, sell volume, and volume delta from `footprint` object referenced by `reqFootprint`.
    // These `footprint.*()` functions return "float" volume values.
    float buyVolume   = reqFootprint.buy_volume()
    float sellVolume  = reqFootprint.sell_volume()
    float deltaVolume = reqFootprint.delta()

    // Get Value Area High (VAH), Value Area Low (VAL), and Point of Control (POC) row IDs from the `footprint` object.
    // These `footprint.*()` functions return IDs of `volume_row` objects containing data for the specific rows.
    volume_row vahRow = reqFootprint.vah()
    volume_row valRow = reqFootprint.val()
    volume_row pocRow = reqFootprint.poc()

    // Retrieve upper and lower price boundaries of VAH, VAL, and POC rows from `volume_row` objects.
    // These `volume_row.*()` functions return "float" price values.
    float vahUpperPrice = vahRow.up_price()
    float valLowerPrice = valRow.down_price()
    float pocUpperPrice = pocRow.up_price()
    float pocLowerPrice = pocRow.down_price()

    // Draw a label on each bar to show the footprint's volume and price levels as formatted text.
    string footprintInfo = str.format(
        "Total buy volume: {0}\nTotal sell volume: {1}\nVolume delta: {2}\n---\nPOC range: {3}–{4}\nVA range: {5}–{6}", 
        buyVolume, sellVolume, deltaVolume, pocLowerPrice, pocUpperPrice, valLowerPrice, vahUpperPrice
    )
    label.new(bar_index, high, text = footprintInfo, yloc = yloc.abovebar, size = 10)

    // Return VA and POC price boundaries to the variables in the tuple declaration.
    [vahUpperPrice, valLowerPrice, pocUpperPrice, pocLowerPrice] 

// Plot footprint row price boundaries to visualize VA and POC range of each bar. Hidden if requested footprint is `na`. 
plot(vaUpper,  "VAH upper", color.navy,    3, plot.style_stepline, linestyle = plot.linestyle_dotted)
plot(vaLower,  "VAL lower", color.blue,    3, plot.style_stepline, linestyle = plot.linestyle_dotted)
plot(pocUpper, "POC upper", color.purple,  4, plot.style_stepline)
plot(pocLower, "POC lower", color.fuchsia, 4, plot.style_stepline)
```

See the request.footprint() section of the Other timeframes and data page to learn more about footprint requests. For more information about the footprint and volume_row types and the functions in their namespaces, refer to the footprint and volume_row section of the Type system page.

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

