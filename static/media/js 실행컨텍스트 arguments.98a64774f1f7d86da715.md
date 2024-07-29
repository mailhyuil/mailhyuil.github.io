# js 실행컨텍스트 arguments

> 실행컨택스트의 Variable Object (VO / 변수객체)가 가지고 있는 정보
>
> > arguments 변수는 함수의 실행 컨텍스트 내부에서 접근할 수 있습니다.
> >
> > > 매개변수의 값을 배열로 가지고 있는 object
> > >
> > > > 현재는 foo(...args){} 로 대체 가능하다.

```js
function foo(a, b, c) {
  console.log(arguments[0]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3
}

foo(1, 2, 3);
```
