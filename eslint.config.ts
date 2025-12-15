import type { Linter } from 'eslint'
import tseslint from '@typescript-eslint/eslint-plugin'
import esparser from '@typescript-eslint/parser'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
//import prettierPlugin from 'eslint-plugin-prettier'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts, tsx}'],
    plugins: {
      '@typescript-eslint': tseslint/*,
      'prettier': prettierPlugin*/
    },
    extends: [
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite/*,
      'prettier'*/
    ],
    languageOptions: {
      parser: esparser,
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true, tsx: true },
        sourceType: 'module'
      },
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'quotes': ['error', 'single', {'avoidEscape': true}]/*,
      'prettier/prettier': 'error'*/
    },
  } satisfies Linter.Config,
])
