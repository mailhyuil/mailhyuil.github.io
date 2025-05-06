# pm2 reload

> restart 시에는 서버가 내려가는 시간이 있지만, reload는 내려가지 않고 재시작한다.
>
> > restart === kill + start
> >
> > > reload === a 0-second-downtime reload. // 무중단 재시작
> > >
> > > > reload를 사용하면 새로운 프로세스를 먼저 spawn하고, 이후에 기존 프로세스를 kill한다.

## ecosystem.config.js

```js
module.exports = {
  apps: [
    {
      name: "@hyuil/server",
      script: "./main.js",
      watch: ".",
      instances: -1, // 클러스터 모드
    },
  ],
};
```

## 요청 중인 작업 처리할 때까지 서버의 종료를 대기시키기

```js
// server.js

const app = express();

let disableKeepAlive = false;

// 중단 시그널이 disableKeepAlive를 true로 바꾸면
// 이후 요청은 모두 close로 응답한다.
// 요청, 응답 처리가 끝나면 커넥션을 닫는다.
app.use((req, res, next) => {
  if (disableKeepAlive) {
    res.set("Connection", "close");
  }
  next();
});

const server = app.listen(process.env.PORT, () => {
  console.log(`The application is listening on port ${process.env.PORT}`);
  if (process.send) {
    console.log("send");
    process.send("ready");
  }
});

process.on("SIGINT", async () => {
  disableKeepAlive = true;
  server.close();
  process.exit(0);
});
```
