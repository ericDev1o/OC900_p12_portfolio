import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import flowbiteReact from 'flowbite-react/plugin/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(), 
    tsconfigPaths(), 
    tailwindcss(), 
    flowbiteReact()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});