# bundle webpack loader js expose-loader

> 라이브러리 패키지 사용 시 해당 라이브러리를 전역객체가 사용할 수 있도록 해주는 loader

```js
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
  },
};
```
