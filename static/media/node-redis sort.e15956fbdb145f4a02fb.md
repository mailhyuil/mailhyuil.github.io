# node-redis sort

```ts
await client.sort(key, {
  GET: [
    "#", // member
    "items:*->title", // title
    "items:*->year", // year
  ],
  BY: "nosort",
  DIRECTION: "DESC",
  LIMIT: {
    offset: 0,
    count: 10,
  },
});
```
