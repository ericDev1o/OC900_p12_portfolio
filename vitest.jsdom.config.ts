import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include:[
      'test/unit/**/*.unit.test.ts'
    ],
    exclude:[
        'test/integration/**/*.integration.browser.test.tsx',
        'test/accessibility/**/*.a11y.test.tsx'
    ]
  }
});