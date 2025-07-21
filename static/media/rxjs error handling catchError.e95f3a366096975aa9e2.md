# catchError

> error를 미리 잡아서 가공하고 넘기는 용도

```js
catchError((err) =>
  of({
    state: "error",
    error: err,
    retryCount: retryCount,
  })
);
```
