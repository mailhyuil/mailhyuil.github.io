# angular base ErrorHandler GlobalErrorHandler

> Error 인스턴스만 잡는다.
>
> > HttpClient에서 발생하는 HttpErrorResponse는 Error를 상속하지 않아서 잡지않는다.

## global-error.handler.ts

```ts
import { ErrorHandler, inject, Injectable, Injector } from "@angular/core";
import { type ModalService, type ToastService } from "@mailhyuil/ng-libs";
import { UserFriendlyError } from "./user-friendly.error";

@Injectable({
  providedIn: "root",
})
export class FinalErrorHandler implements ErrorHandler {
  injector = inject(Injector);
  toastService?: ToastService;
  modalService?: ModalService;

  // zoneless 사용 시 error catch가 아직 지원되지 않음
  // 임시로 window event로 대체
  constructor() {
    window.addEventListener("error", e => {
      this.handleError(e.error);
      e.preventDefault();
    });
    window.addEventListener("unhandledrejection", async e => {
      this.handleError(e.reason);
      e.preventDefault();
    });
  }

  async handleError(error: Error): Promise<void> {
    const { ToastService, ModalService, ModalComponent } = await import("@mailhyuil/ng-libs");
    if (!this.toastService) this.toastService = this.injector.get(ToastService);
    if (!this.modalService) this.modalService = this.injector.get(ModalService);
    if (error instanceof UserFriendlyError) {
      const message = error.message;
      if (message.includes("\n") || message.length > 25) {
        this.modalService.create({
          component: ModalComponent,
          componentProps: {
            title: "🚨 알림",
            content: message,
            format: "text",
          },
        });
      } else {
        this.toastService.openDanger(error.message);
      }
    }
    console.error(error);
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
