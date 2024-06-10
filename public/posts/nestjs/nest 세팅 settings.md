# nest main.ts 세팅

## install

```bash
################ 필수 패키지 #####################

npm i dotenv
npm i class-validator
npm i class-transformer
npm i bcryptjs
npm i -D @types/bcryptjs
npm i compression
npm i -D @types/compression
npm i helmet
# logging
npm i morgan
npm i -D @types/morgan
npm i winston
npm i nest-winston
npm i winston-daily-rotate-file
# testing
npm i -D @nestjs/testing
npm i -D supertest
npm i -D @types/supertest
# jwt
npm i @nestjs/jwt
# cookie
npm i cookie-parser
npm i -D @types/cookie-parser
# openapi
npm i @nestjs/swagger
npm i ng-openapi-gen
npm i json-schema-ref-parser
# date
npm i dayjs
# http
npm i axios
npm i @nestjs/axios
# lodash
npm i lodash
npm i -D @types/lodash
# rate limit
npm i @nestjs/throttler
# server cache
npm i @nestjs/cache-manager
npm i cache-manager
# prisma
npm i @prisma/client
npm i -D prisma
# event
npm i @nestjs/event-emitter
# schedule
npm i @nestjs/schedule
# file upload
npm i -D @types/multer

################ 선택적 패키지 #####################

# redis cache
npm i redis

# websocket-server
npm i @nestjs/websockets
npm i @nestjs/platform-socket.io
# websocket-client
npm i ngx-socket-io
# npm i socket.io
# npm i socket.io-client
# npm i @types/socket.io

# message queue
npm i bull
npm i @nestjs/bull

# mongoose
npm i mongoose
npm i @nestjs/mongoose

# drizzle
npm i drizzle

# graphql server
npm i @nestjs/graphql
npm i @nestjs/apollo
npm i @apollo/server
# graphql client
npm i @apollo/client
npm i apollo-angular

# image optimize
npm i sharp
npm i -D @types/sharp

# session
npm i express-session
npm i -D @types/express-session

# aws-sdk
npm i aws-sdk
npm i @aws-sdk/client-s3
npm i multer-s3

# CSRF
# npm i csurf

# config
# npm i @nestjs/config

# npm i -D dotenv-cli
```

## main.ts

```ts
import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import compression from "compression";
import cookieParser from "cookie-parser";
import { writeFile } from "fs";
import helmet from "helmet";
import $RefParser from "json-schema-ref-parser";
import morgan from "morgan";
import { NgOpenApiGen } from "ng-openapi-gen";
import { join } from "path";
import { AppModule } from "./app/app.module";
import { winstonLogger, stream } from "./winston.config";
import { CacheModule, CacheInterceptor } from "@nestjs/cache-manager";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger,
  });

  /** Logger */
  app.use(morgan("combined", { stream }));
  /** Cookie Parser */
  app.use(cookieParser());
  /** Compression */
  app.use(compression());
  /** Security */
  app.use(helmet());
  /** CORS */
  app.enableCors();
  /** Global Prefix */
  app.setGlobalPrefix("api/v1");
  /** Port */
  const port = process.env.SERVER_PORT || 3000;
  /** OpenAPI */
  initOpenAPI(app, port);
  /** Server Listen */
  await app.listen(port);
  winstonLogger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();

async function initOpenAPI(app: INestApplication<any>, port: any) {
  /** OpenAPI */
  const swaggerConfig = new DocumentBuilder().setTitle("API").addServer(`http://localhost:${port}`).addCookieAuth().build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api/v1/document", app, document);

  const openApiPath = join(__dirname, "./assets/openapi.json");
  writeFile(openApiPath, JSON.stringify(document), () => {
    Logger.log(`✅ openapi.json 파일을 생성했습니다.`);
  });

  const openApiOptions = {
    input: openApiPath,
    output: "api/src/lib",
    indexFile: true,
  };

  const RefParser = new $RefParser.default();
  const openApi = await RefParser.bundle(openApiOptions.input, {
    dereference: { circular: false },
  });

  const ngOpenGen = new NgOpenApiGen(openApi, openApiOptions);
  ngOpenGen.generate();
}
```

## app.module.ts

```ts
import { BadRequestException, Module, ValidationPipe, NestModule } from "@nestjs/common";
import { APP_FILTER, APP_PIPE, APP_GUARD, APP_INTERCEPTOR, DiscoveryModule } from "@nestjs/core";
import { GlobalExceptionsFilter } from "./filters/global-exception.filter";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { ValidationError } from "class-validator";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { GlobalValidationPipe } from "./pipes/global-validation.pipe";

@Module({
  imports: [
    PrismaModule,
    DiscoveryModule,
    EventEmitterModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        ttl: 1000, // 1 seconds
        limit: 100, // 100 requests
      },
    ]),
    CacheModule.register({
      ttl: 5, // 5 seconds
      max: 10, // maximum number of items in cache
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionsFilter,
    },
    {
      provide: APP_FILTER,
      useClass: PrismaGlobalExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    {
      provide: APP_PIPE,
      useValue: GlobalValidationPipe,
    },
  ],
})
export class AppModule {}
```

## global-validation.pipe.ts

```ts
import { BadRequestException, ValidationPipe } from "@nestjs/common";
import { ValidationError } from "class-validator";

export const GlobalValidationPipe = new ValidationPipe({
  transformOptions: {
    enableImplicitConversion: true,
  },
  transform: true,
  whitelist: true,
  enableDebugMessages: true,
  exceptionFactory: (errors: ValidationError[]) => {
    if (errors?.length > 0) {
      const children = errors[0].children;

      if (children?.length > 0) {
        const error = children[0].constraints;
        const keys = Object.keys(error);
        const type = keys[keys.length - 1];
        const message = error[type];
        return new BadRequestException(message);
      }

      const error = errors[0].constraints;
      const keys = Object.keys(error);
      const type = keys[keys.length - 1];
      const message = error[type];
      return new BadRequestException(message);
    }
  },
});
```

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
    message: "이미 존재하는 고유값이 있습니다.",
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
    message: "Null 제약 조건을 위반했습니다.",
  },
  P2012: {
    status: HttpStatus.BAD_REQUEST,
    message: "필요한 값이 누락되었습니다.",
  },
  P2015: {
    status: HttpStatus.NOT_FOUND,
    message: "관련된 레코드를 찾을 수 없습니다.",
  },
};
```
