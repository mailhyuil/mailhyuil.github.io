# nest interceptor pre & post

> interceptor는 pre-interceptor와 post-interceptor로 나뉜다.

```ts
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    console.log("컨트롤러에 들어가기 전 영역");

    return next.handle().pipe(
      map(data => {
        console.log("컨트롤러에서 나온 후 영역");
        console.log("리턴된 데이터", data);
        return data;
      }),
    );
  }
}
```
