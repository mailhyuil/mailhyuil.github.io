# nest session

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
  })
);
```

## 사용

```ts
@Get()
findAll(@Req() request: Request) {
  request.session.visits = request.session.visits ? request.session.visits + 1 : 1;
}
```
