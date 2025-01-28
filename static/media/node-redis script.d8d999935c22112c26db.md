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
    unlock: redis.defineScript({
      NUMBER_OF_KEYS: 1,
      SCRIPT: `
        local key = KEYS[1]
        local token = ARGV[1]
        
        if redis.call('GET', key) == token then
          return redis.call('DEL', key)
        else
          return 0
        end
      `,
      transformArguments: (key, value) => {
        return [key, value];
      },
      transformReply: (reply) => {
        return reply;
      },
    }),
    addOneAndStore: redis.defineScript({
      NUMBER_OF_KEYS: 1,
      SCRIPT: `
        local key = KEYS[1]
        local value = tonumber(ARGV[1])
        
        return redis.call('SET', key, value + 1)
      `,
      transformArguments: (key, value) => {
        return [key, value.toString()];
        // EVALSHA <id> 1 <key> <value>
      },
      transformReply: (reply) => {
        return reply;
      },
    }),
  },
});
```
