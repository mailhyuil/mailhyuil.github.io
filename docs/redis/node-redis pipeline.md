# node-redis pipeline

> 네트워크 효율을 위해서 한번에 보내는 방식
>
> > transaction과는 다르다.

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
