# nest main.ts 세팅

## install

```bash
## dependencies ##

npm i bcryptjs
npm i compression
npm i helmet
npm i morgan
npm i csurf
npm i dotenv
npm i class-validator
npm i class-transformer
npm i @prisma/client
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
# http
npm i axios
npm i @nestjs/axios
# jwt
npm i @nestjs/jwt
# cookie
npm i cookie-parser
# session
npm i express-session
# date
npm i dayjs
# image optimize
npm i sharp
# config
# npm i @nestjs/config

## dev-dependencies ##

npm i -D @types/bcryptjs
npm i -D @types/cookie-parser
npm i -D @types/multer
npm i -D @types/sharp
npm i -D @types/express-session
npm i -D prisma
# npm i -D dotenv-cli
```

## main.ts

```ts
import { BadRequestException, Logger, ValidationError, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import compression from "compression";
import cookieParser from "cookie-parser";
import { writeFile } from "fs";
import helmet from "helmet";
import $RefParser from "json-schema-ref-parser";
import morgan from "morgan";
import * as csurf from "csurf";
import { NgOpenApiGen } from "ng-openapi-gen";
import { join } from "path";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.use(compression());
  app.use(helmet());
  app.use(csurf());
  app.use(morgan("dev"));
  app.enableCors();

  /** Global Prefix */
  app.setGlobalPrefix("api/v1");
  /** Global Validation Pipe */
  app.useGlobalPipes(
    new ValidationPipe({
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
    })
  );
  /** Port */
  const port = process.env.SERVER_PORT || 3000;

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

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
```
