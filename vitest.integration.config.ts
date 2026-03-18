import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

import { commonVitestConfig } from './vitest.common.config';

export default defineConfig({
  test: {
    ...commonVitestConfig,
    pool: 'browser',
    browser: {
      enabled: true, 
      provider: playwright(),
      instances: [
        { browser: 'chromium' },
        { browser: 'firefox' }
      ]
    },
    include:[
      'test/integration/**/*.integration.test.tsx'
    ],
    exclude:[
      'test/unit/**/*.unit.test.ts',
      'test/accessibility/**/*.a11y.test.tsx'
    ],
    /* default */
    environment: 'node'
  },
  logLevel: 'warn'
});   