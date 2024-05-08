# nest websocket

## install

```sh
npm i @nestjs/websockets
npm i @nestjs/platform-socket.io

# angular client
npm i ngx-socket-io
```

## chat.gateway.ts

> websocket 서버를 열 port 지정

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
import { Server } from "http";
import { Socket } from "net";

@WebSocketGateway(8080, { transports: ["websocket"] })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {
  logger = new Logger(ChatGateway.name);
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("chat")
  handleEvent(@MessageBody() data: string) {
    console.log("from Client : ", data);
    this.server.emit("events", "from WebSocket Server : Nice to meet you too!");
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
import { provideHttpClient } from "@angular/common/http";
import { APP_INITIALIZER, ApplicationConfig, ErrorHandler, importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { Router, provideRouter, withViewTransitions } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import * as Sentry from "@sentry/angular-ivy";
import { SocketIoModule } from "ngx-socket-io";
import { SocketIoConfig } from "./../../../../node_modules/ngx-socket-io/src/config/socket-io.config.d";
import { appRoutes } from "./app.routes";
import { CountEffects } from "./store/count.effects";
import { countFeature } from "./store/count.feature";

const config: SocketIoConfig = {
  // server가 http://localhost:3000/api/v1을 사용하고 있더라도
  // websocket gateway의 post를 사용해야 한다.
  url: "ws://localhost:8080",
  options: {
    transports: ["websocket"],
  },
};

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom([SocketIoModule.forRoot(config)])],
};
```

### usage

```ts
socket.emit("chat", "Hello World");
socket.emit("chat", { message: "Hello World" }, (data) => console.log(data));
socket.on("chat", (data) => console.log(data));
```
