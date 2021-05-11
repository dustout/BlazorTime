# Blazor Time

A time conversion library for Blazor that allows you to display dates and times in the browsers local time. It can accept both UTC and server time as an input, and automatically display those times in the browsers local time.

## Install
[![NuGet Pre Release](https://img.shields.io/nuget/v/BlazorTime.svg)](https://www.nuget.org/packages/BlazorTime/)

### Nuget
    Install-Package BlazorTime

### Blazor WebAssembly (Client-side Blazor)

1. Near the bottom of your `wwwroot/index.html`, add `<script src="_content/BlazorTime/blazorTime.js"></script>`.
2. In `_Imports.razor`, add `@using BlazorTime`.


### Blazor Server (Server-side Blazor)

1. Near the bottom of your `Pages/_Host.cshtml`, add `<script src="_content/BlazorTime/blazorTime.js"></script>`.
2. In `_Imports.razor`, add `@using BlazorTime`.

## Usage
``` RAZOR
@page "/TimeSimple"

<p>
  @*UTC to browser time*@
  <ToLocal DateTime="testUtcTime" Format="ddd mmm dd yyyy HH:MM:ss"></ToLocal>
</p>

<p>
  @*server time to browser time*@
  <ToLocal DateTime="testServerTime" Format="default"></ToLocal>
</p>

<p>
  @*display as iso example 2021-05-10*@
  <ToLocal DateTime="testUtcTime" Format="yyyy-mm-dd"></ToLocal>
</p>

<p>
  @*display as time example 2pm*@
  <ToLocal DateTime="testUtcTime" Format="yyyy-mm-dd"></ToLocal>
</p>

<button @onclick="Update">Update Time</button>

@code {
  private DateTime testUtcTime = DateTime.UtcNow;
  private DateTime testServerTime = DateTime.Now;

  private void Update()
  {
    testUtcTime = DateTime.UtcNow;
    testServerTime = DateTime.Now;
  }
}
```


### Mask options

| Mask             | Description                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `d`              | Day of the month as digits; no leading zero for single-digit days.                                                                                            |
| `dd`             | Day of the month as digits; leading zero for single-digit days.                                                                                               |
| `ddd`            | Day of the week as a three-letter abbreviation.                                                                                                               |
| `DDD`            | "Ysd", "Tdy" or "Tmw" if date lies within these three days. Else fall back to ddd.                                                                            |
| `dddd`           | Day of the week as its full name.                                                                                                                             |
| `DDDD`           | "Yesterday", "Today" or "Tomorrow" if date lies within these three days. Else fall back to dddd.                                                              |
| `m`              | Month as digits; no leading zero for single-digit months.                                                                                                     |
| `mm`             | Month as digits; leading zero for single-digit months.                                                                                                        |
| `mmm`            | Month as a three-letter abbreviation.                                                                                                                         |
| `mmmm`           | Month as its full name.                                                                                                                                       |
| `yy`             | Year as last two digits; leading zero for years less than 10.                                                                                                 |
| `yyyy`           | Year represented by four digits.                                                                                                                              |
| `h`              | Hours; no leading zero for single-digit hours (12-hour clock).                                                                                                |
| `hh`             | Hours; leading zero for single-digit hours (12-hour clock).                                                                                                   |
| `H`              | Hours; no leading zero for single-digit hours (24-hour clock).                                                                                                |
| `HH`             | Hours; leading zero for single-digit hours (24-hour clock).                                                                                                   |
| `M`              | Minutes; no leading zero for single-digit minutes.                                                                                                            |
| `MM`             | Minutes; leading zero for single-digit minutes.                                                                                                               |
| `N`              | ISO 8601 numeric representation of the day of the week.                                                                                                       |
| `o`              | GMT/UTC timezone offset, e.g. -0500 or +0230.                                                                                                                 |
| `p`              | GMT/UTC timezone offset, e.g. -05:00 or +02:30.                                                                                                               |
| `s`              | Seconds; no leading zero for single-digit seconds.                                                                                                            |
| `ss`             | Seconds; leading zero for single-digit seconds.                                                                                                               |
| `S`              | The date's ordinal suffix (st, nd, rd, or th). Works well with `d`.                                                                                           |
| `l`              | Milliseconds; gives 3 digits.                                                                                                                                 |
| `L`              | Milliseconds; gives 2 digits.                                                                                                                                 |
| `t`              | Lowercase, single-character time marker string: a or p.                                                                                                       |
| `tt`             | Lowercase, two-character time marker string: am or pm.                                                                                                        |
| `T`              | Uppercase, single-character time marker string: A or P.                                                                                                       |
| `TT`             | Uppercase, two-character time marker string: AM or PM.                                                                                                        |
| `W`              | ISO 8601 week number of the year, e.g. 4, 42                                                                                                                  |
| `WW`             | ISO 8601 week number of the year, leading zero for single-digit, e.g. 04, 42                                                                                  |
| `Z`              | US timezone abbreviation, e.g. EST or MDT. For non-US timezones, the GMT/UTC offset is returned, e.g. GMT-0500                                                |
| `'...'`, `"..."` | Literal character sequence. Surrounding quotes are removed.                                                                                                   |
| `UTC:`           | Must be the first four characters of the mask. Converts the date from local time to UTC/GMT/Zulu time before applying the mask. The "UTC:" prefix is removed. |

### Named Formats

| Name              | Mask                           | Example                  |
| ----------------- | ------------------------------ | ------------------------ |
| `default`         | `ddd mmm dd yyyy HH:MM:ss`     | Sat Jun 09 2007 17:46:21 |
| `shortDate`       | `m/d/yy`                       | 6/9/07                   |
| `paddedShortDate` | `mm/dd/yyyy`                   | 06/09/2007               |
| `mediumDate`      | `mmm d, yyyy`                  | Jun 9, 2007              |
| `longDate`        | `mmmm d, yyyy`                 | June 9, 2007             |
| `fullDate`        | `dddd, mmmm d, yyyy`           | Saturday, June 9, 2007   |
| `shortTime`       | `h:MM TT`                      | 5:46 PM                  |
| `mediumTime`      | `h:MM:ss TT`                   | 5:46:21 PM               |
| `longTime`        | `h:MM:ss TT Z`                 | 5:46:21 PM EST           |
| `isoDate`         | `yyyy-mm-dd`                   | 2007-06-09               |
| `isoTime`         | `HH:MM:ss`                     | 17:46:21                 |
| `isoDateTime`     | `yyyy-mm-dd'T'HH:MM:sso`       | 2007-06-09T17:46:21+0700 |
| `isoUtcDateTime`  | `UTC:yyyy-mm-dd'T'HH:MM:ss'Z'` | 2007-06-09T22:46:21Z     |



## Thanks To
[node-dateformat](https://github.com/felixge/node-dateformat/blob/master/Readme.md) for the date formatter and the mask/named formats section of the readme

[Microsoft Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor) for making Blazor
