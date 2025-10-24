# bundle webpack base 세팅 settings

> 웹팩은 기본으로 브라우저 환경에서 동작하도록 번들링한다.
>
> > 서버 환경에서 동작하도록 번들링하려면 추가 설정이 필요하다.

## install

```sh
npm i -D webpack
npm i -D webpack-cli
npm i -D webpack-dev-server

# bundle
webpack build --config webpack.config.js
```

## webpack.config.js

```js
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
  devtool: "source-map",
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [],
};
```
