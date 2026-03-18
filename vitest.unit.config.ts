import { defineConfig } from 'vitest/config';

import { commonVitestConfig } from './vitest.common.config';

export default defineConfig({
  test: {
    ...commonVitestConfig,
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