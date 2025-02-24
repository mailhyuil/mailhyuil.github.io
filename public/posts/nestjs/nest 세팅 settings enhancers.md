# nest main.ts 세팅 enhancers

## business-exception.filter.ts

```ts
import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { PrismaError } from "prisma-error-enum";
import { BusinessException, ERROR } from "../errors";

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

## http-exception.filter.ts

```ts
import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from "express";
import { ERROR } from "../errors";

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

## validation-exception.filter.ts

```ts
import { ValidationException } from "@/server/pipes/global-validation.pipe";
import { ArgumentsHost, Catch, ExceptionFilter, Logger } from "@nestjs/common";
import { Request, Response } from "express";
import { ERROR } from "../errors";

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

## global-validation.pipe.ts

```ts
import { HttpException, HttpStatus, ValidationPipe } from "@nestjs/common";
import { ERROR } from "../errors";

export const GlobalValidationPipe = new ValidationPipe({
  transformOptions: {
    enableImplicitConversion: true,
  },
  transform: true,
  whitelist: true,
  enableDebugMessages: true,
  exceptionFactory: errors => {
    const properties: string[] = [];
    const cause = errors
      .flatMap(error => (error.children?.length ? error.children : error))
      .map(error => {
        const { property, constraints, value } = error;
        const constraintValues = Object.values(constraints);
        properties.push(property);
        return { [property]: value, constraints: constraintValues };
      });

    return new ValidationException({
      ...ERROR.VALIDATION_ERROR,
      message: `유효성 검사에 실패했습니다. [${properties.join(", ")}]`,
      cause,
    });
  },
});

export class ValidationException extends HttpException {
  constructor(error: ERROR) {
    super(error, HttpStatus.BAD_REQUEST);
  }
}
```

## winston.logger.dev.ts

```ts
import { utilities, WinstonModule } from "nest-winston";
import winston from "winston";
const { combine } = winston.format;

const developmentTransports = () => [
  new winston.transports.Console({
    level: "silly", // 모든 단계를 로그
    format: combine(
      utilities.format.nestLike("APP", {
        prettyPrint: true, // nest에서 제공하는 옵션. 로그 가독성을 높여줌
        colors: true, // 로그에 색깔을 넣어서 출력
      }),
    ),
  }),
];

const winstonDevLogger = WinstonModule.createLogger({
  transports: developmentTransports(),
});

const winstonDevStream = {
  write: (message: string) => {
    winstonDevLogger.log(message);
  },
};

export { winstonDevLogger, winstonDevStream };
```

## winston.logger.prod.ts

```ts
import { WinstonModule } from "nest-winston";
import process from "process";
import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";
const { combine, timestamp, json } = winston.format;

const infoDir = process.env.INFO_LOG_DIR;
const errorDir = process.env.ERROR_LOG_DIR;
const warnDir = process.env.WARN_LOG_DIR;

const winstonProdLogger = WinstonModule.createLogger({
  format: combine(timestamp(), json()),
  transports: [
    new winstonDaily({
      level: "info",
      datePattern: "YYYY-MM-DD",
      dirname: infoDir,
      filename: `%DATE%.info.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
    new winstonDaily({
      level: "error",
      datePattern: "YYYY-MM-DD",
      dirname: errorDir,
      filename: `%DATE%.error.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
    new winstonDaily({
      level: "warn",
      datePattern: "YYYY-MM-DD",
      dirname: warnDir,
      filename: `%DATE%.warn.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
});

const winstonProdStream = {
  write: (message: string) => {
    winstonProdLogger.log(message);
  },
};

export { winstonProdLogger, winstonProdStream };
```

## winston.logger.ts

```ts
import { LoggerService } from "@nestjs/common";
import morgan from "morgan";
import { winstonDevLogger, winstonDevStream } from "./winston.logger.dev";
import { winstonProdLogger, winstonProdStream } from "./winston.logger.prod";

let winstonLogger: LoggerService;
let winstonStream: morgan.StreamOptions;

if (process.env.NODE_ENV !== "none") {
  winstonLogger = winstonProdLogger;
  winstonStream = winstonProdStream;
} else {
  winstonLogger = winstonDevLogger;
  winstonStream = winstonDevStream;
}

export { winstonLogger, winstonStream };
```
