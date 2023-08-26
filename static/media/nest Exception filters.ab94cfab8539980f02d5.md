# nest Exception filters

> 대부분의 에러 처리는 nest에서 기본으로 전역 예외 필터를 제공

## 커스텀 예외 필터

> Catch() 데코레이터로 처리되지 않은 모든 예외를 잡기
>
> > ExceptionFilter 인터페이스 구현
> >
> > > catch 메소드에 예외 처리 로직 작성
> > >
> > > > InternalServerErrorException으로 처리

```ts
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
```

## 필터 사용

> UseFilters() 데코레이터 사용

```ts
@Post()
@UseFilters(new HttpExceptionFilter())
async create(@Body() createCatDto: CreateCatDto) {
  throw new ForbiddenException();
}
```

## 전역 사용

> main.ts 부트스트랩 메소드에 등록

```ts
const app = await NestFactory.create(AppModule);
app.useGlobalFilters(new HttpExceptionFilter());
```
