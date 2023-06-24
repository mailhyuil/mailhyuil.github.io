# nginx cache

> 컨텐츠를 로컬에 캐시하여 빠르게 제공할 수 있다.
>
> > /path/to/cache 디렉토리에 캐시 파일이 생성된다.

## 캐시 활성화

```conf
# 캐시 옵션 설정
proxy_cache_path /path/to/cache levels=1:2 keys_zone=my_cache:10m max_size=10g
                 inactive=60m use_temp_path=off;

server {
    # 이 location으로 오면 캐시를 사용한다.
    location / {
        proxy_cache my_cache;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 3;
        proxy_cache_use_stale error timeout updating http_500 http_502 http_503 http_504;
        proxy_cache_background_update on;
        proxy_cache_lock on;

        proxy_pass http://my_upstream;
    }
}
```

## delivering

> 캐시 키와 일치하는 요청이 오면 캐시된 파일을 전송한다.
>
> > 캐시 키는 $scheme$proxy_host$uri$is_args$args로 구성된다.

## 하드 드라이브 분할

```conf
proxy_cache_path /path/to/hdd1 levels=1:2 keys_zone=my_cache_hdd1:10m
                 max_size=10g inactive=60m use_temp_path=off;
proxy_cache_path /path/to/hdd2 levels=1:2 keys_zone=my_cache_hdd2:10m
                 max_size=10g inactive=60m use_temp_path=off;

split_clients $request_uri $my_cache {
              50%          “my_cache_hdd1”;
              50%          “my_cache_hdd2”;
}

server {
    # ...
    location / {
        proxy_cache $my_cache;
        proxy_pass http://my_upstream;
    }
}
```
