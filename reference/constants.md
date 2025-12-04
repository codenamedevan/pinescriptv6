# Constants

## adjustment.dividends

**Type:** const string

Constant for dividends adjustment type (dividends adjustment is applied).

---

## adjustment.none

**Type:** const string

Constant for none adjustment type (no adjustment is applied).

---

## adjustment.splits

**Type:** const string

Constant for splits adjustment type (splits adjustment is applied).

---

## alert.freq_all

**Type:** const string

A named constant for use with the freq parameter of the alert() function.

---

## alert.freq_once_per_bar

**Type:** const string

A named constant for use with the freq parameter of the alert() function.

---

## alert.freq_once_per_bar_close

**Type:** const string

A named constant for use with the freq parameter of the alert() function.

---

## backadjustment.inherit

**Type:** const backadjustment

A constant to specify the value of the backadjustment parameter in ticker.new and ticker.modify functions.

---

## backadjustment.off

**Type:** const backadjustment

A constant to specify the value of the backadjustment parameter in ticker.new and ticker.modify functions.

---

## backadjustment.on

**Type:** const backadjustment

A constant to specify the value of the backadjustment parameter in ticker.new and ticker.modify functions.

---

## barmerge.gaps_off

**Type:** const barmerge_gaps

Merge strategy for requested data. Data is merged continuously without gaps, all the gaps are filled with the previous nearest existing value.

---

## barmerge.gaps_on

**Type:** const barmerge_gaps

Merge strategy for requested data. Data is merged with possible gaps (na values).

---

## barmerge.lookahead_off

**Type:** const barmerge_lookahead

Merge strategy for the requested data position. Requested barset is merged with current barset in the order of sorting bars by their close time. This merge strategy disables effect of getting data from "future" on calculation on history.

---

## barmerge.lookahead_on

**Type:** const barmerge_lookahead

Merge strategy for the requested data position. Requested barset is merged with current barset in the order of sorting bars by their opening time. This merge strategy can lead to undesirable effect of getting data from "future" on calculation on history. This is unacceptable in backtesting strategies, but can be useful in indicators.

---

## color.aqua

**Type:** const color

Is a named constant for #00BCD4 color.

---

## color.black

**Type:** const color

Is a named constant for #363A45 color.

---

## color.blue

**Type:** const color

Is a named constant for #2962ff color.

---

## color.fuchsia

**Type:** const color

Is a named constant for #E040FB color.

---

## color.gray

**Type:** const color

Is a named constant for #787B86 color.

---

## color.green

**Type:** const color

Is a named constant for #4CAF50 color.

---

## color.lime

**Type:** const color

Is a named constant for #00E676 color.

---

## color.maroon

**Type:** const color

Is a named constant for #880E4F color.

---

## color.navy

**Type:** const color

Is a named constant for #311B92 color.

---

## color.olive

**Type:** const color

Is a named constant for #808000 color.

---

## color.orange

**Type:** const color

Is a named constant for #FF9800 color.

---

## color.purple

**Type:** const color

Is a named constant for #9C27B0 color.

---

## color.red

**Type:** const color

Is a named constant for #F23645 color.

---

## color.silver

**Type:** const color

Is a named constant for #B2B5BE color.

---

## color.teal

**Type:** const color

Is a named constant for #089981 color.

---

## color.white

**Type:** const color

Is a named constant for #FFFFFF color.

---

## color.yellow

**Type:** const color

Is a named constant for #FDD835 color.

---

## currency.AUD

**Type:** const string

Australian dollar.

---

## currency.BTC

**Type:** const string

Bitcoin.

---

## currency.CAD

**Type:** const string

Canadian dollar.

---

## currency.CHF

**Type:** const string

Swiss franc.

---

## currency.EGP

**Type:** const string

Egyptian pound.

---

## currency.ETH

**Type:** const string

Ethereum.

---

## currency.EUR

**Type:** const string

Euro.

---

## currency.GBP

**Type:** const string

Pound sterling.

---

## currency.HKD

**Type:** const string

Hong Kong dollar.

---

## currency.INR

**Type:** const string

Indian rupee.

---

## currency.JPY

**Type:** const string

Japanese yen.

---

## currency.KRW

**Type:** const string

South Korean won.

---

## currency.MYR

