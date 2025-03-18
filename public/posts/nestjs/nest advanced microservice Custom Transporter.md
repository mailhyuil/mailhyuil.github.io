# nest advanced Custom transporters

> @nestjs/microservices의 기능을 전부 사용할 필요가 없을 시 일부만 커스텀해서 사용 가능
>
> > transport는 데이터를 전송해주는 인터페이스다. e.g. redis에게 데이터를 전송하기 위해서 redis transport를 사용한다.

## usage

```ts
import { CustomTransportStrategy, Server } from "@nestjs/microservices";

class GoogleCloudPubSubServer extends Server implements CustomTransportStrategy {
  /**
   * Triggered when you run "app.listen()".
   */
  listen(callback: () => void) {
    callback();
  }

  /**
   * Triggered on application shutdown.
   */
  close() {}

  /**
   * You can ignore this method if you don't want transporter users
   * to be able to register event listeners. Most custom implementations
   * will not need this.
   */
  on(event: string, callback: Function) {
    throw new Error("Method not implemented.");
  }

  /**
   * You can ignore this method if you don't want transporter users
   * to be able to retrieve the underlying native server. Most custom implementations
   * will not need this.
   */
  unwrap<T = never>(): T {
    throw new Error("Method not implemented.");
  }
}
```
