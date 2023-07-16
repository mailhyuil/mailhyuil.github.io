# webpack typescript

## install

```sh
npm i -D webpack
npm i -D webpack-cli
npm i -D typescript
npm i -D ts-loader
```

## webpack.config.js

```js
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

## command

```sh
npx webpack
```
