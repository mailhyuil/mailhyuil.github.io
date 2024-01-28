# nginx routing

> url에 맞는 html 파일을 찾지 못하면 다시 index.html로 리다이렉트

```conf
location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html; # SPA routing config
}
```
