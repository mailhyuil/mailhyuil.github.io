# webpack loader raw-loader

> txt같은 파일을 문자열로 변환한다.

## install

```sh
npm i -D raw-loader
```

## 사용

```js
module.exports = {
  output: {
    filename: "my-first-webpack.bundle.js",
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
};
```
