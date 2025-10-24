# bundle webpack plugin purgecss-webpack-plugin

## webpack.config.js

```js
const PurgeCssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");

module.exports = {
  plugins: [
    PurgeCssPlugin({
      paths: glob.sync("src/**/*", { nodir: true }),
      safelist: ["some-class"], // purge에서 제외할 클래스
    }),
  ],
};
```
