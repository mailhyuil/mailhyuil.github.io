# nest csrf

> 크로스 사이트 리퀘스트 변조(cross site request forgery, CSRF)
>
> > 피해자의 권한으로 피해자 모르게 해커가 요청을 수행 하도록 만드는 것을 의미
> >
> > > 특히 "결재"와 관련된 웹 어플리케이션에서는 필수이며 가장 강력한 수준의 조치가 요구 됩니다.
> > >
> > > > post, put, delete 등의 요청을 보낼 때는 csrf 토큰을 함께 보내야 합니다.

## 토큰 보내는 방식

> Important: Request must be sent with withCredentials set to true to allow cookies to be sent from the frontend or credentials set to include in fetch API.
>
> > 서버와 클라이언트 둘다 credential을 true로 허용해줘야 프론트 엔드에서 쿠키에 인증 토큰을 담아 보낼 수 있습니다.

```
# headers
csrf-token
xsrf-token
x-csrf-token
x-xsrf-token

# query
?_csrf=token;

# body
{
  _csrf: token;
}
```

## install

```sh
npm i cookie-parser
npm i -D @types/cookie-parser
npm i csurf
```

## main.ts

```ts
app.use(cookieParser());
// cookieParser 밑에 있어야 합니다.
app.use(csurf({ cookie: true }));
```

## controller

```ts
class UserController {
  @Get()
  async findAll(@Req() req: any) {
    // req.csrfToken()으로 토큰을 가져와 클라이언트에게 보내기
    return await this.userService.findAll();
  }
  @Post()
  async create(@Req() req: any, @Headers("XSRF-TOKEN") csrfToken: string) {
    // 클라이언트가 토큰을 다시 보내면 검증을 하고 토큰이 일치하면 요청을 처리
    if (req.csrfToken() !== csrfToken) {
      throw new BadRequestException("Invalid CSRF Token");
    }
    return await this.userService.findAll();
  }
}
```

## client

> cookie에서 \_csrf 토큰을 가져와서 post 요청시 Headers나 Body에 담아 보냅니다.

```ts
this.httpClient.post(url, { _csrf: this.cookieService.get("_csrf") });
```
