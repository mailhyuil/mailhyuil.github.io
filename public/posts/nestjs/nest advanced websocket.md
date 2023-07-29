# nest websocket

## install

```sh
npm i @nestjs/websockets @nestjs/platform-socket.io
```

## 사용

```ts
@WebSocketGateway(80, { namespace: "my_events", transports: ["websocket"] })
export class EventsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private logger: Logger = new Logger("AppGateway");

  afterInit(server: Server) {
    this.logger.log("Initialized");
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
```

## Module에 등록

```ts
@Module({
  providers: [EventsGateway],
})
export class EventsModule {}
```

## Subscribe 메소드

```ts
@SubscribeMessage('my_events')
handleEvent(
  @MessageBody() data: string,
  @ConnectedSocket() client: Socket,
): string {
  return data;
}
```

## Client App에서는

```ts
socket.emit("events", { name: "Nest" });
socket.emit("events", { name: "Nest" }, (data) => console.log(data));
socket.on("events", (data) => console.log(data));
```
