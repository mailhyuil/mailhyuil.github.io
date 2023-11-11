# nestjs Etag

> nestjs는 etag를 자동으로 생성해줍니다.

## Interceptor 구현

```ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class EtagInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    const oldEtag = request.headers["if-none-match"]; // 요청 헤더의 ETag 값을 가져옵니다.
    return next.handle().pipe(
      tap((data) => {
        const currentEtag = etag(data);
        if (oldEtag && oldEtag === currentEtag) {
          response.status(304).send(); // ETag가 일치하면 304 응답을 반환합니다.
        }
      })
    );
  }
}
```

## main.ts

```ts
app.useGlobalInterceptors(new EtagInterceptor());
```
