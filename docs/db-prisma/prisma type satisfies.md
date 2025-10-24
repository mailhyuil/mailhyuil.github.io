# prisma type satisfies

```ts
const where = {
  user: {
    email: "mailhyuil@gmail.com",
  },
} satisfies Prisma.UserWhereInput; // Prisma.UserWhereInput 타입을 사용해서 미리 유효성 검사를 한다. // prevalidating, pretypechecking

const select = {
  id: true,
  email: true,
  name: true,
  posts: {
    select: {
      id: true,
      title: true,
    },
  },
} satisfies Prisma.UserSelect; // Prisma.UserSelect 타입을 사용해서 미리 유효성 검사를 한다. // prevalidating, pretypechecking

type UserPayload = Prisma.UserGetPayload<{ select: typeof select }>;
```
