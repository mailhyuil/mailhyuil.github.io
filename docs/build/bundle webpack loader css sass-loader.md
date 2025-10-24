# bundle webpack loader css sass-loader

## install

```sh
npm i -D sass
npm i -D sass-loader
npm i -D css-loader
npm i -D style-loader
```

## webpack.config.js

```js
module.exports = {
  module: {
    output: {
      filename: "main.js",
    },
    rules: [
      {
        test: /\.s[ac]ss/i,
        use: [
          "style-loader", // 3. html에 style 태그로 삽입
          "css-loader", // 2. css를 commonjs로 변환
          "sass-loader", // 1. scss를 css로 변환
        ],
      },
    ],
  },
};
```
