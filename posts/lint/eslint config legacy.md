# eslint config legacy

> .eslintrc 이름의 파일을 사용
>
> > extends를 사용하여 확장하는 방식
> >
> > > plugin을 plugins: {}에 string으로 명시
> > >
> > > > parser에 string으로 명시

## .eslintrc.js

```js
/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: { project: ["./tsconfig.json"] },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        allowString: false,
        allowNumber: false,
      },
    ],
  },
  ignorePatterns: ["src/**/*.test.ts", "src/frontend/generated/*"],
};
```
