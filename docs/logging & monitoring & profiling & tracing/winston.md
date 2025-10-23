# winston

> winston은 기본적으로 데이터를 스트림으로 읽고 쓴다.
>
> > 따라서 스트림 데이터를 transport로 흘려보내서 데이터를 전송할 수 있다.
> >
> > > built-in transport: Console, File, Http, Stream
> > >
> > > > log는 상위 레벨의 로그를 포함한다. (e.g. info 로그에는 error, warn 로그가 포함된다.)
> > > >
> > > > 보관 정책이 다른 경우 로그를 분리해서 저장할 수 있다.

## install

```sh
npm i winston
npm i winston-daily-rotate-file
```

## transports

```sh
# build-in transports
winston.transports.Console; # 개발용
winston.transports.File; # 운영용
winston.transports.Http;
winston.transports.Stream;

# winston-daily-rotate-file
winstonDaily
```

## usage

```js
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    // info 레벨의 로그를 저장할 파일 설정
    new winston.transports.File({ filename: "combined.log" }),
    // error 레벨의 로그를 저장할 파일 설정
    new winston.transports.File({ filename: "error.log", level: "error" }),
    // info 레벨의 로그를 저장할 파일 설정 (winston-daily-rotate-file 사용 시)
    new winstonDaily({
      level: "info",
      datePattern: "YYYY-MM-DD",
      dirname: logDir,
      filename: `%DATE%.log`,
      maxFiles: 30, // 30일치 로그 파일 저장
      zippedArchive: true,
    }),
    // error 레벨 로그를 저장할 파일 설정 (winston-daily-rotate-file 사용 시)
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

// 프로덕션 환경이 아닐 때만 콘솔에 출력
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

// info라는 object가 생성되어 transform stream들을 거쳐서 transport로 전달된다.
// info -> format -> transport
logger.info("hello world");
```
