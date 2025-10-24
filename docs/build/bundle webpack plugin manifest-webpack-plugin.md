# bundle webpack plugin manifest-webpack-plugin

> 청크 해시 값을 index.html이 알지 못하기 때문에 manifest 파일을 생성하여 index.html이 알 수 있도록 한다.

```js
const ManifestPlugin = require("webpack-manifest-plugin");
module.exports = {
  plugins: [
    new ManifestPlugin({
      fileName: "assets.json",
      basePath: "/",
    }),
  ],
};
```
