# nginx root & alias

## root

> root / 위치에 있는 index.html을 서빙하겠다는 뜻

```conf
location /app {
    # /usr/share/nginx/html/app/index.html 에서 찾는다.
    # root 경로에서 /app을 찾음
    root /usr/share/nginx/html;
    index index.html index.htm;
}
```

## alias

> alias / 위치에 있는 index.html을 서빙하겠다는 뜻

```conf
location /app {
    # /usr/share/nginx/html/index.html 에서 찾는다.
    # alias 경로를 /app으로 매핑
    alias /usr/share/nginx/html;
    index index.html index.htm;
}
```
