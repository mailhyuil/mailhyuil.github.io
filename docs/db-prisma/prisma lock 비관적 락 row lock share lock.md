# prisma lock share lock

> prisma는 아직 lock을 지원하지 않기 때문에 $queryRaw를 사용해야 한다.
>
> > SELECT \* FROM table_name FOR SHARE;
> >
> > > 읽기는 가능하지만 쓰기는 불가능하다. (낙관적 lock에 가깝다)
> > >
> > > > FOR SHARE 가능
> > > >
> > > > FOR UPDATE 차단
> > > >
> > > > UPDATE, DELETE 차단

```ts
const startDate = "2022-01-01";
const endDate = "2022-01-31";

await prisma.$transaction(async (tx) => {
  const articles = await tx.$queryRaw<RawPayment[]>`SELECT * FROM articles WHERE date BETWEEN ${startDate} AND ${endDate} FOR SHARE`;
  // 이 작업이 끝나기 전까지 다른 트랜잭션에서는 해당 기간의 article을 수정할 수 없다.
  await tx.news.create({
    data: {
      title: "new article_" + new Date().toISOString(),
      content: articles.map((article) => article.content).join("\n\n"),
    },
  });
});
```
