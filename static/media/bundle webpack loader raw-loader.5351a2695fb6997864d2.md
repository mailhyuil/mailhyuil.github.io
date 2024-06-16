# webpack loader raw-loader

> txt같은 파일을 문자열로 변환한다.
>
> > webpack5 이후로는 asset module 사용을 권장한다.
> >
> > > type: 'asset/source' 로 대신할 수 있다.

## install

```sh
npm i -D raw-loader
```

## usage

```js
module.exports = {
  output: {
    filename: "main.js",
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
};
```
