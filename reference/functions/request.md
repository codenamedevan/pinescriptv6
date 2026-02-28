
### request.financial()

Requests financial series for symbol.

Syntax

request.financial(symbol, financial_id, period, gaps, ignore_invalid_symbol, currency) → series float

Arguments

symbol (series string) Symbol. Note that the symbol should be passed with a prefix. For example: "NASDAQ:AAPL" instead of "AAPL".

financial_id (series string) Financial identifier. You can find the list of available ids via our  [Help Center](https://www.tradingview.com/?solution=43000564727).

period (series string) Reporting period. Possible values are "TTM", "FY", "FQ", "FH", "D".

gaps (simple barmerge_gaps) Merge strategy for the requested data (requested data automatically merges with the main series: OHLC data). Possible values include:  [barmerge.gaps_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_on),  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off).  [barmerge.gaps_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_on)  - requested data is merged with possible gaps ([na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  values).  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off)  - requested data is merged continuously without gaps, all the gaps are filled with the previous, nearest existing values. Default value is  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off).

ignore_invalid_symbol (input bool) An optional parameter. Determines the behavior of the function if the specified symbol is not found: if false, the script will halt and return a runtime error; if true, the function will return na and execution will continue. The default value is false.

currency (series string) Optional. Currency into which the symbol's financial metrics (e.g. Net Income) are to be converted. The conversion rate depends on the previous daily value of a corresponding currency pair from the most popular exchange. A spread symbol is used if no exchange provides the rate directly. Possible values: a "string" representing a valid currency code (e.g., "USD" or "USDT") or a constant from the  `currency.*`  namespace (e.g.,  [currency.USD](https://www.tradingview.com/pine-script-reference/v6/#const_currency.USD)  or  [currency.USDT](https://www.tradingview.com/pine-script-reference/v6/#const_currency.USDT)). The default is  [syminfo.currency](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.currency).

Example

```
//@version=6indicator("request.financial")f = request.financial("NASDAQ:MSFT", "ACCOUNTS_PAYABLE", "FY")plot(f)
```

Returns

Requested series.

See also

[request.security()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.security)[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)

### request.footprint()

