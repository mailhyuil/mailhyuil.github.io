# nest base interceptor 유저와 관련있는 리소스만 허용

```ts
@Injectable()
export class ForbiddenResourceInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map(data => {
        const user = req.user;
        if (data?.userId && !user?.roles?.includes("ADMIN") && user.id !== data.userId) throw new ForbiddenException();
        return data;
      }),
    );
  }
}
```
