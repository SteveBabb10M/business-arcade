# Business Arcade

A collection of small interactive games for BTEC Business students,
built with Phaser 3.55.2 and deployed via GitHub Pages.

## Structure

- `index.html` – main menu linking to each game.
- `css/style.css` – shared styling for the menu and (optionally) games.
- `js/phaser.min.js` – **you must download this file yourself** (see `js/README_PHASER.txt`).
- `js/common.js` – shared helper functions.
- `games/` – each subfolder contains a separate game with its own `index.html`, `js/main.js`, and `assets/`.

## Games Included

1. Business Ideas (`games/business-ideas/`)
2. Business Types (`games/business-types/`)
3. Business Escape Room (`games/escape-room/`)
4. Functional Areas Map (`games/functional-areas-map/`)

## Setup

1. Download Phaser 3.55.2 and save it as `js/phaser.min.js` (see `js/README_PHASER.txt`).
2. Add your actual game logic into each `games/*/js/main.js`.
3. Put your images/audio into each game’s `assets` folder.
4. Push this folder structure to a public GitHub repo.
5. Enable GitHub Pages (Deploy from branch, root folder).
6. Visit: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