**Type:** const string

Malaysian ringgit.

---

## currency.NOK

**Type:** const string

Norwegian krone.

---

## currency.NONE

**Type:** const string

Unspecified currency.

---

## currency.NZD

**Type:** const string

New Zealand dollar.

---

## currency.PKR

**Type:** const string

Pakistani rupee.

---

## currency.PLN

**Type:** const string

Polish zloty.

---

## currency.RUB

**Type:** const string

Russian ruble.

---

## currency.SEK

**Type:** const string

Swedish krona.

---

## currency.SGD

**Type:** const string

Singapore dollar.

---

## currency.TRY

**Type:** const string

Turkish lira.

---

## currency.USD

**Type:** const string

United States dollar.

---

## currency.USDT

**Type:** const string

Tether.

---

## currency.ZAR

**Type:** const string

South African rand.

---

## dayofweek.friday

**Type:** const int

Is a named constant for return value of dayofweek function and value of dayofweek variable.

---

## dayofweek.monday

**Type:** const int

Is a named constant for return value of dayofweek function and value of dayofweek variable.

---

## dayofweek.saturday

**Type:** const int

Is a named constant for return value of dayofweek function and value of dayofweek variable.

---

## dayofweek.sunday

**Type:** const int

Is a named constant for return value of dayofweek function and value of dayofweek variable.

---

## dayofweek.thursday

**Type:** const int

Is a named constant for return value of dayofweek function and value of dayofweek variable.

---

## dayofweek.tuesday

**Type:** const int

Is a named constant for return value of dayofweek function and value of dayofweek variable.

---

## dayofweek.wednesday

**Type:** const int

Is a named constant for return value of dayofweek function and value of dayofweek variable.

---

## display.all

**Type:** const plot_simple_display

A named constant for use with the display parameter of plot*() and input*() functions. Displays plotted or input values in all possible locations.

---

## display.data_window

**Type:** const plot_display

A named constant for use with the display parameter of plot*() and input*() functions. Displays plotted or input values in the Data Window, a menu accessible from the chart's right sidebar.

---

## display.none

**Type:** const plot_simple_display

A named constant for use with the display parameter of plot*() and input*() functions. plot*() functions using this will not display their plotted values anywhere. However, alert template messages and fill functions can still use the values, and they will appear in exported chart data. input*() functions using this constant will only display their values within the script's settings.

---

## display.pane

**Type:** const plot_display

A named constant for use with the display parameter of plot*() functions. Displays plotted values in the chart pane used by the script.

---

## display.price_scale

**Type:** const plot_display

A named constant for use with the display parameter of plot*() functions. Displays the plot’s label and value on the price scale if the chart's settings allow it.

---

## display.status_line

**Type:** const plot_display

A named constant for use with the display parameter of plot*() and input*() functions. Displays plotted or input values in the status line next to the script's name on the chart if the chart's settings allow it.

---

## dividends.gross

**Type:** const string

A named constant for the request.dividends function. Is used to request the dividends return on a stock before deductions.

---

## dividends.net

**Type:** const string

A named constant for the request.dividends function. Is used to request the dividends return on a stock after deductions.

---

## earnings.actual

**Type:** const string

A named constant for the request.earnings function. Is used to request the earnings value as it was reported.

---

## earnings.estimate

**Type:** const string

A named constant for the request.earnings function. Is used to request the estimated earnings value.

---

## earnings.standardized

**Type:** const string

A named constant for the request.earnings function. Is used to request the standardized earnings value.

---

## extend.both

**Type:** const string

A named constant for line.new and line.set_extend functions.

---

## extend.left

**Type:** const string

A named constant for line.new and line.set_extend functions.

---

## extend.none

**Type:** const string

A named constant for line.new and line.set_extend functions.

---

## extend.right

**Type:** const string

A named constant for line.new and line.set_extend functions.

---

## false

Literal representing a bool value, and result of a comparison operation.

### Remarks
See the User Manual for comparison operators and logical operators.

---

## font.family_default

**Type:** const string

Default text font for box.new, box.set_text_font_family, label.new, label.set_text_font_family, table.cell and table.cell_set_text_font_family functions.

---

## font.family_monospace

**Type:** const string

Monospace text font for box.new, box.set_text_font_family, label.new, label.set_text_font_family, table.cell and table.cell_set_text_font_family functions.

