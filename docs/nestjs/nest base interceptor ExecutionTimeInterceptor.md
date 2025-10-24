# nest base interceptor ExecutionTimeInterceptor

## 구현

```ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class ExecutionTimeInterceptor implements NestInterceptor {
  logger = new Logger(ExecutionTimeInterceptor.name);
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    return next.handle().pipe(
      tap(() => {
        const executionTime = Date.now() - start;
        this.logger.log(`[${context.getClass().name}] ${context.getHandler().name} executed in ${executionTime}ms`);
      }),
    );
  }
}
```
