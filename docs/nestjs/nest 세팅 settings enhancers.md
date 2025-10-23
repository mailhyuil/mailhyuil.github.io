# nest main.ts 세팅 enhancers

## error.ts

```ts
export type ErrorInfo = {
  code: string;
  message: string;
  details?: any;
};

export type ErrorResponse = {
  errorInfo: ErrorInfo;
  cause: Error;
};

export namespace ErrorInfo {
  export const UserFindFailed: ErrorInfo = {
    code: "1000",
    message: `유저 조회에 실패했습니다.`,
  };
  export const UserCreateFailed: ErrorInfo = {
    code: "1001",
    message: `유저 생성에 실패했습니다.`,
  };
  export const UserUpdateFailed: ErrorInfo = {
    code: "1002",
    message: `유저 수정에 실패했습니다.`,
  };
  export const UserDeleteFailed: ErrorInfo = {
    code: "1003",
    message: `유저 삭제에 실패했습니다.`,
  };
}
```

## exception.ts

```ts
import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorInfo } from "./error";

export class InvalidTokenException extends HttpException {
  constructor() {
    super("유효하지 않은 토큰입니다.", 498);
  }
}

export class BusinessException extends HttpException {
  constructor(errorInfo: ErrorInfo, cause?: Error | string, status: HttpStatus = HttpStatus.CONFLICT) {
    const errorPayload: any = { errorInfo };
    if (cause) {
      errorPayload.cause = typeof cause === "string" ? new Error(cause) : cause;
    }
    super(errorPayload, status);
  }
}
```

## business-exception.filter.ts

```ts
import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { PrismaError } from "prisma-error-enum";
import { BusinessException, ErrorResponse } from "../errors";

/**
 * @export
 * @class BusinessExceptionFilter
 * @implements {ExceptionFilter}
 * @description BusinessException을 처리하는 ExceptionFilter
 */
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

    const { errorInfo, cause } = error.getResponse() as ErrorResponse;

    const message = errorInfo?.message ?? errorMessage ?? "알 수 없는 오류가 발생했습니다.";

    const clientResponse = {
      statusCode: errorStatusCode,
      path: req.url,
      timestamp: new Date().toISOString(),
      message,
      error: errorInfo,
    };

    if (cause instanceof Prisma.PrismaClientKnownRequestError) {
      if (cause.code === PrismaError.UniqueConstraintViolation) {
        clientResponse.message = `중복된 데이터가 존재합니다. [${cause.meta?.target}]`;
      }
    }

    res.status(errorStatusCode).json(clientResponse);

    this.logger.error(`
CLIENT_IP=${req.ip}
USER_AGENT=${req.headers["user-agent"]}
METHOD=${req.method}
PATH=${req.path}
STATUS_CODE=${errorStatusCode}
MESSAGE=${clientResponse.message}
TIMESTAMP=${clientResponse.timestamp}
ERROR=${JSON.stringify(clientResponse.error)}
ERROR_STACK=${errorStack}
CAUSE=${cause}
`);
  }
}
```

## http-exception.filter.ts

```ts
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from "express";

/**
 * @export
 * @class HttpExceptionFilter
 * @implements {ExceptionFilter}
 * @description BusinessExceptionFilter, ValidationExceptionFilter에서 잡지 않은 예외를 처리하는 ExceptionFilter
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  catch(error: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const statusCode = error.getStatus();
    const message = error.message;
    const errorStack = error.stack;

    const clientResponse = {
      statusCode,
      message,
      path: req.url,
      timestamp: new Date().toISOString(),
    };

    res.status(statusCode).json(clientResponse);

    if (
      res.statusCode === 401 || // Unauthorized
      res.statusCode === 403 || // Forbidden
      res.statusCode === 498 || // Invalid Token
      res.statusCode === 429 // Too Many Requests
    ) {
      //? 보안 관련 로그 = warn
      this.logger.warn(`
CLIENT_IP=${req.ip}
USER_AGENT=${req.headers["user-agent"]}
METHOD=${req.method}
PATH=${req.path}
STATUS_CODE=${clientResponse.statusCode}
MESSAGE=${clientResponse.message}
TIMESTAMP=${clientResponse.timestamp}
ERROR_STACK=${errorStack}
`);
    } else if (res.statusCode >= 400 && res.statusCode !== 404) {
      //? 나머지 에러 = error
      this.logger.error(`
