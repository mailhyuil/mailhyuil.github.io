# node-redis pipeline

## node-redis 방식

> Promise.all을 사용

```ts
const res = await Promise.all([
  client.hGetAll("key1"), //
  client.hGetAll("key2"),
]);
```

## 다른 언어 (python) 방식

```py
client = redis.Redis()

pipe = client.pipeline()
pipe.get("key1")
pipe.get("key2")
res = pipe.execute()
```