---

## format.inherit

**Type:** const string

Is a named constant for selecting the formatting of the script output values from the parent series in the indicator function.

---

## format.mintick

**Type:** const string

Is a named constant to use with the str.tostring function. Passing a number to str.tostring with this argument rounds the number to the nearest value that can be divided by syminfo.mintick, without the remainder, with ties rounding up, and returns the string version of said value with trailing zeros.

---

## format.percent

**Type:** const string

Is a named constant for selecting the formatting of the script output values as a percentage in the indicator function. It adds a percent sign after values.

### Remarks
The default precision is 2, regardless of the precision of the chart itself. This can be changed with the 'precision' argument of the indicator function.

---

## format.price

**Type:** const string

Is a named constant for selecting the formatting of the script output values as prices in the indicator function.

### Remarks
If format is format.price, default precision value is set. You can use the precision argument of indicator function to change the precision value.

---

## format.volume

**Type:** const string

Is a named constant for selecting the formatting of the script output values as volume in the indicator function, e.g. '5183' will be formatted as '5.183K'.

---

## hline.style_dashed

**Type:** const hline_style

Is a named constant for dashed linestyle of hline function.

---

## hline.style_dotted

**Type:** const hline_style

Is a named constant for dotted linestyle of hline function.

---

## hline.style_solid

**Type:** const hline_style

Is a named constant for solid linestyle of hline function.

---

## label.style_arrowdown

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_arrowup

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_circle

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_cross

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_diamond

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_flag

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_label_center

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_label_down

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_label_left

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_label_lower_left

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_label_lower_right

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_label_right

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_label_up

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_label_upper_left

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_label_upper_right

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_none

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_square

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_text_outline

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_triangledown

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_triangleup

**Type:** const string

Label style for label.new and label.set_style functions.

---

## label.style_xcross

**Type:** const string

Label style for label.new and label.set_style functions.

---

## line.style_arrow_both

**Type:** const string

Line style for line.new and line.set_style functions. Solid line with arrows on both points.

---

## line.style_arrow_left

**Type:** const string

Line style for line.new and line.set_style functions. Solid line with arrow on the first point.

---

## line.style_arrow_right

**Type:** const string

Line style for line.new and line.set_style functions. Solid line with arrow on the second point.

---

## line.style_dashed

**Type:** const string

Line style for line.new and line.set_style functions.

---

## line.style_dotted

**Type:** const string

Line style for line.new and line.set_style functions.

---

## line.style_solid

**Type:** const string

Line style for line.new and line.set_style functions.

---

## location.abovebar

**Type:** const string

Location value for plotshape, plotchar functions. Shape is plotted above main series bars.

---

## location.absolute

**Type:** const string

Location value for plotshape, plotchar functions. Shape is plotted on chart using indicator value as a price coordinate.

---

## location.belowbar

**Type:** const string

Location value for plotshape, plotchar functions. Shape is plotted below main series bars.

---

## location.bottom

**Type:** const string

Location value for plotshape, plotchar functions. Shape is plotted near the bottom chart border.

---

## location.top

**Type:** const string

Location value for plotshape, plotchar functions. Shape is plotted near the top chart border.

---

## math.e

**Type:** const float

Is a named constant for Euler's number. It is equal to 2.7182818284590452.

---

## math.phi

**Type:** const float

Is a named constant for the golden ratio. It is equal to 1.6180339887498948.

---

## math.pi

**Type:** const float

Is a named constant for Archimedes' constant. It is equal to 3.1415926535897932.

---

## math.rphi

**Type:** const float

Is a named constant for the golden ratio conjugate. It is equal to 0.6180339887498948.

---

## order.ascending

**Type:** const sort_order

Determines the sort order of the array from the smallest to the largest value.

---

## order.descending

**Type:** const sort_order

Determines the sort order of the array from the largest to the smallest value.

---

## plot.style_area

**Type:** const plot_style

A named constant for the 'Area' style, to be used as an argument for the style parameter in the plot function.

---

## plot.style_areabr

**Type:** const plot_style

A named constant for the 'Area With Breaks' style, to be used as an argument for the style parameter in the plot function. Similar to plot.style_area, except the gaps in the data are not filled.

---

## plot.style_circles

