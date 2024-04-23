# nodejs websocket socketIO

> websocket을 쉽게 구현해주는 프레임워크
>
> > 웹소켓은 transport 계층(L4)이고 초기화시에만 핸드쉐이크를 위하여 http(L7)를 사용한다.

## install

```sh
npm i socket.io-client // 프론트엔드 서버
npm i socket.io // 백엔드 서버
```

## 백엔드

```js
const server = app.listen(config.host.port);

const wsServer = new Server(server, {
  cors: {
    origin: "*",
  },
});

wsServer.on("connection", (socket) => {
  console.log("Client is here!!");
  socket.emit("my-event", (msg, done) => {
    console.log(msg);
    done("I just got it!!"); // 프론트엔드에서 받은 콜백함수 실행
  });
  socket.emit("my-event", "data");
});
```

## socket.join()

> chat room을 구현할 수 있는 기능

```js
wsServer.on("connection", (socket) => {
  socket.onAny((event) => {
    console.log(`Socket Event: ${event}`);
  });
  socket.on("join_room", (roomName) => {
    console.log(socket.id); // socket의 고유 id // private room 같은
    console.log(socket.rooms);
    socket.join(roomName);
    socket.to(roomName).emit("welcome");
  });

  socket.to(roomName).emit("bye"); // roomName에 있는 모든 socket에게 메시지 전송
});
```

## 프론트엔드

```js
const socket = io(SERVER_URL);

socket.emit("my-event", { payload: "value" }, (response) => {
  console.log(response);
});

socket.on("my-event", (msg) => {
  console.log(msg);
});
```
