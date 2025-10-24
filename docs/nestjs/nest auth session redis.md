# nest auth session redis

> 분산 시스템에서는 세션을 각 메모리의 서버에 저장하는 경우 로드 밸런싱으로 인한 문제가 발생할 수 있다.
>
> > 이를 해결하기 위해서 redis와 같은 외부 저장소에 세션을 저장한다.
> >
> > 혹은 sticky session을 사용한다.

## install

```sh
npm i express-session
npm i -D @types/express-session
```

## main.ts

```ts
import * as session from "express-session";

app.use(
  session({
    secret: process.env["SESSION_SECRET"],
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({
      client: redisClient,
      ttl: 30 * 60, // seconds
    }),
  }),
);
```
