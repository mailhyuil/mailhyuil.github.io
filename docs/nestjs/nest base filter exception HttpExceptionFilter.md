# nest base filter exception HttpExceptionFilter

## http-exception.filter.ts

> rawBody를 사용하기 위해서는 NestFactory.create 옵션에 `rawBody`를 추가해주어야 한다.

```ts
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(error: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const statusCode = error.getStatus();
    const errorResponse = error.getResponse();
    const message = error.message;
    const cause = error.cause;
    const stack = error.stack;

    let rawBody;
    if (req["rawBody"]) {
      rawBody = Buffer.from(req["rawBody"]).toString();
    }

    const json = {
      statusCode,
      path: req.url,
      timestamp: new Date().toISOString(),
      message,
      context: {
        body: req.body,
        query: req.query,
        params: req.params,
        rawBody,
        error: errorResponse,
      },
    };
    res.status(statusCode).json(json);
    console.error(
      `MESSAGE: ${json.message}\nPATH: ${json.path}\nTIMESTAMP: ${json.timestamp}\nCONTEXT: ${JSON.stringify(
        json.context
      )}\nSTACK: ${stack}\nCAUSE: ${cause}`
    );
  }
}
```
