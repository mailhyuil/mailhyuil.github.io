# bundle webpack plugin compression brotli-webpack-plugin

> assets를 Brotli 알고리즘을 사용하여 압축해주는 플러그인
>
> > zlib, iltorb, brotli.js 라이브러리를 사용하여 파일을 압축한다.

## install

```sh
npm i -D brotli-webpack-plugin
```

## webpack.config.js

```js
const BrotliPlugin = require("brotli-webpack-plugin");
module.exports = {
  plugins: [
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
```
