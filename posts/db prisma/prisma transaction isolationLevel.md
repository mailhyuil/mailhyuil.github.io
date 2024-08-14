# prisma transaction isolationLevel

> 기본으로 database의 default isolation level을 사용하며, isolationLevel을 변경할 수 있다.
>
> > postgres: `READ COMMITTED`
> >
> > mysql: `REPEATABLE READ`
> >
> > sqlite: `SERIALIZABLE`

## usage

> 밑의 코드를 READ COMMITTED로 수행하면 동시성 문제가 발생할 수 있다.

```ts
await this.prisma.$transaction(
  async (tx) => {
    const found = await tx.user.findUnique({ where: { id: 1 } });
    if (!found) throw new Error("not found");
    await tx.user.update({ where: { id: 1 }, data: { name: "new name" } });
  },
  {
    isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead,
  }
);
```
