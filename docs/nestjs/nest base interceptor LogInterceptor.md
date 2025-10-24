# nest base interceptor LogInterceptor

## 구현

```ts
@Injectable()
export class LogInterceptor implements NestInterceptor {
  constructor(private readonly logger: MyLogger, private readonly logService: LogService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();

    return next.handle().pipe(
      tap(data => {
        if (req.method === "GET") return;
        const logData = {
          timestamp: new Date().toISOString(),
          message: data.message,
          method: req.method,
          path: req.url,
          statusCode: res.statusCode,
          // Add more relevant information as needed
        };
        this.logService.create(logData);
      }),
    );
  }
}
```
