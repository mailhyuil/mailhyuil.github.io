# cache micro cache

> 빠르게 업데이트되는 데이터를 캐시할 때 사용
>
> > 1초 정도로 짧은 시간동안 캐시를 유지한다.
> >
> > > 뉴스 사이트, 주식 사이트, 스포츠 스코어 사이트 등에서 사용

```conf
proxy_cache_path /tmp/cache keys_zone=cache:10m levels=1:2 inactive=600s max_size=100m ;
server {
    proxy_cache cache;
    proxy_cache_valid 200 1s;
    ...
}
```
