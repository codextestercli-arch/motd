import { defineConfig } from 'vite'

export default defineConfig({
  // Relative base works well for GitHub Pages project sites
  // when deploying the built dist/ folder through GitHub Actions.
  base: './',

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 1024 * 1024,

    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
})