Requests the ID of a  [footprint](https://www.tradingview.com/pine-script-reference/v6/#type_footprint)  object that contains data for calculating  [volume footprint](https://www.tradingview.com/support/solutions/43000726164/)  information for the current chart bar. Scripts can use the returned ID in calls to the  `footprint.*()`  functions to retrieve footprint data, including footprint rows, categorized volume sums, and volume delta.

Syntax

request.footprint(ticks_per_row, va_percent, imbalance_percent) → footprint

Arguments

ticks_per_row (simple int) The price range of each footprint row, expressed in ticks.

va_percent (simple int/float) Optional. The percentage of each footprint's total volume to use for calculating the value area (VA). The default is 70.

imbalance_percent (simple int/float) Optional. The percentage difference in volume for detecting row imbalances. Scripts can use  [volume_row](https://www.tradingview.com/pine-script-reference/v6/#type_volume_row)  IDs retrieved from the returned  [footprint](https://www.tradingview.com/pine-script-reference/v6/#type_footprint)  object in calls to  [volume_row.has_buy_imbalance()](https://www.tradingview.com/pine-script-reference/v6/#fun_volume_row.has_buy_imbalance)  and  [volume_row.has_sell_imbalance()](https://www.tradingview.com/pine-script-reference/v6/#fun_volume_row.has_sell_imbalance)  to identify imbalanced rows. A row is imbalanced if its "buy" volume exceeds the "sell" volume of the row below it by the specified percentage, or if its "sell" volume exceeds the "buy" volume of the row above it by the percentage. The default is 300.

Returns

The ID of a  [footprint](https://www.tradingview.com/pine-script-reference/v6/#type_footprint)  object containing volume footprint data for the current bar, or  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if no data is available.

Remarks

Only accounts with Premium or Ultimate  [plans](https://www.tradingview.com/pricing/?status=pro#comparison)  can use scripts that call this function.

A single script cannot include more than one  `request.footprint()`  call.

### request.quandl()

**Note:**  This function has been deprecated due to the API change from NASDAQ Data Link. Requests for "QUANDL" symbols are no longer valid and requests for them return a runtime error.

Some of the data previously provided by this function is available on TradingView through other feeds, such as "BCHAIN" or "FRED". Use Symbol Search to look for such data based on its description. Commitment of Traders (COT) data can be requested using the official  [LibraryCOT](https://www.tradingview.com/v/ysFf2OTq/)  library.

Requests  [Nasdaq Data Link](https://data.nasdaq.com/)  (formerly Quandl) data for a symbol.

Syntax

request.quandl(ticker, gaps, index, ignore_invalid_symbol) → series float

Arguments

ticker (series string) Symbol. Note that the name of a time series and Quandl data feed should be divided by a forward slash. For example: "CFTC/SB_FO_ALL".

gaps (simple barmerge_gaps) Merge strategy for the requested data (requested data automatically merges with the main series: OHLC data). Possible values include:  [barmerge.gaps_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_on),  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off).  [barmerge.gaps_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_on)  - requested data is merged with possible gaps ([na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  values).  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off)  - requested data is merged continuously without gaps, all the gaps are filled with the previous, nearest existing values. Default value is  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off).

index (series int) A Quandl time-series column index.

ignore_invalid_symbol (input bool) An optional parameter. Determines the behavior of the function if the specified symbol is not found: if false, the script will halt and return a runtime error; if true, the function will return na and execution will continue. The default value is false.

Example

```
//@version=6indicator("request.quandl")f = request.quandl("CFTC/SB_FO_ALL", barmerge.gaps_off, 0)plot(f)
```

Returns

Requested series.

See also

[request.security()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.security)[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)

### request.security()

Requests the result of an expression from a specified context (symbol and timeframe).

Syntax

request.security(symbol, timeframe, expression, gaps, lookahead, ignore_invalid_symbol, currency, calc_bars_count) → series <type>

Arguments

symbol (series string) Symbol or ticker identifier of the requested data. Use an empty string or  [syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)  to request data using the chart's symbol. To retrieve data with additional modifiers (extended sessions, dividend adjustments, non-standard chart types like Heikin Ashi and Renko, etc.), create a custom ticker ID for the request using the functions in the  `ticker.*`  namespace.

timeframe (series string) Timeframe of the requested data. Use an empty string or  [timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period)  to request data from the chart's timeframe or the  `timeframe`  specified in the  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  function. To request data from a different timeframe, supply a valid timeframe string. See  [here](https://www.tradingview.com/pine-script-docs/concepts/timeframes/#timeframe-string-specifications)  to learn about specifying timeframe strings.

expression (variable, function, object, array, matrix, or map of series int/float/bool/string/color/enum, or a tuple of these) The expression to calculate and return from the requested context. It can accept a built-in variable like  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close), a user-defined variable, an expression such as  `ta.change(close) / (high - low)`, a function call that does not use Pine Script® drawings, an  [object](https://www.tradingview.com/pine-script-docs/language/objects/), a  [collection](https://www.tradingview.com/pine-script-docs/language/type-system/#collections), or a tuple of expressions.

gaps (simple barmerge_gaps) Specifies how the returned values are merged on chart bars. Possible values:  [barmerge.gaps_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_on),  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off). With  [barmerge.gaps_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_on)  a value only appears on the current chart bar when it first becomes available from the function's context, otherwise  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  is returned (thus a "gap" occurs). With  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off)  what would otherwise be gaps are filled with the latest known value returned, avoiding  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  values. Optional. The default is  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off).

lookahead (simple barmerge_lookahead) On historical bars only, returns data from the timeframe before it elapses. Possible values:  [barmerge.lookahead_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.lookahead_on),  [barmerge.lookahead_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.lookahead_off). Has no effect on realtime values. Optional. The default is  [barmerge.lookahead_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.lookahead_off)  starting from Pine Script® v3. The default is  [barmerge.lookahead_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.lookahead_on)  in v1 and v2. WARNING: Using  [barmerge.lookahead_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.lookahead_on)  at timeframes higher than the chart's without offsetting the  `expression`  argument like in  `close[1]`  will introduce future leak in scripts, as the function will then return the  `close`  price before it is actually known in the current context. As is explained in the User Manual's page on  [Repainting](https://www.tradingview.com/pine-script-docs/concepts/repainting/#future-leak-with-request-security)  this will produce misleading results.

ignore_invalid_symbol (input bool) Determines the behavior of the function if the specified symbol is not found: if  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false), the script will halt and throw a runtime error; if  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true), the function will return  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  and execution will continue. Optional. The default is  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false).

currency (series string) Optional. Specifies the target currency for converting values expressed in currency units (e.g.,  [open](https://www.tradingview.com/pine-script-reference/v6/#var_open),  [high](https://www.tradingview.com/pine-script-reference/v6/#var_high),  [low](https://www.tradingview.com/pine-script-reference/v6/#var_low),  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close)) or expressions involving such values. Literal values such as  `200`  are not converted. The conversion rate for monetary values depends on the previous daily value of a corresponding currency pair from the most popular exchange. A spread symbol is used if no exchange provides the rate directly. Possible values: a "string" representing a valid currency code (e.g., "USD" or "USDT") or a constant from the  `currency.*`  namespace (e.g.,  [currency.USD](https://www.tradingview.com/pine-script-reference/v6/#const_currency.USD)  or  [currency.USDT](https://www.tradingview.com/pine-script-reference/v6/#const_currency.USDT)). The default is  [syminfo.currency](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.currency).

calc_bars_count (simple int) Optional. Determines the maximum number of recent historical bars that the function can request. If specified, the function evaluates the  `expression`  argument starting from that number of bars behind the last historical bar in the requested dataset, treating those bars as the only available data. Limiting the number of historical bars in a request can help improve calculation efficiency in some cases. The default is the same as the number of  [chart bars](https://www.tradingview.com/pine-script-docs/writing/limitations/#chart-bars)  available for the symbol and timeframe. The maximum number of bars that the function can attempt to retrieve depends on the  [intrabar limit](https://www.tradingview.com/pine-script-docs/writing/limitations/#intrabars)  of the user's plan. However, the request cannot retrieve more bars than are available in the dataset.

Example

```
//@version=6indicator("Simple `request.security()` calls")// Returns 1D close of the current symbol.dailyClose = request.security(syminfo.tickerid, "1D", close)plot(dailyClose)// Returns the close of "AAPL" from the same timeframe as currently open on the chart.aaplClose = request.security("AAPL", timeframe.period, close)plot(aaplClose)
```

Example

```
//@version=6indicator("Advanced `request.security()` calls")// This calculates a 10-period moving average on the active chart.sma = ta.sma(close, 10)// This sends the `sma` calculation for execution in the context of the "AAPL" symbol at a "240" (4 hours) timeframe.aaplSma = request.security("AAPL", "240", sma)plot(aaplSma)// To avoid differences on historical and realtime bars, you can use this technique, which only returns a value from the higher timeframe on the bar after it completes:indexHighTF = barstate.isrealtime ? 1 : 0indexCurrTF = barstate.isrealtime ? 0 : 1nonRepaintingClose = request.security(syminfo.tickerid, "1D", close[indexHighTF])[indexCurrTF]plot(nonRepaintingClose, "Non-repainting close")// Returns the 1H close of "AAPL", extended session included. The value is dividend-adjusted.extendedTicker = ticker.modify("NASDAQ:AAPL", session = session.extended, adjustment = adjustment.dividends)aaplExtAdj = request.security(extendedTicker, "60", close)plot(aaplExtAdj)// Returns the result of a user-defined function.// The `max` variable is mutable, but we can pass it to `request.security()` because it is wrapped in a function.allTimeHigh(source) =>    var max = source    max := math.max(max, source)allTimeHigh1D = request.security(syminfo.tickerid, "1D", allTimeHigh(high))// By using a tuple `expression`, we obtain several values with only one `request.security()` call.[open1D, high1D, low1D, close1D, ema1D] = request.security(syminfo.tickerid, "1D", [open, high, low, close, ta.ema(close, 10)])plotcandle(open1D, high1D, low1D, close1D)plot(ema1D)// Returns an array containing the OHLC values of the chart's symbol from the 1D timeframe.ohlcArray = request.security(syminfo.tickerid, "1D", array.from(open, high, low, close))plotcandle(array.get(ohlcArray, 0), array.get(ohlcArray, 1), array.get(ohlcArray, 2), array.get(ohlcArray, 3))
```

Returns

A result determined by  `expression`.

Remarks

Scripts using this function might calculate differently on historical and realtime bars, leading to  [repainting](https://www.tradingview.com/pine-script-docs/concepts/repainting/).

A single script can contain no more than 40 unique  `request.*()`  function calls. A call is unique only if it does not call the same function with the same arguments.

When using two calls to a  `request.*()`  function to evaluate the same expression from the same context with different  `calc_bars_count`  values, the second call requests the same number of historical bars as the first. For example, if a script calls  `request.security("AAPL", "", close, calc_bars_count = 3)`  after it calls  `request.security("AAPL", "", close, calc_bars_count = 5)`, the second call also uses five bars of historical data, not three.

The symbol of a  `request.()`  call can be  _inherited_  if it is not specified precisely, i.e., if the  `symbol`  argument is an empty string or  [syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid). Similarly, the timeframe of a  `request.()`  call can be inherited if the  `timeframe`  argument is an empty string or  [timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period). These values are normally taken from the chart on which the script is running. However, if  `request.*()`  function A is called from within the expression of  `request.*()`  function B, then function A can inherit the values from function B. See  [here](https://www.tradingview.com/pine-script-docs/concepts/other-timeframes-and-data/#nested-requests)  for more information.

See also

[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)[timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period)[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)[request.security_lower_tf()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.security_lower_tf)[request.dividends()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.dividends)[request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)[request.splits()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.splits)[request.financial()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.financial)

### request.security_lower_tf()

Requests the results of an expression from a specified symbol on a timeframe lower than or equal to the chart's timeframe. It returns an  [array](https://www.tradingview.com/pine-script-reference/v6/#type_array)  containing one element for each lower-timeframe bar within the chart bar. On a 5-minute chart, requesting data using a  `timeframe`  argument of "1" typically returns an array with five elements representing the value of the  `expression`  on each 1-minute bar, ordered by time with the earliest value first.

Syntax

request.security_lower_tf(symbol, timeframe, expression, ignore_invalid_symbol, currency, ignore_invalid_timeframe, calc_bars_count) → array<type>

Arguments

symbol (series string) Symbol or ticker identifier of the requested data. Use an empty string or  [syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)  to request data using the chart's symbol. To retrieve data with additional modifiers (extended sessions, dividend adjustments, non-standard chart types like Heikin Ashi and Renko, etc.), create a custom ticker ID for the request using the functions in the  `ticker.*`  namespace.

timeframe (series string) Timeframe of the requested data. Use an empty string or  [timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period)  to request data from the chart's timeframe or the  `timeframe`  specified in the  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  function. To request data from a different timeframe, supply a valid timeframe string. See  [here](https://www.tradingview.com/pine-script-docs/concepts/timeframes/#timeframe-string-specifications)  to learn about specifying timeframe strings.

expression (variable, object or function of series int/float/bool/string/color/enum, or a tuple of these) The expression to calculate and return from the requested context. It can accept a built-in variable like  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close), a user-defined variable, an expression such as  `ta.change(close) / (high - low)`, a function call that does not use Pine Script® drawings, an  [object](https://www.tradingview.com/pine-script-docs/language/objects/), or a tuple of expressions.  [Collections](https://www.tradingview.com/pine-script-docs/language/type-system/#collections)  are not allowed unless they are within the fields of an object

ignore_invalid_symbol (series bool) Determines the behavior of the function if the specified symbol is not found: if  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false), the script will halt and throw a runtime error; if  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true), the function will return  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  and execution will continue. Optional. The default is  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false).

currency (series string) Optional. Specifies the target currency for converting values expressed in currency units (e.g.,  [open](https://www.tradingview.com/pine-script-reference/v6/#var_open),  [high](https://www.tradingview.com/pine-script-reference/v6/#var_high),  [low](https://www.tradingview.com/pine-script-reference/v6/#var_low),  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close)) or expressions involving such values. Literal values such as  `200`  are not converted. The conversion rate for monetary values depends on the previous daily value of a corresponding currency pair from the most popular exchange. A spread symbol is used if no exchange provides the rate directly. Possible values: a "string" representing a valid currency code (e.g., "USD" or "USDT") or a constant from the  `currency.*`  namespace (e.g.,  [currency.USD](https://www.tradingview.com/pine-script-reference/v6/#const_currency.USD)  or  [currency.USDT](https://www.tradingview.com/pine-script-reference/v6/#const_currency.USDT)). The default is  [syminfo.currency](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.currency).

ignore_invalid_timeframe (series bool) Determines the behavior of the function when the chart's timeframe is smaller than the  `timeframe`  used in the function call. If  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false), the script will halt and throw a runtime error. If  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true), the function will return  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  and execution will continue. Optional. The default is  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false).

calc_bars_count (simple int) Optional. Determines the maximum number of recent historical bars that the function can request. If specified, the function evaluates the  `expression`  argument starting from that number of bars behind the last historical bar in the requested dataset, treating those bars as the only available data. Limiting the number of historical bars in a request can help improve calculation efficiency in some cases. The default is the same as the number of  [chart bars](https://www.tradingview.com/pine-script-docs/writing/limitations/#chart-bars)  available for the symbol and timeframe. The maximum number of bars that the function can attempt to retrieve depends on the  [intrabar limit](https://www.tradingview.com/pine-script-docs/writing/limitations/#intrabars)  of the user's plan. However, the request cannot retrieve more bars than are available in the dataset.

Example

```
//@version=6indicator("`request.security_lower_tf()` Example", overlay = true)// If the current chart timeframe is set to 120 minutes, then the `arrayClose` array will contain two 'close' values from the 60 minute timeframe for each bar.arrClose = request.security_lower_tf(syminfo.tickerid, "60", close)if bar_index == last_bar_index - 1    label.new(bar_index, high, str.tostring(arrClose))
```

Returns

An array of a type determined by  `expression`, or a tuple of these.

Remarks

Scripts using this function might calculate differently on historical and realtime bars, leading to  [repainting](https://www.tradingview.com/pine-script-docs/concepts/repainting/).

Please note that spreads (e.g., "AAPL+MSFT*TSLA") do not always return reliable data with this function.

A single script can contain no more than 40 unique  `request.*()`  function calls. A call is unique only if it does not call the same function with the same arguments.

When using two calls to a  `request.*()`  function to evaluate the same expression from the same context with different  `calc_bars_count`  values, the second call requests the same number of historical bars as the first. For example, if a script calls  `request.security("AAPL", "", close, calc_bars_count = 3)`  after it calls  `request.security("AAPL", "", close, calc_bars_count = 5)`, the second call also uses five bars of historical data, not three.

The symbol of a  `request.()`  call can be  _inherited_  if it is not specified precisely, i.e., if the  `symbol`  argument is an empty string or  [syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid). Similarly, the timeframe of a  `request.()`  call can be inherited if the  `timeframe`  argument is an empty string or  [timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period). These values are normally taken from the chart that the script is running on. However, if  `request.*()`  function A is called from within the expression of  `request.*()`  function B, then function A can inherit the values from function B. See  [here](https://www.tradingview.com/pine-script-docs/concepts/other-timeframes-and-data/#nested-requests)  for more information.

See also

[request.security()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.security)[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)[timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period)[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[request.dividends()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.dividends)[request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)[request.splits()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.splits)[request.financial()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.financial)

### request.seed()

Requests the result of an expression evaluated on data from a user-maintained GitHub repository. **Note:**The creation of new Pine Seeds repositories is suspended; only existing repositories are currently supported. See the  [Pine Seeds documentation](https://github.com/tradingview-eod/pine-seeds-docs)  on GitHub to learn more.

Syntax

request.seed(source, symbol, expression, ignore_invalid_symbol, calc_bars_count) → series <type>

Arguments

source (series string) Name of the GitHub repository.

symbol (series string) Name of the file in the GitHub repository containing the data. The ".csv" file extension must not be included.

expression (<arg_expr_type>) An expression to be calculated and returned from the requested symbol's context. It can be a built-in variable like  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close), an expression such as  `ta.sma(close, 100)`, a non-mutable variable previously calculated in the script, a function call that does not use Pine Script® drawings, an array, a matrix, or a tuple. Mutable variables are not allowed, unless they are enclosed in the body of a function used in the expression.

ignore_invalid_symbol (input bool) Determines the behavior of the function if the specified symbol is not found: if  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false), the script will halt and throw a runtime error; if  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true), the function will return  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  and execution will continue. Optional. The default is  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false).

calc_bars_count (simple int) Optional. If specified, the function requests only this number of values from the end of the symbol's history and calculates  `expression`  as if these values are the only available data, which might improve calculation speed in some cases. The default is the same as the number of  [chart bars](https://www.tradingview.com/pine-script-docs/writing/limitations/#chart-bars)  available for the symbol and timeframe. The maximum number of bars that the function can attempt to retrieve depends on the  [intrabar limit](https://www.tradingview.com/pine-script-docs/writing/limitations/#intrabars)  of the user's plan. However, the request cannot retrieve more bars than are available in the dataset.

Example

```
//@version=6indicator("BTC Development Activity")[devAct, devActSMA] = request.seed("seed_crypto_santiment", "BTC_DEV_ACTIVITY", [close, ta.sma(close, 10)])plot(devAct, "BTC Development Activity")plot(devActSMA, "BTC Development Activity SMA10", color = color.yellow)
```

Returns

Requested series or tuple of series, which may include array/matrix IDs.

### request.splits()

Requests splits data for the specified symbol.

Syntax

request.splits(ticker, field, gaps, lookahead, ignore_invalid_symbol) → series float

Arguments

ticker (series string) Symbol. Note that the symbol should be passed with a prefix. For example: "NASDAQ:AAPL" instead of "AAPL". Using  [syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)  will cause an error. Use  [syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)  instead.

field (series string) Input string. Possible values include:  [splits.denominator](https://www.tradingview.com/pine-script-reference/v6/#const_splits.denominator),  [splits.numerator](https://www.tradingview.com/pine-script-reference/v6/#const_splits.numerator).

gaps (simple barmerge_gaps) Merge strategy for the requested data (requested data automatically merges with the main series OHLC data). Possible values:  [barmerge.gaps_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_on),  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off).  [barmerge.gaps_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_on)  - requested data is merged with possible gaps ([na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  values).  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off)  - requested data is merged continuously without gaps, all the gaps are filled with the previous nearest existing values. Default value is  [barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off).

lookahead (simple barmerge_lookahead) Merge strategy for the requested data position. Possible values:  [barmerge.lookahead_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.lookahead_on),  [barmerge.lookahead_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.lookahead_off). Default value is  [barmerge.lookahead_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.lookahead_off)  starting from version 3. Note that behavour is the same on real-time, and differs only on history.

ignore_invalid_symbol (input bool) An optional parameter. Determines the behavior of the function if the specified symbol is not found: if false, the script will halt and return a runtime error; if true, the function will return na and execution will continue. The default value is false.

Example

```
//@version=6indicator("request.splits")s1 = request.splits("NASDAQ:BELFA", splits.denominator)plot(s1)s2 = request.splits("NASDAQ:BELFA", splits.denominator, gaps=barmerge.gaps_on, lookahead=barmerge.lookahead_on)plot(s2)
```

Returns

Requested series, or n/a if there is no splits data for the specified symbol.

See also

[request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)[request.dividends()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.dividends)[request.security()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.security)[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)
