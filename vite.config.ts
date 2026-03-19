import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  resolve: {
    tsconfigPaths: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    experimental: {
      viteModuleRunner: false
    },
    cache: {
      dir: '/test/tmp/vitest'
    },
  },
  cacheDir: process.env.VITE_CACHE_DIR || '/tmp/vite'
});