# bundle webpack plugin optimize-css-assets-webpack-plugin

> css를 minify 해주는 플러그인

## install

```sh
npm i -D optimize-css-assets-webpack-plugin
```

## usage

```js
const webpack = require("webpack");

module.exports = {
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin()],
  },
};
```
