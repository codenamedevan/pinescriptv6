
# [Levels](https://www.tradingview.com/pine-script-docs/visuals/levels/#levels)

## [​`hline()`​ levels](https://www.tradingview.com/pine-script-docs/visuals/levels/#hline-levels)

Levels are lines plotted using the  [hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline)  function. It is designed to plot  **horizontal**  levels using a  **single color**, i.e., it does not change on different bars. See the  [Levels](https://www.tradingview.com/pine-script-docs/visuals/plots/#levels)  section of the page on  [plot()](https://www.tradingview.com/pine-script-reference/v6/#plot)  for alternative ways to plot levels when  [hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline)  won’t do what you need.

The function has the following signature:

```

```

[hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline)  has a few constraints when compared to  [plot()](https://www.tradingview.com/pine-script-reference/v6/#fun_plot):

-   Since the function’s objective is to plot horizontal lines, its  `price`  parameter requires an “input int/float” argument, which means that “series float” values such as  [close](https://www.tradingview.com/pine-script-reference/v6/#var_close)  or dynamically-calculated values cannot be used.
-   Its  `color`  parameter requires an “input color” argument, which precludes the use of dynamic colors, i.e., colors calculated on each bar — or “series color” values.
-   Three different line styles are supported through the  `linestyle`  parameter:  [hline.style_solid](https://www.tradingview.com/pine-script-reference/v6/#const_hline.style_solid),  [hline.style_dotted](https://www.tradingview.com/pine-script-reference/v6/#const_hline.style_dotted)  and  [hline.style_dashed](https://www.tradingview.com/pine-script-reference/v6/#const_hline.style_dashed).

Let’s see  [hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline)  in action in the “True Strength Index” indicator:

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

`//@version=6  
indicator("TSI")  
myTSI  =  100  *  ta.tsi(close,  25,  13)  
  
hline( 50,  "+50",  color.lime)  
hline( 25,  "+25",  color.green)  
hline( 0,  "Zero",  color.gray,  linestyle  =  hline.style_dotted)  
hline(-25,  "-25",  color.maroon)  
hline(-50,  "-50",  color.red)  
  
plot(myTSI)  
`

![image](https://www.tradingview.com/pine-script-docs/_astro/Levels-HlineLevels-01.DkWkzgaN_R6tzp.webp)

![image](https://www.tradingview.com/pine-script-docs/_astro/Levels-HlineLevels-02.rezExM6T_1CI5EH.webp)

Note that:

-   We display 5 levels, each of a different color.
-   We use a different line style for the zero centerline.
-   We choose colors that will work well on both light and dark themes.
-   The usual range for the indicator’s values is +100 to -100. Since the  [ta.tsi()](https://www.tradingview.com/pine-script-reference/v6/#fun_ta%7Bdot%7Dtsi)  built-in returns values in the +1 to -1 range, we make the adjustment in our code.

## [Fills between  levels](https://www.tradingview.com/pine-script-docs/visuals/levels/#fills-between-levels)

The space between two levels plotted with  [hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline)  can be colored using  [fill()](https://www.tradingview.com/pine-script-reference/v6/#fun_fill). Keep in mind that  **both**  plots must have been plotted with  [hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline).

Let’s put some background colors in our TSI indicator:

[Pine Script®](https://tradingview.com/pine-script-docs)

Copied

`//@version=6  
indicator("TSI")  
myTSI  =  100  *  ta.tsi(close,  25,  13)  
  
plus50Hline  =  hline( 50,  "+50",  color.lime)  
plus25Hline  =  hline( 25,  "+25",  color.green)  
zeroHline  =  hline( 0,  "Zero",  color.gray,  linestyle  =  hline.style_dotted)  
minus25Hline  =  hline(-25,  "-25",  color.maroon)  
minus50Hline  =  hline(-50,  "-50",  color.red)  
  
// ————— Function returns a color in a light shade for use as a background.  
fillColor(color  col) =>  
color.new(col,  90)  
  
fill(plus50Hline,  plus25Hline,  fillColor(color.lime))  
fill(plus25Hline,  zeroHline,  fillColor(color.teal))  
fill(zeroHline,  minus25Hline,  fillColor(color.maroon))  
fill(minus25Hline,  minus50Hline,  fillColor(color.red))  
  
plot(myTSI)  
`

![image](https://www.tradingview.com/pine-script-docs/_astro/Levels-FillBetweenLevels-01.xe2ic_uc_Z2mX9Cm.webp)

![image](https://www.tradingview.com/pine-script-docs/_astro/Levels-FillBetweenLevels-02.CUTgokP3_Z2tYq6M.webp)

Note that:

-   We have now used the return value of our  [hline()](https://www.tradingview.com/pine-script-reference/v6/#fun_hline)  function calls, which is of the  [hline](https://www.tradingview.com/pine-script-docs/language/type-system/#plot-and-hline)  special type. We use the  `plus50Hline`,  `plus25Hline`,  `zeroHline`,  `minus25Hline`  and  `minus50Hline`  variables to store those “hline” IDs because we will need them in our  [fill()](https://www.tradingview.com/pine-script-reference/v6/#fun_fill)  calls later.
-   To generate lighter color shades for the background colors, we declare a  `fillColor()`  function that accepts a color and returns its 90 transparency. We use calls to that function for the  `color`  arguments in our  [fill()](https://www.tradingview.com/pine-script-reference/v6/#fun_fill)  calls.
-   We make our  [fill()](https://www.tradingview.com/pine-script-reference/v6/#fun_fill)  calls for each of the four different fills we want, between four different pairs of levels.
-   We use  [color.teal](https://www.tradingview.com/pine-script-reference/v6/#const_color.teal)  in our second fill because it produces a green that fits the color scheme better than the  [color.green](https://www.tradingview.com/pine-script-reference/v6/#const_color.green)  used for the 25 level
