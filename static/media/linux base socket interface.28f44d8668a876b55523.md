# linux socket interface

> socket api
>
> > 운영체제가 제공하는 소켓 인터페이스 (이 인터페이스를 사용하여 node, python, java 등의 언어로 소켓 프로그래밍을 할 수 있다)
> >
> > > TCP/IP 표준이 아니다 (리눅스, 윈도우.. 다르다)

## nodejs 예시

```js
const net = require("net");

const server = net.createServer((socket) => {
  console.log("클라이언트가 연결되었습니다.");

  socket.on("data", (data) => {
    console.log(`수신한 데이터: ${data}`);
    socket.write(`서버가 수신한 데이터: ${data}`);
  });

  socket.on("end", () => {
    console.log("클라이언트 연결이 종료되었습니다.");
  });
});

const PORT = 12345;

server.listen(PORT, () => {
  console.log(`에코 서버가 포트 ${PORT}에서 실행 중입니다.`);
});
```
