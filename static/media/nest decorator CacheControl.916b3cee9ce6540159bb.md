# nestjs decorator cache-control

```ts
/*
https://docs.nestjs.com/openapi/decorators#decorators
*/
import { applyDecorators, Header } from "@nestjs/common";

export function CacheControl(value?: string) {
  return applyDecorators(Header("cache-control", value ?? "no-cache"));
}
```
