# http headers 보안 CSRF

> CSRF란 Cross-Site Request Forgery의 약자로, 사용자가 의도하지 않은 요청을 보내는 공격을 말한다.
>
> XSS와 달리 사용자가 현재 들어와 있는 페이지의 정상적인 세션을 이용하여 공격한다. (redirect, same-origin request 등)
>
> 이로 인해 의도하지 않은 클라이언트 또는 서버 데이터 유출, 세션 상태 변경 또는 최종 사용자 계정 조작을 포함할 수 있는 작업이 웹 사이트에서 수행될 수 있다.
>
> e.g. 사용자는 은행에 로그인 되어 있고, 공격자가 만든 모방 페이지에 방문하게하여 은행에 돈을 이체하는 요청을 보내는 것
>
> > 방지 방법: 서버에서 Referer, Origin, X-CSRF-Token 헤더를 검증한다.
> >
> > > X-CSRF-Token은 Custom Header이다 다른 이름으로 사용 가능
> > >
> > > > Cookie 사용 시 SameSite 속성을 Strict, Lax로 설정한다.

## 시나리오

```txt
1. 사용자가 bank.com(은행 사이트)에서 로그인 인증 정보를 담은 쿠키가 SameSite=Lax또는 None으로 설정되어 있는 상태

2. 공격자가 bank.com 페이지 내에서 이메일, 링크, 광고, 댓글 등을 이용 evil.com(악의적인 사이트)로 요청을 보내게 한다.

3. evil.com Get요청을 사용해서 사용자를 bank.com로 리다이렉트 시켜 돈을 이체하는 요청을 보내게 한다.
   (form을 이용하여 요청을 보낼 수 있다.)
   (ajax로는 거의 불가능하다. 이유는 SOP 정책 때문)

e.g. (in evil.com)

<!-- Get 요청으로 이체가 가능한 경우 -->
<img src="https://bank.com/transfer?to=hacker&amount=10000">

<!-- or -->

<!-- Post 요청으로 이체가 가능한 경우 -->
<!-- 접속한 페이지 evil.com에서 action을 bank.com로 설정하여 redirect를 시키면 bank.com의 쿠키를 포함해서 전송한다. -->
<form action="https://bank.com/transfer" method="POST">
    <input type="hidden" name="to" value="hacker">
    <input type="hidden" name="amount" value="10000">
</form>
<script>
    document.forms[0].submit();  <!-- 자동으로 전송됨 -->
</script>

4. 브라우저가 bank.com에 쿠키를 자동으로 전송

5. CSRF 공격 성공
```

## ajax로 CSRF가 성공하는 경우

```txt
CORS가 Access-Control-Allow-Origin: * + Access-Control-Allow-Credentials: true 로 설정된 경우

Preflight 요청 없이 단순 요청(Simple Request)으로 요청할 경우
- Method: GET, HEAD, POST 중 하나로 설정
- Content-Type이 application/x-www-form-urlencoded, multipart/form-data, text/plain 중 하나로 설정
- 요청 헤더에 커스텀 헤더가 없는 경우
- XMLHttpRequest의 경우 XMLHttpRequest.withCredentials = true;
```

## 방지

```txt
1. Origin 헤더 검증
2. Referrer 헤더 검증
3. X-CSRF-Token 헤더 검증
4. SameSite Cookie 속성 설정 (Strict, Lax)
5. CORS 설정
```
