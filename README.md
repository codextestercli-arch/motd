# Backyard RP — MOTD (Vite scaffold)

## Project structure

```
backyard-motd/
├── index.html                  ← Vite entry point (clean HTML, no inline CSS/JS)
├── package.json
├── vite.config.js              ← Standard build → dist/
├── vite.singlefile.config.js   ← Single-file build → dist-single/ (for GMod local load)
└── src/
    ├── js/
    │   ├── main.js             ← Entry point, imports CSS + modules
    │   ├── xp.js               ← XP bar tab switching
    │   ├── carousel.js         ← Hero dot carousel
    │   └── tabs.js             ← Footer tab switching
    └── styles/
        ├── index.css           ← Imports all partials
        ├── variables.css       ← CSS custom properties / design tokens
        ├── base.css            ← Reset, html/body, scrollbars
        ├── topbar.css          ← Top bar, icon buttons, logo
        ├── xpbar.css           ← XP bar with per-skill icon colours
        ├── layout.css          ← Column grid, panel cards, shared button
        ├── profile.css         ← Player profile, stats, avatar, jobs
        ├── hero.css            ← Hero banner, city SVG, carousel dots
        ├── content.css         ← Split row, changes, settings, rules, getting started
        └── widgets.css         ← Missions, daily rewards, server status, footer
```

## Getting started

```bash
npm install
npm run dev        # Dev server with HMR at http://localhost:5173
```

## Building

### Standard build (hosted MOTD via URL)
```bash
npm run build
# → dist/index.html + dist/assets/
```
Point your `motd_url` to wherever you host the `dist/` folder.

### Single-file build (local file:// or embedded MOTD)
```bash
npm run build:single
# → dist-single/index.html  (all CSS and JS inlined)
```
Copy `dist-single/index.html` to your server's `garrysmod/` folder and use a `file://` URL, or embed it directly.

## Customising content

- **Server name / tagline** — top of `index.html`, `.srv-name .t1 / .t2`
- **Colours / fonts** — `src/styles/variables.css`
- **Rules** — `.rule-item` blocks in `index.html`
- **Changelog** — `.chg-item` blocks in `index.html`
- **XP skill names** — `.xpi-label` text nodes in `index.html`
- **Player data** — swap `.ring-num`, `.pname`, `.prank`, `.pstat-v` values; in a live server these would be populated by Lua calling `RunJavaScript`
