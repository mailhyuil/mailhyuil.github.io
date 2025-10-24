# nginx cache

## 캐시 활성화

```conf
http {
    # /data/nginx/cache 미리 생성해두기
    # 이 디렉토리에 캐시 파일이 생성된다.
    # my_cache라는 keys_zone으로 10mb의 공유메모리 설정
    # inactive=60m 60분간 요청이 없으면 캐시를 삭제한다.
    # max_size=10g 캐시 파일의 최대 크기를 10GB로 제한한다.
    # min_free=1g 최소 여유 공간을 설정합니다. 여유 공간이 부족해지면 오래된 캐시 파일을 삭제합니다.
    # levels=1:2 캐시 파일을 1단계의 하위 디렉토리에 2단계로 저장한다.
    # use_temp_path=off 캐시 파일을 생성할 때 임시 디렉토리를 사용하지 않는다.
    proxy_cache_path /data/nginx/cache keys_zone=my_cache:10m max_size=10g levels=1:2  inactive=60m use_temp_path=off;

    server {
        # 캐시 사용 (모든 path)
        proxy_cache my_cache;

        location / {
            # 캐시 사용 (특정 path)
            proxy_cache my_cache;

            # 200, 302 응답을 10분간 캐시한다.
            proxy_cache_valid 200 302 10m;
            # 404 응답을 1분간 캐시한다.
            proxy_cache_valid 404 1m;

            # 특정 메소드를 캐시한다.
            proxy_cache_method GET HEAD POST;

            # 캐시 파일을 생성할 때까지 다른 요청을 대기시킨다.
            proxy_cache_lock on;

            # 캐시된 응답이 만료되었을 때, 백그라운드에서 비동기적으로 캐시를 업데이트
            proxy_cache_background_update on;

            # ETag 또는 Last-Modified 헤더를 사용하여 원본(origin) 서버에 캐시된 응답이 여전히 유효한지 확인
            # 원본 서버가 304 Not Modified를 응답하면, Nginx는 기존 캐시를 그대로 사용.
            proxy_cache_revalidate on;

            # 요청이 3번 이상 들어오면 캐시한다.
            proxy_cache_min_uses 3;

            # origin이 다운된 경우 캐시된 파일을 전송한다.
            proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;

            # X-CACHE라는 커스텀 헤더에 캐시 상태를 전달한다. (HIT, MISS, BYPASS, EXPIRED, STALE)
            add_header X-CACHE $upstream_cache_status;

            # 특정 캐시 관련 헤더를 무시
            proxy_ignore_headers X-Accel-Expires Expires Cache-Control;

            proxy_pass http://localhost:3000;
        }

        location ~* \.(?:css|js|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|ico)$ {
            # 캐시 사용 (특정 확장자)
            proxy_cache my_cache;
        }
    }
}
```
