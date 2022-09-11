# nginx
> 기본 바인딩 포트 80 // 포트 80은 표준 웹포트다.
- 동작순서
> Browser -> 80 port(Nginx) -> 8080 port(tomcat)

> tomcat 컨테이너 run
> nginx 컨테이너 run

- /etc/nginx/nginx.conf 수정
```sh
#include /etc/nginx/conf.d/*.conf;
upstream upstream이름 {
    server tomcat컨테이너ip:8080;
    server tomcat컨테이너ip:8080;
}
server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;
        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
            proxy_pass http://upstream이름;

            }
}
```