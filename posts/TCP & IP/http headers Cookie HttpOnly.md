# browser Cookie HttpOnly

> 브라우저에서 쿠키의 값을 읽을 수 없도록 하는 옵션
>
> > 브라우저에 저장되지 않고 javascript로 쿠키에 접근할 수 없다. (cookieService 등으로 get, set, delete 할 수 없다.)
> >
> > request 시 자동으로 헤더에 담겨 보내진다.

```sh
Set-Cookie: Authorization=token; HttpOnly
```
