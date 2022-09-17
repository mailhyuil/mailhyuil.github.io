# nginx
> 기본 바인딩 포트 80 // 포트 80은 표준 웹포트다.
- 동작순서
> Browser -> 80 port(Nginx) -> 8080 port(tomcat)

> tomcat 컨테이너 run
> nginx 컨테이너 run

- /etc/nginx/conf.d/*.conf
```sh
server { # 하나의 웹사이트 선언
  listen 80; # 리스닝 포트
  server_name abc.test.com;
  
  location / { # 특정 URL 처리
    root /home/nginx; 
    index index.html, index.htm; # 초기 페이지 설정
  }
  
  location ~ \.do$ { # 특정 확장자 요청 넘기기 (nginx 뒷단의 WAS로)
    proxy_pass http://localhost:8080; # 
  }
}
```

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

## 파일 크기 제한

- nginx.conf
```
http {
    client_max_body_size 5M; // 기본값 1m 제한없음 0

    ...
}
```