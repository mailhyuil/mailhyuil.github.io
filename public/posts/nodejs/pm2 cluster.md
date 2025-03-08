# nodejs pm2 cluster

> core 수만큼 프로세스를 생성하여 cpu 사용량을 최적화
>
> > 만약 session 인증을 사용한다면 sticky session을 사용해야 한다.
> >
> > 혹은 jwt를 사용해서 앱을 stateless하게 만들어야 한다.

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
