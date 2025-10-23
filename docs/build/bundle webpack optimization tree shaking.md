# webpack tree shaking

> esModule은 production 빌드 시 자동으로 적용됨
>
> > commonjs는 sideEffects:false 설정 사용

## sideEffects

> sideEffects: false는 이 패키지는 사이드 이펙트가 없다는 것을 의미한다.
>
> > export 되었지만 사용하지 않는 모듈은 제거한다.
> >
> > > esmodule을 100% 사용시에는 필요없다.

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
