# nodejs module process exit

> 프로세스를 종료시키는 명령어
>
> > 정상적인 종료는 0, 비정상적인 종료는 1을 반환한다.
> >
> > > SIGINT, SIGTERM 등은 기본으로 process exit 0 로 종료되지만, 시그널 후킹을 사용할 경우 명시적으로 종료시키는 코드를 작성해야 한다.

```js
/// 시그널 후킹 작성
process.on("SIGINT", () => {
  console.log("You've pressed ctrl + c!");

  cleanup().then(() => {
    console.log("정상적으로 종료!");
    process.exit(0);
  });

  setTimeout(() => {
    console.log("정상적으로 종료가 안되네요. 강제 종료!");
    process.exit(1);
  }, 3000);
});
```
