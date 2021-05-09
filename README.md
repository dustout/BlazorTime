# Blazor Time
Display the users local time while working in the servers local time or in UTC time

## Install
[![NuGet Pre Release](https://img.shields.io/nuget/v/BlazorTime.svg)](https://www.nuget.org/packages/BlazorTime/)

### Nuget
    Install-Package BlazorTime -Version 1.0.1

### Blazor WebAssembly (Client-side Blazor)

1. Inside the `<head>` element of your `wwwroot/index.html`, add `<script src="_content/BlazorTime/blazorTime.js"></script>`.

### Blazor Server (Server-side Blazor)

1. Inside the `<head>` element of your `Pages/_Host.cshtml`, add `<script src="_content/BlazorTime/blazorTime.js"></script>`.
2. In `_Imports.razor`, add `@using BlazorTime`.
