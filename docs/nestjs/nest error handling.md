# nestjs error handling

## error.ts

```ts
export type ERROR = {
  code: string;
  message: string;
  data?: any;
};

export namespace ERROR {
  export const USER_NOT_FOUND: ERROR = {
    code: "0100",
    message: `유저를 찾지 못했습니다.`,
  };
  export const USER_ALREADY_EXISTS: ERROR = {
    code: "0101",
    message: `
유저가 이미 존재합니다.
아이디를 다시 확인하고 가입하려는 아이디가 이미 존재하는지 확인하십시오.
`,
  };
  export const USER_CREATE_FAILED: ERROR = {
    code: "0102",
    message: "유저 생성에 실패했습니다.",
  };
  export const USER_UPDATE_FAILED: ERROR = {
    code: "0103",
    message: "유저 수정에 실패했습니다.",
  };
  export const NOTICE_NOT_FOUND: ERROR = {
    code: "0200",
    message: "공지사항을 찾을 수 없습니다.",
  };
  export const NOTICE_CREATE_FAILED: ERROR = {
    code: "0201",
    message: "공지사항 생성에 실패했습니다.",
  };
  export const NOTICE_UPDATE_FAILED: ERROR = {
    code: "0202",
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

## BusinessException

> 기본으로 발생할 수 있는 에러들은 catch해서 BusinessException으로 보내주기
>
> > BusinessException은 ERROR 객체를 보낸다

```ts
import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { PrismaError } from "prisma-error-enum";
import { ERROR } from "../error";
import { BusinessException } from "../exception";

@Catch(BusinessException)
export class BusinessExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(BusinessExceptionFilter.name);
  catch(error: BusinessException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const errorStatusCode = error.getStatus();
    const errorMessage = error.message;
    const errorStack = error.stack;

    const { code, message, cause } = error.getResponse() as ERROR;

    const clientError = { code, message };

    const clientErrorResponse = {
      statusCode: errorStatusCode,
      path: req.url,
      timestamp: new Date().toISOString(),
      message: errorMessage,
      error: {
        ...ERROR.BUSINESS_ERROR,
        ...clientError,
      },
    };

    if (cause instanceof Prisma.PrismaClientKnownRequestError) {
      if (cause.code === PrismaError.UniqueConstraintViolation) {
        clientErrorResponse.message = `중복된 데이터가 존재합니다. [${cause.meta.target}]`;
      }
    }

    res.status(errorStatusCode).json(clientErrorResponse);

    this.logger.error(`
MESSAGE: ${clientErrorResponse.message}
TIMESTAMP: ${clientErrorResponse.timestamp}
METHOD: ${req.method}
PATH: ${clientErrorResponse.path}
ERROR: ${JSON.stringify(clientErrorResponse.error)}
ERROR STACK: ${errorStack}
CAUSE: ${JSON.stringify(cause)}
CAUSE STACK: ${cause}
`);
  }
}
```

## 잡지 못한 HttpException

> BusinessException으로 정의되지 않은 에러들
>
> > response에 ERROR 객체가 아닌 string이 들어있다.
> >
> > > code: "-1"

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

    const response = error.getResponse() as string;
    const message = error.message;
    const cause = error.cause;
    const stack = error.stack;

    const clientErrorResponse = {
      statusCode,
      message,
      path: req.url,
      timestamp: new Date().toISOString(),
      error: {
        ...ERROR.HTTP_ERROR,
        message: response,
      } as ERROR,
    };

    res.status(statusCode).json(clientErrorResponse);

    this.logger.error(`
MESSAGE: ${clientErrorResponse.message}
TIMESTAMP: ${clientErrorResponse.timestamp}
METHOD: ${req.method}
PATH: ${clientErrorResponse.path}
ERROR: ${JSON.stringify(clientErrorResponse.error)}
STACK: ${stack}
CAUSE: ${cause}
`);
  }
}
```

## ValidationException

> 유효성 검사에서 실패한 에러
>
> > code: "-3"

```ts
import { ValidationException } from "@/server/pipes/global-validation.pipe";
import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Request, Response } from "express";
import { ERROR } from "../error";

@Catch(ValidationException)
export class ValidationExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(ValidationExceptionFilter.name);
  catch(error: ValidationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const statusCode = error.getStatus();
    const response = error.getResponse() as ERROR;
    const message = error.message;
    const cause = error.cause;
    const stack = error.stack;

    const clientErrorResponse = {
      statusCode,
      message,
      path: req.url,
      timestamp: new Date().toISOString(),
      error: response,
    };

    res.status(statusCode).json(clientErrorResponse);

    this.logger.error(`
MESSAGE: ${clientErrorResponse.message}
TIMESTAMP: ${clientErrorResponse.timestamp}
METHOD: ${req.method}
PATH: ${clientErrorResponse.path}
ERROR: ${JSON.stringify(clientErrorResponse.error)}
STACK: ${stack}
CAUSE: ${cause}
`);
  }
}
```
