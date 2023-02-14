# prisma where

> Prisma.[Name]WhereInput

## 사용

```ts
const where: Prisma.PostWhereInput = {
  title: { contains: option.query },
  content: { contains: option.query },
  createdAt: {
    gte: dayjs(option.startDate).add(9, "hour").toDate(),
    lte: dayjs(option.endDate).add(9, "hour").toDate(),
  },
};

if (option.status !== "ALL") {
  where.type = { in: PostType[option.status] }; // where 객체에 값을 할당 // where.type의 값이 없으면 필터링 안함
}
```

## filters

> field(column) 안에 들어간다

```
equals
not

in
notIn

lt // less than
lte // less than or equal
gt // greater than
gte // greater than or equal

contains
search // search: 'cat & dog',

mode

startsWith
endsWith

AND
OR
NOT

some
every
none
is
isNot
```