**Type:** const plot_style

A named constant for the 'Circles' style, to be used as an argument for the style parameter in the plot function.

---

## plot.style_columns

**Type:** const plot_style

A named constant for the 'Columns' style, to be used as an argument for the style parameter in the plot function.

---

## plot.style_cross

**Type:** const plot_style

A named constant for the 'Cross' style, to be used as an argument for the style parameter in the plot function.

---

## plot.style_histogram

**Type:** const plot_style

A named constant for the 'Histogram' style, to be used as an argument for the style parameter in the plot function.

---

## plot.style_line

**Type:** const plot_style

A named constant for the 'Line' style, to be used as an argument for the style parameter in the plot function.

---

## plot.style_linebr

**Type:** const plot_style

A named constant for the 'Line With Breaks' style, to be used as an argument for the style parameter in the plot function. Similar to plot.style_line, except the gaps in the data are not filled.

---

## plot.style_stepline

**Type:** const plot_style

A named constant for the 'Step Line' style, to be used as an argument for the style parameter in the plot function.

---

## plot.style_stepline_diamond

**Type:** const plot_style

A named constant for the 'Step Line With Diamonds' style, to be used as an argument for the style parameter in the plot function. Similar to plot.style_stepline, except the data changes are also marked with the Diamond shapes.

---

## plot.style_steplinebr

**Type:** const plot_style

A named constant for the 'Step line with Breaks' style, to be used as an argument for the style parameter in the plot function.

---

## position.bottom_center

**Type:** const string

Table position is used in table.new, table.cell functions.

---

## position.bottom_left

**Type:** const string

Table position is used in table.new, table.cell functions.

---

## position.bottom_right

**Type:** const string

Table position is used in table.new, table.cell functions.

---

## position.middle_center

**Type:** const string

Table position is used in table.new, table.cell functions.

---

## position.middle_left

**Type:** const string

Table position is used in table.new, table.cell functions.

---

## position.middle_right

**Type:** const string

Table position is used in table.new, table.cell functions.

---

## position.top_center

**Type:** const string

Table position is used in table.new, table.cell functions.

---

## position.top_left

**Type:** const string

Table position is used in table.new, table.cell functions.

---

## position.top_right

**Type:** const string

Table position is used in table.new, table.cell functions.

---

## scale.left

**Type:** const scale_type

Scale value for indicator function. Indicator is added to the left price scale.

---

## scale.none

**Type:** const scale_type

Scale value for indicator function. Indicator is added in 'No Scale' mode. Can be used only with 'overlay=true'.

---

## scale.right

**Type:** const scale_type

Scale value for indicator function. Indicator is added to the right price scale.

---

## session.extended

**Type:** const string

Constant for extended session type (with extended hours data).

---

## session.regular

**Type:** const string

Constant for regular session type (no extended hours data).

---

## settlement_as_close.inherit

**Type:** const settlement

A constant to specify the value of the settlement_as_close parameter in ticker.new and ticker.modify functions.

---

## settlement_as_close.off

**Type:** const settlement

A constant to specify the value of the settlement_as_close parameter in ticker.new and ticker.modify functions.

---

## settlement_as_close.on

**Type:** const settlement

A constant to specify the value of the settlement_as_close parameter in ticker.new and ticker.modify functions.

---

## shape.arrowdown

**Type:** const string

Shape style for plotshape function.

---

## shape.arrowup

**Type:** const string

Shape style for plotshape function.

---

## shape.circle

**Type:** const string

Shape style for plotshape function.

---

## shape.cross

**Type:** const string

Shape style for plotshape function.

---

## shape.diamond

**Type:** const string

Shape style for plotshape function.

---

## shape.flag

**Type:** const string

Shape style for plotshape function.

---

## shape.labeldown

**Type:** const string

Shape style for plotshape function.

---

## shape.labelup

**Type:** const string

Shape style for plotshape function.

---

## shape.square

**Type:** const string

Shape style for plotshape function.

---

## shape.triangledown

**Type:** const string

Shape style for plotshape function.

---

## shape.triangleup

**Type:** const string

Shape style for plotshape function.

---

## shape.xcross

**Type:** const string

Shape style for plotshape function.

---

## size.auto

**Type:** const string

