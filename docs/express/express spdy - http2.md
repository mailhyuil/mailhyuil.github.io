# express spdy (http2)

> 스피디
>
> > 구글이 개발한 HTTP/2 프로토콜을 지원하는 모듈이다.

## app.js

```js
const express = require("express");
const spdy = require("spdy");
const fs = require("fs");

const PORT = 8000;
const CERT_DIR = `${__dirname}/cert`;
const useSSL = !!process.env.SSL;

const app = express();

app.get("/", (_, res) => {
  res.send("hello world");
});

function createServer() {
  if (!useSSL) {
    return app;
  }
  return spdy.createServer(
    {
      key: fs.readFileSync(`${CERT_DIR}/server.key`),
      cert: fs.readFileSync(`${CERT_DIR}/server.cert`),
    },
    app
  );
}

const server = createServer();

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log(`SSL ${useSSL ? "enabled" : "disabled"}`);
});
```

## generate-cert.sh

```sh
#!/bin/bash
openssl req  -nodes -new -x509  \
    -keyout ./cert/server.key \
    -out ./cert/server.cert \
    -subj "/C=US/ST=State/L=City/O=company/OU=Com/CN=www.testserver.local"
```

## run

```sh
SSL=true node app.js
```
