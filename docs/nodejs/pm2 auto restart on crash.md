# pm2 auto restart on crash

```js
module.exports = {
  apps: [
    {
      autorestart: true, // 앱 crash 시 자동 재시작
      restart_delay: 1000, // 1초 후에 재시작

      watch: false, // 파일 변경 시 재시작
      watch_delay: 1000, // 1초 후에 재시작

      cron_restart: "0 0 * * *", // 매일 0시에 재시작

      max_memory_restart: "300M", // 300M가 되면 다시 실행
    },
  ],
};
```
