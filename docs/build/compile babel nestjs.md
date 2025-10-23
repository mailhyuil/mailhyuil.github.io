# babel nestjs

## install

```sh
npm i -D @babel/core
npm i -D @babel/cli
npm i -D @babel/preset-env
npm i -D @babel/preset-typescript
npm i -D @babel/plugin-proposal-decorators
npm i -D babel-plugin-transform-typescript-metadata
npm i -D webpack
npm i -D webpack-cli
npm i -D webpack-node-externals
npm i -D run-script-webpack-plugin
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "noEmit": true,
    // "emitDeclarationOnly": true,
    "isolatedModules": true
  }
}
```

## webpack.config.js

```js
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { RunScriptWebpackPlugin } = require("run-script-webpack-plugin");

module.exports = {
  entry: ["./src/main.ts"],
  target: "node",
  externals: [nodeExternals()],
  cache: false,
  module: {
    rules: [
      {
        test: /\.(?:ts|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { loose: true }], "@babel/preset-typescript"],
            plugins: ["babel-plugin-transform-typescript-metadata", ["@babel/plugin-proposal-decorators", { legacy: true }]],
          },
        },
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new RunScriptWebpackPlugin({ name: "server.js", autoRestart: true })],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server.js",
  },
};
```

## package.json

```json
{
  "script": {
    "serve": "webpack --config webpack.development.config.js --watch",
    "build": "tsc --noEmit && webpack --config webpack.production.config.js"
  }
}
```
