# http headers 보안 CSRF

> CSRF란 Cross-Site Request Forgery의 약자로, 사용자가 의도하지 않은 요청을 보내는 공격을 말한다.
>
> XSS와 달리 사용자가 현재 들어와 있는 페이지에 갖고 있는 신뢰를 활용한다.
>
> 이로 인해 의도하지 않은 클라이언트 또는 서버 데이터 유출, 세션 상태 변경 또는 최종 사용자 계정 조작을 포함할 수 있는 작업이 웹 사이트에서 수행될 수 있다.
>
> e.g. 사용자는 은행에 로그인 되어 있고, 공격자가 만든 모방 페이지에 방문하게하여 은행에 돈을 이체하는 요청을 보내는 것
>
> > 방지 방법: 서버에서 Referer, Origin, X-CSRF-Token 헤더를 검증한다.
> >
> > > X-CSRF-Token은 Custom Header이다 다른 이름으로 사용 가능

## 방지

```txt
1. Referer 헤더 검증
2. Origin 헤더 검증
3. X-CSRF-Token 헤더 검증
4. SameSite Cookie 속성 설정 (Strict, Lax)
5. CORS 설정
```
