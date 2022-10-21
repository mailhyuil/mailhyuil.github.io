# SSL
> 보안 소켓 계층 (Secure Sockets Layer)을 이르는 말로 독립적인 프로토콜 계층
>> 인터넷에서 데이터를 안전하게 전송하기 위한 인터넷 통신 규약 *프로토콜*이다
>>> 암호화 기반 인터넷 보안 프로토콜로서, 개인정보 보호, 인증, 무결성을 인터넷 통신에 제공한다고 한다.
>>>> SSL은 현재 TLS(Transport Layer Security)로 발전했다, TLS는 SSL의 후속 버전
## HTTPS
> TLS와 HTTP가 조합된 프로토콜
>> 웹에서 전송되는 데이터를 암호화여 데이터를 가로채더라도 거의 해독할 수 없는 복잡한 문자를 보게 된다.
>>> 데이터 무결성을 제공하기 위해 데이터에 디지털 서명하여 데이터가 의도된 수신자에 도착하기 전에 조작되지 않았다는 것을 확인한다.
>>>> 443번 포트를 사용하는 TCP 기반의 프로토콜

## docker + nginx + ssl
- nginx 컨테이너 포트 80, 443 열기
- EC2 인스턴스 방화벽 80, 443 열기

```
mkdir /root/ssl/

openssl req -x509 -days 30 -nodes -newkey rsa:2048 -keyout /root/ssl/nginx-ssl.key -out /root/ssl/nginx-ssl.crt


```
- default.conf
```
server {
    listen       80;
    server_name  nginx-ssl-test.com;
    return 301 https://$host$request_uri;
}

server {
    listen       443 ssl;
    server_name  nginx-ssl-test.com;

    location / {
        proxy_pass http://my-tomcat:8080;
    }

    ssl_certificate /root/ssl/nginx-ssl.crt;
    ssl_certificate_key /root/ssl/nginx-ssl.key;

    ### 이하 생략 ###
}
```