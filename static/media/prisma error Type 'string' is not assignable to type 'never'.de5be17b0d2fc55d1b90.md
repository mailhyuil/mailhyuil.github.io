# prisma error Type 'string' is not assignable to type 'never'

## error

```ts
/// error Type 'string' is not assignable to type 'never'
const created = await this.prisma.some.create({
  data: {
    ...data,
  },
});
```

## ok

> userId를 제거해서 connect로

```ts
/// ok
const { userId, ...rest } = data;

const created = await this.prisma.some.create({
  data: {
    ...rest,
    user: {
      connect: {
        id: userId,
      },
    },
  },
});
```
