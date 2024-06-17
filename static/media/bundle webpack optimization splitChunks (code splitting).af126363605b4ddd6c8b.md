# webpack splitChunks code splitting

> entry-point를 나누는 방법과, dynamic import를 사용하는 방법이 있습니다.

## entry-point를 나누는 방법

> Entry point를 여러개로 나누어서 번들링한다.
>
> > dependOn 옵션을 사용하면 청크간 모듈을 공유할 수 있습니다.
> >
> > > HTML 페이지에서 여러 엔트리 포인트를 사용하는 경우 optimization.runtimeChunk: 'single'도 필요합니다.
> > >
> > > > optimization.splitChunks 설정 옵션을 적용하면 index.bundle.js와 another.bundle.js에서 중복 의존성이 제거된 것을 확인 할 수 있습니다.
> > > >
> > > > 플러그인은 lodash가 별도의 청크로 분리되었고 메인 번들에서도 제거된 것을 알 수 있습니다.

## usage

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
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all", // async, initial, all
          // 'all'인 경우 entry의 각 모듈들이 중복으로 동적 혹은 정적으로 import한 모듈은 모두 chunk 파일로 만들어 버리는 기능
        },
      },
    },
  },
};
```

## Dynamic Imports 사용하는 방법

> esModule의 import()를 사용 (권장)
>
> > commonjs라면 require.ensure()를 사용
> >
> > > /_ webpackPreload: true _/, /_ webpackPrefetch: true _/ 주석을 사용해 preload, prefetch를 구현 가능

## babel import() 사용

> 바벨 사용 시 import문을 사용하기 위해
>
> > es6 이하 문법을 es6 이상으로 변환해주는 바벨 플러그인이 필요합니다.

```sh
npm i -D @babel/plugin-syntax-dynamic-import
```
