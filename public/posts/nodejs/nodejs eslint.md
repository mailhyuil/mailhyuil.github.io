# eslint

## install

```
npm i eslint
```

## config

> npx eslint --init
>
> > .eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-unused-vars": ["off"],
  },
};
```

## eslint-config-prettier && eslint-plugin-prettier

> eslint 와 prettier가 충돌하는 규칙을 꺼주는 패키지
