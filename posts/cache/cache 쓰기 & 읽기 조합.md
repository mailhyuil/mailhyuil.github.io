# cache 읽기 + 쓰기 전략

## cache-aside + write-around

> 가장 일반적인 전략

```js
const cache = require("memory-cache");

async function getDataFromCache(key) {
  // cache-aside
  let data = cache.get(key);
  // cache-miss
  if (!data) {
    data = await fetchDataFromSource();
    // write-around
    cache.put(key, data, 60000);
  }
  return data;
}
```

## read-through + write-around

## read-through + write-through
