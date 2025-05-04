# nodejs module system esm import.meta.resolve()

> 모듈 파일의 절대경로를 반환하는 함수

```js
// require.resolve("prisma"); 와 같다
import.meta.resolve("prisma"); // /workspace/workdir/node_modules/.pnpm/prisma@5.16.1/node_modules/prisma/build/index.js
```

## usage

```js
export default {
  module: {
    rules: [
      {
        test: import.meta.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ],
  },
};
```
