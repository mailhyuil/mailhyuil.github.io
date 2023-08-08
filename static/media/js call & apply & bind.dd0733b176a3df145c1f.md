# call & apply & bind

> 화살표함수는 this가 상위 스코프를 참조하기때문에 이렇게 사용할 수 없다.

## this vs self

```
this: 현재 함수가 invoking 되는 오브젝트를 참조
self: window를 참조, var self = this와 같은 식으로 함수 내에서 선언되었을 시에는 해당 함수가 invoking 되는 오브젝트의 로컬 스코프를 가리킴 (중첩으로 함수를 리턴하는 곳에서 많이 사용)
```

## call & apply

> 함수를 직접 호출하지 않고 this로 넘겨서 호출
>
> > call, apply 함수의 사용의 이유는 this에 있습니다. this를 함수의 인자로 넘김으로써, this의 값을 사용할 수도, 변경 할 수도 있게 됩니다.

```js
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 2));
console.log(sum.call(this, 1, 2)); // 인자를 하나씩 받음
console.log(sum.apply(this, [1, 2])); // 인자를 배열로 받음
```

## bind

> 콜백함수나 다른 변수에 재할당한 함수는 this에 전역객체가 바인딩된다. (설계 오류랜다..;;)
>
> > 콜백함수나 다른 변수에 재할당한 함수의 this가 불일치하는 문제를 해결

```js
const person = {
  name: 'sb',
  foo(callback) {
    setTimeout(callback.bind(this), 100); //
  },
};

person.foo(function () {
  console.log(`my name is ${this.name}`);
});
```

```js
let user = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

let sayHi1 = user.sayHi; // (*)
sayHi1(); // Hello, undefined!

let sayHi2 = user.sayHi.bind(user); // (*)
sayHi2(); // Hello, John!
```
