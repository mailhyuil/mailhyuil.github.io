# db transaction isolation 동시성 문제

## Dirty Read (더티 리드)

> 다른 트랜잭션이 커밋하지 않은 데이터가 읽을 수 있게되면 롤백되었을 때 데이터 불일치가 발생
>
> > 해결: Read Committed

```ts
await this.prisma.$transaction(async tx => {
  // 다른 트랜잭션이 order2의 amount를 1000에서 2000으로 변경
  const order1 = await tx.order.findUnique({ where: { id: 1 } });
  const order2 = await tx.order.findUnique({ where: { id: 2 } });
  // 다른 트랜잭션이 order2의 변경을 rollback
  console.log(order1.amount); // 1000
  console.log(order2.amount); // 2000 <- 여전히 2000
  const payment = await tx.payment.create({
    data: { amount: order1.amount + order2.amount },
  });
  console.log(payment.amount); // it should be 2000 but the result is 3000
});
```

## Dirty write (더티 라이트)

> 커밋하지 않아도 데이터가 영구적으로 변경되는 현상
>
> > 모든 transaction은 이 현상을 방지하고 있다.

## Non-Repeatable Read (같은 데이터를 반복해서 읽기가 불가능) (반복적으로 읽은 데이터가 같은 데이터가 아닐 수 있다)

> 한 트랜잭션에서 반복해서 같은 데이터를 읽는 중간에 다른 트랜잭션이 그 데이터를 변경하고 커밋한다면 다른 값이 읽히는 현상
>
> > 트랜잭션 내에서 읽은 후 커밋되기 전에 다른 트랜잭션이 수정(UPDATE)한다면 발생
> >
> > > 해결: Repeatable Read

```ts
await this.prisma.$transaction(
  async tx => {
    const found = await tx.user.findUnique({ where: { id: 1 } });
    console.log(found.name); // 휴일
    // 이 구간에서 다른 트랜잭션이 이름을 변경하고 커밋
    const found = await tx.user.findUnique({ where: { id: 1 } });
    console.log(found.name); // 상백
  },
  {
    isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead,
  },
);
```

## Phantom Read (팬텀 리드) (값이 유령처럼 나타나거나 사라지는 현상)

> 트랜잭션 중간에 값이 생겨나거나 사라지는 현상
>
> > 트랜잭션 내에서 읽은 후 커밋되기 전에 다른 트랜잭션이 추가(INSERT) 또는 삭제(DELETE)한다면 발생
> >
> > > 해결: Serializable, Repeatable Read in Postgres

```ts
await this.prisma.$transaction(
  async tx => {
    const found = await tx.user.findMany(); // [user1, user2]
    // 이 구간에서 다른 트랜잭션이 새로운 데이터를 추가하고 커밋
    const found = await tx.user.findMany(); // [user1, user2, user3]
    // 이 구간에서 다른 트랜잭션이 기존 데이터를 삭제하고 커밋
    const found = await tx.user.findMany(); // [user1, user3]
    // user2, user3은 유령이였나?..
  },
  {
    isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead,
  },
);
```

## Lost Update (로스트 업데이트)

> 다른 트랜잭션이 업데이트한 데이터를 덮어쓰는 수준
>
> > 트랜잭션 내에서 업데이트한 데이터를 커밋하기 전에 다른 트랜잭션이 업데이트한다면 발생
> >
> > > 해결: Serializable, Repeatable Read in Postgres

```ts
const seatId = 1;

await this.prisma.$transaction(
  async tx => {
    const seat = await tx.seat.findUniqueOrThrow({
      where: { id: seatId },
    });
    // 이 구간에서 다른 트랜잭션이 좌석을 예약하고 커밋
    await tx.reservation.create({ data: { seat: { connect: { id: seatId } } } });
    // 먼저 성공한 트랜잭션을 덮어쓰는 현상
  },
  {
    isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead,
  },
);
```

## Read Skew (리드 스큐)

> 한 트랜잭션이 데이터베이스를 읽을 때 다른 트랜잭션이 커밋한 데이터가 나타나는 현상
>
> > non-repeatable-read와 비슷하지만, 다른 쿼리를 수행할 때 발생하는 것
> >
> > > 해결: Repeatable Read, Serializable

```ts
await this.prisma.$transaction(
  async tx => {
    const count = await tx.user.count(); // 3
    // 이 구간에서 다른 트랜잭션이 이름을 변경하고 커밋
    const count = await tx.user.count(); // 5
  },
  {
    isolationLevel: Prisma.TransactionIsolationLevel.RepeatableRead,
  },
);
```

## Write Skew (라이트 스큐)

> 두개의 트랜잭션이 한정된 데이터를 동시에 성공적으로 업데이트하는 경우
>
> > e.g. 좌석 예약, 재고 관리 등
> >
> > > 해결: Serializable

```ts
const targetDate = "2022-01-01";

await this.prisma.$transaction(
  async tx => {
    const schedule = await tx.schedule.findUniqueOrThrow({
      where: { date: targetDate },
    });
    if (schedule.remainingDayoffSlots.length === 0)
      throw new Error("해당 날짜에 연차를 사용할 수 있는 인원이 다 찼습니다.");

    // 다른 트랜잭션이 이 시점에서 연차를 사용하고 커밋할 수 있습니다.
    await tx.employee.update({
      where: { id: 1 },
      data: { dayoff: true },
    });

    await tx.schedule.update({
      where: { date: targetDate },
      data: { remainingDayoffSlots: { decrement: 1 } },
    });
    // 두 트랜잭션이 성공적으로 완료되면 연차 사용 가능한 슬롯 수가 잘못될 수 있습니다.
  },
  {
    isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
  },
);
```
