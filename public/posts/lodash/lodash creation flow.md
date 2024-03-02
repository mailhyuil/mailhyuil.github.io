# lodash creation flow

> 함수를 받아서 함수를 반환한다. (함수 합성 함수)

```js
function square(n) {
  return n * n;
}

const addSquare = _.flow([_.add, square]);
addSquare(1, 2);
// => 9
```
