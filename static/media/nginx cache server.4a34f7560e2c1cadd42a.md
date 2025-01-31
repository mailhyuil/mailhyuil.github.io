# proxy cache nginx cache

> 컨텐츠를 로컬에 캐시하여 빠르게 제공할 수 있다.
>
> > nginx는 캐시 키와 일치하는 요청이 오면 캐시된 파일을 전송한다.
> >
> > > 기본 캐시 키는 $scheme$proxy_host$uri$is_args$args로 구성된다.

## 캐시 활성화

```conf
# 캐시 옵션 설정
# /data/nginx/cache 디렉토리에 캐시 파일이 생성된다. 미리 생성해두기
proxy_cache_path /data/nginx/cache keys_zone=my_cache:10m levels=1:2 max_size=10g inactive=60m use_temp_path=off;

server {
    # 이 location으로 오면 캐시를 사용한다.
    location ~* \.(?:jpg|jpeg|gif|png|js|css)$ {
        proxy_cache my_cache; # 캐시 옵션을 적용한다.
        proxy_cache_valid 200 302 1m; # 200, 302 응답을 1분간 캐시한다.
        proxy_cache_lock on; # 캐시 파일을 생성할 때까지 다른 요청을 대기시킨다.
        proxy_ignore_headers X-Accel-Expires Expires Cache-Control; # 캐시 헤더를 무시한다.
        add_header X-CACHE-STATUS $upstream_cache_status; # 커스텀 헤더를 정의

        proxy_pass http://localhost:9090;
    }
}
```
