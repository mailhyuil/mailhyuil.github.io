# http Access-Control-Allow-Credentials (withCredentials)

> Access-Control-Allow-Credentials: true를 설정하면 다른 Origin에서도 브라우저 보안상 막아놓은 기능을 허용할 수 있다.
>
> > 서버에서 withCredentials: true로 설정할 경우 서버에서 받아드릴 origin의 값을 정확히 명시해야한다. (\* 불가능)
> >
> > 클라이언트 역시 withCredentials: true로 설정해야한다.
> >
> > > > Access-Control-Allow-Credentials: true를 설정 시 보안 위험이 높아진다. (XSS, CSRF 등)
> > > >
> > > > 브라우저가 자동으로 쿠키를 포함한 요청을 전송하기 때문에, 쿠키를 탈취하는 공격이 가능해진다.

## 다른 Origin의 요청에서 브라우저가 막아놓은 기능들

```txt
1. 쿠키를 자동으로 전송 불가
2. 브라우저 저장소 접근 불가 (localStorage, sessionStorage, cookie, indexedDB)
3. 자동으로 Authorization 헤더 추가 불가
4. TLS 클라이언트 인증서 전송 불가
```

## Access-Control-Allow-Credentials 사용

> 아래의 조건을 만족하지 않으면 CORS Error가 발생한다.

```sh
server : Access-Control-Allow-Credentials 헤더 값이 true로 설정하여 다른 Origin에서 쿠키를 포함한 요청을 허용
server : Access-Control-Allow-Origin 헤더에 허용할 origin을 명시해야 함 (* 불가능)

client : 서버의 withCredentials를 true로 설정되어 있을 시 마찬가지로 withCredentials 옵션을 true 로 설정해야한다.
```
