# nest Exception filters

> nestjs의 에러 스키마는 기본으로 \{statusCode, message, error\}로 구성되어있다.
>
> > 만약 스키마를 변경하고 싶거나 (timestamp..), 로깅같은 작업을 추가하고 싶다면 Exception filters를 사용하면 된다.

## 로직의 실패 vs 로직외의 실패 (시스템 실패 : api서버 연결 실패 ..데이터베이스연결 실패...)

> 로직의 실패는 result 객체 또는 customException 로 처리
>
> > 시스템적인 실패는 exceptionFilter를 통해서 로깅

## 커스텀 예외 필터

> stacktrace는 로그로 남기고 유저에게는 에러메세지만 보내야한다.

```ts
// HttpExceptionFilter.ts

import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { Request, Response } from "express";
import { MyLogger } from "../MyLogger";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: MyLogger) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    if (status >= 500) {
      // 시스템 실패를 로깅
      this.logger.error({ request, response });
    }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
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
