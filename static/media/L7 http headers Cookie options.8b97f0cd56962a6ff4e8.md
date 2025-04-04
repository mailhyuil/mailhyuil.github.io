# browser Cookie

## HttpOnly

> 브라우저에서 쿠키의 값을 읽을 수 없도록 하는 옵션
>
> > 브라우저에 저장되지 않는다
> >
> > > javascript로 쿠키에 접근할 수 없다.

## Secure

> https 프로토콜을 사용하는 경우에만 쿠키를 전송하는 옵션

## SameSite

> 다른 도메인에서 Request를 보내거나 Redirect를 사용하는 경우 쿠키를 전송하지 않는 옵션
>
> > Strict, Lax = CSRF 공격 방지
> >
> > > OAuth 로직 처럼 Redirect를 사용하는 경우에는 도메인이 달라지면 세션이 끊겨버리기에 Lax나 None을 사용하는 수 밖에 없다.
> > >
> > > > None을 사용해야한다면 CORS를 제대로 설정해야 안전하다.
> > > >
> > > > > SameSite 설정이 없는 경우 브라우저는 그 쿠키를 Lax로 간주한다.

```txt
Strict : 크로스 도메인 요청에 쿠키를 전송하지 않음

Lax (Laxative:느슨한) : 대체적으로 서드 파티 쿠키는 전송되지 않지만 예외적인 요청에는 전송
                       # 쿠키가 보내지는 상황
                       - 사용자가 직접 클릭한 a 태그를 클릭하여 페이지를 이동하는 경우 (Get 요청)
                       - form 태그를 이용한 Get 요청
                       - link 태그를 이용한 Get 요청 (prefetch, preconnect 등)
                       - img, iframe의 Get 요청
                       - 302 리다이렉트를 이용한 이동
                       - window.location.replace() 등으로 페이지를 이동하는 경우

                       # 쿠키를 보내지 않는 상황
                       - 대부분의 script를 이용한 자동화된 요청 (e.g. form.submit(), XMLHttpRequest, a.click(), window.open())
                       - Get 요청이 아닌 경우 (e.g. Post, Put, Delete)

None : 크로스 도메인 요청에도 쿠키를 전송, 사용하려면 반드시 해당 쿠키는 Secure 쿠키여야한다.
                       # 쿠키가 보내지는 상황
                       - fetch, XMLHttpRequest를 이용한 요청 (CORS가 설정되어 있고, withCredentials가 true인 경우, 사이트도 https여야함)
                       - 모든 HTTP 요청 (e.g. Post, Put, Delete)
                       - iframe의 Post 요청
```

## Domain

> "쿠키를 전송할 서버"의 domain을 지정하는 옵션
>
> > 도메인 + 서브 도메인도 쿠키 접근 가능
> >
> > > example.com 에서 지정하면 sub.example.com 에서도 쿠키 접근 가능

## Path

> "쿠키를 전송할 서버"의 path를 지정하는 옵션
>
> > 이 경로를 포함한 하위 경로 페이지만 쿠키 접근
> >
> > > 일반적으로 path=/ 루트로 지정
