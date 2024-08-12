# angular ErrorHandler GlobalErrorHandler

> Error 인스턴스만 잡는다.
>
> > HttpClient에서 발생하는 HttpErrorResponse는 Error를 상속하지 않아서 잡지않는다.

## global-error.handler.ts

```ts
import { ToastService } from "@/common";
import { ErrorHandler, inject, Injectable } from "@angular/core";
import { UserFriendlyError } from "./user-friendly.error";

@Injectable({
  providedIn: "root",
})
export class GlobalErrorHandler implements ErrorHandler {
  toastService = inject(ToastService);
  handleError(error: any): void {
    if (error instanceof UserFriendlyError) {
      this.toastService.openDanger(error.message);
    }
  }
}
```

## user-friendly.error.ts

```ts
export class UserFriendlyError extends Error {
  constructor(message: string) {
    super(message);
  }
}
```
