# base source map source-map-support

> sourcemap을 node 환경에서 사용할 수 있도록 도와주는 라이브러리
>
> > This module provides source map support for stack traces in node via the V8 stack trace API.

## install

```sh
npm i -D source-map-support
```

## usage

```js
// cli usage
node -r source-map-support/register compiled.js
// programmatic usage
require('source-map-support').install();
```
