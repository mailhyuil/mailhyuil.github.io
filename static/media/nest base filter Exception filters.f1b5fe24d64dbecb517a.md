# nest Exception filters

> nestjs의 에러 스키마는 기본으로 {statusCode, message, error}로 구성되어있다.
>
> > 만약 스키마를 변경하고 싶거나 (timestamp..), 로깅같은 작업을 추가하고 싶다면 Exception filters를 사용하면 된다.

## 커스텀 예외 필터

> Catch() 데코레이터로 처리되지 않은 모든 예외를 잡기
>
> > ExceptionFilter 인터페이스 구현
> >
> > > catch 메소드에 예외 처리 로직 작성
> > >
> > > > InternalServerErrorException으로 처리
> > > >
> > > > > 개발환경에서만 stack이 보이도록

```ts
import { Catch, HttpException, ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { Response, Request } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    let errorMessage: string | object = exceptionResponse;

    if (typeof exceptionResponse === "object" && exceptionResponse.hasOwnProperty("message")) {
      errorMessage = (exceptionResponse as { message: string }).message;
    }

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: errorMessage, // Include the error message
    };

    // Include the stack trace in the response (only in development environment)
    if (process.env.NODE_ENV === "development") {
      errorResponse["stack"] = exception.stack;
    }

    response.status(status).json(errorResponse);
  }
}
```

## 전역 사용

> main.ts 또는 app.module.ts에 등록

```ts
// app.module.ts
providers: [
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
];
// main.ts
// app.useGlobalFilters(new HttpExceptionFilter());
```

## 메소드에 필터 사용

> UseFilters() 데코레이터 사용

```ts
@Post()
@UseFilters(new HttpExceptionFilter())
async create(@Body() createCatDto: CreateCatDto) {
  throw new ForbiddenException();
}
```
