import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include:[
      'test/accessibility/**/*.pa11y.test.ts'   
    ],
    exclude:[
        'test/accessibility/**/*.a11y.test.tsx',
        'test/integration/**/*.integration.test.ts',
        'test/accessibility/unit/**/*.a11y.test.tsx'
    ],
    /* implicit default */
    environment: 'node'
    }
});