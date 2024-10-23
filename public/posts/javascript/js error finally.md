# js error finally

## as-is

> try catch문에서 에러가 발생하면 그 뒤에 오는 함수는 절대 실행되지 않는다.

```js
try {
  // logic
} catch (e) {
  // 에러 처리
}

// 반드시 실행되어야 하는 함수
```

## to-be

> finally 구문안으로 넣어라

```js
try {
  // logic
} catch (e) {
  // 에러 처리
} finally {
  // 반드시 실행되어야 하는 함수
}
```
