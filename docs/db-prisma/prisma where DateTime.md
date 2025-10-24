# prisma where DateTime

```js
createdAt: {
  gte: dayjs(options.startDate).startOf('day').toDate(),
  lte: dayjs(options.endDate).endOf('day').toDate(),
}
```
