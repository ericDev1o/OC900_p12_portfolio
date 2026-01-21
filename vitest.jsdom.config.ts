import { defineConfig } from 'vitest/config';

// Known Vitest 4.x warning:
// jsdom localStorage worker flag is passed without a path
// safely ignore Vitest 4.0.17 warning at yarn test:jsdom run:
// (node:44589) Warning: `--localstorage-file` was provided without a valid path
// (Use `node --trace-warnings ...` to show where the warning was created)
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest-jsdom-setup.ts',
    include:[
      'test/unit/**/*.unit.test.ts',
      'test/accessibility/unit/**/*.a11y.test.tsx',
      'test/accessibility/**/*.a11y.test.tsx'
    ],
    exclude:[
        'test/accessibility/**/*.pa11y.test.ts',
        'test/integration/**/*.browser.integration.test.ts'
    ]
  }
});