# call & apply

> 함수를 직접 호출하지 않고 this로 넘겨서 호출
>
> > call, apply 함수의 사용의 이유는 this에 있습니다. this를 함수의 인자로 넘김으로써, this의 값을 사용할 수도, 변경 할 수도 있게 됩니다.

## this vs self

```
this: 현재 함수가 invoking 되는 오브젝트를 참조
self: window를 참조, var self = this와 같은 식으로 함수 내에서 선언되었을 시에는 해당 함수가 invoking 되는 오브젝트의 로컬 스코프를 가리킴 (중첩으로 함수를 리턴하는 곳에서 많이 사용)
```

## 사용법

```js
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 2));
console.log(sum.call(this, 1, 2)); // 인자를 하나씩 받음
console.log(sum.apply(this, [1, 2])); // 인자를 배열로 받음
```
