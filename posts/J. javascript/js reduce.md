# js reduce

> 그 전에 리턴된 값, 현재값이 중요
>
> > 리턴된 값 + 현재값을 리턴 시키면 누적값을 구할 수 있다.

```js
array.reduce((그 전에 리턴된 값, 현잿값, 인덱스, array) => {…}, 초깃값);

const arr = [1, 2, 3, 4, 5, 6];

arr.reduce((a, b, c, d) => {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
});
```
