# nestjs guard

> 인가 작업을 수행
>
> > 인증을 통과한 유저가 권한이 있는지를 판별
> >
> > > guard는 실행 컨텍스트를 매개변수로 받을 수 있다.
> > >
> > > > canActivate => route에 접근할 수 있냐는 뜻 && 라우팅 해도 되겠냐는 뜻 (activatedRoute : 현재 라우트)

## 가드 생성

> CanActivate 인터페이스 구현

```ts
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return validateRequest(request);
  }
}
```

## 가드 사용

> @UseGuards() 데코레이터 사용

```ts
@Controller("some")
@UseGuards(AuthGuard)
export class SomeController {}
```

## 전역 사용

> main.ts 부트스트랩 메소드에 설정

```ts
const app = await NestFactory.create(AppModule);
app.useGlobalGuards(new RolesGuard());
```
