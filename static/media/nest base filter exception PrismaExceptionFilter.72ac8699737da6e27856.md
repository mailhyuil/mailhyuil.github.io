# nest PrismaExceptionFilter

## install

```sh
npm i prisma-error-enum
```

## prisma-global-error.filter.ts

```ts
import { ArgumentsHost, Catch, HttpStatus, Logger } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { PrismaError } from "prisma-error-enum";
@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaGlobalExceptionFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(PrismaGlobalExceptionFilter.name);
  catch(error: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const errorCode = error.code;
    const prismaError = PrismaErrorsMap[errorCode];

    let rawBody;
    if (req["rawBody"]) {
      rawBody = Buffer.from(req["rawBody"]).toString();
    }

    const { name, clientVersion, ...rest } = error;

    const json = {
      statusCode: 500,
      message: "Internal Server Error",
      path: req.url,
      timestamp: new Date().toISOString(),
      context: {
        body: req.body,
        query: req.query,
        params: req.params,
        rawBody,
        error: {
          ...rest,
        },
      },
    };

    if (!prismaError) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(json);
      this.logger.error(`\nMESSAGE: ${json.message}\nPATH: ${json.path}\nTIMESTAMP: ${json.timestamp}\nCONTEXT: ${JSON.stringify(json.context)}`);
      return;
    }

    json.message = prismaError.message;
    json.statusCode = prismaError.status;
    res.status(prismaError.status).json(json);
    this.logger.error(`\nMESSAGE: ${json.message}\nPATH: ${json.path}\nTIMESTAMP: ${json.timestamp}\nCONTEXT: ${JSON.stringify(json.context)}`);
  }
}

type PrismaErrorType = {
  status: HttpStatus;
  message: string;
};
type PrismaErrorValues = (typeof PrismaError)[keyof typeof PrismaError];
// https://www.prisma.io/docs/orm/reference/error-reference
const PrismaErrorsMap: Partial<Record<PrismaErrorValues, PrismaErrorType>> = {
  [PrismaError.RecordDoesNotExist]: {
    status: HttpStatus.NOT_FOUND,
    message: "요청한 조건의 항목을 찾을 수 없습니다.",
  },
  [PrismaError.RelatedRecordNotFound]: {
    status: HttpStatus.NOT_FOUND,
    message: `요청한 항목과 관계된 항목을 찾을 수 없습니다.`,
  },
  [PrismaError.RecordsNotFound]: {
    status: HttpStatus.NOT_FOUND,
    message: `요청한 항목을 찾을 수 없습니다.`,
  },
  [PrismaError.UniqueConstraintViolation]: {
    status: HttpStatus.CONFLICT,
    message: `고유 제약 조건에 실패했습니다.`,
  },
  [PrismaError.ForeignConstraintViolation]: {
    status: HttpStatus.CONFLICT,
    message: "외래 키 제약 조건이 실패했습니다.",
  },
  [PrismaError.NullConstraintViolation]: {
    status: HttpStatus.CONFLICT,
    message: "Null 제약 조건이 실패했습니다.",
  },
  [PrismaError.ValueTooLongForColumnType]: {
    status: HttpStatus.BAD_REQUEST,
    message: "입력값이 데이터 타입의 길이를 초과하였습니다.",
  },
  [PrismaError.ConstraintViolation]: {
    status: HttpStatus.BAD_REQUEST,
    message: "데이터베이스에서 제약 조건이 실패했습니다.",
  },
  [PrismaError.InvalidValueForFieldType]: {
    status: HttpStatus.BAD_REQUEST,
    message: `요청한 값과 테이블 필드의 타입이 일치하지 않습니다.`,
  },
  [PrismaError.InvalidValue]: {
    status: HttpStatus.BAD_REQUEST,
    message: "요청에 필요한 값이 유효하지 않습니다.",
  },
  [PrismaError.MissingRequiredValue]: {
    status: HttpStatus.BAD_REQUEST,
    message: "요청에 필요한 값이 누락되었습니다.",
  },
};
```

## app.module.ts

```ts
{
  provide: APP_FILTER,
  useClass: PrismaGlobalExceptionFilter,
},
```
