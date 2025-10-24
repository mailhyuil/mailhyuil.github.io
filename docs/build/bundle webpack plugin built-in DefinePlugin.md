# bundle webpack plugin built-in DefinePlugin

> 컴파일 타임에 구성할 수 있는 전역 상수를 만들 수 있습니다.

```js
const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};
```