Size value for plotshape, plotchar functions. The size of the shape automatically adapts to the size of the bars.

---

## size.huge

**Type:** const string

Size value for plotshape, plotchar functions. The size of the shape constantly huge.

---

## size.large

**Type:** const string

Size value for plotshape, plotchar functions. The size of the shape constantly large.

---

## size.normal

**Type:** const string

Size value for plotshape, plotchar functions. The size of the shape constantly normal.

---

## size.small

**Type:** const string

Size value for plotshape, plotchar functions. The size of the shape constantly small.

---

## size.tiny

**Type:** const string

Size value for plotshape, plotchar functions. The size of the shape constantly tiny.

---

## splits.denominator

**Type:** const string

A named constant for the request.splits function. Is used to request the denominator (the number below the line in a fraction) of a splits.

---

## splits.numerator

**Type:** const string

A named constant for the request.splits function. Is used to request the numerator (the number above the line in a fraction) of a splits.

---

## strategy.cash

**Type:** const string

This is one of the arguments that can be supplied to the default_qty_type parameter in the strategy declaration statement. It is only relevant when no value is used for the ‘qty’ parameter in strategy.entry or strategy.order function calls. It specifies that an amount of cash in the strategy.account_currency will be used to enter trades.

### Code Example
```pine
//@version=6
strategy("strategy.cash", overlay = true, default_qty_value = 50, default_qty_type = strategy.cash, initial_capital = 1000000)

if bar_index == 0
    // As ‘qty’ is not defined, the previously defined values for the `default_qty_type` and `default_qty_value` parameters are used to enter trades, namely 50 units of cash in the currency of `strategy.account_currency`.
    // `qty` is calculated as (default_qty_value)/(close price). If current price is $5, then qty = 50/5 = 10.
    strategy.entry("EN", strategy.long)
if bar_index == 2
    strategy.close("EN")
```

---

## strategy.commission.cash_per_contract

**Type:** const string

Commission type for an order. Money displayed in the account currency per contract.

---

## strategy.commission.cash_per_order

**Type:** const string

Commission type for an order. Money displayed in the account currency per order.

---

## strategy.commission.percent

**Type:** const string

Commission type for an order. A percentage of the cash volume of order.

---

## strategy.direction.all

**Type:** const string

It allows strategy to open both long and short positions.

---

## strategy.direction.long

**Type:** const string

It allows strategy to open only long positions.

---

## strategy.direction.short

**Type:** const string

It allows strategy to open only short positions.

---

## strategy.fixed

**Type:** const string

This is one of the arguments that can be supplied to the default_qty_type parameter in the strategy declaration statement. It is only relevant when no value is used for the ‘qty’ parameter in strategy.entry or strategy.order function calls. It specifies that a number of contracts/shares/lots will be used to enter trades.

### Code Example
```pine
//@version=6
strategy("strategy.fixed", overlay = true, default_qty_value = 50, default_qty_type = strategy.fixed, initial_capital = 1000000)

if bar_index == 0
    // As ‘qty’ is not defined, the previously defined values for the `default_qty_type` and `default_qty_value` parameters are used to enter trades, namely 50 contracts.
    // qty = 50
    strategy.entry("EN", strategy.long)
if bar_index == 2
    strategy.close("EN")
```

---

## strategy.long

**Type:** const strategy_direction

A named constant for use with the direction parameter of the strategy.entry and strategy.order commands. It specifies that the command creates a buy order.

---

## strategy.oca.cancel

**Type:** const string

A named constant for use with the oca_type parameter of the strategy.entry and strategy.order commands. It specifies that the strategy cancels the unfilled order when another order with the same oca_name and oca_type executes.

### Remarks
Strategies cannot cancel or reduce pending orders from an OCA group if they execute on the same tick. For example, if the market price triggers two stop orders from strategy.order calls with the same oca_* arguments, the strategy cannot fully or partially cancel either one.

---

## strategy.oca.none

**Type:** const string

A named constant for use with the oca_type parameter of the strategy.entry and strategy.order commands. It specifies that the order executes independently of all other orders, including those with the same oca_name.

---

## strategy.oca.reduce

**Type:** const string

A named constant for use with the oca_type parameter of the strategy.entry and strategy.order commands. It specifies that when another order with the same oca_name and oca_type executes, the strategy reduces the unfilled order by that order's size. If the unfilled order's size reaches 0 after reduction, it is the same as canceling the order entirely.

