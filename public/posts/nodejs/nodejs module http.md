# nodejs module http

> net 모듈을 기반으로 http 서버를 만들 수 있는 모듈

```js
import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("hi");
});

const PORT = 4000;

server.listen(port, () => {
  console.log(`The server is listening at port : ${PORT}`);
});
```
