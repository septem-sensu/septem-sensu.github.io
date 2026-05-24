# CLAUDE.md This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page portfolio website for Markus Götz, deployed on GitHub Pages. No build tools, frameworks, or package managers — pure HTML/CSS/JS.

## Architecture

Three-file structure: `index.html` (semantic HTML5), `style.css` (all styling), `script.js` (interactivity). All content is in German.

**Fonts** are self-hosted via `@font-face` in style.css (not Google CDN). Woff2 files live in `assets/fonts/` — Inter (400/500/700) and JetBrains Mono (400/500/700).

**Profile image** is at `assets/images/profile-image-round.png`, rendered circular via CSS.

## Design System

All colors, spacing, radii, and typography are controlled via CSS custom properties in `:root` in style.css. Key variables: `--accent` (violet), `--cyan`, `--bg`/`--bg-card`/`--bg-elevated` (dark surfaces). Change these to retheme the entire site.

## JavaScript Features

- **Typewriter effect**: cycles through focus keywords in the hero section. Word list is in the `words` array in script.js.
- **Smooth scroll**: all `a[href^="#"]` anchors scroll smoothly; CSS `scroll-padding-top: 80px` offsets for the fixed navbar.
- **Timeline scroll reveal**: `.timeline-item` elements get `.visible` class when they enter the viewport (threshold: 85% of viewport height).
- **Navbar**: highlights active section link on scroll; mobile hamburger toggle.

## Deploy

Push to `main` — GitHub Pages serves from the root. No build step required.