CLIENT_IP=${req.ip}
USER_AGENT=${req.headers["user-agent"]}
METHOD=${req.method}
PATH=${req.path}
STATUS_CODE=${clientResponse.statusCode}
MESSAGE=${clientResponse.message}
TIMESTAMP=${clientResponse.timestamp}
ERROR_STACK=${errorStack}
`);
    }
  }
}
```

## validation-exception.filter.ts

```ts
import { ValidationException } from "@/server/pipes/global-validation.pipe";
import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Request, Response } from "express";
import { ErrorResponse } from "../errors";

/**
 * @export
 * @class ValidationExceptionFilter
 * @implements {ExceptionFilter}
 * @description 409 validation exception을 처리하는 ExceptionFilter
 */
@Catch(ValidationException)
export class ValidationExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(ValidationExceptionFilter.name);
  catch(error: ValidationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const statusCode = error.getStatus();
    const { errorInfo, cause } = error.getResponse() as ErrorResponse;
    const errorMessage = error.message;
    const errorStack = error.stack;

    const message = errorInfo?.message ?? errorMessage;

    const clientResponse = {
      statusCode,
      message,
      path: req.url,
      timestamp: new Date().toISOString(),
      error: errorInfo,
    };

    res.status(statusCode).json(clientResponse);

    this.logger.log(`
CLIENT_IP=${req.ip}
USER_AGENT=${req.headers["user-agent"]}
METHOD=${req.method}
PATH=${req.path}
STATUS_CODE=${clientResponse.statusCode}
MESSAGE=${clientResponse.message}
TIMESTAMP=${clientResponse.timestamp}
ERROR=${JSON.stringify(clientResponse.error)}
ERROR_STACK=${errorStack}
CAUSE=${cause}
`);
  }
}
```

## global-validation.pipe.ts

```ts
import { HttpException, HttpStatus, ValidationPipe } from "@nestjs/common";
import { ErrorInfo, ErrorResponse } from "../errors";

export const GlobalValidationPipe = new ValidationPipe({
  transformOptions: {
    enableImplicitConversion: true,
  },
  transform: true,
  whitelist: true,
  enableDebugMessages: true,
  exceptionFactory: errors => {
    const properties: string[] = [];
    const details = errors
      .flatMap(error => (error.children?.length ? error.children : error))
      .map(error => {
        console.log(error);
        const { property, constraints, value } = error;
        if (!constraints) return;
        const constraintValues = Object.values(constraints);
        properties.push(property);
        return {
          field: property,
          value,
          messages: constraintValues,
        };
      });

    return new ValidationException({
      errorInfo: {
        ...ErrorInfo.ValidationError,
        message: `유효성 검사에 실패했습니다.`,
        details,
      },
      cause: new HttpException("유효성 검사에 실패했습니다.", HttpStatus.BAD_REQUEST),
    });
  },
});

export class ValidationException extends HttpException {
  constructor(errorResponse: ErrorResponse) {
    super(errorResponse, HttpStatus.BAD_REQUEST);
  }
}
```

## winston.logger.ts

```ts
import { LoggerService } from "@nestjs/common";
import type { StreamOptions } from "morgan";
import { utilities, WinstonModule } from "nest-winston";
import process from "process";
import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";
const { combine, timestamp, json } = winston.format;

let winstonLogger: LoggerService;
let winstonStream: StreamOptions;

if (process.env.NODE_ENV !== "none") {
  const dir = process.env.LOG_DIR;

  winstonLogger = WinstonModule.createLogger({
    format: combine(timestamp(), json()),
    transports: [
      new winstonDaily({
        level: "info",
        datePattern: "YYYY-MM-DD",
        dirname: dir,
        filename: `%DATE%.seo-dev.log`,
        maxFiles: 30,
        zippedArchive: true,
      }),
    ],
  });
  winstonStream = {
    write: (message: string) => {
      winstonLogger.log(message);
    },
  };
} else {
  winstonLogger = WinstonModule.createLogger({
    transports: [
      new winston.transports.Console({
        level: "silly", // 모든 단계를 로그
        format: combine(
          utilities.format.nestLike("APP", {
            prettyPrint: true, // nest에서 제공하는 옵션. 로그 가독성을 높여줌
            colors: true, // 로그에 색깔을 넣어서 출력
          }),
        ),
      }),
    ],
  });
  winstonStream = {
    write: (message: string) => {
      winstonLogger.log(message);
    },
  };
}
export { winstonLogger, winstonStream };
```
