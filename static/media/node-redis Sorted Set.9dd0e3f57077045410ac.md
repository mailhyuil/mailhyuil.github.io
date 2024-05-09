# node-redis

> node-redis에서는 member를 value라고 부른다.

## usage

```ts
await client.zAdd(key, {
  value: "value", // member
  score: 1,
});
```
