# nginx root & alias

## root

> 기본 디렉토리를 설정
>
> > location은 root 디렉토리를 기준으로 찾는다.

```conf
location / {
    # /app를 기본 디렉토리로 설정
    # /app/index.html를 찾는다.
    root /app;
    index index.html index.htm;
}
```

## alias

> location의 위치를 alias 위치로 매핑

```conf
location /app {
    # /app을 /some/where/app에 매핑
    # /some/where/app/index.html 에서 찾는다.
    alias /some/where/app;
    index index.html index.htm;
}
```
