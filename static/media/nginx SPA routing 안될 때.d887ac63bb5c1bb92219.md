# nginx routing

> url에 맞는 html 파일을 찾지 못하면 다시 index.html로 리다이렉트
>
> > try_files $uri $uri/ /index.html; index.html 앞에 /를 꼭 붙여야함

```conf
location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html; # SPA routing config
}

location /admin {
    alias /usr/share/nginx/html/admin;
    index index.html index.htm;
    try_files $uri $uri/ /admin/index.html;
}
```
