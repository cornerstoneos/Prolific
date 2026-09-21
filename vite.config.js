import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The legacy static site still owns the deploy root (index.html + its JPEGs at
// the repo root). So the SPA is rooted in app/ and served from the /engine/
// subpath, and `npm run build` copies the legacy files into dist/ afterwards.
export default defineConfig({
  root: 'app',
  base: '/engine/',
  plugins: [react()],
  build: {
    outDir: '../dist/engine',
    emptyOutDir: true,
  },
})
