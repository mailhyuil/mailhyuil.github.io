# base source map source-map-support

> sourcemap을 node 환경에서 사용할 수 있도록 도와주는 라이브러리
>
> > This module provides source map support for stack traces in node via the V8 stack trace API.
> >
> > > source-map-support 라이브러리를 사용해야 Node.js 런타임에서 소스 맵을 처리하여 stack trace를 원래 소스 코드로 매핑해줍니다.

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