### Remarks
Strategies cannot cancel or reduce pending orders from an OCA group if they execute on the same tick. For example, if the market price triggers two stop orders from strategy.order calls with the same oca_* arguments, the strategy cannot fully or partially cancel either one. Orders from strategy.exit automatically use this OCA type, and they belong to the same OCA group by default.

---

## strategy.percent_of_equity

**Type:** const string

This is one of the arguments that can be supplied to the default_qty_type parameter in the strategy declaration statement. It is only relevant when no value is used for the ‘qty’ parameter in strategy.entry or strategy.order function calls. It specifies that a percentage (0-100) of equity will be used to enter trades.

### Code Example
```pine
//@version=6
strategy("strategy.percent_of_equity", overlay = false, default_qty_value = 100, default_qty_type = strategy.percent_of_equity, initial_capital = 1000000)

// As ‘qty’ is not defined, the previously defined values for the `default_qty_type` and `default_qty_value` parameters are used to enter trades, namely 100% of available equity.
if bar_index == 0
    strategy.entry("EN", strategy.long)
if bar_index == 2
    strategy.close("EN")
plot(strategy.equity)

 // The ‘qty’ parameter is set to 10. Entering position with fixed size of 10 contracts and entry market price = (10 * close).
if bar_index == 4
    strategy.entry("EN", strategy.long, qty = 10)
if bar_index == 6
    strategy.close("EN")
```

---

## strategy.short

**Type:** const strategy_direction

A named constant for use with the direction parameter of the strategy.entry and strategy.order commands. It specifies that the command creates a sell order.

---

## text.align_bottom

**Type:** const string

Vertical text alignment for box.new, box.set_text_valign, table.cell and table.cell_set_text_valign functions.

---

## text.align_center

**Type:** const string

Text alignment for box.new, box.set_text_halign, box.set_text_valign, label.new and label.set_textalign functions.

---

## text.align_left

**Type:** const string

Horizontal text alignment for box.new, box.set_text_halign, label.new and label.set_textalign functions.

---

## text.align_right

**Type:** const string

Horizontal text alignment for box.new, box.set_text_halign, label.new and label.set_textalign functions.

---

## text.align_top

**Type:** const string

Vertical text alignment for box.new, box.set_text_valign, table.cell and table.cell_set_text_valign functions.

---

## text.format_bold

**Type:** const text_format

A named constant for use with the text_formatting parameter of the label.new(), box.new(), table.cell(), and *set_text_formatting() functions. Makes the text bold.

---

## text.format_italic

**Type:** const text_format

A named constant for use with the text_formatting parameter of the label.new(), box.new(), table.cell(), and *set_text_formatting() functions. Italicizes the text.

---

## text.format_none

**Type:** const text_format

A named constant for use with the text_formatting parameter of the label.new(), box.new(), table.cell(), and *set_text_formatting() functions. Signifies no special text formatting.

---

## text.wrap_auto

**Type:** const string

Automatic wrapping mode for box.new and box.set_text_wrap functions.

---

## text.wrap_none

**Type:** const string

Disabled wrapping mode for box.new and box.set_text_wrap functions.

---

## true

Literal representing one of the values a bool variable can hold, or an expression can evaluate to when it uses comparison or logical operators.

### Remarks
See the User Manual for comparison operators and logical operators.

---

## xloc.bar_index

**Type:** const string

A constant that specifies how functions that create and modify Pine drawings interpret x-coordinates. If xloc = xloc.bar_index, the drawing object treats each x-coordinate as a bar_index value.

---

## xloc.bar_time

**Type:** const string

A constant that specifies how functions that create and modify Pine drawings interpret x-coordinates. If xloc = xloc.bar_time, the drawing object treats each x-coordinate as a UNIX timestamp, expressed in milliseconds.

---

## yloc.abovebar

**Type:** const string

A named constant that specifies the algorithm of interpretation of y-value in function label.new.

---

## yloc.belowbar

**Type:** const string

A named constant that specifies the algorithm of interpretation of y-value in function label.new.

---

## yloc.price

**Type:** const string

A named constant that specifies the algorithm of interpretation of y-value in function label.new.

---
