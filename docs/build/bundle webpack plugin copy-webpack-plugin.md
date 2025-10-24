# bundle webpack plugin copy-webpack-plugin

> 웹팩 번들링 과정 중에 특정 파일이나 폴더를 복사해준다.

## install

```sh
npm i -D copy-webpack-plugin
```

## usage

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 사용할 HTML 템플릿 파일 경로
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/styles", to: "./styles" },
        { from: "./src/js", to: "./js" },
      ],
    }),
  ],
};
```
