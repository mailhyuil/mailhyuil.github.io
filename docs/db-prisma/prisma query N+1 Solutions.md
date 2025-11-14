# prisma query N+1 Problem Solutions

> N+1 Problem은 데이터를 나중에 가져오는 Lazy Loading 방식에서 발생하는 문제이다.

## Eager Loading / Fetch Join

> JPA에 있는 방식으로 ORM 수준에서 관계 필드를 항상 조회하도록 설정하는 방식
>
> > prisma에서는 include, select 사용

```ts
const posts = await prisma.post.findMany({
  include: {
    user: true,
  },
});
```

## Batch Fetching

> 키를 모아서 한번에 조회하여 해결
>
> > in 사용

```ts
const users = await prisma.user.findMany({
  where: {
    id: {
      in: userIds,
    },
  },
});
```
