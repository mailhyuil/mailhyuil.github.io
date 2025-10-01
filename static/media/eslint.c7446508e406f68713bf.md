# js eslint

> eslint-plugin은 규칙을 정의한 패키지이고, eslint-config는 plugin을 묶어놓은 패키지이다.

## install

```sh
npm i -D eslint
npm i -D eslint-config-prettier # prettier와 충돌하는 lint rules를 꺼주는 패키지

npx eslint --init
```

## .eslintrc.json / eslint.config.js

> .eslintrc.json 파일은 deprecated 되었지만 여전히 많이 사용된다
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
