# nest logging winston

> log를 로그 파일에 저장하기 위해 사용
>
> > pm2 를 사용한다면 logs로 읽을 파일 위치 변경해주기
> >
> > > winston만 사용한다면 미들웨어나 인터셉터를 만들어주고
> > >
> > > > morgan을 같이 사용한다면 morgan middleware에서 나오는 stream을 winston에 넣어주기

## install

```sh
npm i winston
npm i nest-winston

# 로깅한 정보들을 날짜 별로 로그 파일을 생성해주고 일정 시간이 지나면 삭제 및 압축을 해주는 기능
npm i winston-daily-rotate-file

npm i winston nest-winston winston-daily-rotate-file
```

## winston.config.ts

```ts
import { utilities, WinstonModule } from "nest-winston";
import process from "process";
import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";
const { combine, timestamp, printf } = winston.format;

const logDir = "logs"; // logs 디렉토리 하위에 로그 파일 저장

const logFormat = printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

const productionTransports = () => [
  // info 레벨 로그를 저장할 파일 설정
  new winstonDaily({
    level: "info",
    datePattern: "YYYY-MM-DD",
    dirname: logDir,
    filename: `%DATE%.info.log`,
    maxFiles: 30,
    zippedArchive: true,
  }),
  // warn 레벨 로그를 저장할 파일 설정
  new winstonDaily({
    level: "warn",
    datePattern: "YYYY-MM-DD",
    dirname: logDir,
    filename: `%DATE%.warn.log`,
    maxFiles: 30,
    zippedArchive: true,
  }),
  // error 레벨 로그를 저장할 파일 설정
  new winstonDaily({
    level: "error",
    datePattern: "YYYY-MM-DD",
    dirname: logDir,
    filename: `%DATE%.error.log`,
    maxFiles: 30,
    zippedArchive: true,
  }),
];

const localTransports = () => [
  new winston.transports.Console({
    level: "silly", // 모든 단계를 로그
    format: winston.format.combine(
      winston.format.timestamp(),
      utilities.format.nestLike("APP", {
        prettyPrint: true, // nest에서 제공하는 옵션. 로그 가독성을 높여줌
        colors: true, // 로그에 색깔을 넣어서 출력
      }),
    ),
  }),
];

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const winstonLogger = WinstonModule.createLogger({
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    logFormat,
  ),
  transports: process.env["NODE_ENV"] === "production" ? productionTransports() : localTransports(),
});

// morgan winston 설정
const stream = {
  write: message => {
    winstonLogger.log(message);
  },
};

export { stream, winstonLogger };
```

## main.ts

```ts
import { winstonLogger, stream } from "./winston.config";

const app = await NestFactory.create(AppModule, {
  logger: winstonLogger,
});
app.use(morgan("combined", { stream }));
```

## pm2 log 끄기

```js
module.exports = {
  apps: [
    {
      out_file: "/dev/null",
      error_file: "/dev/null",
    },
  ],
};
```
