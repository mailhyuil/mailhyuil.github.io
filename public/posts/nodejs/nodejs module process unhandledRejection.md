# nodejs module process unhandledRejection

> Promise의 reject를 catch하지 않으면 unhandledRejection가 발생한다.
>
> > unhandledRejection 이벤트를 이용하여 예외처리를 할 수 있다.
> >
> > > 기본적으로 unhandledRejection 이벤트가 발생하면 프로세스는 종료 되지않는다.

```js
process.on("unhandledRejection", err => {
  console.error("There was an uncaught error", err);
  process.exit(1); // mandatory (as per the Node.js docs)
});
```
