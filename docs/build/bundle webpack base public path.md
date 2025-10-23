# webpack public path

## webpack.config.js

```js
import webpack from "webpack";

// 환경 변수를 사용하고 존재하지 않는다면 루트를 사용하세요.
const ASSET_PATH = process.env.ASSET_PATH || "/";

export default {
  output: {
    publicPath: ASSET_PATH,
  },

  plugins: [
    // 코드에서 환경 변수를 안전하게 사용할 수 있습니다.
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
  ],
};
```
