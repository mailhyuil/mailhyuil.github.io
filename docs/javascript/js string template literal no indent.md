# js string template literal no indent

> 들여쓰기 없이 사용해야 들여쓰기 없이 출력된다.

```js
// x
const str = `안녕하세요
    안녕하세요
    안녕하세요`;
console.log(str);

// o
const str = `안녕하세요
안녕하세요
안녕하세요`;
console.log(str);
```
