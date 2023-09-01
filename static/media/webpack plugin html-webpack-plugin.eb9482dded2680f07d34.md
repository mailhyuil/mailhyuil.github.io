# webpack plugin html-webpack-plugin

> 웹팩 번들링 과정 중에 index.html 파일을 생성하고 번들된 자원을 자동으로 삽입해준다.
>
> > template 옵션을 사용하면 기존에 있는 index.html을 사용, 설정안하면 index.html을 자동으로 생성한다.

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
      minify: {
        collapseWhitespace: true, // 빈칸 제거
        removeComments: true, // 주석 제거
        removeAttributeQuotes: true, // 따옴표 제거
      },
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
