# http SOP 목적

> SOP는 클라이언트의 브라우저 상에서 다른 Origin으로부터의 요청을 제한하는 역할을 한다.
>
> > 해커가 "브라우저 내에서" 사용자의 인증을 탈취해 CSRF등 공격방지 용도이다.
> >
> > Proxy 서버를 통해 언제든지 우회할 수 있다.
> >
> > 만약 해커가 인증 쿠키를 이미 탈취한 후라면 SOP는 의미가 없다.

```txt
It's not a security mechanism in the sense of preventing you from accessing information. It's a security mechanism to prevent attacks like CSRF.

The proxy can make a request on your behalf, but nothing malicious will happen.
This is because browsers don't send cookies from one domain to another domain.
```

## SOP가 의미가 없어지는 경우

1. Access-Control-Allow-Credentials: true
   > 다른 Origin에서도 브라우저가 자동으로 쿠키를 전송할 수 있게 된다.
2. Access-Control-Allow-Origin: \*
   > 모든 Origin으로부터 요청을 허용 (SOP 무효화)
   >
   > > 따라서 Access-Control-Allow-Credentials: true + Access-Control-Allow-Origin: \* 조합은 보안상 금지되어 있다.
3. cookie SameSite=None; Secure;
   > 다른 도메인에서도 쿠키를 전송할 수 있게 된다.
