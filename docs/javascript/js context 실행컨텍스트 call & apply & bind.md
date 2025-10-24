# js context 실행컨텍스트 call & apply & bind

> this는 실행 컨텍스트의 thisValue를 가리킨다. (기본으로 실행컨텍스트의 thisValue는 전역객체(window or global)을 가리킨다.)
>
> > 함수를 다른 변수에 할당하면 this는 전역객체를 가리키도록 초기화된다.
> >
> > 이를 방지하기 위해 함수를 다른 변수에 할당할 때 call & apply & bind를 사용 (e.g. 데코레이터로 감싸기 위해서 or 콜백함수)
> >
> > > 화살표함수는 this가 상위 스코프를 참조하기때문에 이렇게 사용할 수 없다.
> > >
> > > > lodash function과 비슷하게 사용

## call & apply

> 함수를 직접 호출하지 않고 실행컨텍스트(this)를 넘겨서 "호출" 시
>
> > call, apply 함수의 사용의 이유는 this에 있습니다.
> >
> > this를 함수의 인자로 넘김으로써, this의 값을 사용할 수도, 변경 할 수도 있게 됩니다.

```js
// function.call(thisArg, arg1, arg2, ...)
// function.apply(thisArg, [arg1, arg2, ...])

function sum(num1, num2) {
  return num1 + num2;
}

const obj = {
  name: "sb",
};

console.log(sum(1, 2)); // this는 window
console.log(sum.call(obj, 1, 2)); // this는 obj // 인자를 하나씩 받음
console.log(sum.apply(obj, [1, 2])); // this는 obj // 인자를 배열로 받음
```

## bind

> 객체의 함수를 다른 변수에 "재할당" 시 실행컨텍스트의 thisValue는 전역객체가 바인딩된다. (설계 오류)
>
> > 재할당한 함수의 thisValue를 다시 바인딩하기 위해 bind 함수를 사용

```js
// function.bind(thisArg, arg1, arg2, ...)

const user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};
user.sayHi(); // Hello, John!

const sayHi1 = user.sayHi; // 재할당
sayHi1(); // Hello, undefined!

const sayHi2 = user.sayHi.bind(user); // 재할당 & bind
sayHi2(); // Hello, John!
```
