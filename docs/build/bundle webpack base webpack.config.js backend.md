# bundle webpack base webpack.config.js backend

> target을 node로 설정하여 webpack이 fs, path 등의 내장 모듈을 건드리지 않도록 설정한다.
>
> > node_modules를 externals로 설정하여 번들링하지 않도록 설정한다. (node_modules의 모듈이 전부 번들링 가능한 경우에는 번들링해도 된다.)
> >
> > frontend 앱에서는 번들링되어도 괜찮지만 backend 서버에서는 번들링되면 안된다.
> >
> > 바이너리 디펜던시나 require를 잘못 사용해버리는 문제가 발생함. (require("foo") is turned into just foo, a global variable.)
> >
> > 따라서 node_modules를 externals로 설정하여 번들링하지 않도록 설정한다.
> >
> > > node환경에서는 sourcemap을 true로 설정해야 에러 스택을 볼 수 있다. (source-map-support 설치 필요)
> > >
> > > (even if you use babel to compile your backend code with gulp, you need sourcemaps.)
> > >
> > > source-map-support를 설치하여 디버깅을 용이하게 한다.
> > >
> > > (automatically sourcemaps stack traces from node/io.js) (BannerPlugin을 사용)
> > >
> > > > 코드가 server와 client에서 같이 사용되는 경우 css나 less 파일을 무시하도록 설정한다.

## webpack.config.js (commonjs)

```js
const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

// webpack-node-externals를 사용해도 된다.
const nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function (x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  entry: "./src/main.js",
  target: "node", // tell webpack this bundle will be used in nodejs environment, so don't touch any built-in modules like fs or path.
  externals: nodeModules,
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
