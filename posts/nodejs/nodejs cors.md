# nodejs cors

> 서버는 기본으로 클라이언트에 데이터를 보내는 것을 차단한다.
>
> > 헤더의 Access-Control-Allow-Origin 키에 차단하지 않을 도메인을 추가해줘야한다.

## OPTIONS 헤더

> preflight시 Options 헤더를 날려서 안전한지 확인한다.
>
> > Options status가 200이 아니면 안전하지 않다고 판단한다.
> >
> > > Options를 잘 확인해라! 어떤 값을 받는지 거기 다 들어있다.
> > >
> > > > > Options 응답은 chrome Network Other탭에 있음

```txt
Access-Control-Allow-Origin // 허용된 도메인
Access-Control-Request-Method // 허용된 메소드
Access-Control-Request-Headers // 허용된 헤더
Access-Control-Request-Credentials
Access-Control-Max-Age // preflight 결과를 저장할 기간
```
