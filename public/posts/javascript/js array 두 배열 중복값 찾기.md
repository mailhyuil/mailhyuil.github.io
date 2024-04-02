# js 두배열 중복값 찾기

```js
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
arrA.filter((it) => arrB.includes(it)); // returns [1, 2]
```
