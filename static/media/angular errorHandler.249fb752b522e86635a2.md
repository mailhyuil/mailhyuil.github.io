# angular errorHandler

## ErrorHandler

> 전역 에러 핸들

```ts
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.error(error);
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
