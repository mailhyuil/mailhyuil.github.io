# webpack loader

> webpack은 js, json 파일만 읽을 수 있음
>
> > js or json 파일 내에 require()나 import 구문으로 삽입된 다른 파일들 css, typescript ...은 loader를 사용해야한다.
> >
> > > module > rules로 loader를 설정

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
