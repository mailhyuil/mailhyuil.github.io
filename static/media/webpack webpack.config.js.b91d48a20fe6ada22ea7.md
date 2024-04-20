# webpack.config.js

```js
const path = require("path");

/** 이 주석을 넣으면 자동완성 기능 가능
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
```
