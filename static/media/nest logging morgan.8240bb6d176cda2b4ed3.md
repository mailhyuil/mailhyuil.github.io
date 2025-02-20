# nest logging morgan

> HTTP request logger middleware
>
> > HTTP 를 로깅해주는 미들웨어

## install

```sh
npm i morgan
```

## main.ts

```ts
// combined - IP, method, url, status, response time, user-agent 를 로깅해줌 (운영용)
// dev - method, url, status, response time 를 로깅해줌 (개발용)
app.use(morgan("dev"));

app.use(
  morgan("dev", {
    stream: function (message) {
      winstonLogger.log(message);
    },
    // 400 에러 이상만 로깅
    skip: function (req, res) {
      return res.statusCode < 400;
    },
  }),
);
```
