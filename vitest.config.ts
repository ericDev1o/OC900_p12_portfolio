import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: {
    loader: 'tsx',
    include: /\.tsx?$/
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx'
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest-setup.ts',   
  }
});   