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
} satisfies Config;