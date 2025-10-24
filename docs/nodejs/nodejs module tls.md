# nodejs module tls

> tls encryption layer를 구현하는 모듈
>
> > 어떤 프로토콜을 사용할지는 구현되지 않았기 때문에 tls를 사용하는 프로토콜을 구현해야 한다.
> >
> > > https 모듈을 사용하면 내부적으로 tls 모듈을 사용하여 https를 구현한다. (https.Server가 tls.Server를 상속받음)

```js
const tls = require("tls");

const options = {
  key: fs.readFileSync("server-key.pem"),
  cert: fs.readFileSync("server-cert.pem"),
};

const server = tls.createServer(options, socket => {
  socket.write("Hello, world!");
  socket.setEncoding("utf8");
  socket.on("data", data => {
    console.log(data);
  });
});
```
