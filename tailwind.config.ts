import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'system-ui', 'sans-serif']
      }
    }
  }
} satisfies Config;