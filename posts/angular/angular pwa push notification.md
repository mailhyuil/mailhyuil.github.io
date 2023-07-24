# angular pwa push notification

> 웹 푸시를 사용하기 위해서는 서비스 워커가 필요하다.

## install

```sh
ng add @angular/pwa --project <project-name>

npm install --save web-push

# vapid public key, vapid private key 생성
npx web-push generate-vapid-keys
```

## 지원 확인

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

## 사용

> SwPush

```ts
export class NotificationComponent {
  constructor(private swPush: SwPush, private http: HttpClient, protected win: WindowService) {}

  onClick() {
    this.swPush.requestSubscription({ serverPublicKey: environment.VAPIDPublicKey }).then((pushSubscription) => {
      this.http.post("/api/subscribe", pushSubscription).subscribe();
    });
  }
}
```
