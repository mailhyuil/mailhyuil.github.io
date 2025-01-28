# js Promise resolve 후에 반드시 return

> resolve 후에도 return을 반드시 해야 코드를 끝낼 수 있다.

```js
if (condition) {
  resolve();
  return;
}
resolve();
```
