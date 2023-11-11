# nest cache-control

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

## global Interceptor로 사용

### cache-control.interceptor.ts

```ts
@Injectable()
export class CacheControlInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        const response = context.switchToHttp().getResponse();
        // Add or modify headers in the response
        response.header("cache-control", "no-cache");
        // Return the modified response
        return data;
      })
    );
  }
}
```

### main.ts

```ts
app.useGlobalInterceptors(new CacheControlInterceptor());
```
