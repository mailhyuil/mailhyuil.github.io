# nodejs module system commonjs require.resolve

> 모듈 파일의 절대경로를 반환하는 함수

```js
require.resolve("module-name");

require.resolve("prisma"); // /workspace/workdir/node_modules/.pnpm/prisma@5.16.1/node_modules/prisma/build/index.js
```

## usage

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
