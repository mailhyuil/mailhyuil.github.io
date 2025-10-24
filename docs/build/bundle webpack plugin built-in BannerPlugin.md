# bundle webpack plugin built-in BannerPlugin

> 생성된 각 청크의 상단에 배너를 추가합니다.

```js
const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.BannerPlugin({
      banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]",
    }),
    new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false }),
  ],
};
```
