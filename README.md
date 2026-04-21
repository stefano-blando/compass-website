# COMPASS Workshop Website

This repository contains the official website for the **COMPASS** workshop: *COmplexity, Markets, Policy, and AI in Social Systems*.

The site is built with **Astro 5**, using **Vue** for interactive components and **TailwindCSS** for styling. It features a modern, interdisciplinary aesthetic designed to showcase keynotes, panels, and research at the intersection of complexity science and AI.

## 🚀 Project Overview

- **Framework:** [Astro](https://astro.build/)
- **Styling:** Vanilla CSS + TailwindCSS (Vite plugin)
- **Interactive Components:** Vue.js
- **Animation:** Motion (formerly Framer Motion for web) & CSS transitions
- **Localization:** Built-in i18n support (English/Italian) via dynamic routes (`src/pages/[lang]`).

## 📁 Structure

```text
├── public/               # Static assets (images, logos, favicon)
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── home/         # Home page specific sections
│   │   ├── programme/    # Programme and talk detail components
│   │   └── site/         # Shared site layout components (Header, Footer, etc.)
│   ├── data/             # Content definitions (speakers, talks, sessions)
│   ├── layouts/          # Base HTML layouts
│   ├── lib/              # Site logic and helper functions
│   ├── pages/            # Page routes (includes localized [lang] routes)
│   └── styles/           # Global styles and CSS variables
├── astro.config.mjs      # Astro configuration
└── tests/                # Vitest suite for data and route validation
```

## 🛠 Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local development server at `localhost:4321` |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run test` | Runs the Vitest test suite |
| `npm run check` | Runs Astro's diagnostic tool |

## 🌐 Deployment

The site is configured for **GitHub Pages**.

- **CI/CD:** Automatic deployment via GitHub Actions (see `.github/workflows/deploy.yml`).
- **Configuration:** `astro.config.mjs` uses `SITE_URL` and `BASE_PATH` environment variables for correct asset resolution.
- **Production URL:** [https://stefano-blando.github.io/compass-website/](https://stefano-blando.github.io/compass-website/)

## 📄 License

This project is private for the COMPASS organizing committee.
