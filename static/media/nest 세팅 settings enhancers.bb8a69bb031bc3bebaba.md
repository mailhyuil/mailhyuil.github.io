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
  export const USER_NOT_FOUND: ErrorInfo = {
    code: "0100",
    message: `유저를 찾지 못했습니다.`,
  };
}
export const createErrorResponse = (errorInfo: ErrorInfo, cause: Error): ErrorResponse => ({
  errorInfo,
  cause,
});
```

## exception.ts

```ts
export class InvalidTokenException extends HttpException {
  constructor() {
    super("유효하지 않은 토큰입니다.", 498);
  }
}
export class BusinessException extends HttpException {
  constructor(errorResponse: ErrorResponse, status: HttpStatus) {
    super(errorResponse, status);
  }
}
export class UserNotFoundException extends HttpException {
  constructor(cause: Error) {
    const response = createErrorResponse(ErrorInfo.USER_NOT_FOUND, cause);
    super(response, HttpStatus.NOT_FOUND);
  }
}
export class UserAlreadyExistsException extends BusinessException {
  constructor(cause: Error) {
    const response = createErrorResponse(ErrorInfo.USER_ALREADY_EXISTS, cause);
    super(response, HttpStatus.CONFLICT);
  }
}
```

## business-exception.filter.ts

```ts
import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { PrismaError } from "prisma-error-enum";
import { BusinessException, ErrorInfo, ErrorResponse } from "../errors";

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

    const clientResponse = {
      statusCode: errorStatusCode,
      path: req.url,
      timestamp: new Date().toISOString(),
      message: errorMessage,
      error: {
        ...ErrorInfo.BUSINESS_ERROR,
        ...errorInfo,
      } satisfies ErrorInfo,
    };

    if (cause instanceof Prisma.PrismaClientKnownRequestError) {
      if (cause.code === PrismaError.UniqueConstraintViolation) {
        clientResponse.message = `중복된 데이터가 존재합니다. [${cause.meta.target}]`;
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
import { ErrorInfo, ErrorResponse } from "../errors";

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

    const { errorInfo, cause } = error.getResponse() as ErrorResponse;
    const errorMessage = error.message;
    const errorStack = error.stack;
    // const cause = error.cause;

    const clientResponse = {
      statusCode,
      message: errorMessage,
      path: req.url,
      timestamp: new Date().toISOString(),
      error: {
        ...ErrorInfo.HTTP_ERROR,
        ...errorInfo,
      } as ErrorInfo,
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
ERROR=${JSON.stringify(clientResponse.error)}
ERROR_STACK=${errorStack}
CAUSE=${cause}
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
ERROR=${JSON.stringify(clientResponse.error)}
ERROR_STACK=${errorStack}
CAUSE=${cause}
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

    const clientResponse = {
      statusCode,
      message: errorMessage,
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
        const { property, constraints, value } = error;
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
        ...ErrorInfo.VALIDATION_ERROR,
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
