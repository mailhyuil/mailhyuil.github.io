# cache proxy nginx Content Delivering

> Origin 서버에서 새로운 콘텐츠를 가져올 수 없을 때 캐시에서 오래된 콘텐츠를 전달하도록 NGINX를 구성
>
> > NGINX가 Origin 서버로부터 오류, 시간 초과 또는 지정된 5xx 오류를 수신하고 캐시에 요청된 파일의 오래된 버전이 있는 경우 클라이언트에 오류를 전달하는 대신 오래된 파일을 전달합니다.

```conf
location / {
    # ...
    proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504;
}
```
