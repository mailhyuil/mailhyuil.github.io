# node-redis Sorted Set

> node-redis에서는 member를 value라고 부른다.

## usage

```ts
await client.zAdd("product", {
  value: "smartphone", // member
  score: parseInt(price, 16), // 16진수라면 10진수로 변환
});

await client.zRange(key, Date.now(), "+inf", {
  BY: "SCORE",
  LIMIT: {
    offset: 0,
    count: 10,
  },
});
```
