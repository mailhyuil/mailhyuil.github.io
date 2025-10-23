# nest forbidden interceptor

```ts
import { CallHandler, ExecutionContext, ForbiddenException, Injectable, NestInterceptor } from "@nestjs/common";
import { Role } from "@prisma/client";
import { Observable, tap } from "rxjs";
import { UserDTO } from "../../user/user.dto";

@Injectable()
export class ForbiddenResourceInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const user = req.user;
    return next.handle().pipe(
      tap(data => {
        if (user.roles.includes(Role.ADMIN)) return data;

        if (data instanceof UserDTO && data.id !== user.id) {
          throw new ForbiddenException("접근할 수 없는 리소스입니다.");
        }
      }),
    );
  }
}
```
