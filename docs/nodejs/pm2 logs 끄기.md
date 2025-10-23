# pm2 로그 끄기

> "/dev/null" 또는 NULL 사용

```js
module.exports = {
  apps : [
    {
      name: 'Business News Watcher',
      script: 'app.js',
      instances: 1,
      out_file: "/dev/null",
      error_file: "/dev/null"
      cron_restart: '0 0 * * *'
    }
  ]
}
```
