const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/prop-types': RULES.OFF,
    'import/extensions': RULES.OFF,
    'import/no-unresolved': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'react/require-default-props': RULES.OFF,
    'import/prefer-default-export': RULES.OFF,
    'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }],
    'react/function-component-definition': [2, { 'namedComponents': 'function-declaration' }],
    'quotes': [2, 'single', { 'avoidEscape': true }]
  },
};
