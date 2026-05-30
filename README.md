# NOVO ACADEMY

The official Novogenia training platform — 22 online courses in DE + EN, with per-user progress tracking and printable certificates.

## Stack

- React 18 + Vite 5
- Supabase (auth + per-user progress storage)
- pdf-lib (client-side certificate PDF generation)
- Deployed via GitHub Pages

## Run locally

```bash
npm install
cp .env.example .env.local   # paste your Supabase URL + anon key
npm run dev
```

Opens on http://localhost:5181/

Without env vars, the app falls back to a local-mock auth + storage so
the UI is fully usable for development.

## Build

```bash
npm run build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml` which builds with
the repo's `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` secrets and
publishes to GitHub Pages.

## Project structure

```
src/
  App.jsx          — all pages + routing
  data.js          — German course content + i18n strings
  data.en.js       — English course content
  auth.js          — Supabase auth + per-user progress (with local-mock fallback)
  generateCert.js  — certificate PDF generator
  styles.css       — design system
public/
  course-materials/ — PDFs / PPTX referenced by courses
  thumbnails/       — course preview images
  fonts/            — Montserrat (used by certificate PDF)
```
