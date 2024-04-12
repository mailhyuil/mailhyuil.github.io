# nest PrismaExceptionFilter

## prisma-global-error.filter.ts

```ts
import { ArgumentsHost, Catch, HttpStatus } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Prisma } from "@prisma/client";
import { Response } from "express";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaGlobalExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(exception.message);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const errorCode = exception.code;
    const prismaError = PrismaErrorsMap[errorCode];
    if (prismaError) {
      const errorMeta = exception.meta;
      response.status(prismaError.status).json({
        statusCode: prismaError.status,
        message: prismaError.message,
        meta: errorMeta,
        exception,
      });
    } else {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: "Internal Server Error",
        exception,
      });
    }
  }
}

// https://www.prisma.io/docs/orm/reference/error-reference
const PrismaErrorsMap: Record<string, { status: number; message: string }> = {
  P2000: {
    status: HttpStatus.BAD_REQUEST,
    message: "입력값이 데이터 타입의 길이를 초과하였습니다.",
  },
  P2001: {
    status: HttpStatus.NO_CONTENT,
    message: "존재하지 않는 레코드입니다.",
  },
  P2002: {
    status: HttpStatus.CONFLICT,
    message: "이미 존재하는 고유 제약 조건이 실패했습니다.",
  },
  P2003: {
    status: HttpStatus.CONFLICT,
    message: "외래 키 제약 조건이 실패했습니다.",
  },
  P2004: {
    status: HttpStatus.BAD_REQUEST,
    message: "데이터베이스에서 제약 조건이 실패했습니다.",
  },
  P2005: {
    status: HttpStatus.BAD_REQUEST,
    message: "필드와 타입이 일치하지 않습니다.",
  },
  P2006: {
    status: HttpStatus.BAD_REQUEST,
    message: "입력값이 유효하지 않습니다.",
  },
  P2011: {
    status: HttpStatus.CONFLICT,
    message: "Null 제약 조건이 실패했습니다.",
  },
  P2012: {
    status: HttpStatus.BAD_REQUEST,
    message: "필요한 값이 누락되었습니다.",
  },
  P2015: {
    status: HttpStatus.NOT_FOUND,
    message: "요청한 레코드를 찾을 수 없습니다.",
  },
  P2025: {
    status: HttpStatus.NOT_FOUND,
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
