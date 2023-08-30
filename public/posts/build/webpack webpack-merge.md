# webpack-merge

## install

```sh
npm install -D webpack-merge
```

## 사용

```js
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
});
```
