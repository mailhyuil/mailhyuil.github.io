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
/// 개발 : dev , 배포 : combined
app.use(morgan("dev")); /// dev, combined, common, short, tiny

app.use(
  morgan("dev", {
    skip: function (req, res) {
      return res.statusCode < 400;
    },
    stream: function (message) {
      winstonLogger.log(message);
    },
  })
);
```
