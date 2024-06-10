# nest PrismaExceptionFilter

> PrismaGlobalExceptionFilter에서는 error code를 확인하고
>
> > 에러를 HttpException으로 바꿔주면서
> >
> > > stack trace와 context만 추가해주는 용도로 사용

## prisma-global-error.filter.ts

```ts
import { ArgumentsHost, Catch, HttpException, HttpStatus, InternalServerErrorException } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Prisma } from "@prisma/client";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaGlobalExceptionFilter extends BaseExceptionFilter {
  catch(error: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const errorCode = error.code;
    const prismaError = PrismaErrorsMap[errorCode];
    if (prismaError) {
      throw new HttpException(prismaError.message, prismaError.statusCode, {
        cause: error,
      });
    } else {
      throw new InternalServerErrorException("Prisma Error", {
        cause: error,
      });
    }
  }
}
type PrismaError = {
  statusCode: HttpStatus;
  message: string;
};
// https://www.prisma.io/docs/orm/reference/error-reference
const PrismaErrorsMap: Record<string, PrismaError> = {
  P2000: {
    statusCode: HttpStatus.BAD_REQUEST,
    message: "입력값이 데이터 타입의 길이를 초과하였습니다.",
  },
  P2001: {
    statusCode: HttpStatus.NOT_FOUND,
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
