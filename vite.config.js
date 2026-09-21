import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This app IS the deploy. No subpath, no legacy static site alongside it.
export default defineConfig({
  root: 'app',
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
