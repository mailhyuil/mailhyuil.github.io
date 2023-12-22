# http connection 유지

> 브라우저에서 Connection: keep-alive 헤더를 보내면 nodejs 서버는 자동으로 5초간 연결을 유지
>
> > 시간을 늘리고 싶다면 server.keepAliveTimeout 값을 변경
> >
> > > aws alb를 사용시 502 에러가 발생하면 서버의 keepAliveTimeout 값을 늘려야 한다.

```js
server.keepAliveTimeout = 61 * 1000;
server.headersTimeout = 65 * 1000; // This should be bigger than `keepAliveTimeout + your server's expected response time`
```

```js
var express = require("express");
var app = express();
var server = app.listen(5001);

server.on("connection", function (socket) {
  console.log("A new connection was made by a client.");
  socket.setTimeout(30 * 1000);
  // 30 second timeout. Change this as you see fit.
});
```
