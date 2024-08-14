# prisma transaction isolationLevel

> 기본으로 database의 default isolation level을 사용하며, isolationLevel을 변경할 수 있다.
>
> > postgres: `READ COMMITTED`
> >
> > mysql: `REPEATABLE READ`
> >
> > sqlite: `SERIALIZABLE`
> >
> > > 올바른 격리수준을 설정한 경우 동시성 문제가 발생하면 fail한다.

## usage

> 밑의 코드를 READ COMMITTED로 수행하면 동시성 문제가 발생할 수 있다.
>
> > 발생 가능한 문제: phantom read, non-repeatable read, lost update
> >
> > > postgresql을 사용 시 repeatable read로 설정하면 phantom read, non-repeatable read을 방지할 수 있다.
> > >
> > > 다른 RDBMS 사용 시 serializable로 설정하면 phantom read, non-repeatable read을 방지할 수 있다.

## dirty read

> read committed 수준에서 방지할 수 있다.
>
> > commit이 되지 않은 데이터를 읽는 것

```ts
await this.prisma.$transaction(async (tx) => {
  const order1 = await tx.order.findUnique({ where: { id: 1 } }); // amount: 1000
  const order2 = await tx.order.findUnique({ where: { id: 2 } }); // amount: 1000
  // 이 구간에서 다른 트랜잭션이 order2의 amount를 변경
  // order2 amount: 2000
  const payment = await tx.payment.create({
    data: { amount: order1.amount + order2.amount }, // total amount: 3000
  });
  // order2의 amount가 rollback되면 payment에 대한 데이터가 불일치가 발생
  // order2 amount: 1000
  // payment amount should be 2000 but the result: 3000
});
```

## non-repeatable read (fuzzy read)

> 한 트랜잭션 내에서 같은 쿼리를 여러번 수행할 때 결과가 다르게 나오는 것

```ts
await this.prisma.$transaction(
  async (tx) => {
    const found = await tx.user.findUnique({ where: { id: 1 } });
    console.log(found.name); // 휴일
    // 이 구간에서 다른 트랜잭션이 이름을 변경한다면?
    const found = await tx.user.findUnique({ where: { id: 1 } });
    console.log(found.name); // 상백
  },
  {
    isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead,
  }
);
```

## lost update

```ts
await this.prisma.$transaction(
  async (tx) => {
    const found = await tx.payment.findUnique({ where: { id: 1 } });
    if (!found) throw new NotFoundException("not found");
    // 이 구간에서 다른 트랜잭션이 업데이트했더라도 업데이트 전 데이터를 사용함
    // old amount: 1000, new amount: 2000
    await tx.user.update({ where: { id: 1 }, data: { amount: found.amount + 100 } }); // expected: 2100 but the result: 1100
  },
  {
    isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead,
  }
);
```

## phantom read

```ts
await this.prisma.$transaction(
  async (tx) => {
    const found = await tx.user.findMany();
    // 이 구간에서 다른 트랜잭션이 새로운 데이터를 추가할 수 있음
    await tx.group.update({
      where: { id: 1 },
      data: { users: { connect: found.map((user) => ({ id: user.id })) } },
    });
  },
  {
    isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
  }
);
```
