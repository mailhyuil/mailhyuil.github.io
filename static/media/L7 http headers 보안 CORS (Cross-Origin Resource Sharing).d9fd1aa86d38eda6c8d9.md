# http CORS (Cross-Origin Resource Sharing) 교차 출처 리소스 공유

> 브라우저는 SOP로 인해 다른 Origin의 리소스에 ajax 요청을 보낼 수 없다.
>
> > 다만 정적 리소스 (document, image, script, style, iframe, font, audio, video)에 대해서는 cors를 통해 요청을 보낼 수 있다.
> >
> > 정적 리소스를 차단하기 위해서는 CORP 헤더를 사용한다.

## 브라우저의 동작

> cors에 의해 요청을 차단하는 주체는 브라우저다.
>
> > 브라우저가 다른 출처로 판단한 리소스에 접근 시 "Origin" 헤더에 출처를 담아 요청한다.
> >
> > 요청받은 서버는 "Access-Control-Allow-Origin" 헤더에 허용할 출처를 담아 응답한다.
>
> > 브라우저는 클라이언트가 요청을 보내기 전 OPTIONS 메서드를 통해 서버가 cors를 지원하는지 확인한다. (preflight)
> >
> > > 서버가 cors를 지원한다면 실제 요청을 보내고, 지원하지 않는다면 요청을 차단한다.

## status code 0

> cors에 의해 차단된 요청은 status code 0을 반환
>
> > 왜냐하면 cors에 의해 차단되면 네트워크 에러 발생가 발생하기 때문

## cors headers

> 서버에서 브라우저에게 cors를 적용하라고 명령하는 헤더들이다.
>
> > 브라우저는 이 헤더들을 보고 cors를 적용하여 잘못된 요청을 차단한다.

```sh
Cross-Origin-Resource-Policy # 브라우저에게 cors를 지원할 범위를 명령
Access-Control-Allow-Credentials # 브라우저에게 credentials 허용하라고 명령, 클라이언트에서도 withCredentials를 true로 설정해야 함
Access-Control-Allow-Origin # 허용할 origin을 명령
Access-Control-Allow-Methods # 허용할 methods 명령
Access-Control-Allow-Headers # 허용할 headers 명령
Access-Control-Max-Age # preflight 요청의 캐시 시간을 명령
```
