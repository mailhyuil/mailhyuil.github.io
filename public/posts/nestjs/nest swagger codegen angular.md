# Swagger Codegen angular

> document.yaml or document.json을 읽고 코드로 생성해준다.

```sh
npm i ng-openapi-gen

ng-openapi-gen --input my-api.yaml --output my-app/src/app/api
```

## nestjs main.ts

> swagger 문서를 code로 생성

```ts
import $RefParser from "json-schema-ref-parser";
import { NgOpenApiGen } from "ng-openapi-gen";

/** Swagger */
const document = SwaggerModule.createDocument(
  app,
  new DocumentBuilder().setTitle("Core API").addServer("http://localhost:3000").addCookieAuth().build()
);

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

## api/src/lib/api-configuration.ts

```ts
/* tslint:disable */
/* eslint-disable */
import { Injectable } from "@angular/core";

/**
 * Global configuration
 */
@Injectable({
  providedIn: "root",
})
export class ApiConfiguration {
  rootUrl: string = "http://localhost:3000";
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
```
