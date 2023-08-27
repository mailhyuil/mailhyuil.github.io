# webpack loader sass-loader

## install

```sh
npm i -D sass-loader
```

## webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: [
          "style-loader",
          // css-loader 소스맵 옵션 활성화
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          // sass-loader 소스맵 옵션 활성화
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
```
