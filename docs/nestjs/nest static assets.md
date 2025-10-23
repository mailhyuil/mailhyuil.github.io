# nest static assets

> 정적 파일을 url로 접근 가능하게 하는 방법

## project.json (nx)

> public 폴더를 dist에 포함시키기

```sh
"assets": ["apps/server/src/public"],
```

## nest-cli.json (nest)

> public 폴더는 root에 위치

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
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "public")); // public 폴더를 정적 파일로 사용
  // app.useStaticAssets(join(__dirname, "assets")); // assets 폴더를 정적 파일로 사용

  await app.listen(4200);
}
/// http://localhost:4200/hello.txt
```
