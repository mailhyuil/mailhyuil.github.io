# nodejs pm2 cluster

```sh
pm2 start dist/main.js -i [프로세스 수]
```

## ecosystem.config.js

> max를 사용하면 코어 수만큼 프로세스를 생성한다.

```js
module.exports = {
  apps: [
    {
      script: "app.js",
      instances: "max",
    },
  ],
};
```
