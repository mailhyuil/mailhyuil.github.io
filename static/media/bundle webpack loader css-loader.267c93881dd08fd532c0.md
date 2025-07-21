# webpack css-loader

> webpack은 js, json 파일만 이해한다. 다른 assets는 이해할 수 없다
>
> > css-loader는 css파일을 js파일로 전처리하여 webpack이 이해하고 번들할 수 있게 한다.
> >
> > > css-loader만으로는 사용할 수 없다 style-loader 또는 mini-css-extract-plugin과 함께 사용해야한다.

## install

```sh
npm i -D css-loader
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
        use: ["style-loader", "css-loader"], // style-loader가 최종적으로 css를 html에 삽입한다.
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
