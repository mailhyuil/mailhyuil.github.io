# winston winston-cloudwatch

## install

```sh
npm i winston
npm i winston-cloudwatch
npm i @aws-sdk/client-cloudwatch-logs
```

## winston.logger.ts

```ts
import { LoggerService } from "@nestjs/common";
import type { StreamOptions } from "morgan";
import { utilities, WinstonModule } from "nest-winston";
import process from "process";
import winston from "winston";
import WinstonCloudWatch from "winston-cloudwatch";

const { combine, timestamp, json } = winston.format;

let winstonLogger: LoggerService;
let winstonStream: StreamOptions;

if (process.env.NODE_ENV === "production") {
  winstonLogger = WinstonModule.createLogger({
    format: combine(timestamp(), json()),
    transports: [
      new WinstonCloudWatch({
        level: "error",
        logStreamName: "error",
        logGroupName: process.env.AWS_CLOUDWATCH_LOG_GROUP_NAME,
        awsRegion: process.env.AWS_CLOUDWATCH_REGION,
        awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
        awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
      }),
      new WinstonCloudWatch({
        level: "warn",
        logStreamName: "warn",
        logGroupName: process.env.AWS_CLOUDWATCH_LOG_GROUP_NAME,
        awsRegion: process.env.AWS_CLOUDWATCH_REGION,
        awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
        awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
      }),
      new WinstonCloudWatch({
        level: "info",
        logStreamName: "info",
        logGroupName: process.env.AWS_CLOUDWATCH_LOG_GROUP_NAME,
        awsRegion: process.env.AWS_CLOUDWATCH_REGION,
        awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
        awsSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
      }),
    ],
  });
  winstonStream = {
    write: (message: string) => {
      winstonLogger.log(message);
    },
  };
} else {
  winstonLogger = WinstonModule.createLogger({
    transports: [
      new winston.transports.Console({
        level: "silly", // 모든 단계를 로그
        format: combine(
          utilities.format.nestLike("APP", {
            prettyPrint: true, // nest에서 제공하는 옵션. 로그 가독성을 높여줌
            colors: true, // 로그에 색깔을 넣어서 출력
          }),
        ),
      }),
    ],
  });
  winstonStream = {
    write: (message: string) => {
      winstonLogger.log(message);
    },
  };
}
export { winstonLogger, winstonStream };
```
