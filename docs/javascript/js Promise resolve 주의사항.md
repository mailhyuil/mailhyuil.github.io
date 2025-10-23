# js Promise resolve 주의사항

> if문 내에서 resolve를 쓰지 말아라 resolve가 되지 않을 수 있다.

```js
// X
if (condition) {
  // logic..
  resolve();
}

// O
if (condition) {
  // logic..
}
resolve();
```
