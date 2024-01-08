# browserify

> nodejs 모듈을 브라우저에서 사용할 수 있도록 해주는 도구
>
> > require()와 함께 nodejs의 모듈을 사용할 경우 browserify가 이를 브라우저 환경에서 사용할 수 있도록 변환해준다.
> >
> > > When you require() any of these modules, you will get a browser-specific shim

## install

```
npm i -g browserify
```

## 코드

```js
/// 이런 코드가 포함되어 있을 경우
/// nodejs에서는 동작하지만 브라우저에서는 동작하지 않는다.
/// browserify를 사용하면 브라우저에서도 동작한다.
const os = require("os");
const zlib = require("zlib");
const http = require("http");
const path = require("path");
```

## 사용

```sh
browserify main.js -o bundle.js
```
