# nest interceptor

> 요청과 응답을 가로채서 변형할 수 있는 컴포넌트

## 인터셉터 생성

> NestInterceptor 인터페이스 구현
>
> > intercept 메소드에 로직 작성
> >
> > > 실행컨텍스트를 매개변수로 받을 수 있다.

```ts
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before...");

    const now = Date.now();
    return next
      .handle()
      .pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
```

## 인터셉터 사용

> UseInterceptors() 데코레이터 사용

```ts
@UseInterceptors(new LoggingInterceptor())
export class CatsController {}
```

## 전역 사용

> main.ts 부트스트랩 메소드에서 등록

```ts
const app = await NestFactory.create(AppModule);
app.useGlobalInterceptors(new LoggingInterceptor());
```
