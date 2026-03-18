import { defineConfig } from 'vitest/config';

/**
 * Vitest 4.x: known jsdom warning about localStorage path can be safely ignored.
 * It's not used in current a11y tests. 
 * */
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    //setupFiles: './vitest-jsdom-setup.ts',
    include:[
      'test/unit/**/*.unit.test.ts'
    ],
    exclude:[
        'test/accessibility/**/*.pa11y.test.ts',
        'test/integration/**/*.integration.browser.test.tsx'
    ]
  }
});