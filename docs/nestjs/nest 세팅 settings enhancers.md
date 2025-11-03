# nest 세팅 settings enhancers

## error.ts

```ts
export type ErrorInfo = {
  code: string;
  messages: {
    client: string;
    admin: string;
    dev: string;
  };
  details?: any;
};

export type ErrorResponse = {
  errorInfo: ErrorInfo;
};

export namespace ErrorInfo {
  export const UserFindFailed: ErrorInfo = {
    code: "0001",
    messages: {
      client: "사용자 정보를 불러올 수 없습니다.",
      admin:
        "사용자 조회에 실패했습니다. 데이터베이스 연결 상태를 확인하고, 사용자 ID가 올바른지 검증하세요. 문제가 지속되면 데이터베이스 로그를 확인하세요.",
      dev: "사용자 조회 작업 실패. 데이터베이스 연결, 사용자 존재 여부, 쿼리 파라미터를 확인하세요. 가능한 원인: 잘못된 userId, 데이터베이스 연결 문제, 또는 쿼리 타임아웃.",
    },
  };
}
```

## exception.ts

```ts
import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorInfo, ErrorResponse } from "./error";

export class InvalidTokenException extends HttpException {
  constructor() {
    super("유효하지 않은 토큰입니다.", 498);
  }
}

export class BusinessException extends HttpException {
  constructor(errorInfo: ErrorInfo, cause?: Error | string, status: HttpStatus = HttpStatus.CONFLICT) {
    const errorPayload: any = { errorInfo };
    super(errorPayload, status, {
      cause: cause,
    });
  }
}
```

## business-exception.filter.ts

```ts
import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Request, Response } from "express";
import { BusinessException, ErrorResponse } from "../errors";
import { resolveAudience } from "./helpers/resolve-audience";

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
    const cause = error.cause;
    const { errorInfo } = error.getResponse() as ErrorResponse;

    const audience = resolveAudience(req); // 클라이언트, 관리자, 개발자인지 확인
    const message = errorInfo?.messages[audience] ?? errorMessage ?? "알 수 없는 오류가 발생했습니다.";

    const clientResponse = {
      statusCode: errorStatusCode,
      path: req.url,
      timestamp: new Date().toISOString(),
      message,
      code: errorInfo?.code,
    };

    res.status(errorStatusCode).json(clientResponse);

    const devMessage = errorInfo?.messages.dev ?? "";
    this.logger.error(`
REQUEST_ID=${req.headers["x-request-id"]}
CLIENT_IP=${req.ip}
USER_AGENT=${req.headers["user-agent"]}
METHOD=${req.method}
PATH=${req.path}
STATUS_CODE=${errorStatusCode}
MESSAGE=${devMessage}
TIMESTAMP=${clientResponse.timestamp}
ERROR=${JSON.stringify(errorInfo)}
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
REQUEST_ID=${req.headers["x-request-id"]}
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
import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Request, Response } from "express";
import { ErrorResponse, ValidationException } from "../errors";
import { resolveAudience } from "./helpers/resolve-audience";

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
    const cause = error.cause;
    const { errorInfo } = error.getResponse() as ErrorResponse;
    const errorMessage = error.message;
    const errorStack = error.stack;

    const audience = resolveAudience(req); // 클라이언트, 관리자, 개발자인지 확인
    const message = errorInfo?.messages[audience] ?? errorMessage ?? "알 수 없는 오류가 발생했습니다.";

    const clientResponse = {
      statusCode,
      message,
      path: req.url,
      timestamp: new Date().toISOString(),
      error: errorInfo,
    };

    res.status(statusCode).json(clientResponse);

    this.logger.log(`
REQUEST_ID=${req.headers["x-request-id"]}
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
import { ValidationPipe } from "@nestjs/common";
import { ErrorInfo, ValidationException } from "../errors";

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
        messages: {
          client: `유효성 검사에 실패했습니다.`,
          admin: `유효성 검사에 실패했습니다.`,
          dev: `유효성 검사에 실패했습니다. ${details.map(detail => detail?.messages.join(", ")).join(", ")}`,
        },
        details,
      },
    });
  },
});
```

## prisma-exception-unwrap.interceptor.ts

```ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class PrismaExceptionUnwrapInterceptor implements NestInterceptor {
  intercept(_ctx: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(err => {
        // Prisma 에러 감지
        const prismaErr = this.findPrismaError(err);
        if (prismaErr) {
          // PrismaExceptionFilter로 전달되게 재-throw
          return throwError(() => prismaErr);
        }
        // 그대로 BusinessExceptionFilter로 가게 유지
        return throwError(() => err);
      }),
    );
  }

  private findPrismaError(err: any): any {
    let cur = err;
    while (cur) {
      if (this.isPrismaError(cur)) return cur;
      cur = cur.cause;
    }
    return null;
  }

  private isPrismaError(e: any): boolean {
    return (
      e instanceof Prisma.PrismaClientKnownRequestError ||
      e instanceof Prisma.PrismaClientValidationError ||
      e instanceof Prisma.PrismaClientInitializationError ||
      e instanceof Prisma.PrismaClientRustPanicError
    );
  }
}
```

## prisma-exception.filter.ts

```ts

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
