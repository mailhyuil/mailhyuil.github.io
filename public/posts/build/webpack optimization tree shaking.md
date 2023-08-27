# webpack tree shaking

## package.json

> sideEffects: false는 사용하지 않는 모듈은 제거해도 괜찮다는 의미이다.
>
> > esmodule을 100% 사용시에는 필요없다.

```json
{
  "name": "your-project",
  "sideEffects": false
}
```

## webpack.config.js

```js
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  optimization: {
    usedExports: true,
  },
};
```
