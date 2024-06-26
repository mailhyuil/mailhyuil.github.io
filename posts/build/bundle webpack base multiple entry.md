# bundle webpack base multiple entry

> spa가 아닌 traditional한 웹사이트를 만들 때
>
> > 여러 페이지를 만들어야 할 때 webpack에서 여러 entry를 사용하는 방법

## webpack.config.js

```js
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/home.js",
    contract: "./src/sub.js",
    blog: "./src/blog.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```
