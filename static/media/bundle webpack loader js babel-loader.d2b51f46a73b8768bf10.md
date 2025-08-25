# webpack loader babel-loader

## install

```sh
npm i -D babel-loader
npm i -D @babel/core
npm i -D @babel/preset-env

npm i @babel/polyfill
```

## .babelrc

```json
{
  "presets": ["@babel/preset-env"]
}
```

## webpack.config.js

```js
module.exports = {
  entry: {
    index : [
        '@babel/polyfill', // promise, async, await 등등의 최신 문법을 사용하기 위해 맨앞에 추가
        'index.js'
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/main/resources/static/js"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ];
  }
}
```
