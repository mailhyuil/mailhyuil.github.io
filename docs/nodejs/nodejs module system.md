# nodejs module system

## ESModule

> es6에서 추가된 모듈 시스템
>
> > 현재 표준

## CommonJS

> node.js에서 사용하는 모듈 시스템
>
> > module.exports, require 함수 사용

## AMD

> CommonJS 그룹에서 의견이 맞지 않아 나온 사람들이 만든 그룹으로 비동기 모듈에 대한 표준안을 다루는 그룹
>
> > require, define 함수 사용
> >
> > > requireJs 모듈 로더

```js
require.config({
  baseUrl: "/",
  paths: {
    a: "a",
    b: "b",
  },
});

require(["a"], (a) => {
  a.printA();
});

define(() => {
  return {
    printA: () => console.log("a"),
  };
});
```

## UMD

> commonjs와 amd를 통합한 모듈 시스템
