# Cache

> 캐시 명령을 내리는 주체는 API 서버다!

## Cache-Control

> 응답헤더
>
> > 클라이언트 - 프록시 - 서버 구조에서는 요청헤더로도 가능

```sh
no-store # 아무것도 캐싱하지 않는다
no-cache # max-age를 0으로 설정한다 (브라우저에 요청을 일단 보내고 서버에서 304코드를 보내면 캐시를 사용한다)
# 서버에서 ETag(Entity Tag), If-None-Match Last-Modified, If-Modified-Since 등으로 변경됐는지를 확인후 변경이 안됐다면 304 Not Modified 를 보내는 로직을 작성
must-revalidate # 만료된 캐시만 서버에 확인을 받도록
public # 공유 캐시(또는 중개 서버)에 저장해도 된다는 뜻
private # 마지막 사용자 환경에만 저장하라는 뜻 (브라우저)
max-age # 받은 시간부터 유효시간 (정확한 시간을 지정하려면 Expires헤더 사용)
min-refresh
immutable
```

## Etag

> Express.js는 기본적으로 모든 응답에 Etag를 자동으로 생성해서 헤더에 추가한다.
>
> > 데이터가 바뀌면 해시값이 바뀐다
> >
> > > npm etag 패키지를 사용해도 된다.
> > >
> > > > If-Match or If-None-Match or If-Modified-Since로 확인

## If-Match vs If-None-Match vs If-Modified-Since

> 서버로부터 넘겨받은 응답 헤더에 Etag가 있다면, 브라우저(크롬만 확인)는 Etag의 값과 응답을 받은 시간을 기록해두었다가, 다음 번에 동일한 요청을 전송할 때 아래 두 개의 필드를 헤더에 추가하여 서버로 전송한다.
>
> > 저장해둔 Etag 값을 넣어서 서버에 리퀘스트

## Age

## Vary
