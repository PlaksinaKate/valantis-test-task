import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  base: '/valantis-test-task/',
  server: {
    proxy: {
      // Using the proxy instance
      '/api': {
        target: 'http://api.valantis.store:40000/',
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: path => path.replace('/api', ''),
      },
    },
    cors: true
  },
})