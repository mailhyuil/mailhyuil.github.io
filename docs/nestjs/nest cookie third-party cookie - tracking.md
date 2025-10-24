# nest cookie third-party cookie - tracking

## browser script

> 이 스크립트를 여러 사이트에 삽입하도록 함

```js
// send to mailhyuil.com from example.com
fetch("https://mailhyuil.com/api/v1/tracking", {
  method: "GET",
});
```

## server

```ts
import { Controller, Get, Req } from "@nestjs/common";

@Controller("api/v1")
export class TrackingController {
  @Get("tracking")
  tracking(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const data = req.cookies;

    // 유저 식별
    const trackingId = req.cookies["third-party-cookie"];
    // 유저가 방문한 페이지 정보
    const url = req.headers["host"];
    const path = req.url;
    const referrer = req.headers["referer"];
    // 유저의 디바이스 정보
    const userAgent = req.headers["user-agent"];
    // 유저의 ip 정보 (위치 정보)
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    // 유저의 언어 정보
    const language = req.headers["accept-language"];

    res.cookie("third-party-cookie", "tracking-id", {
      domain: "mailhyuil.com",
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.sendStatus(200);
  }
}
```
