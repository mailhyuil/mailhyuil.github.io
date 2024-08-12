# nestjs error handling

## BusinessException

> 기본으로 발생할 수 있는 에러들은 catch해서 BusinessException으로 보내주기
>
> > BusinessException은 ERROR 객체를 보낸다

```ts
import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Request, Response } from "express";
import { ERROR } from "../error";
import { BusinessException } from "../exception";

@Catch(BusinessException)
export class BusinessExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(BusinessExceptionFilter.name);
  catch(error: BusinessException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const statusCode = error.getStatus();
    const response = error.getResponse() as string | ERROR;
    const message = error.message;
    const cause = error.cause;
    const stack = error.stack;

    const errorResponse = {
      statusCode,
      message,
      path: req.url,
      timestamp: new Date().toISOString(),
      error: response,
    };

    res.status(statusCode).json(errorResponse);

    this.logger.error(
      `
MESSAGE: ${errorResponse.message}
TIMESTAMP: ${errorResponse.timestamp}
PATH: ${errorResponse.path}
ERROR: ${JSON.stringify(errorResponse.error)}
STACK: ${stack}
CAUSE: ${cause}
`
    );
  }
}
```

## 잡지 못한 HttpException

> BusinessException으로 정의되지 않은 에러들
>
> > response에 ERROR 객체가 아닌 string이 들어있다.
> >
> > > code: 9999

```ts
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from "express";
import { ERROR } from "../error";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  catch(error: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const statusCode = error.getStatus();
    const response = error.getResponse() as string | ERROR;
    const message = error.message;
    const cause = error.cause;
    const stack = error.stack;

    const errorResponse = {
      statusCode,
      message,
      path: req.url,
      timestamp: new Date().toISOString(),
      error: {
        code: 9999,
        message: response,
      } as ERROR,
    };

    res.status(statusCode).json(errorResponse);

    this.logger.error(
      `
MESSAGE: ${errorResponse.message}
TIMESTAMP: ${errorResponse.timestamp}
PATH: ${errorResponse.path}
ERROR: ${JSON.stringify(errorResponse.error)}
STACK: ${stack}
CAUSE: ${cause}
`
    );
  }
}
```

## 잡지 못한 PrismaException

> BusinessException으로 잡지 못한 Prisma Error는 409 Conflict에러로 보내주기
>
> > code: 9998

```ts
import { ArgumentsHost, Catch, HttpStatus, Logger } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { ERROR } from "../error";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaErrorFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(PrismaErrorFilter.name);
  catch(error: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    const { name, clientVersion, message, ...data } = error;

    const errorResponse = {
      statusCode: HttpStatus.CONFLICT,
      message: "Prisma 에러가 발생했습니다.",
      path: req.url,
      timestamp: new Date().toISOString(),
      error: {
        code: 9998,
        message,
        data,
      } as ERROR,
    };

    res.status(HttpStatus.CONFLICT).json(errorResponse);

    this.logger.error(
      `
MESSAGE: ${errorResponse.message}
TIMESTAMP: ${errorResponse.timestamp}
PATH: ${errorResponse.path}
ERROR: ${JSON.stringify(errorResponse.error)}
`
    );
  }
}
```

## error.ts

```ts
export type ERROR = {
  code: number | string;
  message: string;
  data?: any;
};

export namespace ERROR {
  export const USER_NOT_FOUND: ERROR = {
    code: 1001,
    message: `유저를 찾지 못했습니다.`,
  };
  export const USER_ALREADY_EXISTS: ERROR = {
    code: 1002,
    message: `
유저가 이미 존재합니다.
아이디를 다시 확인하고 가입하려는 아이디가 이미 존재하는지 확인하십시오.
`,
  };
  export const USER_CREATE_FAILED: ERROR = {
    code: 1003,
    message: "유저 생성에 실패했습니다.",
  };
  export const USER_UPDATE_FAILED: ERROR = {
    code: 1004,
    message: "유저 수정에 실패했습니다.",
  };
  export const NOTICE_NOT_FOUND: ERROR = {
    code: 1005,
    message: "공지사항을 찾을 수 없습니다.",
  };
  export const NOTICE_CREATE_FAILED: ERROR = {
    code: 1006,
    message: "공지사항 생성에 실패했습니다.",
  };
  export const NOTICE_UPDATE_FAILED: ERROR = {
    code: 1007,
    message: "공지사항 수정에 실패했습니다.",
  };
}

export const createError = (error: ERROR, data?: any): ERROR => ({
  ...error,
  data,
});
```

## business-exception.ts

```ts
import { HttpException, HttpStatus } from "@nestjs/common";
import { createError, ERROR } from "./error";

export class BusinessException extends HttpException {
  constructor(error: ERROR, status: HttpStatus, cause?: any) {
    super(error, status, cause);
  }
}

export class UserNotFoundException extends BusinessException {
  constructor(data?: any, cause?: any) {
    const response = createError(ERROR.USER_NOT_FOUND, data);
    super(response, HttpStatus.NOT_FOUND, cause);
  }
}
```
