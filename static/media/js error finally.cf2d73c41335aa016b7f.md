# js error finally

## as-is

> try catch문에서 에러가 발생하면 그 뒤에 오는 함수는 절대 실행되지 않는다.

```js
try {
} catch (e) {}
반드시실행되어야하는함수();
```

## to-be

> finally 구문안으로 넣어라

```js
try {
} catch (e) {
} finally {
  반드시실행되어야하는함수();
}
```
