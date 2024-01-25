# prisma satisfies

> prisma의 타입 추론이 잘 안되는 경우에 사용할 수 있는 타입 체커

```ts
const where = {} satisfies Prisma.UserWhereInput;
const select = {} satisfies Prisma.UserSelect;

type UserPayload = Prisma.UserGetPayload<{ select: typeof select }>;
```
