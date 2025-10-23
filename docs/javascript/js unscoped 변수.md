# js unscoped 변수

> unscoped 변수는 함수 내에서 키워드 없이 변수를 선언하면 발생
>
> > 이 경우 변수는 전역 스코프(global scope)에 선언

```js
function foo() {
  x = 1; // x는 전역 스코프에 선언됨
}
```
