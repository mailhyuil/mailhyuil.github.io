# nest interceptor

> 요청과 응답을 가로채서 "변형"할 수 있는 컴포넌트
>
> > AOP의 영향을 받은 컴포넌트

## 수행하는 일

1. 메서드 실행 전/후 추가 로직을 바인딩
2. 함수에서 반환된 결과를 변환
3. 함수에서 던져진 예외를 변환
4. 기본 기능의 동작을 확장
5. 특정 조건에 따라 기능을 완전히 재정의 (e.g. 캐싱)

## 인터셉터 vs 미들웨어

> 수행 시점에 차이가 있다.
>
> > `미들웨어 : 클라이언트 <-> 라우터`
> >
> > > `인터셉터 : 라우터 <-> 프로바이더` // 실행컨텍스트에 접근이 가능

## 인터셉터 생성

> NestInterceptor 인터페이스 구현
>
> > intercept 메소드에 로직 작성
> >
> > > 실행컨텍스트를 매개변수로 받을 수 있다.

```ts
@Injectable()
export class LogInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before...");

    const now = Date.now();
    return next.handle().pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
```

## 전역 사용

> main.ts 부트스트랩 메소드에서 등록

```ts
// app.module.ts
providers: [
  {
    provide: APP_INTERCEPTOR,
    useClass: LogInterceptor,
  },
];
// main.ts
// app.useGlobalInterceptors(new LogInterceptor());
```

## 인터셉터 사용

> UseInterceptors() 데코레이터 사용

```ts
@UseInterceptors(new LogInterceptor())
export class CatsController {}
```
