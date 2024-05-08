# mini-css-extract-plugin

## install

```sh
npm install -D mini-css-extract-plugin
```

## usage

```js
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. css를 파일로 추출
          "css-loader", // 2. css를 CommonJS로 변환
          "sass-loader", // 1. sass를 css로 변환
        ],
      },
    ],
  },
};
```

```

```
