import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When deployed to GitHub Pages under a repo subpath (e.g. /novo-academy/),
// set VITE_BASE_PATH at build time so all asset URLs resolve correctly.
// For local dev (npm run dev) we always serve from "/".
const basePath = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base: basePath,
  plugins: [react()],
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
