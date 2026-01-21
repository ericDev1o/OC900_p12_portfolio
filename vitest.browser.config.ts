import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    globals: true,
    pool: 'browser',
    browser: {
      enabled: true, 
      provider: playwright(),
      instances: [
        { browser: 'chromium' },
        { browser: 'firefox' }
      ]
    },
    setupFiles: './vitest-browser-setup.ts',
    include:[
      'test/integration/**/*.browser.integration.test.tsx'
    ],
    exclude:[
      'test/accessibility/**/*.pa11y.test.ts',
      'test/accessibility/**/*.a11y.test.tsx',
      'test/accessibility/unit/**/*.a11y.test.tsx',
      'test/unit/**/*.unit.test.ts'
    ],
    /* implicit default */
    environment: 'node',
  },
  /* broken dependency of "import { page } from '@vitest/browser';"*/
  optimizeDeps: {
    exclude: ['lightningcss']
  },
  logLevel: 'info'
});   