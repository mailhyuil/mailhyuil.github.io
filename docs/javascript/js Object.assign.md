# js Object.assign

> 모든 열거 가능한 속성의 값을 대상 객체로 복사하는 데 사용

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

console.log(target === returnedTarget); // true
```
