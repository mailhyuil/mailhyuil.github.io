# http CORS (Cross-Origin Resource Sharing) 목적

> CORS는 다른 도메인의 서버로부터 "요청"을 막는 역할이 아니라
>
> > 다른 도메인 끼리는 cookie를 공유하지 않는 원리를 이용한 CSRF등 공격방지 용도이다.
> >
> > 만약 해커가 인증 쿠키를 이미 탈취한 후라면 CORS는 의미가 없다.
> >
> > 만약 인증 정보를 다른 도메인끼리 공유할 수 있도록 설정한다면 CORS는 의미가 없다.
> >
> > CSRF 공격같은 사용자의 인증 정보를 가로채서 공격하는 것을 막는 역할이다.
> >
> > > 즉 별다른 설정이 없다면 Proxy를 통해 요청을 보낼 수 있다.

```txt
It's not a security mechanism in the sense of preventing you from accessing information. It's a security mechanism to prevent attacks like CSRF.

The proxy can make a request on your behalf, but nothing malicious will happen.
This is because browsers don't send cookies from one domain to another domain.
```

## CORS가 의미가 없어지는 경우

1. 다른 도메인에서 쿠키등의 인증 정보를 공유할 수 있을 때
   > cookie SameSite=None; Secure; 설정
2. Access-Control-Allow-Origin: \* + Access-Control-Allow-Credentials: true 설정
   > 이 두 조합은 보안상 금지된다.
   >
   > > 어떤 도메인에서도 인증 정보를 공유할 수 있다면 CORS는 의미가 없어진다.

```txt
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true  ❌ (이 조합은 보안상 금지!)
```
