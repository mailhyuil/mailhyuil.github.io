# react base

## install

```sh
# react
npm i react
npm i -D @types/react
npm i react-dom
npm i -D @types/react-dom

# webpack
npm i -D webpack
npm i -D webpack-cli

# babel
npm i -D @babel/core
npm i -D babel-loader
npm i -D @babel/preset-env
npm i -D @babel/preset-react
```

## webpack.config.js

```js
// webpack.config.js
const path = require("path");

module.exports = {
  name: "project-name",
  mode: "development", // 배포 : production
  devtool: "inline-source-map", // hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // client.jsx를 대상으로 웹팩이 빌드를 수행
  entry: {
    app: ["./client"],
  },
  module: {
    rules: [
      {
        // babel-loader를 이용해 규칙에 적용
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
```

## index.jsx / index.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document("#root")).render(<App />);
```

## cli로 react app 생성하기

> 위의 과정을 cli로 간단하게 생성할 수 있다.

```sh
# cli 설치
npm install -g create-react-app

# 초기화
create-react-app <my-app>
```
