import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': '/src/',
      '@share': '/src/share',
      '@entities': '/src/entities',
      '@widgets': '/src/widgets'
    }
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})
