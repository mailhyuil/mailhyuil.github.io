# nest middleware LoggingMiddleware

```ts
@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request...");
    next();
  }
}
```
