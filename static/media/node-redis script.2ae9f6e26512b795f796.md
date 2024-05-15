# node-redis script

## lua script

```lua

```

## usage

```js
import redis from "redis";

const client = redis.createClient({
  url: process.env["REDIS_URL"],
  scripts: {
    addOneAndStore: redis.defineScript({
      NUMBER_OF_KEYS: 1,
      SCRIPT: `
        return redis.call('SET', KEYS[1], 1 + tonumber(ARGV[1]))
      `,
    }),
  },
});
```
