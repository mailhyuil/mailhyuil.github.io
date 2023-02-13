# prisma where

> Prisma.[Name]WhereInput

## 사용

```ts
{
    title: { contains: option.query },
    createdAt: {
        lte: dayjs(option.endDate).add(9, 'hour').toDate(),
        gte: dayjs(option.startDate).add(9, 'hour').toDate(),
    },
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
