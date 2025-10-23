# nest exception TooManyRequests

```ts
import { HttpException } from "@nestjs/common";

export class TooManyRequestsException extends HttpException {
  constructor() {
    super("너무 많은 요청을 보냈습니다. 잠시 후 다시 시도해주세요.", 429);
  }
}
```
