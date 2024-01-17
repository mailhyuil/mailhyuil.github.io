# nginx cache 하드 드라이브 분할

```conf
proxy_cache_path /path/to/hdd1 levels=1:2 keys_zone=my_cache_hdd1:10m max_size=10g inactive=60m use_temp_path=off;
proxy_cache_path /path/to/hdd2 levels=1:2 keys_zone=my_cache_hdd2:10m max_size=10g inactive=60m use_temp_path=off;

split_clients $request_uri $my_cache {
    50% “my_cache_hdd1”;
    50% “my_cache_hdd2”;
}

server {
    location / {
        proxy_cache $my_cache;
        proxy_pass http://my_upstream;
    }
}
```
