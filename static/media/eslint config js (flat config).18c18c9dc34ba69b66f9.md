# eslint config js (flat config)

> js를 사용한 config

## eslint.config.js

```js
export default [
  {
    name: "eslint-config-js",
    files: ["src/**/*.js"],
    ignores: ["**/*.config.js", "!**/eslint.config.js"],
    languageOptions: {
      parser: "babel-eslint",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    linterOptions: {
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      rules: {
        semi: "error",
      },
    },
    processor: "eslint",
    plugins: ["eslint-plugin-import"],
    rules: {
      semi: "error",
    },
    settings: {
      sharedData: "Hello",
    },
  },
];
```
