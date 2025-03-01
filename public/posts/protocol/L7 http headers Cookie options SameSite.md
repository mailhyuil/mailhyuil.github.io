# browser Cookie SameSite

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
                       - 대부분의 script를 이용한 자동화된 요청
                       (e.g. form.submit(), XMLHttpRequest, a.click(), window.open())
                       - Get 요청이 아닌 경우 (e.g. Post, Put, Delete)

None : 크로스 도메인 요청에도 쿠키를 전송, 사용하려면 반드시 해당 쿠키는 Secure 쿠키여야한다.
                       # 쿠키가 보내지는 상황
                       - fetch, XMLHttpRequest를 이용한 요청 (CORS가 설정되어 있고, withCredentials가 true인 경우, 사이트도 https여야함)
                       - 모든 HTTP 요청 (e.g. Post, Put, Delete)
                       - iframe의 Post 요청
```
