# nest main.ts 세팅

## install

```bash
npm i compression
npm i helmet
npm i cookie-parser
npm i -D @types/cookie-parser

npm i -D @types/multer
npm i -D prisma
npm i @prisma/client
npm i @nestjs/config
npm i @nestjs/jwt
npm i @nestjs/event-emitter
npm i @nestjs/swagger
npm i dotenv
npm i dotenv-cli
npm i class-validator
npm i class-transformer
```

## main.ts

```ts
import cookieParser from "cookie-parser";
import * as compression from "compression";
import helmet from "helmet";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

app.use(cookieParser());
app.use(compression());
app.use(helmet());
app.enableCors();
app.disable("x-powered-by");

const swaggerConfig = new DocumentBuilder().setTitle("example").setDescription("description").setVersion("1.0").addTag("example").build();
const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
SwaggerModule.setup("document", app, swaggerDocument); // document path로

const port = process.env.SERVER_PORT | 3000;
```
