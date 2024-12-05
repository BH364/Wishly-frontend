import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',  // make sure postcss is configured properly
  },
  server: {
    port: 5173,  // customize the dev server port if necessary
  },
});
