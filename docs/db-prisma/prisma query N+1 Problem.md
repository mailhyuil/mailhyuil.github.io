# prisma query N+1 Problem

> N+1 쿼리란, ORM을 사용 시 연관된 데이터를 조회하기 위해서 발생하는 불필요한 쿼리의 패턴을 의미한다.
>
> > include/select 사용, in 사용을 통해 최적화
> >
> > > 데이터베이스 조회 Query의 비용은 비싸다는 것을 명심하자.
> > >
> > > 애플리케이션 레이어의 연산이 늘어나더라도 데이터베이스 조회를 줄이는게 이득이다.

## N+1 쿼리

> user 테이블을 두번 조회하여 총 4번의 쿼리가 발생한다.

```ts
/// BAD
const posts = await prisma.post.findMany({
  select: {
    id: true,
    user: {
      select: {
        id: true,
      },
    },
  },
});

const comments = await prisma.comment.findMany({
  select: {
    id: true,
    user: {
      select: {
        id: true,
      },
    },
  },
});

const result = { posts, comments };
```

## GOOD

> user 테이블을 한번 조회하여 총 3번의 쿼리가 발생한다.

```ts
/// GOOD
const posts = await prisma.post.findMany({
  select: {
    id: true,
    userId: true,
  },
});

const comments = await prisma.comment.findMany({
  select: {
    id: true,
    userId: true,
  },
});

const userIds = [
  ...posts.map(post => {
    return post.userId;
  }),
  ...comments.map(comment => {
    return comment.userId;
  }),
];

const users = await prisma.user.findMany({
  select: {
    id: true,
  },
  where: {
    id: {
      in: userIds,
    },
  },
});

const usersById = new Map(
  users.map(user => {
    return [user.id, user];
  }),
);

const result = {
  posts: posts.flatMap(post => {
    const user = usersById.get(post.userId);
    return user ? [{ id: post.id, user }] : [];
  }),
  comments: comments.flatMap(comment => {
    const user = usersById.get(comment.userId);
    return user ? [{ id: comment.id, user }] : [];
  }),
};
```
