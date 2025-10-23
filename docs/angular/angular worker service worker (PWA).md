# angular PWA

## install

```sh
ng add @angular/pwa
ng build --prod

# 테스트용 http-server 설치
npm i -g http-server
http-server -p 8080 -c-1 dist/<project-name> -c-1 = disable caching
```

## main.ts

```ts
provideServiceWorker();
```

## Service Worker

> 서비스 워커는 애플리케이션을 위한 캐싱 작업을 담당하는 브라우저 백그라운드 프로세스
>
> > 캐싱 작업을 통해 오프라인에서도 앱을 사용할 수 있음

## SwPush

> 서비스 워커를 통해 푸시 알림을 받을 수 있음

## SwUpdate

> 서비스 워커를 통해 앱 업데이트를 받을 수 있음

## SwRegistrationOptions

> 서비스 워커를 등록할 때 사용하는 옵션
