# nest signedCookie

> 쿠키의 값이 노출되면 안되는 경우 사용

## install

```sh
npm i cookie-parser
npm i -D @types/cookie-parser
```

## main.ts

```ts
import * as cookieParser from "cookie-parser";
app.use(cookieParser("VERY_SECRET_KEY"));
```

## 사용

```ts
export class SomeController {
  @Get()
  getCookie(@Req() req: Request) {
    const signedCookie = req.signedCookies["name"];
    return req.cookies;
  }

  @Get()
  setCookie(@Res({ passthrough: true }) res: Response) {
    res.cookie(name, value, { signed: true });
    return { message: "hello" };
  }
}
```
