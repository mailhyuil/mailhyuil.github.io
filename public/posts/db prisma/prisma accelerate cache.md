# prisma accelerate cache

> Prisma Postgres supports built-in query caching to reduce database load and improve query performance.

## usage

```ts
await prisma.user.findMany({
  cacheStrategy: {
    ttl: 60,
  },
});
```
