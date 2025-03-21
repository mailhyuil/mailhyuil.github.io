# nest websocket

## install

```sh
npm i @nestjs/websockets
npm i @nestjs/platform-socket.io

# angular client
npm i ngx-socket-io
```

## chat.gateway.ts

> @WebSocketGateway()에 websocket 서버를 열 port 지정
>
> > 기본은 nestjs server port를 사용

```ts
import { Logger } from "@nestjs/common";
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
  path: "/ws", // default: /socket.io
  namespace: "chat",
})
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
  logger = new Logger(ChatGateway.name);
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("join")
  handleJoin(@MessageBody() data: string) {
    this.server.on("connection", socket => {
      socket.join("room:1");
      this.server.to("room:1").emit("message", data);
    });
  }

  @SubscribeMessage("text")
  handleEvent(@MessageBody() data: string, @ConnectedSocket() client: Socket) {
    client.join("room:1");
    this.server.to("room:1").emit("message");
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log("User connected");
  }

  handleDisconnect(client: Socket) {
    this.logger.log("User disconnected");
  }

  afterInit(server: Server) {
    this.logger.log("Socket is live");
  }
}
```

## chat.module.ts

> bugfix: ChatModule과 AppModule에 모두 ChatGateway가 등록되어 있으면 커넥션이 두개가 생성됨

```ts
@Module({
  providers: [ChatGateway],
})
export class ChatModule {}
```

## angular client

### app.config.ts

```ts
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

const config: SocketIoConfig = {
  url: "ws://localhost:3000/chat", // 끝에 namespace를 붙여줘야함
  options: {
    transports: ["websocket"],
    path: "/ws", // default: /socket.io
  },
};

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom([SocketIoModule.forRoot(config)])],
};
```

### usage

```ts
import { Socket } from "ngx-socket-io";

socket = inject(Socket);
socket.emit("chat", "Hello World");
socket.emit("chat", { message: "Hello World" }, data => console.log(data));
socket.on("message", data => console.log(data));
```

## nginx

```conf
# ws
location /ws/ {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_buffering off;
    gzip off;
    proxy_pass http://127.0.0.1:10018;
}
```
