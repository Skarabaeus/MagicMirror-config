# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This repository holds a single `config.js` file — the configuration for a [MagicMirror²](https://magicmirror.builders/) smart mirror installation. MagicMirror² is a Node.js-based open-source platform that runs in a browser (Electron) and renders modules on screen.

The `config.js` must be deployed to the `config/` directory of the MagicMirror² installation (typically `~/MagicMirror/config/config.js` on the Raspberry Pi).

## Configuration structure

`config.js` exports a single `config` object with two concerns:

1. **Server settings** — `address`, `port`, `ipWhitelist`, HTTPS options. Currently bound to `localhost:8080`.
2. **Modules array** — each entry declares which built-in or third-party module to load, where to place it (`position`), and its module-specific `config` block.

### Current locale / units
- Language: `de`, locale: `de-DE`
- Time: 24-hour, units: metric
- Weather coordinates: 50.3353 N, 8.5320 E (Wetterau/Hessen, Germany)

### Modules in use
| Module | Position | Notes |
|---|---|---|
| `MMM-BackgroundSlideshow` | `fullscreen_below` | photos from /home/stefan/Pictures, 10s fade |
| `alert` | — | system alerts |
| `updatenotification` | `top_bar` | MagicMirror update checks |
| `clock` | `top_left` | |
| `calendar` | `top_left` | German public holidays via ics.calendarlabs.com |
| `compliments` | `lower_third` | |
| `weather` (current) | `top_right` | openmeteo provider |
| `weather` (forecast) | `top_right` | openmeteo provider |

## MagicMirror² module positions
Valid `position` values: `top_bar`, `top_left`, `top_center`, `top_right`, `upper_third`, `middle_center`, `lower_third`, `bottom_left`, `bottom_center`, `bottom_right`, `bottom_bar`, `fullscreen_above`, `fullscreen_below`.

## Docs
- Config reference: https://docs.magicmirror.builders/configuration/introduction.html
- Module config options: https://docs.magicmirror.builders/modules/configuration.html
