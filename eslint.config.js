import pluginJs from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: globals.browser } },
  {
    env: {
      node: 'true',
    },
  },
  pluginJs.configs.recommended,
];
