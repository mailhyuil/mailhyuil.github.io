# js arguments object

> 매개변수의 값을 배열로 가지고 있는 object
>
> > 현재는 fun(...args){} 로 대체 가능하다.

```js
function func1(a, b, c) {
  console.log(arguments[0]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

func1(1, 2, 3);
```
