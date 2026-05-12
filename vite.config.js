import { defineConfig } from 'vite'

export default defineConfig({
  // Base path — set to './' so relative asset paths work
  // when served from a subdirectory or as a file:// URL.
  base: './',

  build: {
    outDir: 'dist',
    assetsInlineLimit: 1024 * 1024, // inline assets up to 1 MB (covers the webp thumbnails)
    rollupOptions: {
      output: {
        // Keep a flat dist/ layout — easier to host on GitHub Pages / web server
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
})
