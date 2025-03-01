# nestjs cache NeverCache decorator

```ts
import { applyDecorators, Header } from "@nestjs/common";

export function CacheControl(value?: string) {
  return applyDecorators(Header("cache-control", "no-cache, no-store, must-revalidate"), Header("pragma", "no-cache"));
}
```
