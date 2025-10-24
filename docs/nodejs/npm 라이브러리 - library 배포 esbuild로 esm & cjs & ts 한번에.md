# npm 라이브러리 - library 배포 esbuild로 esm & cjs & ts 한번에

## install

```sh
npm i -D esbuild
```

## build.js

```js
// build.js
import esbuild from "esbuild";
// 공통으로 사용할 옵션들
// https://esbuild.github.io/api/#build 에서 다양한 옵션들을 확인할 수 있다.
const baseConfig = {
  entryPoints: ["src/index.ts"], // 컴파일할 파일
  outdir: "dist", // 컴파일된 파일이 저장될 경로
  bundle: true, // 번들링 여부
  sourcemap: true, // 소스맵 생성 여부
};
Promise.all([
  // 한 번은 cjs
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
  }),
  // 한 번은 esm
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),
]).catch(() => {
  console.log("Build failed");
  process.exit(1);
});
```

## package.json

```json
{
  "scripts": {
    "prepack": "yarn build",
    "build": "yarn clean && yarn build:tsc && yarn build:js",
    "build:tsc": "yarn tsc --emitDeclarationOnly",
    "build:js": "node build.js",
    "clean": "rm -rf dist"
  },
  {
  "exports": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.js",
    "require": "./dist/index.cjs"
  },
  "files": [
    "dist",
    "src"
  ],
}
}
```
