# nest fastify 세팅

## install

```bash
################ 필수 패키지 #####################

npm i @nestjs/platform-fastify
# env
npm i dotenv
# encryption
npm i bcryptjs
npm i -D @types/bcryptjs
# security
npm i @fastify/helmet
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
npm i @fastify/cookie
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
npm i @fastify/secure-session

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
import fastifyCookie from "@fastify/cookie";
import helmet from "@fastify/helmet";
import { writeFile } from "fs";
import { join } from "path";
import { AppModule } from "./app/app.module";
import { winstonLogger, winstonStream } from "./logger/winston.logger";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import FastifyMultipart from "@fastify/multipart";

const NODE_ENV = process.env.NODE_ENV;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
    logger: winstonLogger,
  });
  /** HTTP Logging */

  /** Multipart */
  await app.register(FastifyMultipart);
  /** Cookie Parser */
  await app.register(fastifyCookie);
  /** Security */
  await app.register(helmet);
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

## logger.middleware.ts

> FastifyRequest, FastifyReply를 사용

```ts
import { Injectable, NestMiddleware } from "@nestjs/common";
import { FastifyRequest, FastifyReply } from "fastify";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: FastifyRequest["raw"], res: FastifyReply["raw"], next: () => void) {
    console.log("Request...");
    next();
  }
}
```
