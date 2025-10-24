# nodejs module net - TCP

> 소켓을 사용하여 TCP 계층의 서버와 클라이언트를 만들 수 있는 모듈
>
> > TCP 소켓을 다룰 수 있다.
> >
> > > PORT 대신 Unix Socket 파일을 사용하면 IPC를 구현할 수 있다.

```js
// TCP 서버
const net = require("net");

const server = net.createServer((socket) => {
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

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`서버가 ${PORT} 포트에서 대기 중입니다.`);
});
```
