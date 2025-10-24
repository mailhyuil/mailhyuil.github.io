# prisma lock 비관적 락 table lock share lock

> table lock을 사용하기 위해서는 `LOCK TABLE <table_name> IN <lock_mode>`를 사용해야 한다.
>
> > FOR SHARE, FOR UPDATE 가능
> >
> > UPDATE, DELETE 차단

## usage

```ts
await prisma.$transaction(async tx => {
  await tx.$queryRaw(Prisma.sql`LOCK TABLE posts IN SHARE MODE`);
});
```
