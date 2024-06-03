# prisma reusable query set

> 자주 사용되는 query를 모아두고 재사용 (DRY 원칙)

## post-query-set.ts

```ts
export const { isPublic, byAuthor, hasRecentComments } = {
  isPublic: () => ({
    published: true,
    deletedAt: null,
  }),
  byAuthor: (authorId: string) => ({
    authorId,
  }),
  hasRecentComments: (date: Date) => ({
    comments: {
      some: {
        createdAt: { gte: date },
      },
    },
  }),
} satisfies Record<string, (...args: any) => Prisma.PostWhereInput>; // Prisma.PostWhereInput 타입을 사용해서 미리 유효성 검사를 한다. // prevalidating, pretypechecking
```

## prisma

```ts
const posts = await prisma.post.findMany({
  where: {
    AND: [isPublic(), byAuthor(userID), hasRecentComments(yesterday)],
  },
});
```
