# nestjs advanced webpack

## nest-cli.json

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,
    "webpack": true, // webpack 설정을 사용한다.
    "webpackConfigPath": "webpack.config.js" // webpack 설정 파일 경로
  }
}
```

## webpack.config.js

> options로 default config가 넘어온다.

```js
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = function (options, webpack) {
  console.log("webpack.config.js works!");
  return {
    ...options,
    plugins: [...options.plugins, new BundleAnalyzerPlugin()],
  };
};
```
