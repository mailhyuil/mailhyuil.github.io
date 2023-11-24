# SSL / TLS 1.3

## SSL

> 보안 소켓 계층
>
> > SSL 3.0부터 TLS 1.0으로 변경
> >
> > > 즉 지금은 TLS라고 부르는게 맞다

## TLS

> 전송 계층 보안

## nginx TLS 사용

> TLSv1.3은 nginx 1.13 버전부터 지원

```
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
```
