# nodejs module net (Unix Socket, IPC)

> Unix Socket 파일을 통해 IPC를 구현
>
> > Unix 소켓을 다룰 수 있다.

```js
const net = require("net");

// This server listens on a Unix socket at /var/run/mysocket
const server = net.createServer(function (client) {
  // 소켓 연결이 발생할 때 실행되는 콜백 함수
  console.log(`클라이언트가 연결되었습니다. 소켓 주소: ${socket.remoteAddress}:${socket.remotePort}`);

  // 데이터가 도착할 때 실행되는 이벤트 핸들러
  socket.on("data", (data) => {
    console.log(`받은 데이터: ${data}`);
  });

  // 소켓이 닫힐 때 실행되는 이벤트 핸들러
  socket.on("close", () => {
    console.log(`클라이언트 소켓이 닫혔습니다.`);
  });
});

/// Unix Socket 파일을 통해 IPC를 구현
server.listen("/var/run/process.sock");
```
