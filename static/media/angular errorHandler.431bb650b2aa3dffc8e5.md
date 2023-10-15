# angular errorHandler

> 전역까지 에러가 퍼지면 프로그램이 멈춘다.
>
> > 에러를 catch해야 프로그램이 안 멈추고 계속 실행된다.

## ErrorHandler

> 전역 에러 핸들

```ts
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { ErrorDialogService } from '../../shared/errors/error-dialog.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private errorDialogService: ErrorDialogService,
    private zone: NgZone
  ) {}

  handleError(error: any) {
    // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection; // get the error object
    }

    this.zone.run(() =>

    );

    console.error('Error from global error handler', error);
  }
}
```

## AppModule

```ts
@NgModule({
  providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }],
})
class MyModule {}
```
