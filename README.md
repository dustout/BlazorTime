# Blazor Time
Display the users local time while working in the servers local time or in UTC time

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
    @page "/TimeSimple"

    <p>
      <ToLocal DateTime="testUtcTime" Format="yyyy-mm-dd"></ToLocal>
    </p>

    <button @onclick="Update">Update Time</button>

    @code {
      private DateTime testUtcTime = DateTime.UtcNow;

      private void Update()
      {
        testUtcTime = DateTime.UtcNow;
      }
    }
