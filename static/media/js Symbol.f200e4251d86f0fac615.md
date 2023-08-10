# Symbol

> ES6에 추가된 변경 불가능한 원시 타입
>
> > 객체 프로퍼니를 만들 수 있다

```js
const ord = Symbol("orderID");
const myOrder = {
  ord: "123",
};
console.log(myOrder["ord"]);
```
