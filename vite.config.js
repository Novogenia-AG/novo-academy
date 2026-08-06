import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When deployed to GitHub Pages under a repo subpath (e.g. /novo-academy/),
// set VITE_BASE_PATH at build time so all asset URLs resolve correctly.
// For local dev (npm run dev) we always serve from "/".
const basePath = process.env.VITE_BASE_PATH || '/'

/* SICHERHEITSGURT: Ohne Supabase-Keys fällt die App still auf die
   localStorage-Mock-Auth zurück — getMyProfile() liefert dort is_admin: true
   für JEDEN. Würde ein Deploy-Secret umbenannt, rotiert oder gelöscht, liefe
   der Build grün durch und veröffentlichte eine Seite ohne echte Anmeldung,
   die jedem Besucher das Admin-Panel zeigt. Im CI deshalb hart abbrechen.
   Lokale Builds ohne .env.local bleiben erlaubt (Mock-Modus ist zum
   Entwickeln gedacht, siehe CLAUDE.md Abschnitt 3). */
if (process.env.CI && !process.env.VITE_SUPABASE_URL) {
  throw new Error(
    'VITE_SUPABASE_URL fehlt im CI-Build. Ohne Supabase-Keys würde die App mit ' +
    'Mock-Auth deployen und jedem Besucher Adminrechte geben. Repository-Secrets prüfen.'
  )
}

export default defineConfig({
  base: basePath,
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        /* Split rarely-changing vendor code out of the app chunk so a content
           update (new course/language) doesn't invalidate the whole cache.
           PDF libs are already lazy-loaded, so they land in their own chunks
           automatically and are excluded here on purpose. */
        manualChunks: {
          react: ['react', 'react-dom'],
          supabase: ['@supabase/supabase-js'],
        },
      },
    },
    // Main chunk is content-heavy (course data for all languages); the warning
    // is informational — raise the threshold so real regressions stand out.
    chunkSizeWarningLimit: 900,
  },
  server: {
    port: 5181,
    strictPort: true,
    // Restrict dev server to localhost only — mitigates esbuild GHSA-67mh-4wv8-2f99
    // (cross-origin requests to the dev server via DNS rebinding).
    host: 'localhost',
    // Disable permissive CORS on dev server
    cors: false,
    headers: {
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
      'X-XSS-Protection': '1; mode=block',
    },
  },
})
