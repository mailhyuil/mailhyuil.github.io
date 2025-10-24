# bundle webpack base externals & externalsPresets

## externals

> 의존하고 있지만 빌드과정에 포함되지 않는(번들링 하지 않을) 패키지를 명시 (외부 패키지)
>
> > axios, jquery같은 패키지

## externalsPresets

> webpack 5부터 추가된 옵션

```js
const nodeExternals = require("webpack-node-externals");

module.exports = {
  externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
};
```
