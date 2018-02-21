module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'func-names': ['off'],
    'import/prefer-default-export': ['off'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_*' }],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    'react/display-name': ['off'],
    'react/prop-types': ['off'],
    'react/jsx-filename-extension': ['off'],
  },
  env: {
    es6: true,
    node: true,
  },
}
