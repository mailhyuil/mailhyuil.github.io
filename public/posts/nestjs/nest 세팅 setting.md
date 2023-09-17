# nest main.ts 세팅

## install

```bash
npm i bcryptjs
npm i compression
npm i helmet
npm i cookie-parser
npm i morgan
npm i dotenv
npm i dotenv-cli
npm i class-validator
npm i class-transformer
npm i @prisma/client
npm i @nestjs/jwt
npm i @nestjs/event-emitter
npm i @nestjs/swagger
npm i dayjs
npm i sharp

# npm i @nestjs/config

npm i -D @types/bcryptjs
npm i -D @types/cookie-parser
npm i -D @types/multer
npm i -D @types/sharp
npm i -D prisma
```

## main.ts

```ts
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
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

  const swaggerConfig = new DocumentBuilder().setTitle("example").setDescription("description").setVersion("1.0").addTag("example").build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup("document", app, swaggerDocument); // document path로

  const port = process.env.SERVER_PORT | 3000;

  await app.listen(port || 3000);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}
```
