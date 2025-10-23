# node-redis HGETALL, HSET 사용 시 주의사항

## HSET

> HSET은 json을 받아서 배열로 변환할 때 내부적으로 HGETALL을 사용한다.
>
> > HGETALL은 배열을 반환면서 value에 toString() 메소드를 사용하는데 값이 null이나 undefined일 경우 에러가 발생한다.
> >
> > > null이나 undefined 대신 빈 문자열을 사용해라

```js
client.hSet("cats:1", {
  name: "hyuil",
  age: 4,
  contacts: null || "",
  siblings: undefined || "",
});
```

## HGETALL

> 존재하지 않는 key를 조회하면 null이나 undefined가 아닌 {} 를 반환한다.
>
> > 따라서 if(!result)로 체크하면 항상 true가 된다.
> >
> > > Object.keys(result).length === 0으로 체크해라

```js
const result = await client.hGetAll("cats:1");

if (Object.keys(result).length === 0) {
  // ...
  return;
}

return result;
```
