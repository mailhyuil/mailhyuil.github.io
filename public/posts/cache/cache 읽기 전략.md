# cache 읽기 전략

## cache-aside (look-aside)

> 캐시된 데이터가 있는지 우선적으로 확인
>
> > 반복적인 읽기가 많은 호출에 적합

```js
const cache = require("memory-cache");

async function getDataFromCache(key) {
  let data = cache.get(key);
  if (!data) {
    data = await fetchDataFromSource();
    cache.put(key, data, 60000); // Cache for 60 seconds
  }
  return data;
}
```

## read-through

> cache-aside와 비슷
>
> > 캐시에서만 데이터를 읽음 db에서는 읽지 않음
> >
> > > 캐시서버에 데이터 확인 -> 없으면 db에서 데이터를 가져옴 -> 캐시에서 데이터를 가져옴
