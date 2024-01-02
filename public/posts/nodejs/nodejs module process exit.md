# nodejs module process exit

> 프로세스를 종료시키는 명령어
>
> > 인수로 1~11, 128을 받을 수 있고 각각의 행위가 다르다.

```js
process.on("SIGINT", () => {
  console.log("You've pressed ctrl + c!");
  process.exit(1);
});
```
