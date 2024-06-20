# nginx try_files

> location에서 try_files를 사용하면 파일이 존재하지 않을 때, 다른 파일로 리다이렉트 할 수 있다.
>
> > $uri -> $uri/ -> /index.html 순으로 파일을 찾는다.
> >
> > > 끝에 =404를 붙이면 파일을 못찾았을 때 404 에러를 반환한다.

```conf
location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
    try_files $uri $uri/ /index.html =404; # SPA routing config
}
```
