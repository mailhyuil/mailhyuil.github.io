# nest cookie signed cookie

> 시크릿을 사용해서 시그니처를 생성한 쿠키
>
> > 클라이언트에서 쿠키의 값은 볼 수 있지만 서버에서 이 쿠키가 modified 되었는지 확인할 수 있다.

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

## usage

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
