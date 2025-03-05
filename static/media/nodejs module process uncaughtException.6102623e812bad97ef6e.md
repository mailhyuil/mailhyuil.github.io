# nodejs module process uncaughtException

> process의 uncaughtException 이벤트를 이용하여 예외처리를 할 수 있다.
>
> > 기본적으로 uncaughtException 이벤트가 발생하면 "exit code 1"로 프로세스가 종료되지만, 이 이벤트를 이용하여 예외처리를 할 수 있다.

```js
process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error", err);
  process.exit(1); // mandatory (as per the Node.js docs)
});
```
