# prisma query 최적화 n+1

> findMany 쿼리를 사용한 후 연관관계를 조회하기 위해서 loop 문을 사용해 각 row에 대한 추가적인 쿼리를 실행할 경우 발생
>
> > n+1 문제가 발생하면 쿼리가 배수적으로 증가하면서 DB에 큰 부담이 발생하게 되고 장애 요인이 될 수 있다.
> >
> > > bulk query, in, include, select 등을 사용하여 최적화

## n+1 query

```ts
// One query to get all users
const users = await prisma.user.findMany({});

// One query PER USER to get all posts
// 1명의 유저 당 N개의 포스트를 조회
users.forEach(async (user) => {
  const posts = await prisma.post.findMany({
    where: {
      userId: user.id,
    },
  });

  // Do something with each users' posts
});
```
