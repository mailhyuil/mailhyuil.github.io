# algorithm base minibatch

> 데이터를 모아놨다가 한번에 처리하는 기법
>
> > 미니배치 처리, chunk 처리

```js
// batch 처리를 안한 로직
for (let i = 0; i < 1000; i++) {
  console.log("hi");
}

// batch 처리한 로직
const res = "";
for (let i = 0; i < 1000; i++) {
  res.push("hi\n");
}
console.log(res);
```
