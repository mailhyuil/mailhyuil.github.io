# nest advanced Custom transporters

> @nestjs/microservices의 기능을 전부 사용할 필요가 없을 시 일부만 커스텀해서 사용 가능
>
> > transport는 데이터를 전송해주는 인터페이스다. e.g. redis에게 데이터를 전송하기 위해서 redis transport를 사용한다.

## 사용

```ts
import { CustomTransportStrategy, Server } from "@nestjs/microservices";

class GoogleCloudPubSubServer extends Server implements CustomTransportStrategy {
  /**
   * This method is triggered when you run "app.listen()".
   */
  listen(callback: () => void) {
    callback();
  }

  /**
   * This method is triggered on application shutdown.
   */
  close() {}
}
```
