# lodash creation partial

> 함수의 인자를 받아서 함수를 반환한다. (부분 적용 함수)

```js
const fn = (a, b, c) => a + b + c;

const partialFn = _.partial(fn, 1, 2);

const res = partialFn(3);

console.log(res); // 6
```
