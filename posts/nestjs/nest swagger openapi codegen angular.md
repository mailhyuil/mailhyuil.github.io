# Swagger Codegen angular

> document.yaml or document.json을 읽고 코드로 생성해준다.
>
> > @ApiTags, @ApiBody, @ApiResponse, @ApiProperty 필요
> >
> > > controller를 읽음

```sh
npm i ng-openapi-gen
npm i json-schema-ref-parser

ng-openapi-gen --input my-api.yaml --output my-app/src/app/api
```

## nestjs main.ts

> swagger 문서를 code로 생성

```ts
import $RefParser from "json-schema-ref-parser";
import { NgOpenApiGen } from "ng-openapi-gen";

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
```

## tsconfig.json

```json
"paths": {
  "@app/api": ["api/src/index.ts"],
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
