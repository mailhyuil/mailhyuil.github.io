# js Promise allSettled

- Promise.all은 여러개의 프로미스 중 하나라도 reject가 발생하면 전부 reject 된다.
- Promise.allSettled는 하나의 프로미스가 reject 발생하더라도 나머지 프로미스는 정상적으로 처리된다.
- 트랜잭션은 allSettled를 사용해야 한다

## result

```js
[
  { status: "fulfilled", value: data },
  { status: "fulfilled", value: data },
  { status: "rejected", reason: error },
];
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
  1. Transaction started.
  2. Queries queued to execution.
  3. One query failed.
  4. Transaction rolled back.
  5. Some slow queries executed after transaction rollback.
*/
```
