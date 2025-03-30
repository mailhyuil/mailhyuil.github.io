# gzip 배포

> 빌드된 각각 파일을 gzip으로 압축 (e.g. app.js.gz, document.js.gz)
>
> > nginx에서 gzip on 설정
> >
> > > 이미지, 바이너리 파일은 효과 없음

## server

> gzip 압축이 되었는지 확인하려면 서버응답 헤더에 Content-Encoding: gzip 헤더가 있는지 확인

```sh
Content-Encoding: gzip
```

## client

> client에서 요청 시 gzip 요청 헤더 추가

```sh
Accept-Encoding: gzip, deflate
```

# nginx.conf

```sh
http {
  gzip  on;
  gzip_disable "msie6";

  gzip_comp_level 6;
  gzip_min_length 1100;
  gzip_buffers 16 8k;
  gzip_proxied any;
  gzip_types
        text/plain
        text/css
        text/js
        text/xml
        text/javascript
        application/javascript
        application/x-javascript
        application/json
        application/xml
        application/rss+xml
        image/svg+xml;
}
```
