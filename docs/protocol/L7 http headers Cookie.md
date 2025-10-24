# L7 http headers Cookie

> 쿠키는 서버를 위한 일종의 저장소다.
>
> > 쿠키는 브라우저에 저장되며, 같은 Origin의 서버에 요청을 보낼 때마다 브라우저는 쿠키를 함께 전송한다.
>
> > Access-Control-Allow-Credentials (withCredentials)이 true로 설정되어 있을 때, 다른 Origin에서도 브라우저가 자동으로 쿠키를 포함한 요청을 전송한다. (cors)
> >
> > > 브라우저는 쿠키를 저장하는 저장소를 가지고 있고, 헤더를 읽어 자동으로 쿠키를 저장한다.

```txt
# 서버 -> 클라이언트
Set-Cookie: name=value

# 클라이언트 -> 서버
Cookie: name=value
```

## Set-Cookie

> 서버에서 응답을 보낼 때 Set-Cookie 헤더를 사용해 쿠키를 설정한다.

```txt
Set-Cookie: sessionId=38afes7a8; expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
Set-Cookie: max-age=3600; Domain=example.com; Path=/; Secure; HttpOnly; SameSite=Strict
```
