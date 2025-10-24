# bundle webpack loader css style-loader

> css-loader로 번들링된 js를 해당 css파일을 참조하고 있는 html에 style태그로 삽입해준다.

## install

```sh
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
