# angular takeUntilDestroyed

```ts
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

this.data$ = this.httpService.get<{ name: string }>("").pipe(takeUntilDestroyed());
```
