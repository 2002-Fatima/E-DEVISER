# E Deviser

Astro website for E Deviser.

## Requirements

- Node.js 20.3+ (Astro 5 supported runtime)
- npm

## Local development

```bash
npm ci
npm run dev
```

The development server runs on port 4321 by default.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

- `src/pages/` — file-based routes
- `src/layouts/` — shared page layouts
- `src/components/` — page and interface components
- `src/content/` — shared site content and navigation
- `src/styles/` — design tokens and global styles
- `public/` — static assets

The What We Build page is composed from independent section components in `src/components/what-we-build/sections/`, with page-specific styling in `what-we-build.css`.
