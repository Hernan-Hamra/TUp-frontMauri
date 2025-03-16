import { defineConfig } from 'eslint-define-config';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error'],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
]);
