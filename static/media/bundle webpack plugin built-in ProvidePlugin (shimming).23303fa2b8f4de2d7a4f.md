# bundle webpack base shimming

> 코드에 존재하지만 로드되지 않은 모듈을 대신 로드해주는 기능

## webpack.config.js

```js
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "lodash",
    }),
  ],
};
```
