# angular SSR TransferState

> BrowserTransferStateModule to app.module.ts
>
> > ServerTransferStateModule to app.server.module.ts.

```ts
import { makeStateKey, TransferState } from "@angular/platform-browser";
import { Injectable } from "@angular/core";
@Injectable()
export class SomeService {
  constructor(private transferState: TransferState) {}

  setState<T>(key: string, data: any): void {
    this.transferState.set<T>(makeStateKey(key), data);
  }

  getState<T>(key: string, defaultValue: any = []): T {
    const state = this.transferState.get<T>(makeStateKey(key), defaultValue);
    this.transferState.remove(makeStateKey(key));
    return state;
  }

  hasState<T>(key: string) {
    return this.transferState.hasKey<T>(makeStateKey(key));
  }
}
```
