# angular errorHandler

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
