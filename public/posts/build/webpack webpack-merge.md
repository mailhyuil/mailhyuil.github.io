# webpack-merge

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
