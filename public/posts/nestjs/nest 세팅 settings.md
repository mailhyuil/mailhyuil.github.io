# nest main.ts 세팅

## install

```bash
################ 필수 패키지 #####################

# env
npm i dotenv
# encryption
npm i bcryptjs
npm i -D @types/bcryptjs
# security
npm i helmet
# response compression
npm i compression
npm i -D @types/compression
# validation
npm i class-validator
npm i class-transformer
npm i nestjs-form-data
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
npm i prisma-error-enum
# event
npm i @nestjs/event-emitter
# schedule
npm i @nestjs/schedule
# file upload
npm i -D @types/multer
# nestjs-cls
npm i nestjs-cls
npm i @nestjs-cls/transactional
npm i @nestjs-cls/transactional-adapter-prisma
# AOP
npm i @toss/nestjs-aop

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
import { ClsModule } from "nestjs-cls";
import { AopModule } from "@toss/nestjs-aop";
import { ClsPluginTransactional } from "@nestjs-cls/transactional";
import { TransactionalAdapterPrisma } from "@nestjs-cls/transactional-adapter-prisma";
import { HttpExceptionFilter } from "./filters/http-exception.filter";

@Module({
  imports: [
    PrismaModule,
    AopModule
    EventEmitterModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        ttl: 1000, // 1 seconds
        limit: 100, // 100 requests
      },
    ]),
    CacheModule.register({
      global: true,
      ttl: 5, // 5 seconds
      max: 10, // maximum number of items in cache
    }),
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
      plugins: [
        new ClsPluginTransactional({
          imports: [
            PrismaModule, // module in which the PrismaClient is provided
          ],
          adapter: new TransactionalAdapterPrisma({
            prismaInjectionToken: PrismaService, // the injection token of the PrismaClient
          }),
        }),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
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
      provide: APP_PIPE,
      useValue: GlobalValidationPipe,
    },
  ],
})
export class AppModule {}
```

## server/open-api/init-openapi.ts

```ts
import { INestApplication, Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { writeFile } from "fs";
import $RefParser from "json-schema-ref-parser";
import { NgOpenApiGen } from "ng-openapi-gen";
import { resolve } from "path";
import { AppModule } from "../src/app/app.module";

export async function initOpenApi(app?: INestApplication, port?: number | string) {
  if (!app) {
    app = await NestFactory.create(AppModule);
  }
  if (!port) {
    port = process.env.SERVER_PORT || 3000;
  }
  /** OpenAPI */
  const swaggerConfig = new DocumentBuilder().setTitle("API").addServer(`http://localhost:${port}`).addCookieAuth().build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("api/v1/document", app, document);

  const openApiPath = resolve(__dirname, "openapi.json");
  writeFile(openApiPath, JSON.stringify(document), () => {
    Logger.log(`✅ openapi.json 파일을 생성했습니다. ${openApiPath}`);
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

  try {
    const ngOpenGen = new NgOpenApiGen(openApi, openApiOptions);
    ngOpenGen.generate();
  } catch (error) {
    Logger.error(error);
  }
}
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
});
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
