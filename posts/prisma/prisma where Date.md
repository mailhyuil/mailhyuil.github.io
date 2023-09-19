# prisma where date

```ts
createdAt: {
  gte: dayjs(option.date).startOf('day').toDate(),
  lte: dayjs(option.date).hour(23).minute(59).second(59).toDate(),
},
```
