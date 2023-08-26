# webpack Loader

> webpack은 js, json 파일만 읽을 수 있다
>
> > js, json 파일 내에 require()나 import 구문으로 삽입된 다른 assets들 (css, typescript ...)은 loader를 사용해서 웹팩이 읽을 수 있게 전처리를 해야한다.
> >
> > > loader는 파일을 모듈 번들링 프로세스에 통합하여 번들에 포함시킵니다.
> > >
> > > > module > rules로 loader를 설정

## webpack.config.js

```js
const path = require("path");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    // css 확장자 파일은 전부 css-loader를 사용하겠다.
    rules: [{ test: /\.css$/, use: "css-loader" }],
  },
};
```

## use 배열

> 뒤에서부터 순차적으로 loader가 사용됨

```js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
  ];
}
```
