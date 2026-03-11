import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import astroPlugin from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';

export default defineConfig([
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/content.d.ts', '*.min.js', 'coverage/**'],
  },
  // Глобальные настройки для всех файлов
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        // Глобальные переменные Astro
        Fragment: 'readonly',
        Astro: 'readonly',
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      ...js.configs.recommended.rules,
      // Отключаем правила форматирования для Prettier
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'comma-dangle': 'off',
      'max-len': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      // Отключаем правила форматирования для Prettier
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'comma-dangle': 'off',
      'max-len': 'off',
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        // Позволяет парсить фронтматтер (---)
        parser: tsParser,
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
    },
    plugins: {
      astro: astroPlugin,
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,

      // === КАЧЕСТВО КОДА ===
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-var': 'error',

      // === СТИЛЬ === (отключаем, так как за это отвечает Prettier)
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'comma-dangle': 'off',
    },
  },
]);
