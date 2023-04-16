# nodejs stackoverflow

## 재귀함수

> 스택에 계속 쌓여버려서 스택 오버플로우 발생

```js
function hi() {
  console.log(1);
  return hi();
}
hi();
```

## setTimeout, setImmediate, nextTick 사용

> 콜백함수가 스택이 비워지면 실행되기 때문에 스택오버플로우가 발생하지 않음

```js
function hi() {
  console.log(1);
  return setTimeout(hi, 0); // or setImmediate, process.nextTick
}
hi();
```
