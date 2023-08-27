# webpack tree shaking

> esModule은 production 빌드시 자동으로 적용됨
>
> > commonjs는 sideEffects:false 같은 설정이 필요함

## sideEffects

> sideEffects: false는 사용하지 않는 모듈은 제거해도 괜찮다는 의미이다.
>
> > esmodule을 100% 사용시에는 필요없다.

```json
{
  "name": "your-project",
  "sideEffects": false
}
```

## usedExports

> sideEffects보다 성능은 안좋음

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
