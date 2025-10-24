# compile babel typescript

> babel은 컴파일 시 타입검사를 할 수 없고 index.d.ts를 생성할 수 없다.
>
> > 때문에 typescript 패키지를 함께 사용해서 typescript로 타입검사를 하고 index.d.ts를 생성 컴파일만 babel로

## install

```sh
npm i -D @babel/core
npm i -D @babel/cli
npm i -D @babel/preset-env
npm i -D @babel/preset-typescript
npm i -D @babel/plugin-proposal-decorators
npm i -D babel-plugin-transform-typescript-metadata

babel src -d dist --extensions .ts
```

## webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(?:ts|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // .babelrc 파일을 사용하지 않고 webpack.config.js에 설정
            presets: [["@babel/preset-env", { loose: true }], "@babel/preset-typescript"],
            plugins: ["babel-plugin-transform-typescript-metadata", ["@babel/plugin-proposal-decorators", { legacy: true }]],
          },
        },
      },
    ],
  },
  watch: true,
};
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "noEmit": true,
    "isolatedModules": true
  }
}
```

## package.json

```json
{
  "scripts": {
    "typecheck": "tsc --watch",
    "bundle": "webpack --config webpack.config.js --watch",
    "build": "npm run typecheck && npm run bundle"
  }
}
```
