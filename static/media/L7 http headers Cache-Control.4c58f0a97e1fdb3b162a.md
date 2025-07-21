# http Headers Cache-Control

> 브라우저에게 캐시를 어떻게 사용할지 지시하는 지시자
>
> > Cache-Control, Pragma, Expires, ETag, Last-Modified 등의 Cache 관련 헤더가 있으면 브라우저는 캐시를 사용한다.

## Cache-Control

```sh
max-age # 받은 시간부터 유효시간 (정확한 시간을 지정하려면 Expires헤더 사용)
s-maxage # 프록시 서버에만 적용되는 max-age

# 오리진 서버의 검증을 받고 값이 바뀌지 않았다면 1년 저장되는 프록시 서버 캐시를 사용한다.
Cache-Control: s-maxage=31536000, max-age=0

no-store # 절대로 아무것도 캐싱하지 않는다
no-cache # max-age를 0으로 설정한다 (브라우저에 요청을 일단 보내고 서버에서 304코드를 보내면 캐시를 사용한다)
must-revalidate # 반드시 오리진 서버에서 검증을 받도록 한다. (프록시 서버의 캐시를 사용하는 것을 차단한다.)
                # 오리진 서버 접근 실패 시 즉시 504 Gateway Timeout 발생시킨다.
                # 금융정보같은 중간 캐시로 인해 문제가 발생할 수 있는 경우에는 반드시 must-revalidate를 사용한다.

public # 공유 캐시(또는 중개 서버)에 저장해도 된다는 뜻
private # 마지막 사용자 환경에만 저장하라는 뜻 (브라우저)

# usage
# 브라우저에만 10초동안 캐시하고 서버에 etag 검증을 받도록 한다.
Cache-Control: public, max-age=10, must-revalidate

###### 그 외 ######
min-refresh
immutable
stale-while-revalidate
stale-if-error
no-transform
only-if-cached
```

## no-cache vs must-revalidate

> no-cache와 비슷하지만 '반드시' 오리진 서버에서 데이터를 가져오도록 강제한다
>
> > no-cache의 경우 오리진 서버에 문제가 있다면 상황에 따라서 프록시 서버의 캐시를 사용할 수도 있다.
> >
> > > 오리진 서버 접근 실패 시 즉시 504 Gateway Timeout 발생시킨다.

## Cache-Control (client)

> client request header에서 cache-control을 사용하면 중간서버, 오리진서버의 캐시 사용 동작을 지시할 수 있다.
>
> > 서버가 cache-control에 대한 동작을 지원해야 한다.

```js
// no-cache
// 브라우저나 중간 캐시(proxy)에서 저장된 캐시를 사용하지 않고, 항상 서버로 요청을 보내 유효성을 확인하도록 지시합니다.
const res = await fetch(url, {
  cache: "no-cache",
});

// s-maxage
// 프록시 서버에만 적용되는 max-age
const res = await fetch(url, {
  cache: "s-maxage=60",
});

// stale-while-revalidate
// 60초간 캐시를 사용하고, 30초간 서버에 요청을 보내어 캐시를 업데이트한다.
const res = await fetch(url, {
  cache: "s-maxage=60, stale-while-revalidate=30",
});

// stale-if-error
// 서버에 접근 실패 시 60초간 캐시를 사용한다.
const res = await fetch(url, {
  cache: "s-maxage=60, stale-if-error=60",
});
```

## Expires (deprecated)

> 캐시의 만료일을 명시하는 헤더로, 정확한 날짜를 지정하여야 한다.

```sh
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## Pragma (deprecated)

> HTTP/1.0 하위 호환을 위해 사용하는 캐시 제어 헤더
>
> > Cache-Control로 대체되었다.

```sh
Pragma: no-cache
```

## ETag & If-None-Match

```sh
# response
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
# request
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

## Last-Modified & If-Modified-Since

```sh
# response
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
# request
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```
