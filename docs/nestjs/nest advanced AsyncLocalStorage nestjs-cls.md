# nest advanced AsyncLocalStorage nestjs-cls

> AsyncLocalStorage를 쉽게 사용할 수 있도록 도와주는 패키지
>
> > transactional context를 유지하는데 사용되는 패턴
> >
> > > 사용 예시
> > >
> > > Request ID를 로깅 목적으로 tracking
> > >
> > > request의 user를 추적 (req.user 대신 사용)
> > >
> > > multi-tenant app에서 dynamic tenant database connection을 관리
> > >
> > > 서비스간의 transactional context를 유지

## install

```sh
npm i nestjs-cls
```

## app.module.ts

```ts
import { ClsModule } from "nestjs-cls";

@Module({
  imports: [
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
```

## user-ip.interceptor.ts

```ts
import { ClsService } from "nestjs-cls";

@Injectable()
export class UserIpInterceptor implements NestInterceptor {
  constructor(private readonly cls: ClsService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const userIp = request.connection.remoteAddress;
    this.cls.set("ip", userIp);
    return next.handle();
  }
}
```

## controller

```ts
@UseInterceptors(UserIpInterceptor)
@Injectable()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/hello")
  hello() {
    return this.appService.sayHello();
  }
}
```

## service

```ts
@Injectable()
export class AppService {
  constructor(private readonly cls: ClsService) {}

  sayHello() {
    const userIp = this.cls.get("ip");
    return "Hello " + userIp + "!";
  }
}
```
