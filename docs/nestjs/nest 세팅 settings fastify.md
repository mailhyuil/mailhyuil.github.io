# nest 세팅 settings fastify

> 대부분의 라이브러리는 잘 동작하지만
>
> > 예외적으로 main.ts에서 미들웨어로 추가하는 라이브러리들은 fastify 전용 패키지를 사용해야한다. (helmet, csrf, multipart, compress, cookie, session 등)
> >
> > fastify 전용 미들웨어는 express보다 더 최적화되어 빠르다.
> >
> > > jwt는 @nestjs/jwt를 사용해도 되지만 더 빠르게 처리하기 위해서 @fastify/jwt를 사용할 수 있음

## install

```bash
################ 필수 패키지 #####################

# fastify
npm i @nestjs/platform-fastify

# security
npm i @fastify/helmet
# response compression
npm i @fastify/compress
# cookie
npm i @fastify/cookie
# file upload
npm i @fastify/multipart
# jwt
npm i @fastify/jwt

# env
npm i dotenv

# encryption
npm i bcrypt
npm i -D @types/bcrypt

# validation
npm i class-validator
npm i class-transformer
npm i nestjs-form-data

# testing
npm i -D @nestjs/testing
npm i -D supertest
npm i -D @types/supertest

# openapi
npm i @nestjs/swagger
npm i ng-openapi-gen
npm i @apidevtools/json-schema-ref-parser

# date
npm i dayjs

# http
npm i axios
npm i @nestjs/axios

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
# npm i @fastify/csrf-protection

# config
# npm i @nestjs/config

# npm i -D dotenv-cli
```

## main.ts

```ts
import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import cookie from "@fastify/cookie";
import jwt from "@fastify/jwt";
import helmet from "@fastify/helmet";
import multipart from "@fastify/multipart";

const NODE_ENV = process.env.NODE_ENV;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  /** Cookie Parser */
  await app.register(cookie);
  /** File Upload */
  await app.register(multipart);
  /** JWT */
  await app.register(jwt, {
    secret: process.env.JWT_SECRET,
  });
  /** Security */
  await app.register(helmet);
  /** Trust Proxy */
  app.set("trust proxy", true);
  /** Global Prefix */
  app.setGlobalPrefix("api");
  /** Shutdown Hooks */
  app.enableShutdownHooks();
  /** Versioning */
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: "1", // global fallback version 설정
  });
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
