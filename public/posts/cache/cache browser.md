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

public # 공유 캐시(또는 중개 서버)에 저장해도 된다는 뜻
private # 마지막 사용자 환경에만 저장하라는 뜻 (브라우저)

min-refresh
immutable
```

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
