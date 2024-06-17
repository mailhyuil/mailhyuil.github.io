# bundle webpack backend server

> node_modules를 externals로 설정하여 번들링하지 않도록 설정한다.
>
> frontend 앱에서는 번들링되어도 괜찮지만 backend 서버에서는 번들링되면 안된다.
>
> 바이너리 디펜던시나 require를 잘못 사용해버리는 문제가 발생함. (require("foo") is turned into just foo, a global variable.)
>
> 따라서 node_modules를 externals로 설정하여 번들링하지 않도록 설정한다.
>
> > webpack 5부터는 `externalsPresets`와 `externals`를 사용하여 설정한다.

## install

```sh
npm install -D webpack-node-externals
```

## webpack.config.js (commonjs)

```js
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/main.js",
  target: "node", // tell webpack this bundle will be used in nodejs environment, so don't touch any built-in modules like fs or path.
  externals: [nodeExternals()],
  devtool: "sourcemap",
  output: {
    path: path.join(__dirname, "build"),
    filename: "backend.js",
  },
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false }),
    new webpack.IgnorePlugin(/\.(css|less)$/),
  ],
};
```

## webpack.config.js (webpack 5)

```js
// Webpack 5
const nodeExternals = require("webpack-node-externals");

module.exports = {
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};
```
