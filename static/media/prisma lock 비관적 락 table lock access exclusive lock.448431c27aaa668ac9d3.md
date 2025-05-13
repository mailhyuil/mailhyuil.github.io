# prisma table lock access exclusive lock

> table lock을 사용하기 위해서는 `LOCK TABLE <table_name> IN <lock_mode>`를 사용해야 한다.
>
> > 가장 강력한 lock이다. 다른 트랜잭션이 해당 테이블에 그 어떤 작업도 할 수 없다.
> >
> > FOR SHARE와 FOR UPDATE를 사용하지 않아도 어떤 작업도 할 수 없다.
> >
> > > row lock에는 없는 table lock에만 존재하는 기능

## usage

```ts
await prisma.$transaction(async (tx) => {
  await tx.$queryRaw(Prisma.sql`LOCK TABLE posts IN ACCESS EXCLUSIVE MODE`);
});
```
