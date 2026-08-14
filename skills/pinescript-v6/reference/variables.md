
  
series float

Remarks

This value is only fetched once during the script's initial calculation. The variable will return the same value until the script is recalculated, even after the expected Payment date of the next dividend.

### dividends.future_ex_date

Returns the Ex-dividend date (Ex-date) of the current instrument's next dividend payment, or  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if this data isn't available. Ex-dividend date signifies when investors are no longer entitled to a payout from the most recent dividend. Only those who purchased shares before this day are entitled to the dividend payment.

Type

series int

Returns

UNIX time, expressed in milliseconds.

Remarks

This value is only fetched once during the script's initial calculation. The variable will return the same value until the script is recalculated, even after the expected Payment date of the next dividend.

### dividends.future_pay_date

Returns the Payment date (Pay date) of the current instrument's next dividend payment, or  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if this data isn't available. Payment date signifies the day when eligible investors will receive the dividend payment.

Type

series int

Returns

UNIX time, expressed in milliseconds.

Remarks

This value is only fetched once during the script's initial calculation. The variable will return the same value until the script is recalculated, even after the expected Payment date of the next dividend.

### earnings.future_eps

Returns the estimated Earnings per Share of the next earnings report in the currency of the instrument, or  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if this data isn't available.

Type

series float

Remarks

This value is only fetched once during the script's initial calculation. The variable will return the same value until the script is recalculated, even after the expected time of the next earnings report.

See also

[request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)

### earnings.future_period_end_time

Checks the data for the next earnings report and returns the UNIX timestamp of the day when the financial period covered by those earnings ends, or  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if this data isn't available.

Type

series int

Returns

UNIX time, expressed in milliseconds.

Remarks

This value is only fetched once during the script's initial calculation. The variable will return the same value until the script is recalculated, even after the expected time of the next earnings report.

See also

[request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)

### earnings.future_revenue

Returns the estimated Revenue of the next earnings report in the currency of the instrument, or  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if this data isn't available.

Type

series float

Remarks

This value is only fetched once during the script's initial calculation. The variable will return the same value until the script is recalculated, even after the expected time of the next earnings report.

See also

[request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)

### earnings.future_time

Returns a UNIX timestamp indicating the expected time of the next earnings report, or  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if this data isn't available.

Type

series int

Returns

UNIX time, expressed in milliseconds.

Remarks

This value is only fetched once during the script's initial calculation. The variable will return the same value until the script is recalculated, even after the expected time of the next earnings report.

See also

[request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)

### high

Current high price.

Type

series float

Remarks

Previous values may be accessed with square brackets operator [], e.g. high[1], high[2].

See also

