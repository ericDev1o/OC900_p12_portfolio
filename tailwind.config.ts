import type { Config } from 'tailwindcss';
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    await import("./node_modules/flowbite/plugin.js").then(m => m.default)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', 'system-ui', 'sans-serif']
      }
    }
  }
} satisfies Config;