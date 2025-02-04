# nodejs module stream on data

> data event에서 write를 안해주면 data는 사라져버린다
>
> > 반드시 write

```ts
stream.on("data", chunk => {
  stream.write(chunk);
});
```