[open](https://www.tradingview.com/pine-script-reference/v6/#var_open)[low](https://www.tradingview.com/pine-script-reference/v6/#var_low)[close](https://www.tradingview.com/pine-script-reference/v6/#var_close)[volume](https://www.tradingview.com/pine-script-reference/v6/#var_volume)[time()](https://www.tradingview.com/pine-script-reference/v6/#fun_time)[hl2](https://www.tradingview.com/pine-script-reference/v6/#var_hl2)[hlc3](https://www.tradingview.com/pine-script-reference/v6/#var_hlc3)[hlcc4](https://www.tradingview.com/pine-script-reference/v6/#var_hlcc4)[ohlc4](https://www.tradingview.com/pine-script-reference/v6/#var_ohlc4)[ask](https://www.tradingview.com/pine-script-reference/v6/#var_ask)[bid](https://www.tradingview.com/pine-script-reference/v6/#var_bid)

### hl2

Is a shortcut for (high + low)/2

Type

series float

See also

[open](https://www.tradingview.com/pine-script-reference/v6/#var_open)[high](https://www.tradingview.com/pine-script-reference/v6/#var_high)[low](https://www.tradingview.com/pine-script-reference/v6/#var_low)[close](https://www.tradingview.com/pine-script-reference/v6/#var_close)[volume](https://www.tradingview.com/pine-script-reference/v6/#var_volume)[time()](https://www.tradingview.com/pine-script-reference/v6/#fun_time)[hlc3](https://www.tradingview.com/pine-script-reference/v6/#var_hlc3)[hlcc4](https://www.tradingview.com/pine-script-reference/v6/#var_hlcc4)[ohlc4](https://www.tradingview.com/pine-script-reference/v6/#var_ohlc4)[ask](https://www.tradingview.com/pine-script-reference/v6/#var_ask)[bid](https://www.tradingview.com/pine-script-reference/v6/#var_bid)

### hlc3

Is a shortcut for (high + low + close)/3

Type

series float

See also

[open](https://www.tradingview.com/pine-script-reference/v6/#var_open)[high](https://www.tradingview.com/pine-script-reference/v6/#var_high)[low](https://www.tradingview.com/pine-script-reference/v6/#var_low)[close](https://www.tradingview.com/pine-script-reference/v6/#var_close)[volume](https://www.tradingview.com/pine-script-reference/v6/#var_volume)[time()](https://www.tradingview.com/pine-script-reference/v6/#fun_time)[hl2](https://www.tradingview.com/pine-script-reference/v6/#var_hl2)[hlcc4](https://www.tradingview.com/pine-script-reference/v6/#var_hlcc4)[ohlc4](https://www.tradingview.com/pine-script-reference/v6/#var_ohlc4)[ask](https://www.tradingview.com/pine-script-reference/v6/#var_ask)[bid](https://www.tradingview.com/pine-script-reference/v6/#var_bid)

### hlcc4

Is a shortcut for (high + low + close + close)/4

Type

series float

See also

[open](https://www.tradingview.com/pine-script-reference/v6/#var_open)[high](https://www.tradingview.com/pine-script-reference/v6/#var_high)[low](https://www.tradingview.com/pine-script-reference/v6/#var_low)[close](https://www.tradingview.com/pine-script-reference/v6/#var_close)[volume](https://www.tradingview.com/pine-script-reference/v6/#var_volume)[time()](https://www.tradingview.com/pine-script-reference/v6/#fun_time)[hl2](https://www.tradingview.com/pine-script-reference/v6/#var_hl2)[hlc3](https://www.tradingview.com/pine-script-reference/v6/#var_hlc3)[ohlc4](https://www.tradingview.com/pine-script-reference/v6/#var_ohlc4)[ask](https://www.tradingview.com/pine-script-reference/v6/#var_ask)[bid](https://www.tradingview.com/pine-script-reference/v6/#var_bid)

### hour

Current bar hour in exchange timezone.

Type

series int

See also

[hour()](https://www.tradingview.com/pine-script-reference/v6/#fun_hour)[time](https://www.tradingview.com/pine-script-reference/v6/#var_time)[year](https://www.tradingview.com/pine-script-reference/v6/#var_year)[month](https://www.tradingview.com/pine-script-reference/v6/#var_month)[weekofyear](https://www.tradingview.com/pine-script-reference/v6/#var_weekofyear)[dayofmonth](https://www.tradingview.com/pine-script-reference/v6/#var_dayofmonth)[dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)[minute](https://www.tradingview.com/pine-script-reference/v6/#var_minute)[second](https://www.tradingview.com/pine-script-reference/v6/#var_second)

### label.all

Returns an array filled with all the current labels drawn by the script.

Type

array<label>

Example

```
//@version=6indicator("label.all")//delete all labelslabel.new(bar_index, close)a_allLabels = label.allif array.size(a_allLabels) > 0    for i = 0 to array.size(a_allLabels) - 1        label.delete(array.get(a_allLabels, i))
```

Remarks

The array is read-only. Index zero of the array is the ID of the oldest object on the chart.

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[line.all](https://www.tradingview.com/pine-script-reference/v6/#var_line.all)[box.all](https://www.tradingview.com/pine-script-reference/v6/#var_box.all)[table.all](https://www.tradingview.com/pine-script-reference/v6/#var_table.all)

### last_bar_index

Bar index of the last chart bar. Bar indices begin at zero on the first bar.

Type

series int

Example

```
//@version=6strategy("Mark Last X Bars For Backtesting", overlay = true, calc_on_every_tick = true)lastBarsFilterInput = input.int(100, "Bars Count:")// Here, we store the 'last_bar_index' value that is known from the beginning of the script's calculation.// The 'last_bar_index' will change when new real-time bars appear, so we declare 'lastbar' with the 'var' keyword.var lastbar = last_bar_index// Check if the current bar_index is 'lastBarsFilterInput' removed from the last bar on the chart, or the chart is traded in real-time.allowedToTrade = (lastbar - bar_index <= lastBarsFilterInput) or barstate.isrealtimebgcolor(allowedToTrade ? color.new(color.green, 80) : na)
```

Returns

Last historical bar index for closed markets, or the real-time bar index for open markets.

Remarks

Please note that using this variable can cause  [indicator repainting](https://www.tradingview.com/pine-script-docs/concepts/repainting/).

See also

[bar_index](https://www.tradingview.com/pine-script-reference/v6/#var_bar_index)[last_bar_time](https://www.tradingview.com/pine-script-reference/v6/#var_last_bar_time)[barstate.ishistory](https://www.tradingview.com/pine-script-reference/v6/#var_barstate.ishistory)[barstate.isrealtime](https://www.tradingview.com/pine-script-reference/v6/#var_barstate.isrealtime)

### last_bar_time

Time in UNIX format of the last chart bar. It is the number of milliseconds that have elapsed since 00:00:00 UTC, 1 January 1970.

Type

series int

Remarks

Please note that using this variable/function can cause  [indicator repainting](https://www.tradingview.com/pine-script-docs/concepts/repainting/).

Note that this variable returns the timestamp based on the time of the bar's open.

See also

[time](https://www.tradingview.com/pine-script-reference/v6/#var_time)[timenow](https://www.tradingview.com/pine-script-reference/v6/#var_timenow)[timestamp()](https://www.tradingview.com/pine-script-reference/v6/#fun_timestamp)[last_bar_index](https://www.tradingview.com/pine-script-reference/v6/#var_last_bar_index)

### line.all

Returns an array filled with all the current lines drawn by the script.

Type

array<line>

Example

```
//@version=6indicator("line.all")//delete all linesline.new(bar_index - 10, close, bar_index, close)a_allLines = line.allif array.size(a_allLines) > 0    for i = 0 to array.size(a_allLines) - 1        line.delete(array.get(a_allLines, i))
```

Remarks

The array is read-only. Index zero of the array is the ID of the oldest object on the chart.

See also

[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[label.all](https://www.tradingview.com/pine-script-reference/v6/#var_label.all)[box.all](https://www.tradingview.com/pine-script-reference/v6/#var_box.all)[table.all](https://www.tradingview.com/pine-script-reference/v6/#var_table.all)

### linefill.all

Returns an array filled with all the current linefill objects drawn by the script.

Type

array<linefill>

Remarks

The array is read-only. Index zero of the array is the ID of the oldest object on the chart.

### low

Current low price.

Type

series float

Remarks

Previous values may be accessed with square brackets operator [], e.g. low[1], low[2].

See also

[open](https://www.tradingview.com/pine-script-reference/v6/#var_open)[high](https://www.tradingview.com/pine-script-reference/v6/#var_high)[close](https://www.tradingview.com/pine-script-reference/v6/#var_close)[volume](https://www.tradingview.com/pine-script-reference/v6/#var_volume)[time()](https://www.tradingview.com/pine-script-reference/v6/#fun_time)[hl2](https://www.tradingview.com/pine-script-reference/v6/#var_hl2)[hlc3](https://www.tradingview.com/pine-script-reference/v6/#var_hlc3)[hlcc4](https://www.tradingview.com/pine-script-reference/v6/#var_hlcc4)[ohlc4](https://www.tradingview.com/pine-script-reference/v6/#var_ohlc4)[ask](https://www.tradingview.com/pine-script-reference/v6/#var_ask)[bid](https://www.tradingview.com/pine-script-reference/v6/#var_bid)

### minute

Current bar minute in exchange timezone.

Type

series int

See also

[minute()](https://www.tradingview.com/pine-script-reference/v6/#fun_minute)[time](https://www.tradingview.com/pine-script-reference/v6/#var_time)[year](https://www.tradingview.com/pine-script-reference/v6/#var_year)[month](https://www.tradingview.com/pine-script-reference/v6/#var_month)[weekofyear](https://www.tradingview.com/pine-script-reference/v6/#var_weekofyear)[dayofmonth](https://www.tradingview.com/pine-script-reference/v6/#var_dayofmonth)[dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)[hour](https://www.tradingview.com/pine-script-reference/v6/#var_hour)[second](https://www.tradingview.com/pine-script-reference/v6/#var_second)

### month

Current bar month in exchange timezone.

Type

series int

Remarks

Note that this variable returns the month based on the time of the bar's open. For overnight sessions (e.g. EURUSD, where Monday session starts on Sunday, 17:00) this value can be lower by 1 than the month of the trading day.

See also

[month()](https://www.tradingview.com/pine-script-reference/v6/#fun_month)[time](https://www.tradingview.com/pine-script-reference/v6/#var_time)[year](https://www.tradingview.com/pine-script-reference/v6/#var_year)[weekofyear](https://www.tradingview.com/pine-script-reference/v6/#var_weekofyear)[dayofmonth](https://www.tradingview.com/pine-script-reference/v6/#var_dayofmonth)[dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)[hour](https://www.tradingview.com/pine-script-reference/v6/#var_hour)[minute](https://www.tradingview.com/pine-script-reference/v6/#var_minute)[second](https://www.tradingview.com/pine-script-reference/v6/#var_second)

### na

A keyword signifying "not available", indicating that a variable has no assigned value.

Type

simple na

Example

```
//@version=6indicator("na")// CORRECT// Plot no value when on bars zero to nine. Plot `close` on other bars.plot(bar_index < 10 ? na : close)// CORRECT ALTERNATIVE// Initialize `a` to `na`. Reassign `close` to `a` on bars 10 and later.float a = naif bar_index >= 10    a := closeplot(a)// INCORRECT// Trying to test the preceding bar's `close` for `na`.// The next line, if uncommented, will cause a compilation error, because direct comparison with `na` is not allowed.// plot(close[1] == na ? close : close[1])// CORRECT// Use the `na()` function to test for `na`.plot(na(close[1]) ? close : close[1])// CORRECT ALTERNATIVE// `nz()` tests `close[1]` for `na`. It returns `close[1]` if it is not `na`, and `close` if it is.plot(nz(close[1], close))
```

Remarks

Do not use this variable with  [comparison operators](https://www.tradingview.com/pine-script-docs/language/operators/#comparison-operators)  to test values for  `na`, as it might lead to unexpected behavior. Instead, use the  [na()](https://www.tradingview.com/pine-script-reference/v6/#fun_na)  function. Note that  `na`  can be used to initialize variables when the initialization statement also specifies the variable's type.

See also

[na()](https://www.tradingview.com/pine-script-reference/v6/#fun_na)[nz()](https://www.tradingview.com/pine-script-reference/v6/#fun_nz)[fixnan()](https://www.tradingview.com/pine-script-reference/v6/#fun_fixnan)

### ohlc4

Is a shortcut for (open + high + low + close)/4

Type

series float

See also

[open](https://www.tradingview.com/pine-script-reference/v6/#var_open)[high](https://www.tradingview.com/pine-script-reference/v6/#var_high)[low](https://www.tradingview.com/pine-script-reference/v6/#var_low)[close](https://www.tradingview.com/pine-script-reference/v6/#var_close)[volume](https://www.tradingview.com/pine-script-reference/v6/#var_volume)[time()](https://www.tradingview.com/pine-script-reference/v6/#fun_time)[hl2](https://www.tradingview.com/pine-script-reference/v6/#var_hl2)[hlc3](https://www.tradingview.com/pine-script-reference/v6/#var_hlc3)[hlcc4](https://www.tradingview.com/pine-script-reference/v6/#var_hlcc4)

### open

Current open price.

Type

series float

Remarks

Previous values may be accessed with square brackets operator [], e.g. open[1], open[2].

See also

[high](https://www.tradingview.com/pine-script-reference/v6/#var_high)[low](https://www.tradingview.com/pine-script-reference/v6/#var_low)[close](https://www.tradingview.com/pine-script-reference/v6/#var_close)[volume](https://www.tradingview.com/pine-script-reference/v6/#var_volume)[time()](https://www.tradingview.com/pine-script-reference/v6/#fun_time)[hl2](https://www.tradingview.com/pine-script-reference/v6/#var_hl2)[hlc3](https://www.tradingview.com/pine-script-reference/v6/#var_hlc3)[hlcc4](https://www.tradingview.com/pine-script-reference/v6/#var_hlcc4)[ohlc4](https://www.tradingview.com/pine-script-reference/v6/#var_ohlc4)[ask](https://www.tradingview.com/pine-script-reference/v6/#var_ask)[bid](https://www.tradingview.com/pine-script-reference/v6/#var_bid)

### polyline.all

Returns an array containing all current  [polyline](https://www.tradingview.com/pine-script-reference/v6/#type_polyline)  instances drawn by the script.

Type

array<polyline>

Remarks

The array is read-only. Index zero of the array references the ID of the oldest polyline object on the chart.

### second

Current bar second in exchange timezone.

Type

series int

See also

[second()](https://www.tradingview.com/pine-script-reference/v6/#fun_second)[time](https://www.tradingview.com/pine-script-reference/v6/#var_time)[year](https://www.tradingview.com/pine-script-reference/v6/#var_year)[month](https://www.tradingview.com/pine-script-reference/v6/#var_month)[weekofyear](https://www.tradingview.com/pine-script-reference/v6/#var_weekofyear)[dayofmonth](https://www.tradingview.com/pine-script-reference/v6/#var_dayofmonth)[dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)[hour](https://www.tradingview.com/pine-script-reference/v6/#var_hour)[minute](https://www.tradingview.com/pine-script-reference/v6/#var_minute)

### session.isfirstbar

Returns  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true)  if the current bar is the first bar of the day's session,  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false)  otherwise. If extended session information is used, only returns  `true`  on the first bar of the pre-market bars.

Type

series bool

Example

```
//@version=6strategy("`session.isfirstbar` Example", overlay = true)longCondition = year >= 2022// Place a long order at the `close` of the trading session's first bar.if session.isfirstbar and longCondition    strategy.entry("Long", strategy.long)// Close the long position at the `close` of the trading session's last bar.if session.islastbar and barstate.isconfirmed    strategy.close("Long", immediately = true)
```

See also

[session.isfirstbar_regular](https://www.tradingview.com/pine-script-reference/v6/#var_session.isfirstbar_regular)[session.islastbar](https://www.tradingview.com/pine-script-reference/v6/#var_session.islastbar)[session.islastbar_regular](https://www.tradingview.com/pine-script-reference/v6/#var_session.islastbar_regular)

### session.isfirstbar_regular

Returns  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true)  on the first regular session bar of the day,  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false)  otherwise. The result is the same whether extended session information is used or not.

Type

series bool

Example

```
//@version=6strategy("`session.isfirstbar_regular` Example", overlay = true)longCondition = year >= 2022// Place a long order at the `close` of the trading session's first bar.if session.isfirstbar and longCondition    strategy.entry("Long", strategy.long)// Close the long position at the `close` of the trading session's last bar.if session.islastbar_regular and barstate.isconfirmed    strategy.close("Long", immediately = true)
```

See also

[session.isfirstbar](https://www.tradingview.com/pine-script-reference/v6/#var_session.isfirstbar)[session.islastbar](https://www.tradingview.com/pine-script-reference/v6/#var_session.islastbar)

### session.islastbar

Returns  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true)  if the current bar is the last bar of the day's session,  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false)  otherwise. If extended session information is used, only returns  `true`  on the last bar of the post-market bars.

Type

series bool

Example

```
//@version=6strategy("`session.islastbar` Example", overlay = true)longCondition = year >= 2022// Place a long order at the `close` of the trading session's last bar.// The position will enter on the `open` of next session's first bar.if session.islastbar and longCondition    strategy.entry("Long", strategy.long) // Close 'Long' position at the close of the last bar of the trading sessionif session.islastbar and barstate.isconfirmed    strategy.close("Long", immediately = true)
```

Remarks

This variable is not guaranteed to return  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true)  once in every session because the last bar of the session might not exist if no trades occur during what should be the session's last bar.

This variable is not guaranteed to work as expected on non-standard chart types, e.g., Renko.

See also

[session.isfirstbar](https://www.tradingview.com/pine-script-reference/v6/#var_session.isfirstbar)[session.islastbar_regular](https://www.tradingview.com/pine-script-reference/v6/#var_session.islastbar_regular)

### session.islastbar_regular

Returns  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true)  on the last regular session bar of the day,  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false)  otherwise. The result is the same whether extended session information is used or not.

Type

series bool

Example

```
//@version=6strategy("`session.islastbar_regular` Example", overlay = true)longCondition = year >= 2022// Place a long order at the `close` of the trading session's first bar.if session.isfirstbar and longCondition    strategy.entry("Long", strategy.long)// Close the long position at the `close` of the trading session's last bar.if session.islastbar_regular and barstate.isconfirmed    strategy.close("Long", immediately = true)
```

Remarks

This variable is not guaranteed to return  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true)  once in every session because the last bar of the session might not exist if no trades occur during what should be the session's last bar.

This variable is not guaranteed to work as expected on non-standard chart types, e.g., Renko.

See also

[session.isfirstbar](https://www.tradingview.com/pine-script-reference/v6/#var_session.isfirstbar)[session.islastbar](https://www.tradingview.com/pine-script-reference/v6/#var_session.islastbar)[session.isfirstbar_regular](https://www.tradingview.com/pine-script-reference/v6/#var_session.isfirstbar_regular)

### session.ismarket

Returns  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true)  if the current bar is a part of the regular trading hours (i.e. market hours),  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false)  otherwise.

Type

series bool

See also

[session.ispremarket](https://www.tradingview.com/pine-script-reference/v6/#var_session.ispremarket)[session.ispostmarket](https://www.tradingview.com/pine-script-reference/v6/#var_session.ispostmarket)

### session.ispostmarket

Returns  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true)  if the current bar is a part of the post-market,  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false)  otherwise. On non-intraday charts always returns  `false`.

Type

series bool

See also

[session.ismarket](https://www.tradingview.com/pine-script-reference/v6/#var_session.ismarket)[session.ispremarket](https://www.tradingview.com/pine-script-reference/v6/#var_session.ispremarket)

### session.ispremarket

Returns  [true](https://www.tradingview.com/pine-script-reference/v6/#const_true)  if the current bar is a part of the pre-market,  [false](https://www.tradingview.com/pine-script-reference/v6/#const_false)  otherwise. On non-intraday charts always returns  `false`.

Type

series bool

See also

[session.ismarket](https://www.tradingview.com/pine-script-reference/v6/#var_session.ismarket)[session.ispostmarket](https://www.tradingview.com/pine-script-reference/v6/#var_session.ispostmarket)

### strategy.account_currency

Returns the currency used to calculate results, which can be set in the strategy's properties.

Type

simple string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)[strategy.convert_to_account()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.convert_to_account)[strategy.convert_to_symbol()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.convert_to_symbol)

### strategy.avg_losing_trade

Returns the average amount of money lost per losing trade. Calculated as the sum of losses divided by the number of losing trades.

Type

series float

See also

[strategy.avg_losing_trade_percent](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.avg_losing_trade_percent)

### strategy.avg_losing_trade_percent

Returns the average percentage loss per losing trade. Calculated as the sum of loss percentages divided by the number of losing trades.

Type

series float

See also

[strategy.avg_losing_trade](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.avg_losing_trade)

### strategy.avg_trade

Returns the average amount of money gained or lost per trade. Calculated as the sum of all profits and losses divided by the number of closed trades.

Type

series float

See also

[strategy.avg_trade_percent](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.avg_trade_percent)

### strategy.avg_trade_percent

Returns the average percentage gain or loss per trade. Calculated as the sum of all profit and loss percentages divided by the number of closed trades.

Type

series float

See also

[strategy.avg_trade](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.avg_trade)

### strategy.avg_winning_trade

Returns the average amount of money gained per winning trade. Calculated as the sum of profits divided by the number of winning trades.

Type

series float

See also

[strategy.avg_winning_trade_percent](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.avg_winning_trade_percent)

### strategy.avg_winning_trade_percent

Returns the average percentage gain per winning trade. Calculated as the sum of profit percentages divided by the number of winning trades.

Type

series float

See also

[strategy.avg_winning_trade](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.avg_winning_trade)

### strategy.closedtrades

Number of trades, which were closed for the whole trading range.

Type

series int

See also

[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)[strategy.opentrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.opentrades)[strategy.wintrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.wintrades)[strategy.losstrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.losstrades)[strategy.eventrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.eventrades)

### strategy.closedtrades.first_index

The index, or trade number, of the first (oldest) trade listed in the List of Trades. This number is usually zero. If more trades than the allowed limit have been closed, the oldest trades are removed, and this number is the index of the oldest remaining trade.

Type

series int

See also

[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)[strategy.opentrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.opentrades)[strategy.wintrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.wintrades)[strategy.losstrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.losstrades)[strategy.eventrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.eventrades)

### strategy.equity

Current equity ([strategy.initial_capital](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.initial_capital)  +  [strategy.netprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.netprofit)  +  [strategy.openprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.openprofit)).

Type

series float

See also

[strategy.netprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.netprofit)[strategy.openprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.openprofit)[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)

### strategy.eventrades

Number of breakeven trades for the whole trading range.

Type

series int

See also

[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)[strategy.opentrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.opentrades)[strategy.closedtrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.closedtrades)[strategy.wintrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.wintrades)[strategy.losstrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.losstrades)

### strategy.grossloss

Total currency value of all completed losing trades.

Type

series float

See also

[strategy.netprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.netprofit)[strategy.grossprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.grossprofit)

### strategy.grossloss_percent

The total value of all completed losing trades, expressed as a percentage of the initial capital.

Type

series float

See also

[strategy.grossloss](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.grossloss)

### strategy.grossprofit

Total currency value of all completed winning trades.

Type

series float

See also

[strategy.netprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.netprofit)[strategy.grossloss](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.grossloss)

### strategy.grossprofit_percent

The total currency value of all completed winning trades, expressed as a percentage of the initial capital.

Type

series float

See also

[strategy.grossprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.grossprofit)

### strategy.initial_capital

The amount of initial capital set in the strategy properties.

Type

series float

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### strategy.losstrades

Number of unprofitable trades for the whole trading range.

Type

series int

See also

[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)[strategy.opentrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.opentrades)[strategy.closedtrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.closedtrades)[strategy.wintrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.wintrades)[strategy.eventrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.eventrades)

### strategy.margin_liquidation_price

When margin is used in a strategy, returns the price point where a simulated margin call will occur and liquidate enough of the position to meet the margin requirements.

Type

series float

Example

```
//@version=6strategy("Margin call management", overlay = true, margin_long = 25, margin_short = 25,  default_qty_type = strategy.percent_of_equity, default_qty_value = 395)float maFast = ta.sma(close, 14)float maSlow = ta.sma(close, 28)if ta.crossover(maFast, maSlow)    strategy.entry("Long", strategy.long)if ta.crossunder(maFast, maSlow)    strategy.entry("Short", strategy.short)changePercent(v1, v2) =>    float result = (v1 - v2) * 100 / math.abs(v2)// exit when we're 10% away from a margin call, to prevent it.if math.abs(changePercent(close, strategy.margin_liquidation_price)) <= 10    strategy.close("Long")    strategy.close("Short")
```

Remarks

The variable returns  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if the strategy does not use margin, i.e., the  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  declaration statement does not specify an argument for the  `margin_long`  or  `margin_short`  parameter.

### strategy.max_contracts_held_all

Maximum number of contracts/shares/lots/units in one trade for the whole trading range.

Type

series float

See also

[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)[strategy.max_contracts_held_long](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.max_contracts_held_long)[strategy.max_contracts_held_short](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.max_contracts_held_short)

### strategy.max_contracts_held_long

Maximum number of contracts/shares/lots/units in one long trade for the whole trading range.

Type

series float

See also

[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)[strategy.max_contracts_held_all](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.max_contracts_held_all)[strategy.max_contracts_held_short](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.max_contracts_held_short)

### strategy.max_contracts_held_short

Maximum number of contracts/shares/lots/units in one short trade for the whole trading range.

Type

series float

See also

[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)[strategy.max_contracts_held_all](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.max_contracts_held_all)[strategy.max_contracts_held_long](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.max_contracts_held_long)

### strategy.max_drawdown

Maximum equity drawdown value for the whole trading range.

Type

series float

See also

[strategy.netprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.netprofit)[strategy.equity](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.equity)[strategy.max_runup](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.max_runup)

### strategy.max_drawdown_percent

The maximum equity drawdown value for the whole trading range, expressed as a percentage and calculated by formula:  `Lowest Value During Trade / (Entry Price x Quantity) * 100`.

Type

series float

See also

[strategy.max_drawdown](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.max_drawdown)

### strategy.max_runup

Maximum equity run-up value for the whole trading range.

Type

series float

See also

[strategy.netprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.netprofit)[strategy.equity](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.equity)[strategy.max_drawdown](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.max_drawdown)

### strategy.max_runup_percent

The maximum equity run-up value for the whole trading range, expressed as a percentage and calculated by formula:  `Highest Value During Trade / (Entry Price x Quantity) * 100`.

Type

series float

See also

[strategy.max_runup](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.max_runup)

### strategy.netprofit

Total currency value of all completed trades.

Type

series float

See also

[strategy.openprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.openprofit)[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)[strategy.grossprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.grossprofit)[strategy.grossloss](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.grossloss)

### strategy.netprofit_percent

The total value of all completed trades, expressed as a percentage of the initial capital.

Type

series float

See also

[strategy.netprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.netprofit)

### strategy.openprofit

Current unrealized profit or loss for all open positions.

Type

series float

See also

[strategy.netprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.netprofit)[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)

### strategy.openprofit_percent

The current unrealized profit or loss for all open positions, expressed as a percentage and calculated by formula:  `openPL / realizedEquity * 100`.

Type

series float

See also

[strategy.openprofit](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.openprofit)

### strategy.opentrades

Number of market position entries, which were not closed and remain opened. If there is no open market position, 0 is returned.

Type

series int

See also

[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)

### strategy.opentrades.capital_held

Returns the capital amount currently held by open trades.

Type

series float

Example

```
//@version=6strategy(   "strategy.opentrades.capital_held example", overlay=false, margin_long=50, margin_short=50,   default_qty_type = strategy.percent_of_equity, default_qty_value = 100 )// Enter a short position on the first bar.if barstate.isfirst    strategy.entry("Short", strategy.short)// Plot the capital held by the short position.plot(strategy.opentrades.capital_held, "Capital held")// Highlight the chart background if the position is completely closed by margin calls.bgcolor(bar_index > 0 and strategy.opentrades.capital_held == 0 ? color.new(color.red, 60) : na)
```

Remarks

This variable returns  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if the strategy does not simulate funding trades with a portion of the hypothetical account, i.e., if the  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  function does not include nonzero  `margin_long`  or  `margin_short`  arguments.

### strategy.position_avg_price

Average entry price of current market position. If the market position is flat, 'NaN' is returned.

Type

series float

See also

[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)

### strategy.position_entry_name

Name of the order that initially opened current market position.

Type

series string

See also

[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)

### strategy.position_size

Direction and size of the current market position. If the value is > 0, the market position is long. If the value is < 0, the market position is short. The absolute value is the number of contracts/shares/lots/units in trade (position size).

Type

series float

See also

[strategy.position_avg_price](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_avg_price)

### strategy.wintrades

Number of profitable trades for the whole trading range.

Type

series int

See also

[strategy.position_size](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.position_size)[strategy.opentrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.opentrades)[strategy.closedtrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.closedtrades)[strategy.losstrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.losstrades)[strategy.eventrades](https://www.tradingview.com/pine-script-reference/v6/#var_strategy.eventrades)

### syminfo.basecurrency

Returns a string containing the code representing the symbol's base currency (i.e., the traded currency or coin) if the instrument is a Forex or Crypto pair or a derivative based on such a pair. Otherwise, it returns an empty string. For example, this variable returns "EUR" for "EURJPY", "BTC" for "BTCUSDT", "CAD" for "CME:6C1!", and "" for "NASDAQ:AAPL".

Type

simple string

See also

[syminfo.currency](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.currency)[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)

### syminfo.country

Returns the two-letter code of the country where the symbol is traded, in the  [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)  format, or  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if the exchange is not directly tied to a specific country. For example, on "NASDAQ:AAPL" it will return "US", on "LSE:AAPL" it will return "GB", and on "BITSTAMP:BTCUSD it will return  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na).

Type

simple string

### syminfo.currency

Returns a string containing the code representing the currency of the symbol's prices. For example, this variable returns "USD" for "NASDAQ:AAPL" and "JPY" for "EURJPY".

Type

simple string

See also

[syminfo.basecurrency](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.basecurrency)[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[currency.USD](https://www.tradingview.com/pine-script-reference/v6/#const_currency.USD)[currency.EUR](https://www.tradingview.com/pine-script-reference/v6/#const_currency.EUR)

### syminfo.current_contract

The ticker identifier of the underlying contract, if the current symbol is a continuous futures contract;  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  otherwise.

Type

simple string

See also

[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[syminfo.description](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.description)

### syminfo.description

Description for the current symbol.

Type

simple string

See also

[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[syminfo.prefix](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.prefix)

### syminfo.employees

The number of employees the company has.

Type

simple int

Example

```
//@version=6indicator("syminfo simple")//@variable A table containing information about a company's employees, shareholders, and shares.var result_table = table.new(position = position.top_right, columns = 2, rows = 5, border_width = 1)if barstate.islastconfirmedhistory    // Add header cells    table.cell(table_id = result_table, column = 0, row = 0, text = "name")    table.cell(table_id = result_table, column = 1, row = 0, text = "value")    // Add employee info cells.    table.cell(table_id = result_table, column = 0, row = 1, text = "employees")    table.cell(table_id = result_table, column = 1, row = 1, text = str.tostring(syminfo.employees))    // Add shareholder cells.    table.cell(table_id = result_table, column = 0, row = 2, text = "shareholders")    table.cell(table_id = result_table, column = 1, row = 2, text = str.tostring(syminfo.shareholders))    // Add float shares outstanding cells.    table.cell(table_id = result_table, column = 0, row = 3, text = "shares_outstanding_float")    table.cell(table_id = result_table, column = 1, row = 3, text = str.tostring(syminfo.shares_outstanding_float))    // Add total shares outstanding cells.    table.cell(table_id = result_table, column = 0, row = 4, text = "shares_outstanding_total")    table.cell(table_id = result_table, column = 1, row = 4, text = str.tostring(syminfo.shares_outstanding_total))
```

See also

[syminfo.shareholders](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.shareholders)[syminfo.shares_outstanding_float](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.shares_outstanding_float)[syminfo.shares_outstanding_total](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.shares_outstanding_total)

### syminfo.expiration_date

A UNIX timestamp representing the start of the last day of the current futures contract. This variable is only compatible with non-continuous futures symbols. On other symbols, it returns  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na).

Type

simple int

### syminfo.industry

Returns the industry of the symbol, or  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if the symbol has no industry. Example: "Internet Software/Services", "Packaged software", "Integrated Oil", "Motor Vehicles", etc. These are the same values one can see in the chart's "Symbol info" window.

Type

simple string

Remarks

A sector is a broad section of the economy. An industry is a narrower classification. NASDAQ:CAT (Caterpillar, Inc.) for example, belongs to the "Producer Manufacturing" sector and the "Trucks/Construction/Farm Machinery" industry.

### syminfo.isin

Holds a string representing a symbol's associated International Securities Identification Number (ISIN), or an empty string if there is no ISIN information available for the symbol. An ISIN is a 12-character alphanumeric code that uniquely identifies a security globally. Unlike ticker symbols, which can vary across exchanges, the ISIN for a security is consistent across exchanges. As such, programmers can use the ISIN to identify an underlying financial instrument, regardless of the exchange or the symbol name listed by an exchange.

For example, the ISIN associated with NASDAQ:AAPL and GETTEX:APC is US0378331005, because both symbols refer to the common stock from Apple Inc. In contrast, the ISIN for TSX:AAPL is CA03785Y1007, because the symbol refers to a different instrument: the Apple Inc. Canadian Depositary Receipt (CDR).

Type

simple string

See also

[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[syminfo.description](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.description)

### syminfo.main_tickerid

A ticker identifier representing the current chart's symbol. The value contains an exchange prefix and a symbol name, separated by a colon (e.g., "NASDAQ:AAPL"). It can also include information about data modifications such as dividend adjustment, non-standard chart type, currency conversion, etc. Unlike  [syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid), this variable's value does not change when used in the  `expression`  argument of a  `request.*()`  function call.

Type

simple string

See also

[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[timeframe.main_period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.main_period)[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period)[timeframe.multiplier](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.multiplier)[syminfo.root](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.root)

### syminfo.mincontract

The smallest amount of the current symbol that can be traded. This limit is set by the exchange. For cryptocurrencies, it is often less than 1 token. For most other types of asset, it is often 1.

Type

simple float

See also

[syminfo.mintick](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.mintick)[syminfo.pointvalue](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.pointvalue)

### syminfo.minmove

Returns a whole number used to calculate the smallest increment between a symbol's price movements ([syminfo.mintick](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.mintick)). It is the numerator in the  [syminfo.mintick](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.mintick)  formula:  `syminfo.minmove / syminfo.pricescale = syminfo.mintick`.

Type

simple int

See also

[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period)[timeframe.multiplier](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.multiplier)[syminfo.root](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.root)

### syminfo.mintick

Min tick value for the current symbol.

Type

simple float

See also

[syminfo.pointvalue](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.pointvalue)[syminfo.mincontract](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.mincontract)

### syminfo.pointvalue

The chart price of a security multiplied by the point value equals the actual price of the traded security.

For all types of security except futures, the point value is usually equal to 1 and can therefore be ignored. For futures, the prices shown on the chart are either the cost of a single futures contract, in which case the point value is 1, or the price of a single unit of the underlying commodity, in which case the point value represents the number of units included in a single contract.

For example, the price of the "COMEX:GC1!" gold futures chart reflects the price of a single troy ounce of gold. However, a single GC futures contract comprises 100 troy ounces, as defined by the COMEX exchange. So when the price on the "GC1!" chart is 2000 USD, a single contract costs 2000 USD * 100 troy ounces = 200,000 USD. This calculation is important in backtesting, because the strategy engine takes the point value into account, and does not open a position if there is not enough capital.

The point value is also displayed in the Security Info window for a given asset.

Type

simple float

See also

[syminfo.mintick](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.mintick)[syminfo.mincontract](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.mincontract)

### syminfo.prefix

Prefix of current symbol name (i.e. for 'CME_EOD:TICKER' prefix is 'CME_EOD').

Type

simple string

Example

```
//@version=6indicator("syminfo.prefix")// If current chart symbol is 'BATS:MSFT' then syminfo.prefix is 'BATS'.if barstate.islastconfirmedhistory    label.new(bar_index, high, text=syminfo.prefix)
```

See also

[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)

### syminfo.pricescale

Returns a whole number used to calculate the smallest increment between a symbol's price movements ([syminfo.mintick](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.mintick)). It is the denominator in the  [syminfo.mintick](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.mintick)  formula:  `syminfo.minmove / syminfo.pricescale = syminfo.mintick`.

Type

simple int

See also

[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period)[timeframe.multiplier](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.multiplier)[syminfo.root](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.root)

### syminfo.recommendations_buy

The number of analysts who gave the current symbol a "Buy" rating.

Type

series int

Example

```
//@version=6indicator("syminfo recommendations", overlay = true)//@variable A table containing information about analyst recommendations.var table ratings = table.new(position.top_right, 8, 2, frame_color = #000000)if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    // Add header cells.    table.cell(ratings, 0, 0, "Start Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 0, "End Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 0, "Buy", bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 0, "Strong Buy", bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 0, "Sell", bgcolor = color.maroon, text_color = #000000, text_size = size.large)    table.cell(ratings, 5, 0, "Strong Sell", bgcolor = color.red, text_color = #000000, text_size = size.large)    table.cell(ratings, 6, 0, "Hold", bgcolor = color.orange, text_color = #000000, text_size = size.large)    table.cell(ratings, 7, 0, "Total", bgcolor = color.silver, text_color = #000000, text_size = size.large)    // Recommendation strings    string startDate         = str.format_time(syminfo.recommendations_date, "yyyy-MM-dd")    string endDate           = str.format_time(YTD, "yyyy-MM-dd")    string buyRatings        = str.tostring(syminfo.recommendations_buy)    string strongBuyRatings  = str.tostring(syminfo.recommendations_buy_strong)    string sellRatings       = str.tostring(syminfo.recommendations_sell)    string strongSellRatings = str.tostring(syminfo.recommendations_sell_strong)    string holdRatings       = str.tostring(syminfo.recommendations_hold)    string totalRatings      = str.tostring(syminfo.recommendations_total)    // Add value cells    table.cell(ratings, 0, 1, startDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 1, endDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 1, buyRatings, bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 1, strongBuyRatings, bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 1, sellRatings, bgcolor = color.maroon, text_color = #000000, text_size = size.large)
```

See also

[syminfo.recommendations_buy_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy_strong)[syminfo.recommendations_date](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_date)[syminfo.recommendations_hold](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_hold)[syminfo.recommendations_total](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_total)[syminfo.recommendations_sell](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell)[syminfo.recommendations_sell_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell_strong)

### syminfo.recommendations_buy_strong

The number of analysts who gave the current symbol a "Strong Buy" rating.

Type

series int

Example

```
//@version=6indicator("syminfo recommendations", overlay = true)//@variable A table containing information about analyst recommendations.var table ratings = table.new(position.top_right, 8, 2, frame_color = #000000)if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    // Add header cells.    table.cell(ratings, 0, 0, "Start Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 0, "End Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 0, "Buy", bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 0, "Strong Buy", bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 0, "Sell", bgcolor = color.maroon, text_color = #000000, text_size = size.large)    table.cell(ratings, 5, 0, "Strong Sell", bgcolor = color.red, text_color = #000000, text_size = size.large)    table.cell(ratings, 6, 0, "Hold", bgcolor = color.orange, text_color = #000000, text_size = size.large)    table.cell(ratings, 7, 0, "Total", bgcolor = color.silver, text_color = #000000, text_size = size.large)    // Recommendation strings    string startDate         = str.format_time(syminfo.recommendations_date, "yyyy-MM-dd")    string endDate           = str.format_time(YTD, "yyyy-MM-dd")    string buyRatings        = str.tostring(syminfo.recommendations_buy)    string strongBuyRatings  = str.tostring(syminfo.recommendations_buy_strong)    string sellRatings       = str.tostring(syminfo.recommendations_sell)    string strongSellRatings = str.tostring(syminfo.recommendations_sell_strong)    string holdRatings       = str.tostring(syminfo.recommendations_hold)    string totalRatings      = str.tostring(syminfo.recommendations_total)    // Add value cells    table.cell(ratings, 0, 1, startDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 1, endDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 1, buyRatings, bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 1, strongBuyRatings, bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 1, sellRatings, bgcolor = color.maroon, text_color = #000000, text_size = size.large)
```

See also

[syminfo.recommendations_buy](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy)[syminfo.recommendations_date](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_date)[syminfo.recommendations_hold](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_hold)[syminfo.recommendations_total](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_total)[syminfo.recommendations_sell](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell)[syminfo.recommendations_sell_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell_strong)

### syminfo.recommendations_date

The starting date of the last set of recommendations for the current symbol.

Type

series int

Example

```
//@version=6indicator("syminfo recommendations", overlay = true)//@variable A table containing information about analyst recommendations.var table ratings = table.new(position.top_right, 8, 2, frame_color = #000000)if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    // Add header cells.    table.cell(ratings, 0, 0, "Start Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 0, "End Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 0, "Buy", bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 0, "Strong Buy", bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 0, "Sell", bgcolor = color.maroon, text_color = #000000, text_size = size.large)    table.cell(ratings, 5, 0, "Strong Sell", bgcolor = color.red, text_color = #000000, text_size = size.large)    table.cell(ratings, 6, 0, "Hold", bgcolor = color.orange, text_color = #000000, text_size = size.large)    table.cell(ratings, 7, 0, "Total", bgcolor = color.silver, text_color = #000000, text_size = size.large)    // Recommendation strings    string startDate         = str.format_time(syminfo.recommendations_date, "yyyy-MM-dd")    string endDate           = str.format_time(YTD, "yyyy-MM-dd")    string buyRatings        = str.tostring(syminfo.recommendations_buy)    string strongBuyRatings  = str.tostring(syminfo.recommendations_buy_strong)    string sellRatings       = str.tostring(syminfo.recommendations_sell)    string strongSellRatings = str.tostring(syminfo.recommendations_sell_strong)    string holdRatings       = str.tostring(syminfo.recommendations_hold)    string totalRatings      = str.tostring(syminfo.recommendations_total)    // Add value cells    table.cell(ratings, 0, 1, startDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 1, endDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 1, buyRatings, bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 1, strongBuyRatings, bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 1, sellRatings, bgcolor = color.maroon, text_color = #000000, text_size = size.large)
```

See also

[syminfo.recommendations_buy](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy)[syminfo.recommendations_buy_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy_strong)[syminfo.recommendations_hold](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_hold)[syminfo.recommendations_total](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_total)[syminfo.recommendations_sell](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell)[syminfo.recommendations_sell_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell_strong)

### syminfo.recommendations_hold

The number of analysts who gave the current symbol a "Hold" rating.

Type

series int

Example

```
//@version=6indicator("syminfo recommendations", overlay = true)//@variable A table containing information about analyst recommendations.var table ratings = table.new(position.top_right, 8, 2, frame_color = #000000)if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    // Add header cells.    table.cell(ratings, 0, 0, "Start Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 0, "End Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 0, "Buy", bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 0, "Strong Buy", bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 0, "Sell", bgcolor = color.maroon, text_color = #000000, text_size = size.large)    table.cell(ratings, 5, 0, "Strong Sell", bgcolor = color.red, text_color = #000000, text_size = size.large)    table.cell(ratings, 6, 0, "Hold", bgcolor = color.orange, text_color = #000000, text_size = size.large)    table.cell(ratings, 7, 0, "Total", bgcolor = color.silver, text_color = #000000, text_size = size.large)    // Recommendation strings    string startDate         = str.format_time(syminfo.recommendations_date, "yyyy-MM-dd")    string endDate           = str.format_time(YTD, "yyyy-MM-dd")    string buyRatings        = str.tostring(syminfo.recommendations_buy)    string strongBuyRatings  = str.tostring(syminfo.recommendations_buy_strong)    string sellRatings       = str.tostring(syminfo.recommendations_sell)    string strongSellRatings = str.tostring(syminfo.recommendations_sell_strong)    string holdRatings       = str.tostring(syminfo.recommendations_hold)    string totalRatings      = str.tostring(syminfo.recommendations_total)    // Add value cells    table.cell(ratings, 0, 1, startDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 1, endDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 1, buyRatings, bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 1, strongBuyRatings, bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 1, sellRatings, bgcolor = color.maroon, text_color = #000000, text_size = size.large)
```

See also

[syminfo.recommendations_buy](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy)[syminfo.recommendations_buy_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy_strong)[syminfo.recommendations_date](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_date)[syminfo.recommendations_total](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_total)[syminfo.recommendations_sell](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell)[syminfo.recommendations_sell_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell_strong)

### syminfo.recommendations_sell

The number of analysts who gave the current symbol a "Sell" rating.

Type

series int

Example

```
//@version=6indicator("syminfo recommendations", overlay = true)//@variable A table containing information about analyst recommendations.var table ratings = table.new(position.top_right, 8, 2, frame_color = #000000)if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    // Add header cells.    table.cell(ratings, 0, 0, "Start Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 0, "End Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 0, "Buy", bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 0, "Strong Buy", bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 0, "Sell", bgcolor = color.maroon, text_color = #000000, text_size = size.large)    table.cell(ratings, 5, 0, "Strong Sell", bgcolor = color.red, text_color = #000000, text_size = size.large)    table.cell(ratings, 6, 0, "Hold", bgcolor = color.orange, text_color = #000000, text_size = size.large)    table.cell(ratings, 7, 0, "Total", bgcolor = color.silver, text_color = #000000, text_size = size.large)    // Recommendation strings    string startDate         = str.format_time(syminfo.recommendations_date, "yyyy-MM-dd")    string endDate           = str.format_time(YTD, "yyyy-MM-dd")    string buyRatings        = str.tostring(syminfo.recommendations_buy)    string strongBuyRatings  = str.tostring(syminfo.recommendations_buy_strong)    string sellRatings       = str.tostring(syminfo.recommendations_sell)    string strongSellRatings = str.tostring(syminfo.recommendations_sell_strong)    string holdRatings       = str.tostring(syminfo.recommendations_hold)    string totalRatings      = str.tostring(syminfo.recommendations_total)    // Add value cells    table.cell(ratings, 0, 1, startDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 1, endDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 1, buyRatings, bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 1, strongBuyRatings, bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 1, sellRatings, bgcolor = color.maroon, text_color = #000000, text_size = size.large)
```

See also

[syminfo.recommendations_buy](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy)[syminfo.recommendations_buy_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy_strong)[syminfo.recommendations_date](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_date)[syminfo.recommendations_hold](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_hold)[syminfo.recommendations_total](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_total)[syminfo.recommendations_sell_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell_strong)

### syminfo.recommendations_sell_strong

The number of analysts who gave the current symbol a "Strong Sell" rating.

Type

series int

Example

```
//@version=6indicator("syminfo recommendations", overlay = true)//@variable A table containing information about analyst recommendations.var table ratings = table.new(position.top_right, 8, 2, frame_color = #000000)if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    // Add header cells.    table.cell(ratings, 0, 0, "Start Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 0, "End Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 0, "Buy", bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 0, "Strong Buy", bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 0, "Sell", bgcolor = color.maroon, text_color = #000000, text_size = size.large)    table.cell(ratings, 5, 0, "Strong Sell", bgcolor = color.red, text_color = #000000, text_size = size.large)    table.cell(ratings, 6, 0, "Hold", bgcolor = color.orange, text_color = #000000, text_size = size.large)    table.cell(ratings, 7, 0, "Total", bgcolor = color.silver, text_color = #000000, text_size = size.large)    // Recommendation strings    string startDate         = str.format_time(syminfo.recommendations_date, "yyyy-MM-dd")    string endDate           = str.format_time(YTD, "yyyy-MM-dd")    string buyRatings        = str.tostring(syminfo.recommendations_buy)    string strongBuyRatings  = str.tostring(syminfo.recommendations_buy_strong)    string sellRatings       = str.tostring(syminfo.recommendations_sell)    string strongSellRatings = str.tostring(syminfo.recommendations_sell_strong)    string holdRatings       = str.tostring(syminfo.recommendations_hold)    string totalRatings      = str.tostring(syminfo.recommendations_total)    // Add value cells    table.cell(ratings, 0, 1, startDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 1, endDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 1, buyRatings, bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 1, strongBuyRatings, bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 1, sellRatings, bgcolor = color.maroon, text_color = #000000, text_size = size.large)
```

See also

[syminfo.recommendations_buy](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy)[syminfo.recommendations_buy_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy_strong)[syminfo.recommendations_date](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_date)[syminfo.recommendations_hold](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_hold)[syminfo.recommendations_total](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_total)[syminfo.recommendations_sell](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell)

### syminfo.recommendations_total

The total number of recommendations for the current symbol.

Type

series int

Example

```
//@version=6indicator("syminfo recommendations", overlay = true)//@variable A table containing information about analyst recommendations.var table ratings = table.new(position.top_right, 8, 2, frame_color = #000000)if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    // Add header cells.    table.cell(ratings, 0, 0, "Start Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 0, "End Date", bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 0, "Buy", bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 0, "Strong Buy", bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 0, "Sell", bgcolor = color.maroon, text_color = #000000, text_size = size.large)    table.cell(ratings, 5, 0, "Strong Sell", bgcolor = color.red, text_color = #000000, text_size = size.large)    table.cell(ratings, 6, 0, "Hold", bgcolor = color.orange, text_color = #000000, text_size = size.large)    table.cell(ratings, 7, 0, "Total", bgcolor = color.silver, text_color = #000000, text_size = size.large)    // Recommendation strings    string startDate         = str.format_time(syminfo.recommendations_date, "yyyy-MM-dd")    string endDate           = str.format_time(YTD, "yyyy-MM-dd")    string buyRatings        = str.tostring(syminfo.recommendations_buy)    string strongBuyRatings  = str.tostring(syminfo.recommendations_buy_strong)    string sellRatings       = str.tostring(syminfo.recommendations_sell)    string strongSellRatings = str.tostring(syminfo.recommendations_sell_strong)    string holdRatings       = str.tostring(syminfo.recommendations_hold)    string totalRatings      = str.tostring(syminfo.recommendations_total)    // Add value cells    table.cell(ratings, 0, 1, startDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 1, 1, endDate, bgcolor = color.gray, text_color = #000000, text_size = size.large)    table.cell(ratings, 2, 1, buyRatings, bgcolor = color.teal, text_color = #000000, text_size = size.large)    table.cell(ratings, 3, 1, strongBuyRatings, bgcolor = color.lime, text_color = #000000, text_size = size.large)    table.cell(ratings, 4, 1, sellRatings, bgcolor = color.maroon, text_color = #000000, text_size = size.large)
```

See also

[syminfo.recommendations_buy](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy)[syminfo.recommendations_buy_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_buy_strong)[syminfo.recommendations_date](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_date)[syminfo.recommendations_hold](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_hold)[syminfo.recommendations_sell](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell)[syminfo.recommendations_sell_strong](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.recommendations_sell_strong)

### syminfo.root

Root for derivatives like futures contract. For other symbols returns the same value as  [syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker).

Type

simple string

Example

```
//@version=6indicator("syminfo.root")// If the current chart symbol is continuous futures ('ES1!'), it would display 'ES'.if barstate.islastconfirmedhistory    label.new(bar_index, high, syminfo.root)
```

See also

[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)

### syminfo.sector

Returns the sector of the symbol, or  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  if the symbol has no sector. Example: "Electronic Technology", "Technology services", "Energy Minerals", "Consumer Durables", etc. These are the same values one can see in the chart's "Symbol info" window.

Type

simple string

Remarks

A sector is a broad section of the economy. An industry is a narrower classification. NASDAQ:CAT (Caterpillar, Inc.) for example, belongs to the "Producer Manufacturing" sector and the "Trucks/Construction/Farm Machinery" industry.

### syminfo.session

Session type of the chart main series. Possible values are  [session.regular](https://www.tradingview.com/pine-script-reference/v6/#const_session.regular),  [session.extended](https://www.tradingview.com/pine-script-reference/v6/#const_session.extended).

Type

simple string

See also

[session.regular](https://www.tradingview.com/pine-script-reference/v6/#const_session.regular)[session.extended](https://www.tradingview.com/pine-script-reference/v6/#const_session.extended)

### syminfo.shareholders

The number of shareholders the company has.

Type

simple int

Example

```
//@version=6indicator("syminfo simple")//@variable A table containing information about a company's employees, shareholders, and shares.var result_table = table.new(position = position.top_right, columns = 2, rows = 5, border_width = 1)if barstate.islastconfirmedhistory    // Add header cells    table.cell(table_id = result_table, column = 0, row = 0, text = "name")    table.cell(table_id = result_table, column = 1, row = 0, text = "value")    // Add employee info cells.    table.cell(table_id = result_table, column = 0, row = 1, text = "employees")    table.cell(table_id = result_table, column = 1, row = 1, text = str.tostring(syminfo.employees))    // Add shareholder cells.    table.cell(table_id = result_table, column = 0, row = 2, text = "shareholders")    table.cell(table_id = result_table, column = 1, row = 2, text = str.tostring(syminfo.shareholders))    // Add float shares outstanding cells.    table.cell(table_id = result_table, column = 0, row = 3, text = "shares_outstanding_float")    table.cell(table_id = result_table, column = 1, row = 3, text = str.tostring(syminfo.shares_outstanding_float))    // Add total shares outstanding cells.    table.cell(table_id = result_table, column = 0, row = 4, text = "shares_outstanding_total")    table.cell(table_id = result_table, column = 1, row = 4, text = str.tostring(syminfo.shares_outstanding_total))
```

See also

[syminfo.employees](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.employees)[syminfo.shares_outstanding_float](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.shares_outstanding_float)[syminfo.shares_outstanding_total](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.shares_outstanding_total)

### syminfo.shares_outstanding_float

The total number of shares outstanding a company has available, excluding any of its restricted shares.

Type

simple float

Example

```
//@version=6indicator("syminfo simple")//@variable A table containing information about a company's employees, shareholders, and shares.var result_table = table.new(position = position.top_right, columns = 2, rows = 5, border_width = 1)if barstate.islastconfirmedhistory    // Add header cells    table.cell(table_id = result_table, column = 0, row = 0, text = "name")    table.cell(table_id = result_table, column = 1, row = 0, text = "value")    // Add employee info cells.    table.cell(table_id = result_table, column = 0, row = 1, text = "employees")    table.cell(table_id = result_table, column = 1, row = 1, text = str.tostring(syminfo.employees))    // Add shareholder cells.    table.cell(table_id = result_table, column = 0, row = 2, text = "shareholders")    table.cell(table_id = result_table, column = 1, row = 2, text = str.tostring(syminfo.shareholders))    // Add float shares outstanding cells.    table.cell(table_id = result_table, column = 0, row = 3, text = "shares_outstanding_float")    table.cell(table_id = result_table, column = 1, row = 3, text = str.tostring(syminfo.shares_outstanding_float))    // Add total shares outstanding cells.    table.cell(table_id = result_table, column = 0, row = 4, text = "shares_outstanding_total")    table.cell(table_id = result_table, column = 1, row = 4, text = str.tostring(syminfo.shares_outstanding_total))
```

See also

[syminfo.employees](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.employees)[syminfo.shareholders](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.shareholders)[syminfo.shares_outstanding_total](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.shares_outstanding_total)

### syminfo.shares_outstanding_total

The total number of shares outstanding a company has available, including restricted shares held by insiders, major shareholders, and employees.

Type

simple int

Example

```
//@version=6indicator("syminfo simple")//@variable A table containing information about a company's employees, shareholders, and shares.var result_table = table.new(position = position.top_right, columns = 2, rows = 5, border_width = 1)if barstate.islastconfirmedhistory    // Add header cells    table.cell(table_id = result_table, column = 0, row = 0, text = "name")    table.cell(table_id = result_table, column = 1, row = 0, text = "value")    // Add employee info cells.    table.cell(table_id = result_table, column = 0, row = 1, text = "employees")    table.cell(table_id = result_table, column = 1, row = 1, text = str.tostring(syminfo.employees))    // Add shareholder cells.    table.cell(table_id = result_table, column = 0, row = 2, text = "shareholders")    table.cell(table_id = result_table, column = 1, row = 2, text = str.tostring(syminfo.shareholders))    // Add float shares outstanding cells.    table.cell(table_id = result_table, column = 0, row = 3, text = "shares_outstanding_float")    table.cell(table_id = result_table, column = 1, row = 3, text = str.tostring(syminfo.shares_outstanding_float))    // Add total shares outstanding cells.    table.cell(table_id = result_table, column = 0, row = 4, text = "shares_outstanding_total")    table.cell(table_id = result_table, column = 1, row = 4, text = str.tostring(syminfo.shares_outstanding_total))
```

See also

[syminfo.employees](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.employees)[syminfo.shareholders](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.shareholders)[syminfo.shares_outstanding_float](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.shares_outstanding_float)

### syminfo.target_price_average

The average of the last yearly price targets for the symbol predicted by analysts.

Type

series float

Example

```
//@version=6indicator("syminfo target_price")if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    //@variable A line connecting the current `close` to the highest yearly price estimate.    highLine = line.new(time, close, YTD, syminfo.target_price_high, color = color.green, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the lowest yearly price estimate.    lowLine = line.new(time, close, YTD, syminfo.target_price_low, color = color.red, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the median yearly price estimate.    medianLine = line.new(time, close, YTD, syminfo.target_price_median, color = color.gray, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the average yearly price estimate.    averageLine = line.new(time, close, YTD, syminfo.target_price_average, color = color.orange, xloc = xloc.bar_time)    // Fill the space between targets    linefill.new(lowLine, medianLine, color.new(color.red, 90))    linefill.new(medianLine, highLine, color.new(color.green, 90))    // Create a label displaying the total number of analyst estimates.    string estimatesText = str.format("Number of estimates: {0}", syminfo.target_price_estimates)    label.new(bar_index, close, estimatesText, textcolor = color.white, size = size.large)
```

Remarks

If analysts supply the targets when the market is closed, the variable can return  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  until the market opens.

See also

[syminfo.target_price_date](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_date)[syminfo.target_price_estimates](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_estimates)[syminfo.target_price_high](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_high)[syminfo.target_price_low](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_low)[syminfo.target_price_median](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_median)

### syminfo.target_price_date

The starting date of the last price target prediction for the current symbol.

Type

series int

Example

```
//@version=6indicator("syminfo target_price")if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    //@variable A line connecting the current `close` to the highest yearly price estimate.    highLine = line.new(time, close, YTD, syminfo.target_price_high, color = color.green, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the lowest yearly price estimate.    lowLine = line.new(time, close, YTD, syminfo.target_price_low, color = color.red, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the median yearly price estimate.    medianLine = line.new(time, close, YTD, syminfo.target_price_median, color = color.gray, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the average yearly price estimate.    averageLine = line.new(time, close, YTD, syminfo.target_price_average, color = color.orange, xloc = xloc.bar_time)    // Fill the space between targets    linefill.new(lowLine, medianLine, color.new(color.red, 90))    linefill.new(medianLine, highLine, color.new(color.green, 90))    // Create a label displaying the total number of analyst estimates.    string estimatesText = str.format("Number of estimates: {0}", syminfo.target_price_estimates)    label.new(bar_index, close, estimatesText, textcolor = color.white, size = size.large)
```

Remarks

If analysts supply the targets when the market is closed, the variable can return  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  until the market opens.

See also

[syminfo.target_price_average](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_average)[syminfo.target_price_estimates](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_estimates)[syminfo.target_price_high](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_high)[syminfo.target_price_low](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_low)[syminfo.target_price_median](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_median)

### syminfo.target_price_estimates

The latest total number of price target predictions for the current symbol.

Type

series float

Example

```
//@version=6indicator("syminfo target_price")if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    //@variable A line connecting the current `close` to the highest yearly price estimate.    highLine = line.new(time, close, YTD, syminfo.target_price_high, color = color.green, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the lowest yearly price estimate.    lowLine = line.new(time, close, YTD, syminfo.target_price_low, color = color.red, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the median yearly price estimate.    medianLine = line.new(time, close, YTD, syminfo.target_price_median, color = color.gray, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the average yearly price estimate.    averageLine = line.new(time, close, YTD, syminfo.target_price_average, color = color.orange, xloc = xloc.bar_time)    // Fill the space between targets    linefill.new(lowLine, medianLine, color.new(color.red, 90))    linefill.new(medianLine, highLine, color.new(color.green, 90))    // Create a label displaying the total number of analyst estimates.    string estimatesText = str.format("Number of estimates: {0}", syminfo.target_price_estimates)    label.new(bar_index, close, estimatesText, textcolor = color.white, size = size.large)
```

Remarks

If analysts supply the targets when the market is closed, the variable can return  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  until the market opens.

See also

[syminfo.target_price_average](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_average)[syminfo.target_price_date](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_date)[syminfo.target_price_high](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_high)[syminfo.target_price_low](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_low)[syminfo.target_price_median](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_median)

### syminfo.target_price_high

The last highest yearly price target for the symbol predicted by analysts.

Type

series float

Example

```
//@version=6indicator("syminfo target_price")if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    //@variable A line connecting the current `close` to the highest yearly price estimate.    highLine = line.new(time, close, YTD, syminfo.target_price_high, color = color.green, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the lowest yearly price estimate.    lowLine = line.new(time, close, YTD, syminfo.target_price_low, color = color.red, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the median yearly price estimate.    medianLine = line.new(time, close, YTD, syminfo.target_price_median, color = color.gray, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the average yearly price estimate.    averageLine = line.new(time, close, YTD, syminfo.target_price_average, color = color.orange, xloc = xloc.bar_time)    // Fill the space between targets    linefill.new(lowLine, medianLine, color.new(color.red, 90))    linefill.new(medianLine, highLine, color.new(color.green, 90))    // Create a label displaying the total number of analyst estimates.    string estimatesText = str.format("Number of estimates: {0}", syminfo.target_price_estimates)    label.new(bar_index, close, estimatesText, textcolor = color.white, size = size.large)
```

Remarks

If analysts supply the targets when the market is closed, the variable can return  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  until the market opens.

See also

[syminfo.target_price_average](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_average)[syminfo.target_price_date](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_date)[syminfo.target_price_estimates](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_estimates)[syminfo.target_price_low](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_low)[syminfo.target_price_median](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_median)

### syminfo.target_price_low

The last lowest yearly price target for the symbol predicted by analysts.

Type

series float

Example

```
//@version=6indicator("syminfo target_price")if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    //@variable A line connecting the current `close` to the highest yearly price estimate.    highLine = line.new(time, close, YTD, syminfo.target_price_high, color = color.green, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the lowest yearly price estimate.    lowLine = line.new(time, close, YTD, syminfo.target_price_low, color = color.red, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the median yearly price estimate.    medianLine = line.new(time, close, YTD, syminfo.target_price_median, color = color.gray, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the average yearly price estimate.    averageLine = line.new(time, close, YTD, syminfo.target_price_average, color = color.orange, xloc = xloc.bar_time)    // Fill the space between targets    linefill.new(lowLine, medianLine, color.new(color.red, 90))    linefill.new(medianLine, highLine, color.new(color.green, 90))    // Create a label displaying the total number of analyst estimates.    string estimatesText = str.format("Number of estimates: {0}", syminfo.target_price_estimates)    label.new(bar_index, close, estimatesText, textcolor = color.white, size = size.large)
```

Remarks

If analysts supply the targets when the market is closed, the variable can return  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  until the market opens.

See also

[syminfo.target_price_average](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_average)[syminfo.target_price_date](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_date)[syminfo.target_price_estimates](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_estimates)[syminfo.target_price_high](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_high)[syminfo.target_price_median](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_median)

### syminfo.target_price_median

The median of the last yearly price targets for the symbol predicted by analysts.

Type

series float

Example

```
//@version=6indicator("syminfo target_price")if barstate.islastconfirmedhistory    //@variable The time value one year from the date of the last analyst recommendations.    int YTD = syminfo.target_price_date + timeframe.in_seconds("12M") * 1000    //@variable A line connecting the current `close` to the highest yearly price estimate.    highLine = line.new(time, close, YTD, syminfo.target_price_high, color = color.green, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the lowest yearly price estimate.    lowLine = line.new(time, close, YTD, syminfo.target_price_low, color = color.red, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the median yearly price estimate.    medianLine = line.new(time, close, YTD, syminfo.target_price_median, color = color.gray, xloc = xloc.bar_time)    //@variable A line connecting the current `close` to the average yearly price estimate.    averageLine = line.new(time, close, YTD, syminfo.target_price_average, color = color.orange, xloc = xloc.bar_time)    // Fill the space between targets    linefill.new(lowLine, medianLine, color.new(color.red, 90))    linefill.new(medianLine, highLine, color.new(color.green, 90))    // Create a label displaying the total number of analyst estimates.    string estimatesText = str.format("Number of estimates: {0}", syminfo.target_price_estimates)    label.new(bar_index, close, estimatesText, textcolor = color.white, size = size.large)
```

Remarks

If analysts supply the targets when the market is closed, the variable can return  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  until the market opens.

See also

[syminfo.target_price_average](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_average)[syminfo.target_price_date](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_date)[syminfo.target_price_estimates](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_estimates)[syminfo.target_price_high](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_high)[syminfo.target_price_low](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.target_price_low)

### syminfo.ticker

Symbol name without exchange prefix, e.g. 'MSFT'.

Type

simple string

See also

[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)[timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period)[timeframe.multiplier](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.multiplier)[syminfo.root](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.root)

### syminfo.tickerid

A ticker identifier representing the chart's symbol or a requested symbol, depending on how the script uses it. The variable's value represents a requested dataset's ticker ID when used in the  `expression`  argument of a  `request.*()`  function call. Otherwise, it represents the chart's ticker ID. The value contains an exchange prefix and a symbol name, separated by a colon (e.g., "NASDAQ:AAPL"). It can also include information about data modifications such as dividend adjustment, non-standard chart type, currency conversion, etc.

Type

simple string

Remarks

Because the value of this variable does not always use a simple "prefix:ticker" format, it is a poor candidate for use in boolean comparisons or string manipulation functions. In those contexts, run the variable's result through  [ticker.standard()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.standard)  to purify it. This will remove any extraneous information and return a ticker ID consistently formatted using the "prefix:ticker" structure.

To always access the script's main ticker ID, even within another context, use the  [syminfo.main_tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.main_tickerid)  variable.

See also

[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[syminfo.main_tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.main_tickerid)[timeframe.main_period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.main_period)[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period)[timeframe.multiplier](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.multiplier)[syminfo.root](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.root)

### syminfo.timezone

Timezone of the exchange of the chart main series. Possible values see in  [timestamp()](https://www.tradingview.com/pine-script-reference/v6/#fun_timestamp).

Type

simple string

See also

[timestamp()](https://www.tradingview.com/pine-script-reference/v6/#fun_timestamp)

### syminfo.type

The type of market the symbol belongs to. The values are "stock", "fund", "dr", "right", "bond", "warrant", "structured", "index", "forex", "futures", "spread", "economic", "fundamental", "crypto", "spot", "swap", "option", "commodity".

Type

simple string

See also

[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)

### syminfo.volumetype

Volume type of the current symbol. Possible values are: "base" for base currency, "quote" for quote currency, "tick" for the number of transactions, and "n/a" when there is no volume or its type is not specified.

Type

simple string

Remarks

Only some data feed suppliers provide information qualifying volume. As a result, the variable will return a value on some symbols only, mostly in the crypto sector.

See also

[syminfo.type](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.type)

### ta.accdist

Accumulation/distribution index.

Type

series float

### ta.iii

Intraday Intensity Index.

Type

series float

Example

```
//@version=6indicator("Intraday Intensity Index")plot(ta.iii, color=color.yellow)// the same on pinef_iii() =>    (2 * close - high - low) / ((high - low) * volume)plot(f_iii())
```

### ta.nvi

Negative Volume Index.

Type

series float

Example

```
//@version=6indicator("Negative Volume Index")plot(ta.nvi, color=color.yellow)// the same on pinef_nvi() =>    float ta_nvi = 1.0    float prevNvi = (nz(ta_nvi[1], 0.0) == 0.0) ? 1.0 : ta_nvi[1]    if nz(close, 0.0) == 0.0 or nz(close[1], 0.0) == 0.0        ta_nvi := prevNvi    else        ta_nvi := (volume < nz(volume[1], 0.0)) ? prevNvi + ((close - close[1]) / close[1]) * prevNvi : prevNvi    result = ta_nviplot(f_nvi())
```

### ta.obv

On Balance Volume.

Type

series float

Example

```
//@version=6indicator("On Balance Volume")plot(ta.obv, color=color.yellow)// the same on pinef_obv() =>    ta.cum(math.sign(ta.change(close)) * volume)plot(f_obv())
```

### ta.pvi

Positive Volume Index.

Type

series float

Example

```
//@version=6indicator("Positive Volume Index")plot(ta.pvi, color=color.yellow)// the same on pinef_pvi() =>    float ta_pvi = 1.0    float prevPvi = (nz(ta_pvi[1], 0.0) == 0.0) ? 1.0 : ta_pvi[1]    if nz(close, 0.0) == 0.0 or nz(close[1], 0.0) == 0.0        ta_pvi := prevPvi    else        ta_pvi := (volume > nz(volume[1], 0.0)) ? prevPvi + ((close - close[1]) / close[1]) * prevPvi : prevPvi    result = ta_pviplot(f_pvi())
```

### ta.pvt

Price-Volume Trend.

Type

series float

Example

```
//@version=6indicator("Price-Volume Trend")plot(ta.pvt, color=color.yellow)// the same on pinef_pvt() =>    ta.cum((ta.change(close) / close[1]) * volume)plot(f_pvt())
```

### ta.tr

True range, equivalent to  `ta.tr(handle_na = false)`. It is calculated as  `math.max(high - low, math.abs(high - close[1]), math.abs(low - close[1]))`.

Type

series float

See also

[ta.tr()](https://www.tradingview.com/pine-script-reference/v6/#fun_ta.tr)[ta.atr()](https://www.tradingview.com/pine-script-reference/v6/#fun_ta.atr)

### ta.vwap

Volume Weighted Average Price. It uses  [hlc3](https://www.tradingview.com/pine-script-reference/v6/#var_hlc3)  as its source series.

Type

series float

See also

[ta.vwap()](https://www.tradingview.com/pine-script-reference/v6/#fun_ta.vwap)

### ta.wad

Williams Accumulation/Distribution.

Type

series float

Example

```
//@version=6indicator("Williams Accumulation/Distribution")plot(ta.wad, color=color.yellow)// the same on pinef_wad() =>    trueHigh = math.max(high, close[1])    trueLow = math.min(low, close[1])    mom = ta.change(close)    gain = (mom > 0) ? close - trueLow : (mom < 0) ? close - trueHigh : 0    ta.cum(gain)plot(f_wad())
```

### ta.wvad

Williams Variable Accumulation/Distribution.

Type

series float

Example

```
//@version=6indicator("Williams Variable Accumulation/Distribution")plot(ta.wvad, color=color.yellow)// the same on pinef_wvad() =>    (close - open) / (high - low) * volumeplot(f_wvad())
```

### table.all

Returns an array filled with all the current tables drawn by the script.

Type

array<table>

Example

```
//@version=6indicator("table.all")//delete all tablestable.new(position = position.top_right, columns = 2, rows = 1, bgcolor = color.yellow, border_width = 1)a_allTables = table.allif array.size(a_allTables) > 0    for i = 0 to array.size(a_allTables) - 1        table.delete(array.get(a_allTables, i))
```

Remarks

The array is read-only. Index zero of the array is the ID of the oldest object on the chart.

See also

[table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new)[line.all](https://www.tradingview.com/pine-script-reference/v6/#var_line.all)[label.all](https://www.tradingview.com/pine-script-reference/v6/#var_label.all)[box.all](https://www.tradingview.com/pine-script-reference/v6/#var_box.all)

### time

Current bar time in UNIX format. It is the number of milliseconds that have elapsed since 00:00:00 UTC, 1 January 1970.

Type

series int

Remarks

Note that this variable returns the timestamp based on the time of the bar's open. Because of that, for overnight sessions (e.g. EURUSD, where Monday session starts on Sunday, 17:00) this variable can return time before the specified date of the trading day. For example, on EURUSD,  `dayofmonth(time)`  can be lower by 1 than the date of the trading day, because the bar for the current day actually opens one day prior.

See also

[time()](https://www.tradingview.com/pine-script-reference/v6/#fun_time)[time_close](https://www.tradingview.com/pine-script-reference/v6/#var_time_close)[timenow](https://www.tradingview.com/pine-script-reference/v6/#var_timenow)[year](https://www.tradingview.com/pine-script-reference/v6/#var_year)[month](https://www.tradingview.com/pine-script-reference/v6/#var_month)[weekofyear](https://www.tradingview.com/pine-script-reference/v6/#var_weekofyear)[dayofmonth](https://www.tradingview.com/pine-script-reference/v6/#var_dayofmonth)[dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)[hour](https://www.tradingview.com/pine-script-reference/v6/#var_hour)[minute](https://www.tradingview.com/pine-script-reference/v6/#var_minute)[second](https://www.tradingview.com/pine-script-reference/v6/#var_second)

### time_close

The time of the current bar's close in UNIX format. It represents the number of milliseconds elapsed since 00:00:00 UTC, 1 January 1970. On tick charts and price-based charts such as Renko, line break, Kagi, point & figure, and range, this variable's series holds an  [na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  timestamp for the latest realtime bar (because the future closing time is unpredictable), but valid timestamps for all previous bars.

Type

series int

See also

[time](https://www.tradingview.com/pine-script-reference/v6/#var_time)[timenow](https://www.tradingview.com/pine-script-reference/v6/#var_timenow)[year](https://www.tradingview.com/pine-script-reference/v6/#var_year)[month](https://www.tradingview.com/pine-script-reference/v6/#var_month)[weekofyear](https://www.tradingview.com/pine-script-reference/v6/#var_weekofyear)[dayofmonth](https://www.tradingview.com/pine-script-reference/v6/#var_dayofmonth)[dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)[hour](https://www.tradingview.com/pine-script-reference/v6/#var_hour)[minute](https://www.tradingview.com/pine-script-reference/v6/#var_minute)[second](https://www.tradingview.com/pine-script-reference/v6/#var_second)

### time_tradingday

The timestamp that represents 00:00 UTC of the trading day the current bar belongs to, in UNIX format (the number of milliseconds that have elapsed since 00:00:00 UTC, 1 January 1970).

Type

series int

Example

```
//@version=6indicator("Friday session")//@variable The day of week, based on the current `time_tradingday` value. //          Uses "UTC+0" to return the daily session's timestamp at 00:00 UTC. int tradingDayOfWeek = dayofweek(time_tradingday, "UTC+0")//@variable Returns `true` if the `dayofweek` represents Friday, in exchange time.//          It might never return `true` on overnight symbols, depending on the timeframe, since the Friday session//          starts on Thursday.bool isFriday = dayofweek == dayofweek.friday//@variable Returns `true` if the `tradingDayOfWeek` is Friday. //          Differs from `isFriday` on symbols with overnight sessions and for timeframes > "1D" on others.bool isFridaySession = tradingDayOfWeek == dayofweek.friday// Create a horizontal line at the `dayofweek.friday` value.hline(dayofweek.friday, "Friday value", color.gray, hline.style_dashed, 2)// Plot the `dayofweek` and `tradingDayOfWeek` for comparison.plot(dayofweek, "Day of week", color.blue, 2)plot(tradingDayOfWeek, "Trading day", color.teal, 3)// Highlight the background when `isFriday` and `isFridaySession` occur.bgcolor(isFriday ? color.new(color.blue, 90) : na, title = "isFriday highlight")bgcolor(isFridaySession ? color.new(color.teal, 80) : na, title = "isFridaySession highlight")
```

Remarks

This variable is helpful when working with overnight sessions, where the day's session can begin on the previous calendar day. For example, on the "FXCM:EURUSD" symbol, the Monday session starts on Sunday, 17:00, exchange time. Unlike  `time`, which returns the timestamp for Sunday at 17:00 on the Monday daily bar,  `time_tradingday`  returns the timestamp for Monday at 00:00 UTC. When used on timeframes higher than "1D",  `time_tradingday`  returns the timestamp of the last trading day inside that bar (e.g., on "1W", it returns the timestamp of the final trading day within the week).

See also

[time](https://www.tradingview.com/pine-script-reference/v6/#var_time)[time_close](https://www.tradingview.com/pine-script-reference/v6/#var_time_close)

### timeframe.isdaily

Returns true if current resolution is a daily resolution, false otherwise.

Type

simple bool

See also

[timeframe.isdwm](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdwm)[timeframe.isintraday](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isintraday)[timeframe.isminutes](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isminutes)[timeframe.isseconds](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isseconds)[timeframe.isticks](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isticks)[timeframe.isweekly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isweekly)[timeframe.ismonthly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.ismonthly)

### timeframe.isdwm

Returns true if current resolution is a daily or weekly or monthly resolution, false otherwise.

Type

simple bool

See also

[timeframe.isintraday](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isintraday)[timeframe.isminutes](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isminutes)[timeframe.isseconds](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isseconds)[timeframe.isticks](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isticks)[timeframe.isdaily](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdaily)[timeframe.isweekly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isweekly)[timeframe.ismonthly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.ismonthly)

### timeframe.isintraday

Returns true if current resolution is an intraday (minutes or seconds) resolution, false otherwise.

Type

simple bool

See also

[timeframe.isminutes](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isminutes)[timeframe.isseconds](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isseconds)[timeframe.isticks](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isticks)[timeframe.isdwm](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdwm)[timeframe.isdaily](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdaily)[timeframe.isweekly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isweekly)[timeframe.ismonthly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.ismonthly)

### timeframe.isminutes

Returns true if current resolution is a minutes resolution, false otherwise.

Type

simple bool

See also

[timeframe.isdwm](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdwm)[timeframe.isintraday](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isintraday)[timeframe.isseconds](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isseconds)[timeframe.isticks](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isticks)[timeframe.isdaily](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdaily)[timeframe.isweekly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isweekly)[timeframe.ismonthly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.ismonthly)

### timeframe.ismonthly

Returns true if current resolution is a monthly resolution, false otherwise.

Type

simple bool

See also

[timeframe.isdwm](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdwm)[timeframe.isintraday](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isintraday)[timeframe.isminutes](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isminutes)[timeframe.isseconds](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isseconds)[timeframe.isticks](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isticks)[timeframe.isdaily](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdaily)[timeframe.isweekly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isweekly)

### timeframe.isseconds

Returns true if current resolution is a seconds resolution, false otherwise.

Type

simple bool

See also

[timeframe.isdwm](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdwm)[timeframe.isintraday](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isintraday)[timeframe.isminutes](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isminutes)[timeframe.isticks](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isticks)[timeframe.isdaily](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdaily)[timeframe.isweekly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isweekly)[timeframe.ismonthly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.ismonthly)

### timeframe.isticks

Returns true if current resolution is a ticks resolution, false otherwise.

Type

simple bool

See also

[timeframe.isdwm](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdwm)[timeframe.isintraday](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isintraday)[timeframe.isminutes](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isminutes)[timeframe.isseconds](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isseconds)[timeframe.isdaily](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdaily)[timeframe.isweekly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isweekly)[timeframe.ismonthly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.ismonthly)

### timeframe.isweekly

Returns true if current resolution is a weekly resolution, false otherwise.

Type

simple bool

See also

[timeframe.isdwm](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdwm)[timeframe.isintraday](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isintraday)[timeframe.isminutes](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isminutes)[timeframe.isseconds](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isseconds)[timeframe.isticks](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isticks)[timeframe.isdaily](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.isdaily)[timeframe.ismonthly](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.ismonthly)

### timeframe.main_period

A string representation of the script's main timeframe. If the script is an  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  that specifies a  `timeframe`  value in its declaration statement, this variable holds that value. Otherwise, its value represents the chart's timeframe. Unlike  [timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period), this variable's value does not change when used in the  `expression`  argument of a  `request.*()`  function call.

The string's format is "<quantity>[<unit>]", where <unit> is "T" for ticks, "S" for seconds, "D" for days, "W" for weeks, and "M" for months, but is absent for minutes. No <unit> exists for hours: hourly timeframes are expressed in minutes.

The variable's value is: "10S" for 10 seconds, "30" for 30 minutes, "240" for four hours, "1D" for one day, "2W" for two weeks, and "3M" for one quarter.

Type

simple string

See also

[timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period)[syminfo.main_tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.main_tickerid)[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)[timeframe.multiplier](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.multiplier)

### timeframe.multiplier

Multiplier of resolution, e.g. '60' - 60, 'D' - 1, '5D' - 5, '12M' - 12.

Type

simple int

See also

[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)[timeframe.period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.period)

### timeframe.period

A string representation of the script's main timeframe or a requested timeframe, depending on how the script uses it. The variable's value represents the timeframe of a requested dataset when used in the  `expression`  argument of a  `request.*()`  function call. Otherwise, its value represents the script's main timeframe ([timeframe.main_period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.main_period)), which equals either the  `timeframe`  argument of the  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  declaration statement or the chart's timeframe.

The string's format is "<quantity>[<unit>]", where <unit> is "T" for ticks, "S" for seconds, "D" for days, "W" for weeks, and "M" for months, but is absent for minutes. No <unit> exists for hours: hourly timeframes are expressed in minutes.

The variable's value is: "10S" for 10 seconds, "30" for 30 minutes, "240" for four hours, "1D" for one day, "2W" for two weeks, and "3M" for one quarter.

Type

simple string

Remarks

To always access the script's main timeframe, even within another context, use the  [timeframe.main_period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.main_period)  variable.

See also

[timeframe.main_period](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.main_period)[syminfo.main_tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.main_tickerid)[syminfo.ticker](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.ticker)[syminfo.tickerid](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.tickerid)[timeframe.multiplier](https://www.tradingview.com/pine-script-reference/v6/#var_timeframe.multiplier)

### timenow

Current time in UNIX format. It is the number of milliseconds that have elapsed since 00:00:00 UTC, 1 January 1970.

Type

series int

Remarks

Please note that using this variable/function can cause  [indicator repainting](https://www.tradingview.com/pine-script-docs/concepts/repainting/).

See also

[timestamp()](https://www.tradingview.com/pine-script-reference/v6/#fun_timestamp)[time](https://www.tradingview.com/pine-script-reference/v6/#var_time)[time_close](https://www.tradingview.com/pine-script-reference/v6/#var_time_close)[year](https://www.tradingview.com/pine-script-reference/v6/#var_year)[month](https://www.tradingview.com/pine-script-reference/v6/#var_month)[weekofyear](https://www.tradingview.com/pine-script-reference/v6/#var_weekofyear)[dayofmonth](https://www.tradingview.com/pine-script-reference/v6/#var_dayofmonth)[dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)[hour](https://www.tradingview.com/pine-script-reference/v6/#var_hour)[minute](https://www.tradingview.com/pine-script-reference/v6/#var_minute)[second](https://www.tradingview.com/pine-script-reference/v6/#var_second)

### volume

Current bar volume.

Type

series float

Remarks

Previous values may be accessed with square brackets operator [], e.g. volume[1], volume[2].

See also

[open](https://www.tradingview.com/pine-script-reference/v6/#var_open)[high](https://www.tradingview.com/pine-script-reference/v6/#var_high)[low](https://www.tradingview.com/pine-script-reference/v6/#var_low)[close](https://www.tradingview.com/pine-script-reference/v6/#var_close)[time()](https://www.tradingview.com/pine-script-reference/v6/#fun_time)[hl2](https://www.tradingview.com/pine-script-reference/v6/#var_hl2)[hlc3](https://www.tradingview.com/pine-script-reference/v6/#var_hlc3)[hlcc4](https://www.tradingview.com/pine-script-reference/v6/#var_hlcc4)[ohlc4](https://www.tradingview.com/pine-script-reference/v6/#var_ohlc4)[ask](https://www.tradingview.com/pine-script-reference/v6/#var_ask)[bid](https://www.tradingview.com/pine-script-reference/v6/#var_bid)

### weekofyear

The week number of the year, in the exchange time zone, calculated from the bar's opening UNIX timestamp.

Type

series int

Remarks

This variable always references the week number corresponding to the bar's opening time. Consequently, for symbols with overnight sessions (e.g., "EURUSD", where the "Monday" session starts on Sunday at 17:00 in exchange time), the value may represent a previous calendar week rather than the week of the session's primary trading day.

See also

[weekofyear()](https://www.tradingview.com/pine-script-reference/v6/#fun_weekofyear)[dayofmonth](https://www.tradingview.com/pine-script-reference/v6/#var_dayofmonth)[dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)[time](https://www.tradingview.com/pine-script-reference/v6/#var_time)[year](https://www.tradingview.com/pine-script-reference/v6/#var_year)[month](https://www.tradingview.com/pine-script-reference/v6/#var_month)[hour](https://www.tradingview.com/pine-script-reference/v6/#var_hour)[minute](https://www.tradingview.com/pine-script-reference/v6/#var_minute)[second](https://www.tradingview.com/pine-script-reference/v6/#var_second)

### year

Current bar year in exchange timezone.

Type

series int

Remarks

Note that this variable returns the year based on the time of the bar's open. For overnight sessions (e.g. EURUSD, where Monday session starts on Sunday, 17:00) this value can be lower by 1 than the year of the trading day.

See also

[year()](https://www.tradingview.com/pine-script-reference/v6/#fun_year)[time](https://www.tradingview.com/pine-script-reference/v6/#var_time)[month](https://www.tradingview.com/pine-script-reference/v6/#var_month)[weekofyear](https://www.tradingview.com/pine-script-reference/v6/#var_weekofyear)[dayofmonth](https://www.tradingview.com/pine-script-reference/v6/#var_dayofmonth)[dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)[hour](https://www.tradingview.com/pine-script-reference/v6/#var_hour)[minute](https://www.tradingview.com/pine-script-reference/v6/#var_minute)[second](https://www.tradingview.com/pine-script-reference/v6/#var_second)
