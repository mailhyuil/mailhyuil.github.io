# nest 세팅

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
npm i @apidevtools/json-schema-ref-parser
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
import cookieParser from "cookie-parser";
import { writeFile } from "fs";
import helmet from "helmet";
import morgan from "morgan";
import { join } from "path";
import { AppModule } from "./app/app.module";
import { winstonLogger, winstonStream } from "./logger/winston.logger";
import { NestExpressApplication } from "@nestjs/platform-express";

const NODE_ENV = process.env.NODE_ENV;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: winstonLogger,
  });

  /** Logger */
  app.use(
    morgan(NODE_ENV !== "none" ? "combined" : "dev", {
      stream: winstonStream,
      skip: function (req, res) {
        if (NODE_ENV !== "none") {
          return res.statusCode >= 400 && res.statusCode !== 404; // info log를 남길거라면 (에러를 pipe에서 처리 시 로깅하지 않음 (두번 찍힘))
          return true; // exception log를 http exception filter에서 남기고 있고 info log를 남기지 않을거라면 true로 처리
        } else {
          return false;
        }
      },
    }),
  );
  /** Cookie Parser */
  app.use(cookieParser());
  /** Compression */
  /** *주의* 성능 면에서 nestjs보다 nginx같은 reverse proxy에서 압축하는 편이 효율적입니다. */
  // app.use(compression());
  /** Security */
  app.use(helmet());
  /** CORS */
  /** *주의* 다른 브라우저 클라이언트 Origin으로 부터의 요청이 있는 경우에 사용 */
  /** 서버 to 서버는 필요없음 */
  app.enableCors();
  /** Trust Proxy */
  app.set("trust proxy", true);
  /** Global Prefix */
  app.setGlobalPrefix("api");
  /** Versioning */
  app.enableVersioning();
  /** Port */
  const port = process.env.SERVER_PORT || 3000;
  /** OpenAPI */
  initOpenAPI(app, port);
  /** Server Listen */
  await app.listen(port);
  winstonLogger.log(`🚀 Application is running on: http://localhost:${port}/api`);
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
        ignoreUserAgents: [/k6/i],
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
import $RefParser from "@apidevtools/json-schema-ref-parser";
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
  const swaggerConfig = new DocumentBuilder()
    .setTitle("API")
    .addServer(`http://localhost:${port}`)
    .addCookieAuth()
    .build();

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

  const RefParser = new $RefParser();
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
