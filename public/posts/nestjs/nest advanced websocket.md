# nest websocket

## install

```sh
npm i @nestjs/websockets
npm i @nestjs/platform-socket.io
```

## 사용

> websocket 서버를 열 url 지정
>
> > namespace = @Controller('my_events') 와 같은 역할
> >
> > > websocket cors는 따로 지정해줘야함

```ts
@WebSocketGateway(3001, { namespace: "my_events", cors: true })
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
@SubscribeMessage('handleEvent')
handleEvent(
  @MessageBody() data: string,
  @ConnectedSocket() client: Socket,
): string {
  return data;
}
```

## Client App에서는

> config에 서버의 url을 지정해주기

```ts
socket.emit("events", { name: "Nest" });
socket.emit("events", { name: "Nest" }, (data) => console.log(data));
socket.on("events", (data) => console.log(data));
```
