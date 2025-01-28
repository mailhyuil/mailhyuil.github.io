# nestjs static assets serve (serve-static)

## install

```sh
npm install --save @nestjs/serve-static
```

## app.module.ts

```ts
ServeStaticModule.forRoot({
    rootPath: join(__dirname, "..", "..", "..", "uploads"),
    serveRoot: "/api/v1/uploads",
}),
```

## 사용

```ts
http://localhost:3000/api/v1/uploads/파일위치
```

## net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin 에러

> 다른 origin에서 접근할 때 발생하는 에러
>
> > helmet의 crossOriginResourcePolicy를 사용하여 해결

```ts
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
```
