import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This is its own Netlify site, built from this folder as the base
// directory -- a separate deploy from whatever serves the repo root.
// See the netlify.toml alongside this file.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
