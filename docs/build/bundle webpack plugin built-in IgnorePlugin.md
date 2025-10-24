# bundle webpack plugin built-in IgnorePlugin

> 특정 모듈을 번들링에서 제외할 수 있습니다.

```js
const webpack = require("webpack");

module.exports = {
  plugins: [new webpack.IgnorePlugin(/\.(css|less)$/)],
};
```
