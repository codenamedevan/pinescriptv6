### time()

Returns the UNIX time of the bar open for a specified timeframe, session, and timezone, or `na` if the requested time point is outside the session.

Syntax

`time(timeframe, session, timezone, bars_back, timeframe_bars_back) → series int`

Arguments

- `timeframe (series string)`: The timeframe to evaluate. Use `timeframe.period` or `""` to inherit the active timeframe.
- `session (series string)`: Optional session string used to filter returned timestamps.
- `timezone (series string)`: Optional timezone used when evaluating the session.
- `bars_back (series int)`: Optional offset on the script's main timeframe.
- `timeframe_bars_back (series int)`: Optional offset on the requested timeframe. Positive values move backward on the requested timeframe. Negative values move forward on the requested timeframe.

Remarks

If a call includes both `bars_back` and `timeframe_bars_back`, Pine first applies `bars_back` on the script's main timeframe and then applies `timeframe_bars_back` on the requested timeframe.

### time_close()

Returns the UNIX time of the bar close for a specified timeframe, session, and timezone, or `na` if the requested time point is outside the session. On tick charts and price-based charts such as Renko, line break, Kagi, point & figure, and range, this function returns `na` for the latest realtime bar because the future closing time is unpredictable.

Syntax

`time_close(timeframe, session, timezone, bars_back, timeframe_bars_back) → series int`

Arguments

- `timeframe (series string)`: The timeframe to evaluate. Use `timeframe.period` or `""` to inherit the active timeframe.
- `session (series string)`: Optional session string used to filter returned timestamps.
- `timezone (series string)`: Optional timezone used when evaluating the session.
- `bars_back (series int)`: Optional offset on the script's main timeframe.
- `timeframe_bars_back (series int)`: Optional offset on the requested timeframe. Positive values move backward on the requested timeframe. Negative values move forward on the requested timeframe.

Remarks

If a call includes both `bars_back` and `timeframe_bars_back`, Pine first applies `bars_back` on the script's main timeframe and then applies `timeframe_bars_back` on the requested timeframe.
