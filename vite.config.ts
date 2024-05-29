import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'assets': path.resolve(__dirname, 'src/assets'),
    },
  },
})
