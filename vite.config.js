import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://server-production-646c.up.railway.app', // Replace with your backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

