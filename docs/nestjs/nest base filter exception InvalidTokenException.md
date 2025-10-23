# InvalidTokenException

```ts
import { HttpException } from "@nestjs/common";

export class InvalidTokenException extends HttpException {
  constructor() {
    super("유효하지 않은 토큰입니다.", 498);
  }
}
```
