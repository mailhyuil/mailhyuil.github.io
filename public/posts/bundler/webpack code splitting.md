# webpack code splitting

## webpack.config.js

> Entry point를 여러개로 나누어서 번들링한다.
>
> > dependOn 옵션을 사용하면 청크간 모듈을 공유할 수 있습니다.
> >
> > > HTML 페이지에서 여러 엔트리 포인트를 사용하는 경우 optimization.runtimeChunk: 'single'도 필요합니다.
> > >
> > > > optimization.splitChunks 설정 옵션을 적용하면 index.bundle.js와 another.bundle.js에서 중복 의존성이 제거된 것을 확인 할 수 있습니다. 플러그인은 lodash가 별도의 청크로 분리되었고 메인 번들에서도 제거된 것을 알 수 있습니다.

```js
const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    shared: "lodash",
    index: {
      import: "./src/index.js",
      dependOn: "shared",
    },
    another: {
      import: "./src/another-module.js",
      dependOn: "shared",
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
```

## Dynamic Imports

> esModule의 import()를 사용 (권장)
>
> > commonjs라면 require.ensure()를 사용

```js

```
