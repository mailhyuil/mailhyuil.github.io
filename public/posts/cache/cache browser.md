# browser cache

> 캐시 명령을 내리는 주체는 API 서버다!

## Cache-Control

> 응답헤더
>
> > 클라이언트 - 프록시 - 서버 구조에서는 요청헤더로도 가능

```sh
max-age # 받은 시간부터 유효시간 (정확한 시간을 지정하려면 Expires헤더 사용)
no-store # 아무것도 캐싱하지 않는다
no-cache # max-age를 0으로 설정한다 (브라우저에 요청을 일단 보내고 서버에서 304코드를 보내면 캐시를 사용한다)
# 서버에서 ETag(Entity Tag), If-None-Match Last-Modified, If-Modified-Since 등으로 변경됐는지를 확인후 변경이 안됐다면 304 Not Modified 를 보내는 로직을 작성

must-revalidate
# 반드시 원 서버에서 검증을 받도록 한다. (프록시 서버의 캐시를 사용하는 것을 차단한다.)
# 원서버 접근 실패지 504 Gateway Timeout 발생
# 금융정보같은 캐시로 인해 문제가 발생할 수 있는 경우에는 반드시 must-revalidate를 사용한다.

stale-while-revalidate
# 캐시된 데이터를 사용하되, 원 서버에 검증을 받도록 한다.
# 받아온 데이터를 다음 요청에서 사용한다.
Cache-Control: max-age=1, stale-while-revalidate=59
# 0-1 초 사이에 요청이 반복되면 캐싱된 데이터를 사용
# 1-60 초 사이에 요청이 반복되면 캐싱된 데이터를 사용하되 원 서버에 검증을 받는다.

public # 공유 캐시(또는 중개 서버)에 저장해도 된다는 뜻
private # 마지막 사용자 환경에만 저장하라는 뜻 (브라우저)

min-refresh
immutable

# 절대로 캐싱하면 안되는 경우
# 통장잔고, 개인정보 같은 유출되면 안되는 응답에는 밑의 헤더를 전부 넣어줘라!
Cache-Control : no-cache, no-store, must-revalidate
Pragma : no-cache
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

> 캐시된 시간

## Vary

> 사용자에 따라 다른 응답을 보내줄 때 사용한다.
>
> > 사용하지 않을 것을 권장한다.

## Pragma

> Cache-Control : no-cache 와 같은 기능을 한다
>
> > HTTP/1.0 에서 사용
