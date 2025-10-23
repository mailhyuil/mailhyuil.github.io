# pm2

> 어플리케이션이 계속 온라인으로 구동되도록 도와주는 데몬 프로세스 매니저
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

## option

```sh
1. --name : 실행 모드 이름

2. --script : 실행되는 파일 또는 스크립트

3. --args : script 실행 시 받을 인자

4. --instances : 프로세스 수

5. --autorestart : 재시작 on/off

6. --watch : watch on/off // 변경사항을 감지하여 서버를 자동으로 리로드

7. --env: Node.js 환경변수
```

## ecosystem.config.js

```ts
module.exports = {
  apps: [
    {
      name: "@hyuil/client",
      script: "./client/server/server.mjs",
      instances: 1, // "max" 나 0으로 설정하면 코어 수만큼 프로세스를 생성
      env: {},
    },
    {
      name: "@hyuil/server",
      script: "./server/main.js",
      instances: 1, // "max" 나 0으로 설정하면 코어 수만큼 프로세스를 생성
      env: {},
    },
  ],
};
```
