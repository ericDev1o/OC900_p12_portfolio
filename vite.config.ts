import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  plugins: [
    react(), 
    tsconfigPaths(), 
    tailwindcss(), 
    flowbiteReact()
  ],
});