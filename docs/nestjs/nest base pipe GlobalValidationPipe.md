# nest GlobalValidationPipe

## global-validation.pipe.ts

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
  METHOD: ${req.method}
  PATH: ${errorResponse.path}
  ERROR: ${JSON.stringify(errorResponse.error)}
  STACK: ${stack}
  CAUSE: ${cause}
  `,
    );
  }
}
```

## validation.exception.ts

```ts
import { ValidationPipe } from "@nestjs/common";

export class ValidationException extends HttpException {
  constructor(message: any) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
```

## validation-exception.filter.ts

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
        code: 400,
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
  `,
    );
  }
}
```

## app.module.ts

```ts
{
  provide: APP_FILTER,
  useClass: ValidationExceptionFilter,
},
```
