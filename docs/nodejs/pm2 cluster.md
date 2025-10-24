# pm2 cluster

> core 수만큼 프로세스를 생성하여 cpu 사용량을 최적화
>
> > session 인증 사용 시
> >
> > 세션을 중앙 저장소에 저장해야 한다. (redis)
> >
> > 또는 sticky session 사용
> >
> > 또는 jwt를 사용해서 앱을 stateless하게 만들어야 한다.

```sh
pm2 start dist/main.js -i [프로세스 수]

pm2 scale <app> +3
pm2 scale <app> -3
```

## ecosystem.config.js

> max를 사용하면 코어 수만큼 프로세스를 생성한다.

```js
module.exports = {
  apps: [
    {
      name: "app",
      script: "build/app.js",
      exec_mode: "cluster", // cluster 모드
      instances: "8", // number or "max"
      autorestart: true,
      watch: false,
      max_memory_restart: "512M", // 메모리 초과 시 재시작
      vizion: false, // git commit hash
    },
  ],
};
```
