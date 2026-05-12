/**
 * vite.singlefile.config.js
 *
 * Use this when DarkRP loads the MOTD as a local file (motd_url is a
 * file:// path or a raw HTML string).  It inlines all CSS and JS into a
 * single index.html so nothing is missing at runtime.
 *
 * Run:  npm run build:single
 */
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  base: './',
  plugins: [viteSingleFile()],
  build: {
    outDir: 'dist-single',
    assetsInlineLimit: 100 * 1024 * 1024, // inline everything
    cssCodeSplit: false,
  },
})
