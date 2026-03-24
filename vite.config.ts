import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

import { fileURLToPath } from 'node:url';

const resolvePath = (p: string) => 
  fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': resolvePath('./src'),
      '@test': resolvePath('./test')
    }
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