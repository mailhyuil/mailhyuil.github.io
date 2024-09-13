# nest session redis

## install

```sh
npm i express-session
npm i -D @types/express-session
```

## main.ts

```ts
import * as session from "express-session";
// somewhere in your initialization file
app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({
      client: redisClient,
      ttl: 30 * 60, // seconds
    }),
  })
);
```
