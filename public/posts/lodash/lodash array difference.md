# lodash array difference

> pullAll과 같지만 원본을 mutate하지 않고 새로운 배열을 반환한다.

```js
const arr = ["a", "b", "c", "a", "b", "c"];

const newArr = difference(arr, ["a", "c"]);
console.log(newArr);
// ['b', 'b']
```
