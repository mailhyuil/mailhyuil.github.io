# express trust proxy

> 신뢰할 프록시를 지정
>
> > client의 ip를 추출할 때 사용
> >
> > redirect시에도 신뢰할 프록시를 설정하지 않으면 http로 redirect됨

```ts
// If true, the client’s IP address is understood as the left-most entry in the X-Forwarded-For header.
// 모든 프록시를 신뢰하고 맨 앞의 IP를 사용
app.set("trust proxy", true);
// local의 프록시만 신뢰
app.set("trust proxy", "loopback");
// local의 프록시와 특정 subnet만 신뢰
app.set("trust proxy", "loopback, '172.16.0.0/12'");
// 함수를 통해서 신뢰할 IP를 지정
app.set("trust proxy", ip => {
  if (ip === "127.0.0.1" || ip === "123.123.123.123") return true; // trusted IPs
  else return false;
});
```

## 포멧

```ts
// CSV style
app.set("trust proxy", "loopback, linklocal, uniquelocal");
// Array style
app.set("trust proxy", ["loopback", "linklocal", "uniquelocal"]);
```
