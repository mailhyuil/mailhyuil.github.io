# server 생성

```js
import http from "http";

const server = http.createServer((res, req) => {
  console.log("server started!");
});

server.listen("8080");
```
