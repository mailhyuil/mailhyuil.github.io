# webpack plugin html-webpack-plugin

> 웹팩 번들링 과정 중에 index.html 파일을 생성하고 번들된 자원을 자동으로 삽입해준다.

## install

```sh
npm i -D html-webpack-plugin
```

## 사용

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // 사용할 HTML 템플릿 파일 경로
    }),
  ],
};
```

## 번들링 결과

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>webpack App</title>
  </head>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>
```
