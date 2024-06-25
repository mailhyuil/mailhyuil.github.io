# webpack-merge

> webpack 설정 파일을 합치는 라이브러리

## install

```sh
npm install -D webpack-merge
```

## usage

```js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
});
```
