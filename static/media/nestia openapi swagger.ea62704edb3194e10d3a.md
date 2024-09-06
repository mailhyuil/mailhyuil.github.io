# nestia swagger

## nestia.config.ts

```ts
import { INestiaConfig } from "@nestia/sdk";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "src/app.module";

const NESTIA_CONFIG: INestiaConfig = {
  swagger: {
    output: "public/swagger.json",
    security: {
      bearer: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local Server",
      },
    ],
    beautify: true,
  },
};
export default NESTIA_CONFIG;
```

## nest-cli.json

> root에 public 위치

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,
    "assets": [
      {
        "include": "../public",
        "outDir": "dist/public",
        "watchAssets": true
      }
    ],
    "watchAssets": true
  }
}
```

## main.ts

```ts
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { SwaggerModule } from "@nestjs/swagger";
import { join } from "path";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "public"));
  const docs = require(join(__dirname, "..", "public", "swagger.json"));
  docs.servers = [{ url: "http://localhost:3000" }];
  SwaggerModule.setup("swagger", app, docs);
  await app.listen(3000);
}
bootstrap();
```
