# angular ssr req cookies

> cookie-parser를 사용해야 req.cookies로 접근 가능

```ts
const server = express();
server.use(cookieParser());
```
