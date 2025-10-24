# prisma infer type

```ts
// GetPayload
type PostPayload = Prisma.PostGetPayload<{ select: typeof postSelect }>;
// GetScalarType
type MyCountPayload = Prisma.GetScalarType<typeof countSelect, Prisma.UserCountAggregateOutputType>;
// GetAggregateType
type MyAggregatePayload = Prisma.GetUserAggregateType<typeof aggregateArgs>;
// GetGroupByPayload
type MyGroupByPayload = Awaited<Prisma.GetUserGroupByPayload<typeof groupByArgs>>;
```
