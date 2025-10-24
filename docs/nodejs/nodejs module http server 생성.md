# nodejs module http server 생성

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

## createServer res

```txt
res.statusCode
res.end
res.setHeaders
```

## createServer req

```txt
req.url
req.method
req.on('data',(data)=>{})
req.setEncoding("utf-8")
```
