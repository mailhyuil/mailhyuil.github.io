# nest localization nestjs-i18n

## install

```sh
npm i nestjs-i18n
```

## json 파일 생성

```sh
# src/i18n/ko/test.json
{
  "hello": "안녕하세요"
}

# src/i18n/en/test.json
{
  "hello": "hello"
}
```

## nestjs-cli.json

```json
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "assets": [{ "include": "i18n/**/*", "watchAssets": true }]
  }
}
```

## app.module.ts

```ts
import * as path from "path";

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AcceptLanguageResolver, I18nModule, QueryResolver } from "nestjs-i18n";

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: "en",
      loaderOptions: {
        path: path.join(__dirname, "/i18n/"),
        watch: true,
      },
      resolvers: [{ use: QueryResolver, options: ["lang"] }, AcceptLanguageResolver],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
```

## usage

```ts
import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";
import { I18n, I18nContext } from "nestjs-i18n";

@Controller()
export class AppController {
  @Get()
  getHello(@I18n() i18n: I18nContext) {
    return i18n.t(`test.here`);
  }
}
```
