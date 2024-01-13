## nest advanced multi-tenancy durable provider

```ts
import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST, durable: true })
export class CatsService {}
```
