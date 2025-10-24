# bundle webpack loader js ts-loader

> tsc를 사용하여 ts파일을 js파일로 컴파일하고 webpack이 js파일을 번들링한다.

## install

```sh
npm i -D ts-loader
```

## usage

```js
module.exports = {
  output: {
    filename: "main.js",
  },
  module: {
    rules: [{ test: /\.ts$/, exclude: /node_modules/, use: "ts-loader" }],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
```
