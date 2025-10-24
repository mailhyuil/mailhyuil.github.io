# bundle webpack optimization splitChunks cacheGroup

## usage

```js
const path = require("path");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all", // async, initial, all
          // 'all'인 경우 entry의 각 모듈들이 중복으로 동적 혹은 정적으로 import한 모듈은 모두 chunk 파일로 만들어 버리는 기능
        },
      },
    },
  },
};
```
