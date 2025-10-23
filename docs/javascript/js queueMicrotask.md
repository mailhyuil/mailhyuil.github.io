# js queueMicrotask

> setTimeout보다 먼저 실행됨
>
> > Promise.resolve().then()과 같다

```js
queueMicrotask(() => {
  console.log("queueMicrotask");
});

Promise.resolve().then(() => {
  console.log("Promise.resolve().then()");
});
```
