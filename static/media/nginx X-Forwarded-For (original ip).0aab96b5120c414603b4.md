# nginx ip X-Forwarded-For

```conf
proxy_set_header  X-Forwarded-For $remote_addr; # client에서 x-forwarded-for header에 ip를 넣지 않았을 경우

proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for; # client에서 x-forwarded-for header에 ip를 넣었을 경우
```

## app 설정

> express app에서 프록시 서버의 ip를 신뢰하도록 설정해야한다.

```ts
app.set("trust proxy", true);
```
