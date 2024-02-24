# proxy cache nginx cache

## 캐시 활성화

```conf
# /data/nginx/cache 미리 생성해두기 /// 이 디렉토리에 캐시 파일이 생성된다.
proxy_cache_path /data/nginx/cache levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;

server {
    # 이 location으로 오면 캐시를 사용한다.
    location / {
        proxy_cache my_cache; # keys_zone에 정의한 캐시 영역을 사용한다.
        proxy_cache_valid 200 302 1m; # 200, 302 응답을 1분간 캐시한다.
        # proxy_cache_lock on;
        # proxy_cache_revalidate on;
        # proxy_cache_min_uses 3;
        # proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
        # proxy_cache_background_update on;
        # proxy_cache_lock on;

        add_header X-CACHE-STATUS $upstream_cache_status; # 커스텀 헤더를 정의
        proxy_ignore_headers X-Accel-Expires Expires Cache-Control; # 여기 정의된 캐시 헤더를 무시한다. X-Accel-Expires Expires Cache-Control

        proxy_pass http://localhost:3000;
    }
}
```
