# Promise.allSettled

> Promise.all은 하나라도 reject되면 전부 reject됨
>
> > Promise.allSettled는 하나가 reject되어도 나머지를 받을 수 있다
> >
> > > 트랜잭션은 allSettled를 사용해야 한다

## result

```js
[
  {status: 'fulfilled', value: ...응답...},
  {status: 'fulfilled', value: ...응답...},
  {status: 'rejected', reason: ...에러 객체...}
]
```

## Promise.all을 사용하면 안되는 이유

```js
try {
  await connection.transaction();
  const promises = [];
  for (const elem of data) {
    promises.push(connection.query("updateElem", elem));
  }
  await Promise.all(promises);
  await connection.commit();
} catch (error) {
  await connection.rollback();
}
/*
1. Transaction started;
2. Queries queued to execution;
3. One query failed;
4. Transaction rolled back;
5. Some slow queries executed after transaction rollback.
*/
```
