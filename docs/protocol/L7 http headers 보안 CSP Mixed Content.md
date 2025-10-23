# http headers 보안 Mixed Content

> HTTPS를 사용하는 웹사이트 내에서 HTTP 리소스를 로드하는 것을 막는 정책
>
> > 기본으로 항상 HTTPS를 사용하는게 좋기에 Mixed Content는 항상 막아야합니다.
> >
> > > 대부분의 현대 브라우저는 능동 혼합 콘텐츠(Active Mixed Content)(JS, CSS, iframe)는 기본적으로 차단
> > >
> > > 수동 혼합 콘텐츠(이미지, 동영상 등)에 대해선 경고 표시를 하거나 차단할 수도 있습니다.

## block-all-mixed-content

> 어떤 HTTP 리소스라도, HTTPS 페이지에서 로드를 완전히 차단

```txt
add_header Content-Security-Policy "default-src 'self'; block-all-mixed-content;";
```

## upgrade-insecure-requests

> HTTP로 시도되는 리소스 요청을 자동으로 HTTPS로 바꿔 접속

```txt
add_header Content-Security-Policy "default-src 'self'; upgrade-insecure-requests;";
```

## 없음

> Mixed Content를 막지 않는다.

```txt
add_header Content-Security-Policy "default-src 'self';";
```
