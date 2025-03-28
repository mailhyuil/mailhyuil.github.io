# browserify

> nodejs 모듈을 브라우저에서 사용할 수 있도록 해주는 도구
>
> > require()와 함께 nodejs의 모듈을 사용할 경우 browserify가 이를 브라우저 환경에서 사용할 수 있도록 변환해준다.
> >
> > > When you require() any of these modules, you will get a browser-specific shim

## install

```sh
npm i -g browserify
```

## 코드

```js
/// require()의 경우 nodejs에서는 동작하지만 브라우저에서는 동작하지 않는다.
/// browserify를 사용하면 require() 함수의 동작을 흉내내어 브라우저에서도 동작하도록 변환해준다.
const someLib = require("some-lib");
```

## usage

```sh
browserify main.js -o bundle.js
```
