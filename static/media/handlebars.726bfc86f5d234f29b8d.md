# handlebars

> nestjs에서 defualt로 지원하는 템플릿 엔진

## install

```shell
npm install --save hbs
```

## main.ts

```ts
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, "..", "public")); // ex) style 요청 style/styles.css
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.setViewEngine("hbs");

  await app.listen(3000);
}
bootstrap();
```

## index.hbs

```hbs
<html>
  <head>
    <meta charset="utf-8" />
    <title>App</title>
  </head>
  <body>
    {{message}}
  </body>
</html>
```

## controller

```ts
import { Get, Controller, Render } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  @Render("index")
  root() {
    return { message: "Hello world!" };
  }
}
```

## style

```hbs
<link rel="stylesheet" href="/styles/style.css" />
```

## each

```hbs
{{#each users}}
  <!-- return {users:{obj}} -->
  <div class="flex font-semibold gap-3">
    <h1>{{this.username}}</h1>
    <h1>{{this.password}}</h1>
  </div>
{{/each}}
```
