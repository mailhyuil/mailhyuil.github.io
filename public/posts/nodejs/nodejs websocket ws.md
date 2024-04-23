# nodejs websocket ws

> 웹소켓은 transport 계층(L4)이고 초기화시에만 핸드쉐이크를 위하여 http(L7)를 사용한다.

## install

```sh
npm i ws
```

## 백엔드

```js
import WebSocket from "ws";

const server = http.createServer(app);

const wsServer = new WebSocket.Server({ server });
// const wsServer = new WebSocket.Server({ port: 8080 }); // http 서버가 없다면 이렇게 사용

const sockets = [];

wsServer.on("connection", (socket) => {
  console.log("Connected to Browser ✅");
  sockets.push(socket); // connection된 socket을 배열에 저장

  socket.on("message", (message) => {
    console.log(message.toString("utf8"));
    sockets.forEach((aSocket) => aSocket.send(message.toString("utf8"))); // connection된 모든 socket에게 메시지 전송
  });

  socket.on("close", () => console.log("Disconnected from the Browser ❌"));
  //   socket.send("data"); // 모든 클라이언트에게 메시지 전송
});
```

## 프론트엔드

```js
const socket = new WebSocket(`ws://${window.location.host}`);
// const socket = new WebSocket("ws://localhost:8080");

const send = () => {
  socket.send("hello from the Browser!");
};

socket.addEventListener("open", () => {
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
  console.log("New message: ", message.data);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server ❌");
});
```
