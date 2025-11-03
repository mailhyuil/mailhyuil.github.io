# nest logging pino

> Fastify already includes pino

## install

```sh
npm i nestjs-pino
npm i pino-http
```

## pino.module.ts

```ts
import { Module } from "@nestjs/common";
import { LoggerModule } from "nestjs-pino";

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        name: "api-server", // ✅ 서비스 이름 (CloudWatch log group 구분 시 유용)
        level: process.env.NODE_ENV !== "production" ? "debug" : "info",

        // ✅ Request ID 생성 / 유지
        genReqId: (req, res) => {
          const existingId = req.headers["x-request-id"];
          if (existingId) return existingId as string;
          const id = crypto.randomUUID();
          res.setHeader("x-request-id", id);
          return id;
        },

        // ✅ 개발 환경: pretty print
        transport:
          process.env.NODE_ENV !== "production"
            ? {
                target: "pino-pretty",
                options: {
                  colorize: true,
                  singleLine: true,
                  translateTime: "SYS:standard",
                  ignore: "pid,hostname,req.headers,res.headers",
                },
              }
            : {
                target: "@serdnam/pino-cloudwatch-transport",
                options: {
                  logGroupName: process.env.AWS_CLOUDWATCH_LOG_GROUP_NAME,
                  logStreamName: `api-server-${new Date().toISOString().split("T")[0]}`,
                  awsRegion: process.env.AWS_CLOUDWATCH_REGION,
                  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
                  awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                  interval: 1_000, // this is the default
                },
              },

        // ✅ 로깅 필터링 (헬스체크 요청 제외)
        autoLogging: {
          ignore: req => req.url === "/health" || req.url?.startsWith("/metrics") || false,
        },
        customSuccessMessage: (req, res) => {
          return `[${req.method}] ${req.url} ${res.statusCode}`;
        },
        customErrorMessage: (req, res, err) => {
          return `[${req.method}] ${req.url} ${res.statusCode} ${err.message}`;
        },
      },
    }),
  ],
})
export class PinoModule {}
```

## app.module.ts

```ts
@Module({
  imports: [PinoModule],
})
export class AppModule {}
```

## main.ts

```ts
import { Logger } from "nestjs-pino";

const app = await NestFactory.create(AppModule, { bufferLogs: true });
app.useLogger(app.get(Logger));
```
