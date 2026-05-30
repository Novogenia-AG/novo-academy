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
  },
})
