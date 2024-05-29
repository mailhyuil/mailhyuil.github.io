# nest Exception filters HttpExceptionFilter

## http-exception.filter.ts

> rawBody를 사용하기 위해서는 NestFactory.create 옵션에 `rawBody`를 추가해주어야 한다.

```ts
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const statusCode = exception.getStatus();
    const response = exception.getResponse() as object;

    let rawBody;
    if (req["rawBody"]) {
      rawBody = Buffer.from(req["rawBody"]).toString();
    }

    const error = {
      ...response,
      path: req.url,
      timestamp: new Date().toISOString(),
      request: {
        body: req.body,
        query: req.query,
        params: req.params,
        rawBody,
      },
    };
    // logger로 변경해주기
    console.error(error);
    res.status(statusCode).json(error);
  }
}
```
