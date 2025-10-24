# nest swagger openapi codegen angular

> document.yaml or document.json을 읽고 코드로 생성해준다.
>
> > @ApiTags, @ApiBody, @ApiResponse, @ApiProperty 필요
> >
> > > controller를 읽음

```sh
npm i ng-openapi-gen
npm i @apidevtools/json-schema-ref-parser

ng-openapi-gen --input my-api.yaml --output my-app/src/app/api
```

## server/open-api/init-openapi.ts

> swagger 문서를 code로 생성

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
    .setVersion("1.0")
    .addCookieAuth("id-token", {
      type: "apiKey",
      in: "cookie",
      description: "JWT Id Token",
      name: "Id Token",
      bearerFormat: "JWT",
    })
    .addCookieAuth("refresh-token", {
      type: "apiKey",
      in: "cookie",
      description: "JWT Refresh Token",
      name: "Refresh Token",
      bearerFormat: "JWT",
    })
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

## tsconfig.base.json

```json
"paths": {
  "@api": ["api/src/lib/index.ts"],
}
```

## angular appConfig.ts

```ts
import { HttpClientModule } from "@angular/common/http";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideRouter } from "@angular/router";
import { ApiConfiguration } from "api/src/lib/api-configuration";
import { ApiModule } from "./../../../../api/src/lib/api.module";
import { appRoutes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), importProvidersFrom([ApiModule, ApiConfiguration, HttpClientModule])],
};
```
