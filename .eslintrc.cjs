module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  globals: {
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'indent': ['error', 2],
    'no-trailing-spaces': 'error',
    'curly': 'error',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { mode: 'strict' }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'react/prop-types': 'off',
    'linebreak-style': ['error', 'windows'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],

    'arrow-body-style': 'off',

    'prettier/prettier': ['error', { 'singleQuote': true, 'endOfLine': 'crlf' }]
  }
};
