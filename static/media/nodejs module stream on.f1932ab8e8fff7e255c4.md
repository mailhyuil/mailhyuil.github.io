# nodejs module stream on

```ts
// end: stream이 끝나면 실행된다0
stream.on("end", () => {
  // finalize
});

// data event에서 write를 안해주면 data는 사라져버린다
stream.on("data", chunk => {
  stream.write(chunk);
});
```
