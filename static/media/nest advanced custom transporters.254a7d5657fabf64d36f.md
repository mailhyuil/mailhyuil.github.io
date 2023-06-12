# nest advanced Custom transporters

> @nestjs/microservices의 기능을 전부 사용할 필요가 없을 시 일부만 커스텀해서 사용 가능
>
> > transport === 데이터 전송

## 사용

```
import { CustomTransportStrategy, Server } from '@nestjs/microservices';

class GoogleCloudPubSubServer
  extends Server
  implements CustomTransportStrategy {
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
