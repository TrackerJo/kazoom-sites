import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   base: '/',
  root,
  // index.html lives in src/ (root), but static assets stay in /public at the
  // project root — point Vite there so favicon, og-image, robots.txt and
  // sitemap.xml are copied into the build.
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
      },
    },
  },
})
