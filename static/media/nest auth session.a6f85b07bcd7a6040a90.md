# nest session

> session 인증 방식
>
> > 유저의 인증 state를 서버의 메모리에 저장한다.
> >
> > > jwt에 비해 state가 항상 서버에 저장되어 있기 때문에 보안성이 높음
> > >
> > > 서버에 인증 페이로드를 보내지 않기 때문에 jwt에 비해 트래픽이 적음
> > >
> > > 하지만 이로 인해 서버의 부하와 확장성(sticky session) 문제가 발생한다.

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
    secret: process.env["SESSION_SECRET"],
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env["NODE_ENV"] !== "none",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  }),
);
```

## usage

```ts
export type Session = Record<string, any>;

@Post()
login(@Session() session: Session) {
  // login logic..
  const user = await this.prisma.user.findUnique({
    where: { username, password },
  })
  session.user = user;
  return ;
}

@Get()
me(@Session() session: Session) {
  return session.user;
}

```

Session.regenerate(callback)
To regenerate the session simply invoke the method. Once complete, a new SID and Session instance will be initialized at req.session and the callback will be invoked.

req.session.regenerate(function(err) {
// will have a new session here
})
Session.destroy(callback)
Destroys the session and will unset the req.session property. Once complete, the callback will be invoked.

req.session.destroy(function(err) {
// cannot access session here
})
Session.reload(callback)
Reloads the session data from the store and re-populates the req.session object. Once complete, the callback will be invoked.

req.session.reload(function(err) {
// session updated
})
Session.save(callback)
Save the session back to the store, replacing the contents on the store with the contents in memory (though a store may do something else--consult the store's documentation for exact behavior).

This method is automatically called at the end of the HTTP response if the session data has been altered (though this behavior can be altered with various options in the middleware constructor). Because of this, typically this method does not need to be called.

There are some cases where it is useful to call this method, for example, redirects, long-lived requests or in WebSockets.

req.session.save(function(err) {
// session saved
})
