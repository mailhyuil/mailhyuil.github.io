# js eslint

## install

```sh
npm i -D eslint
npm i -D eslint-config-unicorn
npx eslint --init
```

## .eslintrc.json / eslint.config.js

> .eslintrc 파일은 deprecated 되었지만 여전히 많이 사용된다
>
> > 현재는 flat config (eslint.config.js)가 experimental로 사용 중
> >
> > > flat config 사용시 eslint extension 설정으로 flat config로 바꿔줘야 에디터에서 에러를 보여준다.

```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: ["eslint:recommended"],
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
