# nginx cache 성능 향상

```conf
proxy_cache_path /path/to/cache levels=1:2 keys_zone=my_cache:10m max_size=10g inactive=60m use_temp_path=off;

server {
    location / {
        proxy_cache my_cache;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 3;
        proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504; # origin이 다운된 경우 캐시된 파일을 전송한다.
        proxy_cache_background_update on;
        proxy_cache_lock on;

        proxy_pass http://my_upstream;
    }
}
```
