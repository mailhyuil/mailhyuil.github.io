# nodejs websocket

> 웹소켓은 transport 계층(L4)이고 초기화시에만 핸드쉐이크를 위하여 http(L7)를 사용한다.

## server

```js
const http = require("http");
const port = 1337;

// when curl http:localhost://1337
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hey there");
});

server.on("upgrade", (req, socket, head) => {
  const id = Date.now();
  const headers = ["HTTP/1.1 101 Web Socket Protocol Handshake", "Upgrade: WebSocket", "Connection: Upgrade", ""]
    .map((line) => line.concat("\r\n"))
    .join("");

  socket.write(headers); // headers를 보내면 handshake가 된다.

  socket.on("data", (data) => {
    console.log("server got data : ", data.toString());
  });

  socket.on("end", (_) => {
    console.log(`${id} disconnected!`);
  });

  // keep sending messages
  setInterval(() => {
    socket.write("World!");
  }, 500);
});

// Now that server is running
server.listen(port, () => console.log("server runnig at", port));
```

## client

```js
// make a request
const options = {
  port: 1337,
  host: "localhost",
  headers: {
    Connection: "Upgrade",
    Upgrade: "websocket",
  },
};
const protocol = "http";
// if your protocol is https you will need to require https module instead of http
const http = require(protocol);
const req = http.request(options);
req.end();

req.on("upgrade", (res, socket, upgradeHead) => {
  console.log("got upgraded!");

  socket.on("data", (data) => {
    console.log("client got data : ", data.toString());
  });

  // keep sending messages
  setInterval(() => {
    socket.write("Hello!");
  }, 500);
});
```
