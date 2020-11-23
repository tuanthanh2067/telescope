module.exports = {
  root: true,
  settings: {
    react: {
      version: '16.13',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', 'promise', 'react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'import/extensions': 0,

    'prettier/prettier': ['error'],
    /**
     * Disallow the use of console
     * https://eslint.org/docs/rules/no-console
     */
    'no-console': 'off',

    /**
     * Disallow Reassignment of Function Parameters
     * https://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': ['error', { props: false }],

    /** Disallows unnecessary return await
     * https://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': ['error'],
    /**
     * Disallow using an async function as a Promise executor
     * https://eslint.org/docs/rules/no-async-promise-executor
     */
    'no-async-promise-executor': ['error'],
    /**
     * Disallow await inside of loops
     * https://eslint.org/docs/rules/no-await-in-loop
     */
    'no-await-in-loop': ['error'],

    /**
     * Disallow assignments that can lead to race conditions due to
     * usage of await or yield
     * https://eslint.org/docs/rules/require-atomic-updates
     */
    'require-atomic-updates': ['error'],

    /**
     * Disallow async functions which have no await expression
     * https://eslint.org/docs/rules/require-await
     */
    'require-await': ['error'],

    /**
     * Require or disallow named function expressions
     * https://eslint.org/docs/rules/func-names
     */
    'func-names': 'off',
    /**
     * Disallow enforcement of consistent linebreak style
     * https://eslint.org/docs/rules/func-names
     */
    'linebreak-style': 'off',
    /**
     * The following are eslint rules from the promise-plugin
     * https://github.com/xjamundx/eslint-plugin-promise
     */
    /**
     * Prefer wait to then() for reading Promise values
     */
    'promise/prefer-await-to-then': 'warn',

    /**
     * Prefer async/await to the callback pattern
     */
    'promise/prefer-await-to-callbacks': 'warn',

    'react/jsx-uses-react': 'error',

    'react/jsx-uses-vars': 'error',

    /**
     * Allow ES6 classes to override methods without using this
     * https://eslint.org/docs/rules/class-methods-use-this
     */
    'class-methods-use-this': 'off',

    'import/no-extraneous-dependencies': 'off',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
