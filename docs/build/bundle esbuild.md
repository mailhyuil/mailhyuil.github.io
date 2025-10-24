# bundle esbuild

> 내부적으로 Go로 작성되었고 JS 기반의 번들러보다 10배에서 100배까지 빠른 엄청난 퍼포먼스
>
> > compiler의 역할도 한다.

## install

```sh
npm i -D esbuild

esbuild app.js --bundle --outfile=out.js # 또는 js 파일로 실행
```

## esbuild.mjs

```js
import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["app.jsx"],
  bundle: true,
  outfile: "out.js",
});
```
