import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import {defineConfig} from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: {js},
    extends: ['js/recommended'],
    languageOptions: {globals: globals.node},
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          tabWidth: 2,
          printWidth: 160,
          bracketSpacing: false,
        },
      ],
    },
  },
  tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
]);
