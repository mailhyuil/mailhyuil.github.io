# angular websocket

## install

```sh
npm i ws
npm i -D @types/ws
# or
npm i socket.io
npm i socket.io-client
npm i -D @types/socket.io
# or
npm i ngx-socket-io
```

## module

```ts
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";

// url : server websocket url
const config: SocketIoConfig = { url: "http://localhost:3001", options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## service

```ts
import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";
import { map } from "rxjs/operators";

@Injectable()
export class ChatService {
  constructor(private socket: Socket) {}

  sendMessage(msg: string) {
    this.socket.emit("message", msg, data => console.log(data.returnedMsg));
  }
  getMessage() {
    return this.socket.fromEvent("message").pipe(map(data => data.msg));
  }
}
```
