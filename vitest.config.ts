import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include:[
      'test/accessibility/**/*.pa11y.test.ts'   
    ],
    exclude:[
        'test/accessibility/**/*.a11y.test.tsx',
        'test/integration/**/*.integration.browser.test.tsx',
        'test/unit/**/*.unit.test.ts'
    ],
    /* default */
    environment: 'node'
    }
});