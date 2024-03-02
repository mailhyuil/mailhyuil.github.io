# lodash creation curry

> 함수를 받아서 인자를 받을 때까지 기다리는 함수를 반환한다. (커링 함수)

```js
const fn = (a, b, c) => a + b + c;

const curriedFn = _.curry(fn);

const res = curriedFn(1)(2)(3);

console.log(res); // 6
```
