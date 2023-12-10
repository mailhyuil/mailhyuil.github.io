# cache pattern

## cache-aside

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

## time-based-expiration

> ttl을 설정

```js
const Cache = require("node-cache-expire");
const cache = new Cache();

function getDataFromCache(key) {
  const cachedData = cache.get(key);
  if (cachedData) {
    return cachedData;
  }

  const fetchedData = fetchDataFromSource();
  cache.put(key, fetchedData, 60); // Cache for 60 seconds

  return fetchedData;
}
```

## least-recently-used (LRU)

> 가장 오랫동안 사용되지 않은 데이터를 제거

```js
const LRU = require("lru-cache");
const cache = new LRU({ max: 100, maxAge: 60000 });

function getDataFromCache(key) {
  const cachedData = cache.get(key);
  if (cachedData) {
    return cachedData;
  }

  const fetchedData = fetchDataFromSource();
  cache.set(key, fetchedData);

  return fetchedData;
}
```

## cache-through

```js

```
