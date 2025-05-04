# prisma lock exclusive lock

> prisma는 아직 lock을 지원하지 않기 때문에 $queryRaw를 사용해야 한다.
>
> > SELECT \* FROM table_name FOR UPDATE;
> >
> > > 읽기와 쓰기 모두 불가능하다.
> > >
> > > > FOR SHARE 차단
> > > >
> > > > FOR UPDATE 차단
> > > >
> > > > UPDATE, DELETE 차단

```ts
const paymentId = 1;

await prisma.$transaction(async (tx) => {
  const payment = await tx.$queryRaw<RawPayment[]>`SELECT amount FROM payments WHERE id = ${paymentId} FOR UPDATE`;
  // 이 작업이 끝나기 전까지 다른 트랜잭션에서는 해당 payment를 읽거나 수정할 수 없다.
  const updated = await tx.payment.update({
    where: { id: paymentId },
    data: { amount: payment.amount + 100 },
  });
  return updated;
});
```
