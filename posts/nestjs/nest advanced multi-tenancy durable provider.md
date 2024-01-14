## nest advanced multi-tenancy durable provider

> durable provider란?

```ts
import { Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.REQUEST, durable: true })
export class CatsService {}
```
