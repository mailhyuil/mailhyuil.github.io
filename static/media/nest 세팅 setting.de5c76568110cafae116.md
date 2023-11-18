# nest main.ts 세팅

## install

```bash
npm i dotenv
npm i class-validator
npm i class-transformer
npm i bcryptjs
npm i -D @types/bcryptjs
npm i compression
npm i helmet
npm i morgan
# prisma
npm i @prisma/client
npm i -D prisma
# openapi
npm i @nestjs/swagger
npm i ng-openapi-gen
npm i json-schema-ref-parser
# event
npm i @nestjs/event-emitter
# rate limit
npm i @nestjs/throttler
# schedule
npm i @nestjs/schedule
# in-memory cache
npm i @nestjs/cache-manager
npm i cache-manager
# web cache
npm i etag
npm i -D @types/etag
# http
npm i axios
npm i @nestjs/axios
# jwt
npm i @nestjs/jwt
# cookie
npm i cookie-parser
npm i -D @types/cookie-parser
# session
npm i express-session
npm i -D @types/express-session
# CSRF
npm i csurf
# date
npm i dayjs
# image optimize
npm i sharp
npm i -D @types/sharp
# file upload
npm i -D @types/multer

# config
# npm i @nestjs/config

# npm i -D dotenv-cli
```

## main.ts

```ts
import { INestApplication, Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import compression from "compression";
import cookieParser from "cookie-parser";
import csurf from "csurf";
import { writeFile } from "fs";
import helmet from "helmet";
import $RefParser from "json-schema-ref-parser";
import morgan from "morgan";
import { NgOpenApiGen } from "ng-openapi-gen";
import { join } from "path";
import { AppModule } from "./app/app.module";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /** Cookie Parser */
  app.use(cookieParser());
  /** Compression */
  app.use(compression());
  /** Security */
  app.use(helmet());
  /** Logger */
  app.use(morgan("dev"));
  /** CORS */
  app.enableCors();
  /** Global Prefix */
  app.setGlobalPrefix("api/v1");
  /** Port */
  const port = process.env.SERVER_PORT || 3000;
  /** Server Listen */
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
  /** OpenAPI */
  initOpenAPI(app, port);
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
import { APP_FILTER, APP_PIPE } from "@nestjs/core";
import { AllExceptionsFilter } from "./filters/exception.filter";

import { APP_GUARD, APP_INTERCEPTOR, DiscoveryModule } from "@nestjs/core";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { ValidationError } from "class-validator";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CacheControlInterceptor } from "./interceptors/cache-control.interceptor";
import { EtagInterceptor } from "./interceptors/etag.interceptor";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
@Module({
  imports: [
    PrismaModule,
    UsersModule,
    DiscoveryModule,
    ThrottlerModule.forRoot([
      {
        // default
        ttl: 60000,
        limit: 10,
      },
      {
        name: "short",
        ttl: 1000,
        limit: 3,
      },
      {
        name: "medium",
        ttl: 10000,
        limit: 20,
      },
      {
        name: "long",
        ttl: 100000,
        limit: 100,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheControlInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: EtagInterceptor,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transformOptions: { enableImplicitConversion: true },
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
      }),
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(csurf({ cookie: true }), CsrfMiddleware).forRoutes("*");
  }
}
```
