const rules = {
  'no-param-reassign': [
    'error',
    {
      props: false,
    },
  ],
  'no-mixed-operators': [
    'error',
    {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    },
  ],
  'prefer-destructuring': ['off'],
  'prefer-object-spread': ['off'],
  'prefer-ob': ['off'],
  'react/react-in-jsx-scope': ['off'],
  'react/no-string-refs': ['off'],
  'react/prop-types': ['off'],
  'no-restricted-globals': ['error', 'window', 'document'],
  'import/prefer-default-export': 'off',
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    XMLHttpRequest: true,
    Blob: true,
    Document: true,
    FormData: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    ...rules,
  },
  overrides: [
    {
      files: ['**/*.vue', '**/*.js'],
      plugins: ['vue'],
      extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'plugin:prettier/recommended'],
      rules: {
        ...rules,
        'vue/component-definition-name-casing': ['error', 'kebab-case'],
        'vue/require-default-prop': ['off'],
        'vue/custom-event-name-casing': ['off'],
        'prefer-destructuring': ['off'],
        'no-restricted-globals': ['off'],
      },
    },
    {
      files: ['**/*.vue', 'src/**/*.js'],
      rules: {
        ...rules,
        'import/no-unresolved': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'import/extensions': ['off'],
        'no-restricted-globals': ['off'],
      },
    },
  ],
};
