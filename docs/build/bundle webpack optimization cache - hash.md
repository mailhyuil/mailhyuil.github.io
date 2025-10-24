# bundle webpack optimization cache - hash

> 개발시에 사용하는 기능
>
> 웹팩은 기존 번들된 파일의 이름과 현재 번들하는 아웃풋의 이름이 같다면 번들링하지 않는다. 따라서 해시값을 이용하여 파일명을 변경하면서 캐싱을 할 수 있다.
>
> > contenthash를 이용하여 캐싱 (e.g. main.[contentHash].js)
> >
> > > 파일에 변경사항이 없으면 contenthash가 같아짐
> > >
> > > > 파일에 변경사항이 있으면 contenthash가 달라짐
> > > >
> > > > > 변경사항이 없는 파일을 캐싱하여 번들링 시간을 단축시킬 수 있음

## webpack.config.js

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Caching",
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
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
};
```
