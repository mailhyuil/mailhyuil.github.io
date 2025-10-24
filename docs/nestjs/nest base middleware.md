# nest base middleware

> 쿠키파싱, 세션관리, 본문, 파싱, \*인증에 사용
>
> > 요청에 대한 주어진 작업을 수행할 뿐
> >
> > > 컨텍스트에 접근할 수 없다
> > >
> > > > 인증 = 미들웨어 // 인가 = 가드

## 미들웨어 생성

> NestMiddleware 인터페이스 구현
>
> > use 메소드에 미들웨어의 작업 로직 추가 후 next() 호출

```ts
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request...");
    next();
  }
}
```

## 미들웨어 적용

> 미들웨어를 모듈에 포함시키려면 NestModule 인터페이스를 구현해야한다.
>
> > 매개변수로 전달되는 MiddlewareConsumer로 미들웨어 등록

```ts
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) // 미들웨어 등록
      .forRoutes("cats"); // 미들웨어가 작업을 수행할 라우팅 경로
  }
}
```

## 전역에 사용

> main.ts 의 부트스트랩 메소드에 추가

```ts
const app = await NestFactory.create(AppModule);
app.use(logger);
await app.listen(3000);
```
