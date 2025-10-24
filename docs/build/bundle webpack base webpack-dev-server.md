# bundle webpack base webpack-dev-server

> 번들링 대상 파일이 변경되었을 때 자동으로 수정된 코드를 반영해주는 개발 서버

## install

```sh
npm i -D webpack-dev-server
```

## usage

```js
module.exports = {
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"), // 번들링 대상 파일 경로
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
```
