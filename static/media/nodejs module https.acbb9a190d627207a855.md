# node module https

> nginx를 사용하지 않고 nodejs로 tls를 사용할 수 있다.
>
> > https 모듈을 사용하면 내부적으로 tls 모듈을 사용하여 https를 구현한다. (https.Server가 tls.Server를 상속받음)

## https

```js
const https = require("https");
const fs = require("fs");

https
  .createServer(
    {
      cert: fs.readFileSync("도메인인증서경로"), // crt
      key: fs.readFileSync("도메인비밀키경로"), // key
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
