# webpack CompressionWebpackPlugin

> gzip으로 압축

## install

```sh
npm install -D compression-webpack-plugin
```

## usage

```js
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
```
