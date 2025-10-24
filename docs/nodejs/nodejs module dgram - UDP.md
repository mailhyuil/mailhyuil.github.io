# nodejs module dgram - UDP

> UDP 소켓을 다룰 수 있는 모듈
>
> > dgram = 데이터그램 = UDP에서 IP로 데이터를 보내는 단위
> >
> > > 브라우저에서 UDP를 사용하기 위해서는 WebRTC를 사용 (WebRTC는 UDP 레이어 위에서 작동)

```js
const dgram = require("dgram");

// UDP 서버
const server = dgram.createSocket("udp4"); // socket 생성

server.on("message", (msg, rinfo) => {
  // 메시지 수신 이벤트 리스너
  console.log(`서버로부터 메시지 수신: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`UDP 서버가 ${address.address}:${address.port}에서 실행 중입니다.\r\n`);
});

server.bind(8080); // UDP 서버를 8080 포트에 바인딩

// UDP 클라이언트
const client = dgram.createSocket("udp4"); // socket 생성

const msg = "안녕하세요. 클라이언트입니다.";
const id = setInterval(() => {
  client.send(msg, 8080, "localhost", (err) => {
    if (err) {
      console.error(err);
    }
  });
}, 100);

setTimeout(() => {
  clearInterval(id);
  console.log("클라이언트를 종료합니다.");
  client.close();
}, 3000);
```
