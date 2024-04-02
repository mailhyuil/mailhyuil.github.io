# js 숫자 undefined, null 체크

> 0이 falsy한 값이기 때문에 비교연산자를 통해서 명시적으로 검사해야함

```js
// x
if(!num)
// o
if(num !== undefined && num !== null)
```
