# x callback pattern

> 동작의 구현을 위임할 수 있다.
>
> > DI와 비슷한 성격을 가지고 있다.

```ts
function createTransaction(cb: (tx) => void) {
  const tx = new Transaction();
  cb(tx);
}

createTransaction((tx) => {
  tx.txLogic();
  customLogic(tx);
});

function customLogic(tx = db) {
  tx.update();
}
```
