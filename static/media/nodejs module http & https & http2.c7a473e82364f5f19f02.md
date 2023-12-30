# node module http & https & http2

## http

```js
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    // ...
    res.end();
  })
  .listen(8080, () => {
    console.log("8080 port");
  });
```

## https

```js
const https = require("https");
const fs = require("fs");

https
  .createServer(
    {
      cert: fs.readFileSync("도메인인증서경로"),
      key: fs.readFileSync("도메인비밀키경로"),
      ca: [fs.readFileSync("상위인증서경로"), fs.readFileSync("상위인증서경로")],
    },
    (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      // ...
      res.end();
    }
  )
  .listen(443, () => {
    console.log("443 port");
  });
```

## http2

```js
const http2 = require("http2");
const fs = require("fs");

http2
  .createSecureServer(
    {
      cert: fs.readFileSync("도메인인증서경로"),
      key: fs.readFileSync("도메인비밀키경로"),
      ca: [fs.readFileSync("상위인증서경로"), fs.readFileSync("상위인증서경로")],
    },
    (req, res) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      // ...
      res.end();
    }
  )
  .listen(443, () => {
    console.log("443 port");
  });
```
