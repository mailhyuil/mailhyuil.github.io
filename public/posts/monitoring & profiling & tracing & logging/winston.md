# winston

> winston은 기본적으로 데이터를 스트림으로 읽고 쓴다.
>
> > 따라서 스트림 데이터를 transport로 흘려보내서 데이터를 전송할 수 있다.
> >
> > > built-in transport: Console, File, Http, Stream

## install

```sh
npm i winston
npm i winston-daily-rotate-file
```

## usage

```js
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    // error 레벨의 로그를 저장할 파일 설정
    new winston.transports.File({ filename: "error.log", level: "error" }),
    // info 레벨의 로그를 저장할 파일 설정
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// 프로덕션 환경이 아닐 때만 콘솔에 출력
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

// info라는 object가 생성되어 transform stream들을 거쳐서 transport로 전달된다.
// info -> format -> transport
logger.info("hello world");
```
