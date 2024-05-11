# node-redis sort

```ts
await client.sort(key, {
  GET: [
    "#",
    "key:*->field_name", // sort by hash field
  ],
  BY: "score",
});
```
