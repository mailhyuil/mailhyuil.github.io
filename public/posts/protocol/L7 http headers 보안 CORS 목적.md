# http CORS (Cross-Origin Resource Sharing) 목적

> CORS는 다른 도메인의 서버로부터 요청을 막는 역할이 아니라
>
> > CSRF 공격같은 사용자의 인증 정보를 가로채서 공격하는 것을 막는 역할이다.
> >
> > > 즉 별다른 설정이 없다면 Proxy를 통해 요청을 보낼 수 있다.

```txt
It's not a security mechanism in the sense of preventing you from accessing information. It's a security mechanism to prevent attacks like CSRF.

Without CORS, any site could send a request to your banking site requesting to transfer all your money. If you were logged in, the request would be sent with cookies and authenticated. CORS prevents that request from being sent.
```

## Proxy CORS 우회를 막는 방법

1. Origin 뿐만 아니라 Host 헤더도 검증한다.
2. Referer 헤더 검증
3. WAF(Web Application Firewall)를 사용하여 CORS 우회를 막는다.
