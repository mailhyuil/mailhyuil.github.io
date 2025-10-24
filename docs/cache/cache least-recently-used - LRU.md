# least-recently-used (LRU)

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
