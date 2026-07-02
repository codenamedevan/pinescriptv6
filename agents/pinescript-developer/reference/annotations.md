
## Annotations

### @description

Sets a custom description for scripts that use the  [library()](https://www.tradingview.com/pine-script-reference/v6/#fun_library)  declaration statement. The text provided with this annotation will be used to pre-fill the "Description" field in the publication dialogue.

Example

```
//@version=6// @description Provides a tool to quickly output a label on the chart.library("MyLibrary")// @function Outputs a label with `labelText` on the bar's high.// @param labelText (series string) The text to display on the label.// @returns Drawn label.export drawLabel(string labelText) =>    label.new(bar_index, high, text = labelText)
```

### @enum

If placed above an enum declaration, it adds a custom description for the enum. The Pine Editor's autosuggest uses this description and displays it when a user hovers over the enum name. When used in library scripts, the descriptions of all enums using the  [export](https://www.tradingview.com/pine-script-reference/v6/#kw_export)  keyword will pre-fill the "Description" field in the publication dialogue.

Example

```
//@version=6indicator("Session highlight", overlay = true)//@enum       Contains fields with popular timezones as titles.//@field exch Has an empty string as the title to represent the chart timezone.enum tz    utc  = "UTC"    exch = ""    ny   = "America/New_York"    chi  = "America/Chicago"    lon  = "Europe/London"    tok  = "Asia/Tokyo"//@variable The session string.selectedSession = input.session("1200-1500", "Session")//@variable The selected timezone. The input's dropdown contains the fields in the `tz` enum.selectedTimezone = input.enum(tz.utc, "Session Timezone")//@variable Is `true` if the current bar's time is in the specified session.bool inSession = falseif not na(time("", selectedSession, str.tostring(selectedTimezone)))    inSession := true// Highlight the background when `inSession` is `true`.bgcolor(inSession ? color.new(color.green, 90) : na, title = "Active session highlight")
```

### @field

If placed above a  [type](https://www.tradingview.com/pine-script-reference/v6/#kw_type)  or  [enum](https://www.tradingview.com/pine-script-reference/v6/#kw_enum)  declaration, it adds a custom description for a field of the type/enum. After the annotation, users should specify the field name, followed by its description.

The Pine Editor's autosuggest uses this description and displays it when a user hovers over the type/enum or field name. When used in  [library()](https://www.tradingview.com/pine-script-reference/v6/#fun_library)  scripts, the descriptions of all types/enums using the  [export](https://www.tradingview.com/pine-script-reference/v6/#kw_export)  keyword will pre-fill the "Description" field in the publication dialogue.

Example

```
//@version=6indicator("New high over the last 20 bars", overlay = true)//@type A point on a chart.//@field index The index of the bar where the point is located, i.e., its `x` coordinate.//@field price The price where the point is located, i.e., its `y` coordinate.type Point    int index    float price//@variable If the current `high` is the highest over the last 20 bars, returns a new `Point` instance, `na` otherwise.Point highest = naif ta.highestbars(high, 20) == 0    highest := Point.new(bar_index, high)    label.new(highest.index, highest.price, str.tostring(highest.price))
```

### @function

If placed above a function declaration, it adds a custom description for the function.

The Pine Editor's autosuggest uses this description and displays it when a user hovers over the function name. When used in  [library()](https://www.tradingview.com/pine-script-reference/v6/#fun_library)  scripts, the descriptions of all functions using the  [export](https://www.tradingview.com/pine-script-reference/v6/#kw_export)  keyword will pre-fill the "Description" field in the publication dialogue.

Example

```
//@version=6// @description Provides a tool to quickly output a label on the chart.library("MyLibrary")// @function Outputs a label with `labelText` on the bar's high.// @param labelText (series string) The text to display on the label.// @returns Drawn label.export drawLabel(string labelText) =>    label.new(bar_index, high, text = labelText)
```

### @param

If placed above a function declaration, it adds a custom description for a function parameter. After the annotation, users should specify the parameter name, then its description.

The Pine Editor's autosuggest uses this description and displays it when a user hovers over the function name. When used in  [library()](https://www.tradingview.com/pine-script-reference/v6/#fun_library)  scripts, the descriptions of all functions using the  [export](https://www.tradingview.com/pine-script-reference/v6/#kw_export)  keyword will pre-fill the "Description" field in the publication dialogue.

Example

```
//@version=6// @description Provides a tool to quickly output a label on the chart.library("MyLibrary")// @function Outputs a label with `labelText` on the bar's high.// @param labelText (series string) The text to display on the label.// @returns Drawn label.export drawLabel(string labelText) =>    label.new(bar_index, high, text = labelText)
```

### @returns

If placed above a function declaration, it adds a custom description for what that function returns.

The Pine Editor's autosuggest uses this description and displays it when a user hovers over the function name. When used in  [library()](https://www.tradingview.com/pine-script-reference/v6/#fun_library)  scripts, the descriptions of all functions using the  [export](https://www.tradingview.com/pine-script-reference/v6/#kw_export)  keyword will pre-fill the "Description" field in the publication dialogue.

Example

```
//@version=6// @description Provides a tool to quickly output a label on the chart.library("MyLibrary")// @function Outputs a label with `labelText` on the bar's high.// @param labelText (series string) The text to display on the label.// @returns Drawn label.export drawLabel(string labelText) =>    label.new(bar_index, high, text = labelText)
```

### @strategy_alert_message

If used within a  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  script, it provides a default message to pre-fill the "Message" field in the alert creation dialogue.

Example

```
//@version=6strategy("My strategy", overlay=true, margin_long=100, margin_short=100)//@strategy_alert_message Strategy alert on symbol {{ticker}}longCondition = ta.crossover(ta.sma(close, 14), ta.sma(close, 28))if (longCondition)    strategy.entry("My Long Entry Id", strategy.long)strategy.exit("Exit", "My Long Entry Id", profit = 10 / syminfo.mintick, loss = 10 / syminfo.mintick)
```

### @type

If placed above a type declaration, it adds a custom description for the type.

The Pine Editor's autosuggest uses this description and displays it when a user hovers over the type name. When used in  [library()](https://www.tradingview.com/pine-script-reference/v6/#fun_library)  scripts, the descriptions of all types using the  [export](https://www.tradingview.com/pine-script-reference/v6/#kw_export)  keyword will pre-fill the "Description" field in the publication dialogue.

Example

```
//@version=6indicator("New high over the last 20 bars", overlay = true)//@type A point on a chart.//@field index The index of the bar where the point is located, i.e., its `x` coordinate.//@field price The price where the point is located, i.e., its `y` coordinate.type Point    int index    float price//@variable If the current `high` is the highest over the last 20 bars, returns a new `Point` instance, `na` otherwise.Point highest = naif ta.highestbars(high, 20) == 0    highest := Point.new(bar_index, high)    label.new(highest.index, highest.price, str.tostring(highest.price))
```

### @variable

If placed above a variable declaration, it adds a custom description for the variable.

The Pine Editor's autosuggest uses this description and displays it when a user hovers over the variable name.

Example

```
//@version=6indicator("New high over the last 20 bars", overlay = true)//@type A point on a chart.//@field index The index of the bar where the point is located, i.e., its `x` coordinate.//@field price The price where the point is located, i.e., its `y` coordinate.type Point    int index    float price//@variable If the current `high` is the highest over the last 20 bars, returns a new `Point` instance, `na` otherwise.Point highest = naif ta.highestbars(high, 20) == 0    highest := Point.new(bar_index, high)    label.new(highest.index, highest.price, str.tostring(highest.price))
```

### @version=

Specifies the Pine Script® version that the script will use. The number in this annotation should not be confused with the script's version number, which updates on every saved change to the code.

Example

```
//@version=6indicator("Pine v6 Indicator")plot(close)
```

Example

```
//This indicator has no version annotation, so it will try to use v1.//Pine Script® v1 has no function named `indicator()`, so the script will not compile.indicator("Pine v1 Indicator")plot(close)
```

Remarks

The version should always be specified. Otherwise, for compatibility reasons, the script will be compiled using Pine Script® v1, which lacks most of the newer features and is bound to confuse. This annotation can be anywhere within a script, but we recommend placing it at the top of the code for readability.
