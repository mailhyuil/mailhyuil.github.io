# bundle webpack optimization splitChunks - code splitting

> splitChunks 방식과 entry에 dynamic import 방식을 사용하여 코드를 분리하는 방법

## dynamic import 방식

> js에서 dynamic import를 사용

```js
const path = require("path");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
```

## shared entry 방식

```js
module.exports = {
  entry: {
    shared: "lodash", // node_modules/lodash를 찾아서 shared.bundle.js로 분할
    index: {
      import: "./src/index.js",
      dependOn: "shared", // shared.bundle.js를 먼저 로드
    },
    another: {
      import: "./src/another-module.js",
      dependOn: "shared", // shared.bundle.js를 먼저 로드
    },
  },
};
```
