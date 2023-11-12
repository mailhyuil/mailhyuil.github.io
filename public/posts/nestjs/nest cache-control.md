# nest cache-control

## global Interceptor로 사용

### cache-control.interceptor.ts

```ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class CacheControlInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse();
        // no-store: 캐시로 절대 저장하지 않는다.
        // no-cache: 캐시를 사용하기 전 서버에서 검증
        // public: 모든 클라이언트, 프록시 서버가 응답을 캐시할 수 있다.
        // private: 클라이언트만 응답을 캐시할 수 있다.
        response.header("cache-control", "private, no-cache");
        // Return the modified response
        return data;
      })
    );
  }
}
```

### app.module.ts

```ts
providers: [
  AppService,
  {
    provide: APP_INTERCEPTOR,
    useClass: CacheControlInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: EtagInterceptor,
  },
],
```

## Header로 사용

```ts
@Header('Cache-Control', 'no-cache, no-store, must-revalidate')
```

## 데코레이터로 사용

```ts
/*
https://docs.nestjs.com/openapi/decorators#decorators
*/
import { applyDecorators, Header } from "@nestjs/common";

export function CacheControl(value?: string) {
  return applyDecorators(Header("cache-control", value ?? "no-cache"));
}
```
