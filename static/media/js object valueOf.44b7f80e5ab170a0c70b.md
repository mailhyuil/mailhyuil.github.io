# js object valueOf

> 객체의 원시값을 반환하는 메소드
>
> > \+ 연산자를 단축표현으로 사용할 수 있다
> >
> > > 연산자 오버로딩을 비슷하게 구현할 수 있다.

```js
const obj = {
  value: 1,
  valueOf: function () {
    return this.value;
  },
};

console.log(obj.valueOf()); // 1
console.log(+obj); // 1
console.log(obj + 2); // 3
console.log(obj - 2); // -1
console.log(obj * 2); // 2
console.log(obj / 2); // 0.5
```
