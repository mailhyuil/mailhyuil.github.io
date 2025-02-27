# browser Cookie

> 쿠키는 서버를 위한 일종의 저장소다.
>
> > 쿠키는 브라우저에 저장되며, 같은 Origin의 서버에 요청을 보낼 때마다 브라우저는 쿠키를 함께 전송한다.
>
> > Access-Control-Allow-Credentials (withCredentials)이 true로 설정되어 있을 때, 다른 Origin에서도 브라우저가 자동으로 쿠키를 포함한 요청을 전송한다. (cors)
> >
> > > 브라우저는 쿠키를 저장하는 저장소를 가지고 있고, 헤더를 읽어 자동으로 쿠키를 저장한다.

```sh
# 서버 -> 클라이언트
Set-Cookie: name=value
# 클라이언트 -> 서버
Cookie: name=value
```

## Set-Cookie

> 서버에서 응답을 보낼 때 Set-Cookie 헤더를 사용해 쿠키를 설정한다.

```sh
# example
Set-Cookie: sessionId=38afes7a8; expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
Set-Cookie: max-age=3600; Domain=example.com; Path=/; Secure; HttpOnly; SameSite=Strict
```

## HttpOnly

> 브라우저에서 쿠키의 값을 읽을 수 없도록 하는 옵션
>
> > 브라우저에 저장되지 않는다
> >
> > > javascript로 쿠키에 접근할 수 없다.

## Secure

> https 프로토콜을 사용하는 경우에만 쿠키를 전송하는 옵션

## SameSite

> 다른 도메인의 요청에도 쿠키를 전송 할지 말지 결정하는 옵션
>
> > Strict = csrf 공격 방지

```sh
Strict : 크로스 도메인 요청에 쿠키를 전송하지 않음
Lax : 대체적으로 서드 파티 쿠키는 전송되지 않지만 예외적인 요청에는 전송
None : 크로스 도메인 요청에도 쿠키를 전송 / 사용하려면 반드시 해당 쿠키는 secure 쿠키여야한다.
```

## Domain

> 쿠키를 전송할 도메인을 지정하는 옵션
>
> > 도메인 + 서브 도메인도 쿠키 접근 가능
> >
> > > example.com 에서 지정하면 sub.example.com 에서도 쿠키 접근 가능

## Path

> 이 경로를 포함한 하위 경로 페이지만 쿠키 접근
>
> > 일반적으로 path=/ 루트로 지정
