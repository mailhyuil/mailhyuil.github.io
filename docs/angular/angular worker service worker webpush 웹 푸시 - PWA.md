# angular worker service worker webpush 웹 푸시 - PWA

> web-push를 사용하여 pushSubscription을 생성하고 서버에 저장
>
> > 알림을 보낼 땐 web-push를 사용하여 저장된 pushSubscription을 사용하여 알림을 보낸다.
> >
> > > 알림을 띄우기 위해서는 백그라운드에서 동작하고 있는 서비스 워커가 사용된다.

## 조건

> 브라우저가 web push api를 지원해야 한다.
>
> > 사용자가 웹 알림 권한을 허용해야 한다.
> >
> > > 웹 워커를 등록하고 웹 워커 프로세스가 실행되어야 한다.

## install

```sh
ng add @angular/pwa

# web-push 설치
npm install -D web-push
# vapid public key, vapid private key 생성
npx web-push generate-vapid-keys
```

## worker.js

> 푸시를 받을 때 알림을 띄우는 로직 구현
>
> > angular.json(project.json)에서 assets에 이 파일이 추가되도록 설정
> >
> > > ServiceWorkerModule.register('my-worker.js'), // 수정

```js
/// 이 코드는 WorkerGlobalScope에서 동작하는 코드입니다.
importScripts("ngsw-worker.js");

self.addEventListener("push", e => {
  const { title, body, ...data } = e.data.json();

  if (!title || !body) {
    return;
  }

  self.registration.showNotification(title, { body, data });
});

self.addEventListener("notificationclick", e => {
  const url = e.notification?.data?.url;

  if (!url) {
    return;
  }

  self.clients.openWindow(url);
});
```

## angular.json (project.json)

```json
assets: [
  "src/worker.js",
  ...
],
```

## app.config.ts

> ServiceWorkerModule.register("worker.js") 추가

```ts
export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom([ServiceWorkerModule.register("worker.js")])],
};
```

## window.service.ts

> 브라우저가 지원하는지 확인

```ts
import { compare } from "compare-versions";
import UAParser from "ua-parser-js";

@Injectable()
export class WindowService {
  isSupportNotification = false;

  constructor() {
    const {
      browser: { name, version },
    } = new UAParser().getResult();

    // 공식 문서 기준으로 필터링
    this.isSupportNotification =
      "Notification" in window &&
      !!version &&
      (name === "Chrome" ||
        compare(version, "52", ">=") ||
        name === "Edge" ||
        compare(version, "17", ">=") ||
        name === "Firefox" ||
        compare(version, "46", ">="));
  }
}
```

## SwPush 사용

```ts
export class NotificationComponent {
  constructor(
    private readonly swPush: SwPush,
    private readonly httpClient: HttpClient,
    protected readonly windowService: WindowService,
  ) {}

  async onClick() {
    // 브라우저가 지원하지 않으면 종료
    if (!this.windowService.isSupportNotification) return;

    // PushSubscription객체를 서버로 전송 및 DB에 저장
    const pushSubscription = await this.swPush.requestSubscription({ serverPublicKey: environment.VAPIDPublicKey });
    this.httpClient.post("web-push/subscribe", pushSubscription).subscribe();
  }
}
```

## 서버

### main.ts

```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as webPush from "web-push";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  webPush.setVapidDetails(
    "mailto:<관리용 이메일 주소 기입>",
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY,
  );

  await app.listen(3000);
}
bootstrap();
```

### web-push.controller.ts

> pushSubscription을 DB에 저장하고
>
> > 알림을 보내야 할 땐 아래와 같이 저장했던 pushSubscription을 sendNotification의 인자로 보내면 된다.

```ts
import { Controller, Post, Body } from "@nestjs/common";
import * as webPush from "web-push";

@Controller("web-push")
export class WebPushController {
  constructor(private readonly prisma: PrismaService) {}
  @Post("subscribe")
  async subscribe(@Body() body: { subscription: PushSubscription }) {
    console.log("Received subscription:", subscription);

    // subscription을 DB에 저장
    await this.prisma.pushSubscription.create({
      data: {
        subscription,
      },
    });

    return { success: true };
  }

  @OnEvent("web-push.send")
  async send(notification: { title: string; body: string }) {
    const payload = JSON.stringify(notification);

    const subscriptions = await this.prisma.pushSubscription.findMany();

    try {
      for (const { subscription } of subscriptions) {
        await webPush.sendNotification(subscription, payload);
      }
    } catch (err) {
      console.error("Error sending notification, reason: ", err);
    }
  }
}
```
