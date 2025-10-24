# pm2 logs

> ~/.pm2/logs
>
> > pm2 logs는 터미널에 출력된 값을 저장함
> >
> > > 배포환경에서는 터미널에 로그를 찍지 않게 하기 때문에 다른 라이브러리로 로그를 따로 저장

## usage

```sh
pm2 logs [app_name | app_id]       # 로그 출력
pm2 logs [app_name | app_id] --err # 에러 로그만 출력
pm2 logs [app_name | app_id] --out # 정상 로그만 출력

pm2 flush # 로그 초기화

pm2 install pm2-logrotate # 로그 자동 삭제
```

## ecosystem.config.js

```js
module.exports = {
  apps: [
    {
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
    },
  ],
};
```
