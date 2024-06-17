# webpack plugin clean-webpack-plugin

> 빌드 시 이전 빌드 결과물을 제거해주는 플러그인

## install

```sh
npm install -D clean-webpack-plugin
```

## webpack.config.js

```js
const webpack = require("webpack");

module.exports = {
  plugins: [new CleanWebpackPlugin()];
};
```
