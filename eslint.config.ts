import type { Linter } from 'eslint';
import tseslint from '@typescript-eslint/eslint-plugin';
import esparser from '@typescript-eslint/parser';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

/**
 * ESLint flat config
 * 
 * Features:
 *  -> TypeScript support via @typescript-eslint
 *  -> React Hooks best practices enforcement
 *  -> Vite & React refresh support
 *  -> Prettier integration 
 *     -> last, 
 *     -> to override style rules
 *     -> to preserve 
 *         -> React Hooks
 *         -> TypeScript
 *         -> safety
 *     rules
 */
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],

    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },

    languageOptions: {
      parser: esparser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { tsx: true }
      },
    },

    rules: {
      ...tseslint.configs.recommended.rules,

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error', 
        { 
          varsIgnorePattern: '^[A-Z_]',
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],

      'quotes': ['error', 'single', {'avoidEscape': true}]
    }
  },
  prettier
 ] satisfies Linter.Config[]
);
