# nest logging pino

> Fastify already includes pino

## install

```sh
npm i nestjs-pino
npm i pino-http
```

## app.module.ts

```ts
import { LoggerModule } from "nestjs-pino";

@Module({
  imports: [LoggerModule.forRoot()],
})
class AppModule {}
```

## main.ts

```ts
import { Logger } from "nestjs-pino";

const app = await NestFactory.create(AppModule, { bufferLogs: true });
app.useLogger(app.get(Logger));
```
