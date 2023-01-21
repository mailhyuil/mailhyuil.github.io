# nginx

## Apache 웹서버 VS Nginx 웹서버

### Apache

> Apache 는 인터넷을 통해 액세스되는 웹 콘텐츠를 제공하기 위해 개발되었습니다. 월드 와이드 웹의 초기 성장에 핵심적인 역할을 한 것으로 유명합니다. Apache는 개방형 개발자 커뮤니티에서 개발 및 유지 관리하는 오픈 소스 소프트웨어이며 다양한 운영 체제에서 실행됩니다. 아키텍처에는 Apache Core 및 모듈이 포함됩니다. 핵심 구성 요소는 기본 서버와 같은 기능을 제공하므로 연결을 수락하고 동시성을 관리합니다. 다양한 모듈은 각 요청에서 실행되는 다양한 기능에 해당합니다. 특정 Apache 배포는 보안 기능, 동적 콘텐츠 관리 또는 기본 HTTP 요청 처리와 같은 다양한 모듈을 포함하도록 구성할 수 있습니다.

### Nginx

> NGINX 는 Apache 웹 서버의 성능 제한을 해결하기 위해 특별히 작성되었습니다. NGINX의 성능과 확장성은 이벤트 드라이브 n 아키텍처 에서 비롯됩니다 . Apache의 연결당 프로세스 또는 스레드 접근 방식 과 크게 다릅니다 . NGINX에서 각 작업자 프로세스는 수천 개의 HTTP 연결을 동시에 처리할 수 있습니다. 따라서 NGINX는 가볍고 확장 가능하며 성능이 뛰어난 구현입니다. 이 아키텍처를 사용하면 RAM 사용량, CPU 사용량 및 대기 시간 측면에서 높고 변동하는 데이터 로드를 훨씬 더 예측 가능하게 처리할 수 있습니다 .

![](img/apache&nginx.png)

---

## 포트 바인딩

> 기본 바인딩 포트 80 // 포트 80은 표준 웹포트다.
>
> > Browser -> 80 port(Nginx) -> 8080 port(tomcat)

- /etc/nginx/conf.d/\*.conf

```sh
server { # 하나의 웹사이트 선언
  listen 80; # 리스닝 포트
  server_name abc.test.com;

  location / { # 특정 URL 처리
    root /home/nginx;
    index index.html, index.htm; # 초기 페이지 설정
  }

  location ~ \.do$ { # 특정 확장자 요청 넘기기 (nginx 뒷단의 WAS로)
    proxy_pass http://localhost:8080;
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

## 회사 방법

```
server {
  server_name ekr.lepisode.team;
  listen 80;

  return 301 https://ekr.lepisode.team;
}

server {
  server_name ekr.lepisode.team;
  listen 443 ssl http2;
  listen [::]:443 ssl http2;

  ssl_certificate /etc/ssl/certs/ssl-cert-wildcard-cert.pem;
  ssl_certificate_key /etc/ssl/certs/ssl-cert-wildcard-key.pem;
  ssl_prefer_server_ciphers on;

  root /home/lepisode/Workspace/ekr/ekr-client/src/dist/;

  location / {
    try_files $uri /index.html;
    error_page 404 = @errors;
  }

  location @errors {
    try_files $uri /index.html;
    proxy_intercept_errors on;
  }
}
```
