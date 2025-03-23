# capacitor server

> 로컬의 Capacitor 앱을 사용하는 대신 웹어플리케이션처럼 원격 서버로부터 데이터를 받아오는 방법
>
> > production 환경에서는 사용하지 않는 것을 권장합니다.

## capacitor.config.ts

```js
import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "MyApp",
  webDir: "dist",
  bundledWebRuntime: false,
  server: {
    url: "https://my-custom-domain.com", // 변경할 도메인
    cleartext: true, // HTTP 사용 시 true, HTTPS는 false
  },
};

export default config;
```
