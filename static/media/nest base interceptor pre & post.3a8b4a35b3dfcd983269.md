# nest interceptor pre & post

> interceptor는 pre-interceptor와 post-interceptor로 나뉜다.

```ts
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("컨트롤러에 들어가기 전 영역");

    return next.handle().pipe(
      tap(() => {
        console.log("컨트롤러에서 나온 후 영역");
      })
    );
  }
}
```
