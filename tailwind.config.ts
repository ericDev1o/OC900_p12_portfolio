import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/flowbite-react/**/*.js',
    './node_modules/flowbite/**/*.js'
  ],
  plugins: [
    flowbitePlugin
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'system-ui', 'sans-serif']
      }
    }
  }
} satisfies Config;