# nest main.ts 세팅

## install

```bash
## dependencies ##

npm i bcryptjs
npm i compression
npm i helmet
npm i morgan
npm i dotenv
npm i class-validator
npm i class-transformer
npm i @prisma/client
npm i @nestjs/jwt
npm i @nestjs/swagger
npm i ng-openapi-gen
# cookie
npm i cookie-parser
# date
npm i dayjs
# image optimize
npm i sharp
# event
npm i @nestjs/event-emitter
# rate limit
npm i @nestjs/throttler
# in-memory cache
npm i @nestjs/cache-manager
npm i cache-manager
# http
npm i axios
npm i @nestjs/axios
# session
npm i express-session
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
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import $RefParser from "json-schema-ref-parser";
import { NgOpenApiGen } from "ng-openapi-gen";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.use(compression());
  app.use(helmet());
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
  const port = process.env.SERVER_PORT | 3000;

  /** OpenAPI */
  const swaggerConfig = new DocumentBuilder().setTitle("Core API").addServer(`http://localhost:${port}`).addCookieAuth().build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  writeFile(join(__dirname, "./assets/openapi.json"), JSON.stringify(document), () => {
    logger.log(`✅ openapi.json 파일을 생성했습니다.`);
  });

  const options = {
    input: "my-api.json",
    output: "my-app/src/app/api",
  };

  // load the openapi-spec and resolve all $refs
  const RefParser = new $RefParser();
  const openApi = await RefParser.bundle(options.input, {
    dereference: { circular: false },
  });

  const ngOpenGen = new NgOpenApiGen(openApi, options);
  ngOpenGen.generate();

  await app.listen(port || 3000);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}
```
