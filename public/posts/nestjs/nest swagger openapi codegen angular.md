# Swagger Codegen angular

> document.yaml or document.json을 읽고 코드로 생성해준다.
>
> > @ApiTags, @ApiBody, @ApiResponse 필요
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

/** Swagger */
const document = SwaggerModule.createDocument(app, new DocumentBuilder().setTitle("Core API").addServer("http://localhost:3000").addCookieAuth().build());

// document는 json 파일이다
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
```

## tsconfig.json

```
"paths": {
  "@<project-name>/api": ["api/src/index.ts"],
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
