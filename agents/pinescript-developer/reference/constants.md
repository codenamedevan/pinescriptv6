
### adjustment.dividends

Constant for dividends adjustment type (dividends adjustment is applied).

Type

const string

See also

[adjustment.none](https://www.tradingview.com/pine-script-reference/v6/#const_adjustment.none)[adjustment.splits](https://www.tradingview.com/pine-script-reference/v6/#const_adjustment.splits)[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)

### adjustment.none

Constant for none adjustment type (no adjustment is applied).

Type

const string

See also

[adjustment.splits](https://www.tradingview.com/pine-script-reference/v6/#const_adjustment.splits)[adjustment.dividends](https://www.tradingview.com/pine-script-reference/v6/#const_adjustment.dividends)[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)

### adjustment.splits

Constant for splits adjustment type (splits adjustment is applied).

Type

const string

See also

[adjustment.none](https://www.tradingview.com/pine-script-reference/v6/#const_adjustment.none)[adjustment.dividends](https://www.tradingview.com/pine-script-reference/v6/#const_adjustment.dividends)[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)

### alert.freq_all

A named constant for use with the  `freq`  parameter of the alert() function.

All function calls trigger the alert.

Type

const string

See also

[alert()](https://www.tradingview.com/pine-script-reference/v6/#fun_alert)

### alert.freq_once_per_bar

A named constant for use with the  `freq`  parameter of the alert() function.

The first function call during the bar triggers the alert.

Type

const string

See also

[alert()](https://www.tradingview.com/pine-script-reference/v6/#fun_alert)

### alert.freq_once_per_bar_close

A named constant for use with the  `freq`  parameter of the alert() function.

The function call triggers the alert only when it occurs during the last script iteration of the real-time bar, when it closes.

Type

const string

See also

[alert()](https://www.tradingview.com/pine-script-reference/v6/#fun_alert)

### backadjustment.inherit

A constant to specify the value of the  `backadjustment`  parameter in  [ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)  and  [ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)  functions.

Type

const backadjustment

See also

[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)[backadjustment.on](https://www.tradingview.com/pine-script-reference/v6/#const_backadjustment.on)[backadjustment.off](https://www.tradingview.com/pine-script-reference/v6/#const_backadjustment.off)

### backadjustment.off

A constant to specify the value of the  `backadjustment`  parameter in  [ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)  and  [ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)  functions.

Type

const backadjustment

See also

[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)[backadjustment.on](https://www.tradingview.com/pine-script-reference/v6/#const_backadjustment.on)[backadjustment.inherit](https://www.tradingview.com/pine-script-reference/v6/#const_backadjustment.inherit)

### backadjustment.on

A constant to specify the value of the  `backadjustment`  parameter in  [ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)  and  [ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)  functions.

Type

const backadjustment

See also

[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)[backadjustment.inherit](https://www.tradingview.com/pine-script-reference/v6/#const_backadjustment.inherit)[backadjustment.off](https://www.tradingview.com/pine-script-reference/v6/#const_backadjustment.off)

### barmerge.gaps_off

Merge strategy for requested data. Data is merged continuously without gaps, all the gaps are filled with the previous nearest existing value.

Type

const barmerge_gaps

See also

[request.security()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.security)[barmerge.gaps_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_on)

### barmerge.gaps_on

Merge strategy for requested data. Data is merged with possible gaps ([na](https://www.tradingview.com/pine-script-reference/v6/#var_na)  values).

Type

const barmerge_gaps

See also

[request.security()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.security)[barmerge.gaps_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.gaps_off)

### barmerge.lookahead_off

Merge strategy for the requested data position. Requested barset is merged with current barset in the order of sorting bars by their close time. This merge strategy disables effect of getting data from "future" on calculation on history.

Type

const barmerge_lookahead

See also

[request.security()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.security)[barmerge.lookahead_on](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.lookahead_on)

### barmerge.lookahead_on

Merge strategy for the requested data position. Requested barset is merged with current barset in the order of sorting bars by their opening time. This merge strategy can lead to undesirable effect of getting data from "future" on calculation on history. This is unacceptable in backtesting strategies, but can be useful in indicators.

Type

const barmerge_lookahead

See also

[request.security()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.security)[barmerge.lookahead_off](https://www.tradingview.com/pine-script-reference/v6/#const_barmerge.lookahead_off)

### color.aqua

Is a named constant for #00BCD4 color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.black

Is a named constant for #363A45 color.

Type

const color

See also

[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.blue

Is a named constant for #2962ff color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.fuchsia

Is a named constant for #E040FB color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.gray

Is a named constant for #787B86 color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.green

Is a named constant for #4CAF50 color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.lime

Is a named constant for #00E676 color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.maroon

Is a named constant for #880E4F color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.navy

Is a named constant for #311B92 color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.olive

Is a named constant for #808000 color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.orange

Is a named constant for #FF9800 color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)

### color.purple

Is a named constant for #9C27B0 color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.red

Is a named constant for #F23645 color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.silver

Is a named constant for #B2B5BE color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.teal

Is a named constant for #089981 color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.white

Is a named constant for #FFFFFF color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.yellow](https://www.tradingview.com/pine-script-reference/v6/#const_color.yellow)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### color.yellow

Is a named constant for #FDD835 color.

Type

const color

See also

[color.black](https://www.tradingview.com/pine-script-reference/v6/#const_color.black)[color.silver](https://www.tradingview.com/pine-script-reference/v6/#const_color.silver)[color.gray](https://www.tradingview.com/pine-script-reference/v6/#const_color.gray)[color.white](https://www.tradingview.com/pine-script-reference/v6/#const_color.white)[color.maroon](https://www.tradingview.com/pine-script-reference/v6/#const_color.maroon)[color.red](https://www.tradingview.com/pine-script-reference/v6/#const_color.red)[color.purple](https://www.tradingview.com/pine-script-reference/v6/#const_color.purple)[color.fuchsia](https://www.tradingview.com/pine-script-reference/v6/#const_color.fuchsia)[color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)[color.lime](https://www.tradingview.com/pine-script-reference/v6/#const_color.lime)[color.olive](https://www.tradingview.com/pine-script-reference/v6/#const_color.olive)[color.navy](https://www.tradingview.com/pine-script-reference/v6/#const_color.navy)[color.blue](https://www.tradingview.com/pine-script-reference/v6/#const_color.blue)[color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)[color.aqua](https://www.tradingview.com/pine-script-reference/v6/#const_color.aqua)[color.orange](https://www.tradingview.com/pine-script-reference/v6/#const_color.orange)

### currency.AED

Arab Emirates Dirham.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.ARS

Argentine Pesos.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.AUD

Australian dollar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.BDT

Bangladeshi Taka.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.BHD

Bahraini Dinar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.BRL

Brazilian real.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.BTC

Bitcoin.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.CAD

Canadian dollar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.CHF

Swiss franc.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.CLP

Chilean Peso.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.CNY

Chinese Yuan.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.COP

Colombian Peso.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.CZK

Czech Koruna.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.DKK

Danish Krone.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.EGP

Egyptian pound.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.ETH

Ethereum.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.EUR

Euro.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.GBP

Pound sterling.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.HKD

Hong Kong dollar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.HUF

Hungarian Forint.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.IDR

Indonesian Rupiah.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.ILS

Israeli New Shekel.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.INR

Indian rupee.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.ISK

Icelandic Krona.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.JPY

Japanese yen.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.KES

Kenyan Shilling.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.KRW

South Korean won.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.KWD

Kuwaiti Dinar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.LKR

Sri Lankan Rupee.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.MAD

Moroccan Dirham.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.MXN

Mexican Peso.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.MYR

Malaysian ringgit.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.NGN

Nigerian Naira.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.NOK

Norwegian krone.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.NONE

Unspecified currency.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.NZD

New Zealand dollar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.PEN

Peruvian sol.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.PHP

Philippine Peso.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.PKR

Pakistani rupee.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.PLN

Polish zloty.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.QAR

Qatari Riyal.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.RON

Romanian Leu.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.RSD

Serbian Dinar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.RUB

Russian ruble.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.SAR

Saudi Riyal.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.SEK

Swedish krona.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.SGD

Singapore dollar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.THB

Thai Baht.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.TND

Tunisian Dinar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.TRY

Turkish lira.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.TWD

New Taiwan Dollar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.USD

United States dollar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.USDT

Tether.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.VES

Venezuelan Bolivar.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.VND

Vietnamese Dong.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### currency.ZAR

South African rand.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### dayofweek.friday

Is a named constant for return value of  [dayofweek()](https://www.tradingview.com/pine-script-reference/v6/#fun_dayofweek)  function and value of  [dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)  variable.

Type

const int

See also

[dayofweek.sunday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.sunday)[dayofweek.monday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.monday)[dayofweek.tuesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.tuesday)[dayofweek.wednesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.wednesday)[dayofweek.thursday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.thursday)[dayofweek.saturday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.saturday)

### dayofweek.monday

Is a named constant for return value of  [dayofweek()](https://www.tradingview.com/pine-script-reference/v6/#fun_dayofweek)  function and value of  [dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)  variable.

Type

const int

See also

[dayofweek.sunday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.sunday)[dayofweek.tuesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.tuesday)[dayofweek.wednesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.wednesday)[dayofweek.thursday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.thursday)[dayofweek.friday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.friday)[dayofweek.saturday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.saturday)

### dayofweek.saturday

Is a named constant for return value of  [dayofweek()](https://www.tradingview.com/pine-script-reference/v6/#fun_dayofweek)  function and value of  [dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)  variable.

Type

const int

See also

[dayofweek.sunday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.sunday)[dayofweek.monday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.monday)[dayofweek.tuesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.tuesday)[dayofweek.wednesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.wednesday)[dayofweek.thursday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.thursday)[dayofweek.friday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.friday)

### dayofweek.sunday

Is a named constant for return value of  [dayofweek()](https://www.tradingview.com/pine-script-reference/v6/#fun_dayofweek)  function and value of  [dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)  variable.

Type

const int

See also

[dayofweek.monday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.monday)[dayofweek.tuesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.tuesday)[dayofweek.wednesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.wednesday)[dayofweek.thursday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.thursday)[dayofweek.friday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.friday)[dayofweek.saturday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.saturday)

### dayofweek.thursday

Is a named constant for return value of  [dayofweek()](https://www.tradingview.com/pine-script-reference/v6/#fun_dayofweek)  function and value of  [dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)  variable.

Type

const int

See also

[dayofweek.sunday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.sunday)[dayofweek.monday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.monday)[dayofweek.tuesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.tuesday)[dayofweek.wednesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.wednesday)[dayofweek.friday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.friday)[dayofweek.saturday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.saturday)

### dayofweek.tuesday

Is a named constant for return value of  [dayofweek()](https://www.tradingview.com/pine-script-reference/v6/#fun_dayofweek)  function and value of  [dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)  variable.

Type

const int

See also

[dayofweek.sunday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.sunday)[dayofweek.monday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.monday)[dayofweek.wednesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.wednesday)[dayofweek.thursday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.thursday)[dayofweek.friday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.friday)[dayofweek.saturday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.saturday)

### dayofweek.wednesday

Is a named constant for return value of  [dayofweek()](https://www.tradingview.com/pine-script-reference/v6/#fun_dayofweek)  function and value of  [dayofweek](https://www.tradingview.com/pine-script-reference/v6/#var_dayofweek)  variable.

Type

const int

See also

[dayofweek.sunday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.sunday)[dayofweek.monday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.monday)[dayofweek.tuesday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.tuesday)[dayofweek.thursday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.thursday)[dayofweek.friday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.friday)[dayofweek.saturday](https://www.tradingview.com/pine-script-reference/v6/#const_dayofweek.saturday)

### display.all

A named constant for use with the  `display`  parameter of the  `plot*()`,  `input*()`,  [fill()](https://www.tradingview.com/pine-script-reference/v6/#fun_fill),  [bgcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_bgcolor),  [barcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_barcolor), and  [hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline)  functions. Specifies that the values or visuals appear in all possible locations by default.

Type

const plot_simple_display

Remarks

The  `display.*`  constants support  [+](https://www.tradingview.com/pine-script-reference/v6/#op_+)  and  [-](https://www.tradingview.com/pine-script-reference/v6/#op_-)  operations, enabling custom combinations of display settings. For example,  `display.all - display.data_window`  specifies that the data for an input or plot appears in all possible locations except for the Data Window.

Selecting a deselected plot in the script's "Settings/Style" tab changes its display settings, causing the plotted data to appear in all available chart locations. To restore the display settings coded in the script, select "Reset settings" from the "Defaults" dropdown menu at the bottom of the "Settings" dialog box.

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[plotarrow()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotarrow)[plotbar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotbar)[plotcandle()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotcandle)

### display.data_window

A named constant for use with the  `display`  parameter of the  `plot*()`  and  `input*()`  functions. Specifies that the values are available in the Data Window by default. The Data Window tab is accessible by clicking the "Object Tree and Data Window" icon in the chart's right sidebar.

Type

const plot_display

Remarks

The  `display.*`  constants support  [+](https://www.tradingview.com/pine-script-reference/v6/#op_+)  and  [-](https://www.tradingview.com/pine-script-reference/v6/#op_-)  operations, enabling custom combinations of display settings. For example,  `display.data_window + display.status_line`  specifies that the data for an input or plot appears in the Data Window and the script's status line, and  `display.all - display.data_window`  specifies that the data appears in all possible locations except for the Data Window.

Selecting a deselected plot in the script's "Settings/Style" tab changes its display settings, causing the plotted data to appear in all available chart locations. To restore the display settings coded in the script, select "Reset settings" from the "Defaults" dropdown menu at the bottom of the "Settings" dialog box.

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[plotarrow()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotarrow)[plotbar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotbar)[plotcandle()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotcandle)

### display.none

A named constant for use with the  `display`  parameter of the  `plot*()`,  `input*()`,  [fill()](https://www.tradingview.com/pine-script-reference/v6/#fun_fill),  [bgcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_bgcolor),  [barcolor()](https://www.tradingview.com/pine-script-reference/v6/#fun_barcolor), and  [hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline)  functions. Specifies that the values or visuals are not displayed anywhere by default.

Type

const plot_simple_display

Remarks

Selecting a deselected plot in the script's "Settings/Style" tab changes its display settings, causing the plotted data to appear in all available chart locations. To restore the display settings coded in the script, select "Reset settings" from the "Defaults" dropdown menu at the bottom of the "Settings" dialog box.

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[plotarrow()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotarrow)[plotbar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotbar)[plotcandle()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotcandle)

### display.pane

A named constant for use with the  `display`  parameter of the  `plot*()`  functions. Specifies that the plotted values are displayed in a chart pane by default.

Type

const plot_display

Remarks

The  `display.*`  constants support  [+](https://www.tradingview.com/pine-script-reference/v6/#op_+)  and  [-](https://www.tradingview.com/pine-script-reference/v6/#op_-)  operations, enabling custom combinations of display settings. For example,  `display.pane + display.data_window`  specifies that the plot's values appear in the chart pane and the Data Window, and  `display.all - display.pane`  specifies that the values appear in all possible locations except for the chart pane.

Selecting a deselected plot in the script's "Settings/Style" tab changes its display settings, causing the plotted data to appear in all available chart locations. To restore the display settings coded in the script, select "Reset settings" from the "Defaults" dropdown menu at the bottom of the "Settings" dialog box.

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[plotarrow()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotarrow)[plotbar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotbar)[plotcandle()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotcandle)

### display.pine_screener

A named constant for use with the  `display`  parameter of the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function. Specifies that, by default, the  [Pine Screener](https://www.tradingview.com/support/solutions/43000742436/)  displays a column for the plot's values when the user applies the indicator to the chosen watchlist.

Type

const plot_display

Remarks

The  `display.*`  constants support  [+](https://www.tradingview.com/pine-script-reference/v6/#op_+)  and  [-](https://www.tradingview.com/pine-script-reference/v6/#op_-)  operations, enabling custom combinations of display settings. For example,  `display.data_window + display.pine_screener`  specifies that the plotted values appear in the Data Window and the Pine Screener, and  `display.all - display.pine_screener`  specifies that the values appear in all possible locations except for the Pine Screener.

The Pine Screener displays columns for only the first 10 enabled plots from a script by default. If a plot's default display settings do not include the screener, or if the screener already shows columns for 10 other plots from the script, users can configure the screener to show a column for the plot by using the "Manage columns" menu at the far right of the table header.

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[plotarrow()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotarrow)[plotbar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotbar)[plotcandle()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotcandle)

### display.price_scale

A named constant for use with the  `display`  parameter of the  `plot*()`  functions. Specifies that the price scale displays a label for the plot's data, but only if the chart's settings allow it.

Type

const plot_display

Remarks

The  `display.*`  constants support  [+](https://www.tradingview.com/pine-script-reference/v6/#op_+)  and  [-](https://www.tradingview.com/pine-script-reference/v6/#op_-)  operations, enabling custom combinations of display settings. For example,  `display.price_scale + display.data_window`  specifies that the plot's data appears on the price scale and in the Data Window, and  `display.all - display.price_scale`  specifies that the data appears in all possible locations except for the price scale.

Selecting a deselected plot in the script's "Settings/Style" tab changes its display settings, causing the plotted data to appear in all available chart locations. To restore the display settings coded in the script, select "Reset settings" from the "Defaults" dropdown menu at the bottom of the "Settings" dialog box.

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[plotarrow()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotarrow)[plotbar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotbar)[plotcandle()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotcandle)

### display.status_line

A named constant for use with the  `display`  parameter of the  `plot*()`  and  `input*()`  functions. Specifies that the values are available in the script's status line, but only if the chart's settings allow it.

Type

const plot_display

Remarks

The  `display.*`  constants support  [+](https://www.tradingview.com/pine-script-reference/v6/#op_+)  and  [-](https://www.tradingview.com/pine-script-reference/v6/#op_-)  operations, enabling custom combinations of display settings. For example,  `display.data_window + display.status_line`  specifies that the data for an input or plot appears in the Data Window and the script's status line, and  `display.all - display.status_line`  specifies that the data appears in all possible locations except for the status line.

Selecting a deselected plot in the script's "Settings/Style" tab changes its display settings, causing the plotted data to appear in all available chart locations. To restore the display settings coded in the script, select "Reset settings" from the "Defaults" dropdown menu at the bottom of the "Settings" dialog box.

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[plotarrow()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotarrow)[plotbar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotbar)[plotcandle()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotcandle)

### dividends.gross

A named constant for the  [request.dividends()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.dividends)  function. Is used to request the dividends return on a stock before deductions.

Type

const string

See also

[request.dividends()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.dividends)

### dividends.net

A named constant for the  [request.dividends()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.dividends)  function. Is used to request the dividends return on a stock after deductions.

Type

const string

See also

[request.dividends()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.dividends)

### earnings.actual

A named constant for the  [request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)  function. Is used to request the earnings value as it was reported.

Type

const string

See also

[request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)

### earnings.estimate

A named constant for the  [request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)  function. Is used to request the estimated earnings value.

Type

const string

See also

[request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)

### earnings.standardized

A named constant for the  [request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)  function. Is used to request the standardized earnings value.

Type

const string

See also

[request.earnings()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.earnings)

### extend.both

A named constant for  [line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)  and  [line.set_extend()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_extend)  functions.

Type

const string

See also

[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[line.set_extend()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_extend)[extend.none](https://www.tradingview.com/pine-script-reference/v6/#const_extend.none)[extend.left](https://www.tradingview.com/pine-script-reference/v6/#const_extend.left)[extend.right](https://www.tradingview.com/pine-script-reference/v6/#const_extend.right)

### extend.left

A named constant for  [line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)  and  [line.set_extend()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_extend)  functions.

Type

const string

See also

[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[line.set_extend()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_extend)[extend.none](https://www.tradingview.com/pine-script-reference/v6/#const_extend.none)[extend.right](https://www.tradingview.com/pine-script-reference/v6/#const_extend.right)[extend.both](https://www.tradingview.com/pine-script-reference/v6/#const_extend.both)

### extend.none

A named constant for  [line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)  and  [line.set_extend()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_extend)  functions.

Type

const string

See also

[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[line.set_extend()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_extend)[extend.left](https://www.tradingview.com/pine-script-reference/v6/#const_extend.left)[extend.right](https://www.tradingview.com/pine-script-reference/v6/#const_extend.right)[extend.both](https://www.tradingview.com/pine-script-reference/v6/#const_extend.both)

### extend.right

A named constant for  [line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)  and  [line.set_extend()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_extend)  functions.

Type

const string

See also

[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[line.set_extend()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_extend)[extend.none](https://www.tradingview.com/pine-script-reference/v6/#const_extend.none)[extend.left](https://www.tradingview.com/pine-script-reference/v6/#const_extend.left)[extend.both](https://www.tradingview.com/pine-script-reference/v6/#const_extend.both)

### false

Literal representing a  [bool](https://www.tradingview.com/pine-script-reference/v6/#type_bool)  value, and result of a comparison operation.

Remarks

See the User Manual for  [comparison operators](https://www.tradingview.com/pine-script-docs/language/operators/#comparison-operators)  and  [logical operators](https://www.tradingview.com/pine-script-docs/language/operators/#logical-operators).

See also

[bool](https://www.tradingview.com/pine-script-reference/v6/#type_bool)

### font.family_default

Default text font for  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new),  [box.set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_font_family),  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new),  [label.set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_text_font_family),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  and  [table.cell_set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell_set_text_font_family)  functions.

Type

const string

See also

[box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new)[box.set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_font_family)[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_text_font_family)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.cell_set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell_set_text_font_family)[font.family_monospace](https://www.tradingview.com/pine-script-reference/v6/#const_font.family_monospace)

### font.family_monospace

Monospace text font for  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new),  [box.set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_font_family),  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new),  [label.set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_text_font_family),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  and  [table.cell_set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell_set_text_font_family)  functions.

Type

const string

See also

[box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new)[box.set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_font_family)[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_text_font_family)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.cell_set_text_font_family()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell_set_text_font_family)[font.family_default](https://www.tradingview.com/pine-script-reference/v6/#const_font.family_default)

### format.inherit

Is a named constant for selecting the formatting of the script output values from the parent series in the  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  function.

Type

const string

See also

[indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)[format.price](https://www.tradingview.com/pine-script-reference/v6/#const_format.price)[format.volume](https://www.tradingview.com/pine-script-reference/v6/#const_format.volume)[format.percent](https://www.tradingview.com/pine-script-reference/v6/#const_format.percent)

### format.mintick

Is a named constant to use with the  [str.tostring()](https://www.tradingview.com/pine-script-reference/v6/#fun_str.tostring)  function. Passing a number to  [str.tostring()](https://www.tradingview.com/pine-script-reference/v6/#fun_str.tostring)  with this argument rounds the number to the nearest value that can be divided by  [syminfo.mintick](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.mintick), without the remainder, with ties rounding up, and returns the string version of said value with trailing zeros.

Type

const string

See also

[indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)[format.inherit](https://www.tradingview.com/pine-script-reference/v6/#const_format.inherit)[format.price](https://www.tradingview.com/pine-script-reference/v6/#const_format.price)[format.volume](https://www.tradingview.com/pine-script-reference/v6/#const_format.volume)

### format.percent

Is a named constant for selecting the formatting of the script output values as a percentage in the indicator function. It adds a percent sign after values.

Type

const string

Remarks

The default precision is 2, regardless of the precision of the chart itself. This can be changed with the 'precision' argument of the  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  function.

See also

[indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)[format.inherit](https://www.tradingview.com/pine-script-reference/v6/#const_format.inherit)[format.price](https://www.tradingview.com/pine-script-reference/v6/#const_format.price)[format.volume](https://www.tradingview.com/pine-script-reference/v6/#const_format.volume)

### format.price

Is a named constant for selecting the formatting of the script output values as prices in the  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  function.

Type

const string

Remarks

If format is format.price, default precision value is set. You can use the precision argument of indicator function to change the precision value.

See also

[indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)[format.inherit](https://www.tradingview.com/pine-script-reference/v6/#const_format.inherit)[format.volume](https://www.tradingview.com/pine-script-reference/v6/#const_format.volume)[format.percent](https://www.tradingview.com/pine-script-reference/v6/#const_format.percent)

### format.volume

Is a named constant for selecting the formatting of the script output values as volume in the  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  function, e.g. '5183' will be formatted as '5.183K'.

The decimal precision rules defined by this variable take precedence over other precision settings. When an  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator),  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy), or  `plot*()`  call uses this  `format`  option, the function's  `precision`  parameter will not affect the result.

Type

const string

See also

[indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)[format.inherit](https://www.tradingview.com/pine-script-reference/v6/#const_format.inherit)[format.price](https://www.tradingview.com/pine-script-reference/v6/#const_format.price)[format.percent](https://www.tradingview.com/pine-script-reference/v6/#const_format.percent)

### hline.style_dashed

Is a named constant for dashed linestyle of  [hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline)  function.

Type

const hline_style

See also

[hline.style_solid](https://www.tradingview.com/pine-script-reference/v6/#const_hline.style_solid)[hline.style_dotted](https://www.tradingview.com/pine-script-reference/v6/#const_hline.style_dotted)

### hline.style_dotted

Is a named constant for dotted linestyle of  [hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline)  function.

Type

const hline_style

See also

[hline.style_solid](https://www.tradingview.com/pine-script-reference/v6/#const_hline.style_solid)[hline.style_dashed](https://www.tradingview.com/pine-script-reference/v6/#const_hline.style_dashed)

### hline.style_solid

Is a named constant for solid linestyle of  [hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline)  function.

Type

const hline_style

See also

[hline.style_dotted](https://www.tradingview.com/pine-script-reference/v6/#const_hline.style_dotted)[hline.style_dashed](https://www.tradingview.com/pine-script-reference/v6/#const_hline.style_dashed)

### label.style_arrowdown

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_arrowup

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_circle

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_cross

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_diamond

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)

### label.style_flag

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_label_center

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_label_down

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_label_left

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_label_lower_left

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_label_lower_right

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_label_right

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_label_up

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_label_upper_left

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_label_upper_right

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_none

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_square

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_text_outline

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_triangledown

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_triangleup

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_xcross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_xcross)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_lower_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_left)[label.style_label_lower_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_lower_right)[label.style_label_upper_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_left)[label.style_label_upper_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_upper_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### label.style_xcross

Label style for  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)[label.style_none](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_none)[label.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_cross)[label.style_triangleup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangleup)[label.style_triangledown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_triangledown)[label.style_flag](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_flag)[label.style_circle](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_circle)[label.style_arrowup](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowup)[label.style_arrowdown](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_arrowdown)[label.style_label_up](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_up)[label.style_label_down](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_down)[label.style_label_left](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_left)[label.style_label_right](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_right)[label.style_label_center](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_label_center)[label.style_square](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_square)[label.style_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_label.style_diamond)

### line.style_arrow_both

Line style for  [line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)  and  [line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)  functions. Solid line with arrows on both points.

Type

const string

See also

[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)[line.style_solid](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_solid)[line.style_dotted](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_dotted)[line.style_dashed](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_dashed)[line.style_arrow_left](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_left)[line.style_arrow_right](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_right)

### line.style_arrow_left

Line style for  [line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)  and  [line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)  functions. Solid line with arrow on the first point.

Type

const string

See also

[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)[line.style_solid](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_solid)[line.style_dotted](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_dotted)[line.style_dashed](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_dashed)[line.style_arrow_right](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_right)[line.style_arrow_both](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_both)

### line.style_arrow_right

Line style for  [line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)  and  [line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)  functions. Solid line with arrow on the second point.

Type

const string

See also

[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)[line.style_solid](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_solid)[line.style_dotted](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_dotted)[line.style_dashed](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_dashed)[line.style_arrow_left](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_left)[line.style_arrow_both](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_both)

### line.style_dashed

Line style for  [line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)  and  [line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)  functions.

Type

const string

See also

[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)[line.style_solid](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_solid)[line.style_dotted](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_dotted)[line.style_arrow_left](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_left)[line.style_arrow_right](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_right)[line.style_arrow_both](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_both)

### line.style_dotted

Line style for  [line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)  and  [line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)  functions.

Type

const string

See also

[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)[line.style_solid](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_solid)[line.style_dashed](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_dashed)[line.style_arrow_left](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_left)[line.style_arrow_right](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_right)[line.style_arrow_both](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_both)

### line.style_solid

Line style for  [line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)  and  [line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)  functions.

Type

const string

See also

[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[line.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_style)[line.style_dotted](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_dotted)[line.style_dashed](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_dashed)[line.style_arrow_left](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_left)[line.style_arrow_right](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_right)[line.style_arrow_both](https://www.tradingview.com/pine-script-reference/v6/#const_line.style_arrow_both)

### location.abovebar

Location value for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  functions. Shape is plotted above main series bars.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[location.belowbar](https://www.tradingview.com/pine-script-reference/v6/#const_location.belowbar)[location.top](https://www.tradingview.com/pine-script-reference/v6/#const_location.top)[location.bottom](https://www.tradingview.com/pine-script-reference/v6/#const_location.bottom)[location.absolute](https://www.tradingview.com/pine-script-reference/v6/#const_location.absolute)

### location.absolute

Location value for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  functions. Shape is plotted on chart using indicator value as a price coordinate.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[location.abovebar](https://www.tradingview.com/pine-script-reference/v6/#const_location.abovebar)[location.belowbar](https://www.tradingview.com/pine-script-reference/v6/#const_location.belowbar)[location.top](https://www.tradingview.com/pine-script-reference/v6/#const_location.top)[location.bottom](https://www.tradingview.com/pine-script-reference/v6/#const_location.bottom)

### location.belowbar

Location value for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  functions. Shape is plotted below main series bars.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[location.abovebar](https://www.tradingview.com/pine-script-reference/v6/#const_location.abovebar)[location.top](https://www.tradingview.com/pine-script-reference/v6/#const_location.top)[location.bottom](https://www.tradingview.com/pine-script-reference/v6/#const_location.bottom)[location.absolute](https://www.tradingview.com/pine-script-reference/v6/#const_location.absolute)

### location.bottom

Location value for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  functions. Shape is plotted near the bottom chart border.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[location.abovebar](https://www.tradingview.com/pine-script-reference/v6/#const_location.abovebar)[location.belowbar](https://www.tradingview.com/pine-script-reference/v6/#const_location.belowbar)[location.top](https://www.tradingview.com/pine-script-reference/v6/#const_location.top)[location.absolute](https://www.tradingview.com/pine-script-reference/v6/#const_location.absolute)

### location.top

Location value for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)  functions. Shape is plotted near the top chart border.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[location.abovebar](https://www.tradingview.com/pine-script-reference/v6/#const_location.abovebar)[location.belowbar](https://www.tradingview.com/pine-script-reference/v6/#const_location.belowbar)[location.bottom](https://www.tradingview.com/pine-script-reference/v6/#const_location.bottom)[location.absolute](https://www.tradingview.com/pine-script-reference/v6/#const_location.absolute)

### math.e

Is a named constant for  [Euler's number](https://en.wikipedia.org/wiki/E_(mathematical_constant)). It is equal to 2.7182818284590452.

Type

const float

See also

[math.phi](https://www.tradingview.com/pine-script-reference/v6/#const_math.phi)[math.pi](https://www.tradingview.com/pine-script-reference/v6/#const_math.pi)[math.rphi](https://www.tradingview.com/pine-script-reference/v6/#const_math.rphi)

### math.phi

Is a named constant for the  [golden ratio](https://en.wikipedia.org/wiki/Golden_ratio). It is equal to 1.6180339887498948.

Type

const float

See also

[math.e](https://www.tradingview.com/pine-script-reference/v6/#const_math.e)[math.pi](https://www.tradingview.com/pine-script-reference/v6/#const_math.pi)[math.rphi](https://www.tradingview.com/pine-script-reference/v6/#const_math.rphi)

### math.pi

Is a named constant for  [Archimedes' constant](https://en.wikipedia.org/wiki/Pi). It is equal to 3.1415926535897932.

Type

const float

See also

[math.e](https://www.tradingview.com/pine-script-reference/v6/#const_math.e)[math.phi](https://www.tradingview.com/pine-script-reference/v6/#const_math.phi)[math.rphi](https://www.tradingview.com/pine-script-reference/v6/#const_math.rphi)

### math.rphi

Is a named constant for the  [golden ratio conjugate](https://en.wikipedia.org/wiki/Golden_ratio#Golden_ratio_conjugate). It is equal to 0.6180339887498948.

Type

const float

See also

[math.e](https://www.tradingview.com/pine-script-reference/v6/#const_math.e)[math.pi](https://www.tradingview.com/pine-script-reference/v6/#const_math.pi)[math.phi](https://www.tradingview.com/pine-script-reference/v6/#const_math.phi)

### order.ascending

Determines the sort order of the array from the smallest to the largest value.

Type

const sort_order

See also

[array.new_float()](https://www.tradingview.com/pine-script-reference/v6/#fun_array.new_float)[array.sort()](https://www.tradingview.com/pine-script-reference/v6/#fun_array.sort)

### order.descending

Determines the sort order of the array from the largest to the smallest value.

Type

const sort_order

See also

[array.new_float()](https://www.tradingview.com/pine-script-reference/v6/#fun_array.new_float)[array.sort()](https://www.tradingview.com/pine-script-reference/v6/#fun_array.sort)

### plot.linestyle_dashed

A named constant for use with the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function's  `linestyle`  parameter, which modifies the appearance of plotted lines. If the  `style`  argument of the function call specifies a plot style that displays a line, using this constant as the  `linestyle`  argument specifies that the plotted line is dashed.

Type

const plot_line_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.linestyle_solid](https://www.tradingview.com/pine-script-reference/v6/#const_plot.linestyle_solid)[plot.linestyle_dotted](https://www.tradingview.com/pine-script-reference/v6/#const_plot.linestyle_dotted)

### plot.linestyle_dotted

A named constant for use with the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function's  `linestyle`  parameter, which modifies the appearance of plotted lines. If the  `style`  argument of the function call specifies a plot style that displays a line, using this constant as the  `linestyle`  argument specifies that the plotted line is dotted.

Type

const plot_line_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.linestyle_dashed](https://www.tradingview.com/pine-script-reference/v6/#const_plot.linestyle_dashed)[plot.linestyle_solid](https://www.tradingview.com/pine-script-reference/v6/#const_plot.linestyle_solid)

### plot.linestyle_solid

A named constant for use with the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function's  `linestyle`  parameter, which modifies the appearance of plotted lines. If the  `style`  argument of the function call specifies a plot style that displays a line, using this constant as the  `linestyle`  argument specifies that the plotted line is solid.

Type

const plot_line_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.linestyle_dashed](https://www.tradingview.com/pine-script-reference/v6/#const_plot.linestyle_dashed)[plot.linestyle_dotted](https://www.tradingview.com/pine-script-reference/v6/#const_plot.linestyle_dotted)

### plot.style_area

A named constant for the 'Area' style, to be used as an argument for the  `style`  parameter in the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function.

Type

const plot_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.style_line](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_line)[plot.style_linebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_linebr)[plot.style_histogram](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_histogram)[plot.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_cross)[plot.style_areabr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_areabr)[plot.style_columns](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_columns)[plot.style_circles](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_circles)[plot.style_stepline](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline)[plot.style_stepline_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline_diamond)[plot.style_steplinebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_steplinebr)

### plot.style_areabr

A named constant for the 'Area With Breaks' style, to be used as an argument for the  `style`  parameter in the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function. Similar to  [plot.style_area](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_area), except the gaps in the data are not filled.

Type

const plot_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.style_line](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_line)[plot.style_linebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_linebr)[plot.style_histogram](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_histogram)[plot.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_cross)[plot.style_area](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_area)[plot.style_columns](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_columns)[plot.style_circles](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_circles)[plot.style_stepline](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline)[plot.style_stepline_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline_diamond)[plot.style_steplinebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_steplinebr)

### plot.style_circles

A named constant for the 'Circles' style, to be used as an argument for the  `style`  parameter in the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function.

Type

const plot_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.style_line](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_line)[plot.style_linebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_linebr)[plot.style_histogram](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_histogram)[plot.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_cross)[plot.style_area](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_area)[plot.style_areabr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_areabr)[plot.style_columns](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_columns)[plot.style_stepline](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline)[plot.style_stepline_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline_diamond)[plot.style_steplinebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_steplinebr)

### plot.style_columns

A named constant for the 'Columns' style, to be used as an argument for the  `style`  parameter in the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function.

Type

const plot_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.style_line](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_line)[plot.style_linebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_linebr)[plot.style_histogram](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_histogram)[plot.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_cross)[plot.style_area](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_area)[plot.style_areabr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_areabr)[plot.style_circles](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_circles)[plot.style_stepline](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline)[plot.style_stepline_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline_diamond)[plot.style_steplinebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_steplinebr)

### plot.style_cross

A named constant for the 'Cross' style, to be used as an argument for the  `style`  parameter in the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function.

Type

const plot_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.style_line](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_line)[plot.style_linebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_linebr)[plot.style_histogram](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_histogram)[plot.style_area](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_area)[plot.style_areabr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_areabr)[plot.style_columns](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_columns)[plot.style_circles](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_circles)[plot.style_stepline](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline)[plot.style_stepline_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline_diamond)[plot.style_steplinebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_steplinebr)

### plot.style_histogram

A named constant for the 'Histogram' style, to be used as an argument for the  `style`  parameter in the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function.

Type

const plot_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.style_line](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_line)[plot.style_linebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_linebr)[plot.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_cross)[plot.style_area](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_area)[plot.style_areabr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_areabr)[plot.style_columns](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_columns)[plot.style_circles](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_circles)[plot.style_stepline](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline)[plot.style_stepline_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline_diamond)[plot.style_steplinebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_steplinebr)

### plot.style_line

A named constant for the 'Line' style, to be used as an argument for the  `style`  parameter in the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function.

Type

const plot_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.style_linebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_linebr)[plot.style_histogram](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_histogram)[plot.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_cross)[plot.style_area](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_area)[plot.style_areabr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_areabr)[plot.style_columns](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_columns)[plot.style_circles](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_circles)[plot.style_stepline](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline)[plot.style_stepline_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline_diamond)[plot.style_steplinebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_steplinebr)

### plot.style_linebr

A named constant for the 'Line With Breaks' style, to be used as an argument for the  `style`  parameter in the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function. Similar to  [plot.style_line](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_line), except the gaps in the data are not filled.

Type

const plot_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.style_line](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_line)[plot.style_histogram](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_histogram)[plot.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_cross)[plot.style_area](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_area)[plot.style_areabr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_areabr)[plot.style_columns](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_columns)[plot.style_circles](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_circles)[plot.style_stepline](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline)[plot.style_stepline_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline_diamond)[plot.style_steplinebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_steplinebr)

### plot.style_stepline

A named constant for the 'Step Line' style, to be used as an argument for the  `style`  parameter in the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function.

Type

const plot_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.style_line](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_line)[plot.style_linebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_linebr)[plot.style_histogram](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_histogram)[plot.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_cross)[plot.style_area](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_area)[plot.style_areabr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_areabr)[plot.style_columns](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_columns)[plot.style_circles](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_circles)[plot.style_stepline_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline_diamond)[plot.style_steplinebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_steplinebr)

### plot.style_stepline_diamond

A named constant for the 'Step Line With Diamonds' style, to be used as an argument for the  `style`  parameter in the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function. Similar to  [plot.style_stepline](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline), except the data changes are also marked with the Diamond shapes.

Type

const plot_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.style_line](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_line)[plot.style_linebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_linebr)[plot.style_histogram](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_histogram)[plot.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_cross)[plot.style_area](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_area)[plot.style_areabr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_areabr)[plot.style_columns](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_columns)[plot.style_circles](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_circles)[plot.style_stepline](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline)[plot.style_steplinebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_steplinebr)

### plot.style_steplinebr

A named constant for the 'Step line with Breaks' style, to be used as an argument for the  `style`  parameter in the  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)  function.

Type

const plot_style

See also

[plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot)[plot.style_line](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_line)[plot.style_linebr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_linebr)[plot.style_histogram](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_histogram)[plot.style_cross](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_cross)[plot.style_area](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_area)[plot.style_areabr](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_areabr)[plot.style_columns](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_columns)[plot.style_circles](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_circles)[plot.style_stepline](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline)[plot.style_stepline_diamond](https://www.tradingview.com/pine-script-reference/v6/#const_plot.style_stepline_diamond)

### position.bottom_center

Table position is used in  [table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  functions.

Binds the table to the bottom edge in the center.

Type

const string

See also

[table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.set_position()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.set_position)[position.top_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_left)[position.top_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_center)[position.top_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_right)[position.middle_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_left)[position.middle_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_center)[position.middle_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_right)[position.bottom_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_left)[position.bottom_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_right)

### position.bottom_left

Table position is used in  [table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  functions.

Binds the table to the bottom left of the screen.

Type

const string

See also

[table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.set_position()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.set_position)[position.top_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_left)[position.top_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_center)[position.top_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_right)[position.middle_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_left)[position.middle_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_center)[position.middle_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_right)[position.bottom_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_center)[position.bottom_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_right)

### position.bottom_right

Table position is used in  [table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  functions.

Binds the table to the bottom right of the screen.

Type

const string

See also

[table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.set_position()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.set_position)[position.top_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_left)[position.top_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_center)[position.top_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_right)[position.middle_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_left)[position.middle_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_center)[position.middle_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_right)[position.bottom_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_left)[position.bottom_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_center)

### position.middle_center

Table position is used in  [table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  functions.

Binds the table to the center of the screen.

Type

const string

See also

[table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.set_position()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.set_position)[position.top_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_left)[position.top_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_center)[position.top_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_right)[position.middle_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_left)[position.middle_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_right)[position.bottom_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_left)[position.bottom_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_center)[position.bottom_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_right)

### position.middle_left

Table position is used in  [table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  functions.

Binds the table to the left side of the screen.

Type

const string

See also

[table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.set_position()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.set_position)[position.top_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_left)[position.top_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_center)[position.top_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_right)[position.middle_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_center)[position.middle_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_right)[position.bottom_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_left)[position.bottom_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_center)[position.bottom_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_right)

### position.middle_right

Table position is used in  [table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  functions.

Binds the table to the right side of the screen.

Type

const string

See also

[table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.set_position()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.set_position)[position.top_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_left)[position.top_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_center)[position.top_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_right)[position.middle_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_left)[position.middle_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_center)[position.bottom_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_left)[position.bottom_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_center)[position.bottom_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_right)

### position.top_center

Table position is used in  [table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  functions.

Binds the table to the top edge in the center.

Type

const string

See also

[table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.set_position()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.set_position)[position.top_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_left)[position.top_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_right)[position.middle_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_left)[position.middle_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_center)[position.middle_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_right)[position.bottom_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_left)[position.bottom_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_center)[position.bottom_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_right)

### position.top_left

Table position is used in  [table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  functions.

Binds the table to the upper-left edge.

Type

const string

See also

[table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.set_position()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.set_position)[position.top_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_center)[position.top_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_right)[position.middle_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_left)[position.middle_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_center)[position.middle_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_right)[position.bottom_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_left)[position.bottom_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_center)[position.bottom_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_right)

### position.top_right

Table position is used in  [table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  functions.

Binds the table to the upper-right edge.

Type

const string

See also

[table.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.set_position()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.set_position)[position.top_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_left)[position.top_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.top_center)[position.middle_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_left)[position.middle_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_center)[position.middle_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.middle_right)[position.bottom_left](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_left)[position.bottom_center](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_center)[position.bottom_right](https://www.tradingview.com/pine-script-reference/v6/#const_position.bottom_right)

### scale.left

A named constant for use as the  `scale`  argument in  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  and  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  declaration statements. Specifies that the script's price scale is on the left side of the pane. If the script overlays on the main chart pane or another script's pane, it adds a new price scale on the left side of the pane and scales its visuals independently to fit the pane's visual space.

Type

const scale_type

See also

[indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)

### scale.none

A named constant for use as the  `scale`  argument in  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  and  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  declaration statements. A declaration statement can use this constant only if its  `overlay`  argument is  `true`. Specifies that the script scales its visuals independently to fit the visual space of the main chart pane or another script's pane without displaying a separate scale. The script displays plotted numbers directly on the pane's existing price scale if the chart's settings allow it. If the user moves the script to a new pane, the script displays the values on a new scale to the left or right of that pane, depending on the chart's "Scales placement" setting.

Type

const scale_type

See also

[indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)

### scale.right

A named constant for use as the  `scale`  argument in  [indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)  and  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  declaration statements. Specifies that the script's price scale is on the right side of the pane. If the script overlays on the main chart pane or another script's pane, it adds a new price scale on the right side of the pane and scales its visuals independently to fit the pane's visual space.

Type

const scale_type

See also

[indicator()](https://www.tradingview.com/pine-script-reference/v6/#fun_indicator)

### session.extended

Constant for extended session type (with extended hours data).

Type

const string

See also

[session.regular](https://www.tradingview.com/pine-script-reference/v6/#const_session.regular)[syminfo.session](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.session)

### session.regular

Constant for regular session type (no extended hours data).

Type

const string

See also

[session.extended](https://www.tradingview.com/pine-script-reference/v6/#const_session.extended)[syminfo.session](https://www.tradingview.com/pine-script-reference/v6/#var_syminfo.session)

### settlement_as_close.inherit

A constant to specify the value of the  `settlement_as_close`  parameter in  [ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)  and  [ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)  functions.

Type

const settlement

See also

[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)[settlement_as_close.on](https://www.tradingview.com/pine-script-reference/v6/#const_settlement_as_close.on)[settlement_as_close.off](https://www.tradingview.com/pine-script-reference/v6/#const_settlement_as_close.off)

### settlement_as_close.off

A constant to specify the value of the  `settlement_as_close`  parameter in  [ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)  and  [ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)  functions.

Type

const settlement

See also

[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)[settlement_as_close.on](https://www.tradingview.com/pine-script-reference/v6/#const_settlement_as_close.on)[settlement_as_close.inherit](https://www.tradingview.com/pine-script-reference/v6/#const_settlement_as_close.inherit)

### settlement_as_close.on

A constant to specify the value of the  `settlement_as_close`  parameter in  [ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)  and  [ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)  functions.

Type

const settlement

See also

[ticker.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.new)[ticker.modify()](https://www.tradingview.com/pine-script-reference/v6/#fun_ticker.modify)[settlement_as_close.inherit](https://www.tradingview.com/pine-script-reference/v6/#const_settlement_as_close.inherit)[settlement_as_close.off](https://www.tradingview.com/pine-script-reference/v6/#const_settlement_as_close.off)

### shape.arrowdown

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### shape.arrowup

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### shape.circle

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### shape.cross

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### shape.diamond

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### shape.flag

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### shape.labeldown

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### shape.labelup

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### shape.square

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### shape.triangledown

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### shape.triangleup

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### shape.xcross

Shape style for  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)  function.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)

### size.auto

A constant to specify the size of the graphics drawn by  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar),  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new), and  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new). Adjusts the size of the graphics automatically.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[label.set_size()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_size)[size.tiny](https://www.tradingview.com/pine-script-reference/v6/#const_size.tiny)[size.small](https://www.tradingview.com/pine-script-reference/v6/#const_size.small)[size.normal](https://www.tradingview.com/pine-script-reference/v6/#const_size.normal)[size.large](https://www.tradingview.com/pine-script-reference/v6/#const_size.large)[size.huge](https://www.tradingview.com/pine-script-reference/v6/#const_size.huge)

### size.huge

A constant to specify the size of the graphics drawn by  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar),  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new),  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new), and  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell). Sets the size to huge.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[label.set_size()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_size)[size.auto](https://www.tradingview.com/pine-script-reference/v6/#const_size.auto)[size.tiny](https://www.tradingview.com/pine-script-reference/v6/#const_size.tiny)[size.small](https://www.tradingview.com/pine-script-reference/v6/#const_size.small)[size.normal](https://www.tradingview.com/pine-script-reference/v6/#const_size.normal)[size.large](https://www.tradingview.com/pine-script-reference/v6/#const_size.large)

### size.large

A constant to specify the size of the graphics drawn by  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar),  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new),  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new), and  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell). Sets the size to large.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[label.set_size()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_size)[size.auto](https://www.tradingview.com/pine-script-reference/v6/#const_size.auto)[size.tiny](https://www.tradingview.com/pine-script-reference/v6/#const_size.tiny)[size.small](https://www.tradingview.com/pine-script-reference/v6/#const_size.small)[size.normal](https://www.tradingview.com/pine-script-reference/v6/#const_size.normal)[size.huge](https://www.tradingview.com/pine-script-reference/v6/#const_size.huge)

### size.normal

A constant to specify the size of the graphics drawn by  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar),  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new),  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new), and  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell). Sets the size to normal.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[label.set_size()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_size)[size.auto](https://www.tradingview.com/pine-script-reference/v6/#const_size.auto)[size.tiny](https://www.tradingview.com/pine-script-reference/v6/#const_size.tiny)[size.small](https://www.tradingview.com/pine-script-reference/v6/#const_size.small)[size.large](https://www.tradingview.com/pine-script-reference/v6/#const_size.large)[size.huge](https://www.tradingview.com/pine-script-reference/v6/#const_size.huge)

### size.small

A constant to specify the size of the graphics drawn by  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar),  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new),  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new), and  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell). Sets the size to small.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[label.set_size()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_size)[size.auto](https://www.tradingview.com/pine-script-reference/v6/#const_size.auto)[size.tiny](https://www.tradingview.com/pine-script-reference/v6/#const_size.tiny)[size.normal](https://www.tradingview.com/pine-script-reference/v6/#const_size.normal)[size.large](https://www.tradingview.com/pine-script-reference/v6/#const_size.large)[size.huge](https://www.tradingview.com/pine-script-reference/v6/#const_size.huge)

### size.tiny

A constant to specify the size of the graphics drawn by  [plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar),  [plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape),  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new),  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new), and  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell). Sets the size to tiny.

Type

const string

See also

[plotshape()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotshape)[plotchar()](https://www.tradingview.com/pine-script-reference/v6/#fun_plotchar)[label.set_size()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_size)[size.auto](https://www.tradingview.com/pine-script-reference/v6/#const_size.auto)[size.small](https://www.tradingview.com/pine-script-reference/v6/#const_size.small)[size.normal](https://www.tradingview.com/pine-script-reference/v6/#const_size.normal)[size.large](https://www.tradingview.com/pine-script-reference/v6/#const_size.large)[size.huge](https://www.tradingview.com/pine-script-reference/v6/#const_size.huge)

### splits.denominator

A named constant for the  [request.splits()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.splits)  function. Is used to request the denominator (the number below the line in a fraction) of a splits.

Type

const string

See also

[request.splits()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.splits)

### splits.numerator

A named constant for the  [request.splits()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.splits)  function. Is used to request the numerator (the number above the line in a fraction) of a splits.

Type

const string

See also

[request.splits()](https://www.tradingview.com/pine-script-reference/v6/#fun_request.splits)

### strategy.cash

This is one of the arguments that can be supplied to the  `default_qty_type`  parameter in the  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  declaration statement. It is only relevant when no value is used for the ‘qty’ parameter in  [strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)  or  [strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)  function calls. It specifies that an amount of cash in the  `strategy.account_currency`  will be used to enter trades.

Type

const string

Example

```
//@version=6strategy("strategy.cash", overlay = true, default_qty_value = 50, default_qty_type = strategy.cash, initial_capital = 1000000)if bar_index == 0    // As ‘qty’ is not defined, the previously defined values for the `default_qty_type` and `default_qty_value` parameters are used to enter trades, namely 50 units of cash in the currency of `strategy.account_currency`.    // `qty` is calculated as (default_qty_value)/(close price). If current price is $5, then qty = 50/5 = 10.    strategy.entry("EN", strategy.long)if bar_index == 2    strategy.close("EN")
```

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### strategy.commission.cash_per_contract

Commission type for an order. Money displayed in the account currency per contract.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### strategy.commission.cash_per_order

Commission type for an order. Money displayed in the account currency per order.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### strategy.commission.percent

Commission type for an order. A percentage of the cash volume of order.

Type

const string

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### strategy.direction.all

It allows strategy to open both long and short positions.

Type

const string

See also

[strategy.risk.allow_entry_in()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.risk.allow_entry_in)

### strategy.direction.long

It allows strategy to open only long positions.

Type

const string

See also

[strategy.risk.allow_entry_in()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.risk.allow_entry_in)

### strategy.direction.short

It allows strategy to open only short positions.

Type

const string

See also

[strategy.risk.allow_entry_in()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.risk.allow_entry_in)

### strategy.fixed

This is one of the arguments that can be supplied to the  `default_qty_type`  parameter in the  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  declaration statement. It is only relevant when no value is used for the ‘qty’ parameter in  [strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)  or  [strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)  function calls. It specifies that a number of contracts/shares/lots will be used to enter trades.

Type

const string

Example

```
//@version=6strategy("strategy.fixed", overlay = true, default_qty_value = 50, default_qty_type = strategy.fixed, initial_capital = 1000000)if bar_index == 0    // As ‘qty’ is not defined, the previously defined values for the `default_qty_type` and `default_qty_value` parameters are used to enter trades, namely 50 contracts.    // qty = 50    strategy.entry("EN", strategy.long)if bar_index == 2    strategy.close("EN")
```

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### strategy.long

A named constant for use with the  `direction`  parameter of the  [strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)  and  [strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)  commands. It specifies that the command creates a buy order.

Type

const strategy_direction

See also

[strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)[strategy.exit()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.exit)[strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)

### strategy.oca.cancel

A named constant for use with the  `oca_type`  parameter of the  [strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)  and  [strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)  commands. It specifies that the strategy cancels the unfilled order when another order with the same  `oca_name`  and  `oca_type`  executes.

Type

const string

Remarks

Strategies cannot cancel or reduce pending orders from an OCA group if they execute on the same tick. For example, if the market price triggers two stop orders from  [strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)  calls with the same  `oca_*`  arguments, the strategy cannot fully or partially cancel either one.

See also

[strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)[strategy.exit()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.exit)[strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)

### strategy.oca.none

A named constant for use with the  `oca_type`  parameter of the  [strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)  and  [strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)  commands. It specifies that the order executes independently of all other orders, including those with the same  `oca_name`.

Type

const string

See also

[strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)[strategy.exit()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.exit)[strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)

### strategy.oca.reduce

A named constant for use with the  `oca_type`  parameter of the  [strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)  and  [strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)  commands. It specifies that when another order with the same  `oca_name`  and  `oca_type`  executes, the strategy reduces the unfilled order by that order's size. If the unfilled order's size reaches 0 after reduction, it is the same as canceling the order entirely.

Type

const string

Remarks

Strategies cannot cancel or reduce pending orders from an OCA group if they execute on the same tick. For example, if the market price triggers two stop orders from  [strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)  calls with the same  `oca_*`  arguments, the strategy cannot fully or partially cancel either one.

Orders from  [strategy.exit()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.exit)  automatically use this OCA type, and they belong to the same OCA group by default.

See also

[strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)[strategy.exit()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.exit)[strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)

### strategy.percent_of_equity

This is one of the arguments that can be supplied to the  `default_qty_type`  parameter in the  [strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)  declaration statement. It is only relevant when no value is used for the ‘qty’ parameter in  [strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)  or  [strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)  function calls. It specifies that a percentage (0-100) of equity will be used to enter trades.

Type

const string

Example

```
//@version=6strategy("strategy.percent_of_equity", overlay = false, default_qty_value = 100, default_qty_type = strategy.percent_of_equity, initial_capital = 1000000)// As ‘qty’ is not defined, the previously defined values for the `default_qty_type` and `default_qty_value` parameters are used to enter trades, namely 100% of available equity.if bar_index == 0    strategy.entry("EN", strategy.long)if bar_index == 2    strategy.close("EN")plot(strategy.equity) // The ‘qty’ parameter is set to 10. Entering position with fixed size of 10 contracts and entry market price = (10 * close).if bar_index == 4    strategy.entry("EN", strategy.long, qty = 10)if bar_index == 6    strategy.close("EN")
```

See also

[strategy()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy)

### strategy.short

A named constant for use with the  `direction`  parameter of the  [strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)  and  [strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)  commands. It specifies that the command creates a sell order.

Type

const strategy_direction

See also

[strategy.entry()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.entry)[strategy.exit()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.exit)[strategy.order()](https://www.tradingview.com/pine-script-reference/v6/#fun_strategy.order)

### text.align_bottom

Vertical text alignment for  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new),  [box.set_text_valign()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_valign),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  and  [table.cell_set_text_valign()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell_set_text_valign)  functions.

Type

const string

See also

[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.cell_set_text_valign()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell_set_text_valign)[text.align_center](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_center)[text.align_left](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_left)[text.align_right](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_right)

### text.align_center

Text alignment for  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new),  [box.set_text_halign()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_halign),  [box.set_text_valign()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_valign),  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[text.align_left](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_left)[text.align_right](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_right)

### text.align_left

Horizontal text alignment for  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new),  [box.set_text_halign()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_halign),  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[text.align_center](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_center)[text.align_right](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_right)

### text.align_right

Horizontal text alignment for  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new),  [box.set_text_halign()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_halign),  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)  and  [label.set_textalign()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_textalign)  functions.

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_style()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_style)[text.align_center](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_center)[text.align_left](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_left)

### text.align_top

Vertical text alignment for  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new),  [box.set_text_valign()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_valign),  [table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)  and  [table.cell_set_text_valign()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell_set_text_valign)  functions.

Type

const string

See also

[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)[table.cell_set_text_valign()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell_set_text_valign)[text.align_center](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_center)[text.align_left](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_left)[text.align_right](https://www.tradingview.com/pine-script-reference/v6/#const_text.align_right)

### text.format_bold

A named constant for use with the  `text_formatting`  parameter of the  `label.new()`,  `box.new()`,  `table.cell()`, and  `*set_text_formatting()`  functions. Makes the text bold.

Type

const text_format

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)

### text.format_italic

A named constant for use with the  `text_formatting`  parameter of the  `label.new()`,  `box.new()`,  `table.cell()`, and  `*set_text_formatting()`  functions. Italicizes the text.

Type

const text_format

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)

### text.format_none

A named constant for use with the  `text_formatting`  parameter of the  `label.new()`,  `box.new()`,  `table.cell()`, and  `*set_text_formatting()`  functions. Signifies no special text formatting.

Type

const text_format

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new)[table.cell()](https://www.tradingview.com/pine-script-reference/v6/#fun_table.cell)

### text.wrap_auto

Automatic wrapping mode for  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new)  and  [box.set_text_wrap()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_wrap)  functions.

Type

const string

See also

[box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new)[box.set_text()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text)[box.set_text_wrap()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_wrap)

### text.wrap_none

Disabled wrapping mode for  [box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new)  and  [box.set_text_wrap()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_wrap)  functions.

Type

const string

See also

[box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new)[box.set_text()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text)[box.set_text_wrap()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.set_text_wrap)

### true

Literal representing one of the values a  [bool](https://www.tradingview.com/pine-script-reference/v6/#type_bool)  variable can hold, or an expression can evaluate to when it uses comparison or logical operators.

Remarks

See the User Manual for  [comparison operators](https://www.tradingview.com/pine-script-docs/language/operators/#comparison-operators)  and  [logical operators](https://www.tradingview.com/pine-script-docs/language/operators/#logical-operators).

See also

[bool](https://www.tradingview.com/pine-script-reference/v6/#type_bool)

### xloc.bar_index

A constant that specifies how functions that create and modify Pine drawings interpret x-coordinates. If  `xloc = xloc.bar_index`, the drawing object treats each x-coordinate as a  `bar_index`  value.

Type

const string

See also

[xloc.bar_time](https://www.tradingview.com/pine-script-reference/v6/#const_xloc.bar_time)[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new)[polyline.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_polyline.new)[line.set_xloc()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_xloc)[label.set_xloc()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_xloc)

### xloc.bar_time

A constant that specifies how functions that create and modify Pine drawings interpret x-coordinates. If  `xloc = xloc.bar_time`, the drawing object treats each x-coordinate as a UNIX timestamp, expressed in milliseconds.

Type

const string

See also

[xloc.bar_index](https://www.tradingview.com/pine-script-reference/v6/#const_xloc.bar_index)[line.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.new)[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[box.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_box.new)[polyline.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_polyline.new)[line.set_xloc()](https://www.tradingview.com/pine-script-reference/v6/#fun_line.set_xloc)[label.set_xloc()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_xloc)[xloc.bar_index](https://www.tradingview.com/pine-script-reference/v6/#const_xloc.bar_index)

### yloc.abovebar

A named constant that specifies the algorithm of interpretation of y-value in function  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new).

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_yloc()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_yloc)[yloc.price](https://www.tradingview.com/pine-script-reference/v6/#const_yloc.price)[yloc.belowbar](https://www.tradingview.com/pine-script-reference/v6/#const_yloc.belowbar)

### yloc.belowbar

A named constant that specifies the algorithm of interpretation of y-value in function  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new).

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_yloc()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_yloc)[yloc.price](https://www.tradingview.com/pine-script-reference/v6/#const_yloc.price)[yloc.abovebar](https://www.tradingview.com/pine-script-reference/v6/#const_yloc.abovebar)

### yloc.price

A named constant that specifies the algorithm of interpretation of y-value in function  [label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new).

Type

const string

See also

[label.new()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.new)[label.set_yloc()](https://www.tradingview.com/pine-script-reference/v6/#fun_label.set_yloc)[yloc.abovebar](https://www.tradingview.com/pine-script-reference/v6/#const_yloc.abovebar)[yloc.belowbar](https://www.tradingview.com/pine-script-reference/v6/#const_yloc.belowbar)
