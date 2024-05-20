# nest PrismaExceptionFilter

## prisma-global-error.filter.ts

```ts
import { ArgumentsHost, Catch, HttpStatus } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Prisma } from "@prisma/client";
import { Request, Response } from "express";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaGlobalExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    const errorCode = exception.code;
    const prismaError = PrismaErrorsMap[errorCode];
    if (prismaError) {
      const errorMeta = exception.meta;
      const error = {
        statusCode: prismaError.statusCode,
        meta: errorMeta,
        request: {
          body: req.body,
          query: req.query,
          params: req.params,
          rawBody: Buffer.from(req["rawBody"]).toString(),
        },
        exception,
      };
      // logger로 변경해주기
      console.error(error);
      res.status(prismaError.statusCode).json(error);
    } else {
      const error = {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        statusMessage: "Internal Server Error",
        request: {
          body: req.body,
          query: req.query,
          params: req.params,
          rawBody: Buffer.from(req["rawBody"]).toString(),
        },
        exception,
      };
      // logger로 변경해주기
      console.error(error);
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}

// https://www.prisma.io/docs/orm/reference/error-reference
const PrismaErrorsMap: Record<string, { statusCode: number; message: string }> = {
  P2000: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "입력값이 데이터 타입의 길이를 초과하였습니다.",
  },
  P2001: {
    statusCode: HttpStatus.NO_CONTENT,
    message: "존재하지 않는 레코드입니다.",
  },
  P2002: {
    statusCode: HttpStatus.CONFLICT,
    message: "이미 존재하는 고유 제약 조건이 실패했습니다.",
  },
  P2003: {
    statusCode: HttpStatus.CONFLICT,
    message: "외래 키 제약 조건이 실패했습니다.",
  },
  P2004: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "데이터베이스에서 제약 조건이 실패했습니다.",
  },
  P2005: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "필드와 타입이 일치하지 않습니다.",
  },
  P2006: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "입력값이 유효하지 않습니다.",
  },
  P2011: {
    statusCode: HttpStatus.CONFLICT,
    message: "Null 제약 조건이 실패했습니다.",
  },
  P2012: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "필요한 값이 누락되었습니다.",
  },
  P2015: {
    statusCode: HttpStatus.NOT_FOUND,
    message: "요청한 레코드를 찾을 수 없습니다.",
  },
  P2025: {
    statusCode: HttpStatus.NOT_FOUND,
    message: "요청한 레코드를 찾을 수 없습니다.",
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
