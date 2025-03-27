# js currying

> 함수의 재사용성을 높이기 위해 함수 자체를 return하는 함수

```js
const currying = a => b => a + " " + b;
currying("Hello")("World"); // Hello World
```
