# nest session HttpSession

> HttpSession이란 java에서 http에서 session을 다루는 인터페이스이다.
>
> > 이를 express에서 구현한 라이브러리가 express-session이다.
> >
> > > session을 객체처럼 다루는게 가능해진다.

## install

```sh
npm i express-session
npm i -D @types/express-session
```

## main.ts

```ts
import * as session from "express-session";

// somewhere in your initialization file
app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: false,
  }),
);
```

## usage

```ts
@Get()
findAll(@Req() request: Request) {
  request.session.visits = request.session.visits ? request.session.visits + 1 : 1;
}

// or
@Get()
findAll(@Session() session: Record<string, any>) {
  session.visits = session.visits ? session.visits + 1 : 1;
}
```
