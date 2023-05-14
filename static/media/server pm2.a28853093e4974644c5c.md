# pm2 (프로세스 매니저 2)

> 어플리케이션이 계속 온라인으로 구동되도록 도와주는 데몬 "프로세스 매니저"
>
> > Node.js를 사용할 때 배포 단계에서 서버를 무중단으로 설정해야 하는 상황에 사용
> >
> > > 서비스를 제공하는 도중 갑자기 서버가 중단된다면? 다시 실행
> > >
> > > > 멀티 코어 혹은 하이퍼 스레딩을 지원

## install

```sh
npm i -g pm2
```

## 명령어

```
pm2 start
pm2 kill
pm2 log
pm2 monit
```

## option

```
1. --name : 실행 모드 이름

2. --script : 실행되는 파일

3. --instances : 프로세스 수

4. --autorestart : 재시작 on/off

5. --watch : watch on/off // 변경사항을 감지하여 서버를 자동으로 리로드

6. --env: Node.js 환경변수
```

## ecosystem.config.js

```ts
module.exports = {
  apps: [
    {
      name: "avirtual-client",
      script: "./client/.output/server/index.mjs",
      env: {
        NITRO_PORT: 13011,
        SERVER: "https://avirtual-api.lepisode.team/api/v1",
      },
    },
    {
      name: "avirtual-server",
      script: "./server/dist/main.js",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
```

## .env.production

```
NODE_ENV=development

SERVER_PORT=13012

DATABASE_URL="postgresql://postgres:88782314p*@59.3.87.92:5432/avirtual?schema=public"

JWT_SECRET_KEY=5BTENutJCTpGO2aHfDDs2u0KKKKpKV8s
JWT_PUBLIC_KEY=Xv26XN6L86kGOvHMS2rfV2k9HsLVEEEp
JWT_PRIVATE_KEY=PAwXjs5j7eLj8WIeczIRgZN2TdJqi2Bn

SERVER=https://avirtual-api.lepisode.team/api/v1
```

## nuxt.config.ts

```ts
runtimeConfig: {
  public: {
    server: process.env.SERVER,
  },
  server: process.env.SERVER,
},
```

## 실행

```
pm2 start ecosystem.config.js
```

## log 확인

```
pm2 log avirtual-server --lines 300
```

## restart를 해줘야 반영 됨

> pm2 restart server_name
