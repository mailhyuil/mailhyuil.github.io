# eslint config flat

> eslint.config 파일 이름을 사용
>
> > extends 없이 모듈을 직접 import하여 배열 기반으로 구성
> >
> > > plugin도 string으로 명시하지 않고 직접 import하여 사용
> > >
> > > > parser도 languageOptions.parser에 모듈 직접 import

## eslint.config.js

```js
/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
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
