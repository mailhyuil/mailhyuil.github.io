# nestjs decorator cache-control

```ts
import { applyDecorators, Header } from "@nestjs/common";

export function CacheControl(value?: string) {
  return applyDecorators(Header("cache-control", value ?? "no-cache"));
}
```
