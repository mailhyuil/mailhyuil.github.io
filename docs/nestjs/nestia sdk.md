# nestia sdk

## nestia.config.ts

```ts
import { INestiaConfig } from "@nestia/sdk";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./src/app/app.module";

const NESTIA_CONFIG: INestiaConfig = {
  input: async () => {
    const app = await NestFactory.create(AppModule);
    return app;
  },
  output: "./apps/api",
  distribute: "packages/api",
};

export default NESTIA_CONFIG;
```

## sdk 생성

```sh
nestia sdk
# or
nestia sdk --config ./apps/server/nestia.config.ts --project ./apps/server/tsconfig.app.json
```
