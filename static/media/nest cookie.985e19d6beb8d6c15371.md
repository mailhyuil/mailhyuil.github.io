# nest cookie

## install

```sh
npm i cookie-parser
npm i -D @types/cookie-parser
```

## main.ts

```ts
import * as cookieParser from "cookie-parser";
app.use(cookieParser());
```

## usage

```ts
export class SomeController {
  @Get()
  getCookie(@Req() req: Request) {
    const cookie = req.cookies["name"];
    return req.cookies;
  }

  @Get()
  setCookie(@Res({ passthrough: true }) res: Response) {
    res.cookie(name, value);
    return { message: "hello" };
  }
}
```
