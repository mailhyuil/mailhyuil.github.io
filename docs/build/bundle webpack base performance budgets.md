# bundle webpack base performance budgets

> 성능 문제가 해결하기가 너무 어려워지기 전에 경고하는 것
>
> > main.js 파일의 크기는 170KB 미만으로 전달하는 것이 좋다

```js
module.exports = {
  performance: {
    maxEntrypointSize: 170000,
  },
};
```
