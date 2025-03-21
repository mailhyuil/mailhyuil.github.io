# nest advanced HMR (Hot reload)

> NestJS start: dev script는 watch를 이용해 기본적으로 hot reload
>
> > 그러나 이 watch 옵션도 hot reload를 해주는 기능이지만 watch는 프로젝트 전체를 재시작 한다.
> >
> > > 이는 작은 프로젝트의 경우 큰 문제가 되지않지만 프로젝트의 덩치가 점점 커지거나 bundle되는 파일이 많아질 수록 전체를 reloading 하는 것은 많은 병목을 유발하여 적합하지 않다.
> > >
> > > > 따라서 큰 프로젝트에서는 webpack config를 통해 webpack의 HMR기능을 사용해 hot reload를 구현해야한다.
> > > >
> > > > > 그렇게 되면 프로젝트를 전체 재시작하는게 아니라 변경된 파일만 hot reload를 하게 된다.

## install

```sh
npm i -D webpack
npm i -D webpack-node-externals
npm i -D run-script-webpack-plugin
```

## webpack-hmr.config.js

```js
const nodeExternals = require("webpack-node-externals");
const { RunScriptWebpackPlugin } = require("run-script-webpack-plugin");

module.exports = function (options, webpack) {
  return {
    ...options,
    entry: ["webpack/hot/poll?100", options.entry],
    externals: [
      nodeExternals({
        allowlist: ["webpack/hot/poll?100"],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new RunScriptWebpackPlugin({ name: options.output.filename, autoRestart: false }),
    ],
  };
};
```

## main.ts

```ts
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
```

## script

```sh
# --webpack --webpackPath webpack-hmr.config.js 추가
"start:dev": "nest build --webpack --webpackPath webpack-hmr.config.js --watch"
```
