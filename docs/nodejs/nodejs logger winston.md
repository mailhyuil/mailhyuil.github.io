# nodejs logger winston

> 서버에 로그를 남기는 것은 몇 번을 강조해도 부족하지 않을 만큼 굉장히 중요합니다!!!

## install

```sh
npm install winston winston-daily-rotate-file
```

## usage

```js
import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";

const logDir = "logs"; // logs 디렉토리 하위에 로그 파일 저장
const { combine, timestamp, printf } = winston.format;

// Define log format
const logFormat = printf((info) => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    logFormat
  ),
  transports: [
    // info 레벨 로그를 저장할 파일 설정
    new winstonDaily({
      level: "info",
      datePattern: "YYYY-MM-DD",
      dirname: logDir,
      filename: `%DATE%.log`,
      maxFiles: 30, // 30일치 로그 파일 저장
      zippedArchive: true,
    }),
    // error 레벨 로그를 저장할 파일 설정
    new winstonDaily({
      level: "error",
      datePattern: "YYYY-MM-DD",
      dirname: logDir + "/error", // error.log 파일은 /logs/error 하위에 저장
      filename: `%DATE%.error.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
});

// Production 환경이 아닌 경우(dev 등)
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // 색깔 넣어서 출력
        winston.format.simple() // `${info.level}: ${info.message} JSON.stringify({ ...rest })` 포맷으로 출력
      ),
    })
  );
}

export { logger };
```

## log 남기기

```js
import express from "express";
import { logger } from "./config/winston";

const app = express().Application;

app.listen(3000, () => {
  logger.info("Server listening on port 3000");
});

app.get("/", (req, res) => {
  logger.info("GET /");
  res.sendStatus(200);
});

app.get("/error", (req, res) => {
  logger.error("Error message");
  res.sendStatus(500);
});
```
