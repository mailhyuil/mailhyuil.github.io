# SSL

> 보안 소켓 계층 (Secure Sockets Layer)을 이르는 말로 독립적인 프로토콜 계층
>
> > 인터넷에서 데이터를 안전하게 전송하기 위한 인터넷 통신 규약 *프로토콜*이다
> >
> > > 개인정보 보호, 인증, 무결성을 인터넷 통신에 제공
> > >
> > > > TLS(Transport Layer Security)는 SSL의 후속 버전
> > > >
> > > > > 443번 포트를 사용하는 TCP 기반의 프로토콜
> > > > > 웹에서 전송되는 데이터를 암호화여 데이터를 가로채더라도 거의 해독할 수 없는 복잡한 문자를 보게 된다.
> > > > > 데이터 무결성을 제공하기 위해 데이터에 디지털 서명하여 데이터가 의도된 수신자에 도착하기 전에 조작되지 않았다는 것을 확인한다.

## HTTPS

> TLS와 HTTP가 조합된 프로토콜

## SSL 통신 단계

1. 핸드셰이크
2. 전송
3. 종료

![](/img/ssl.png)

- Client hello : 클라이언트가 서버에게 연락합니다. 브라우저 검색창에 도메인을 입력하는 것으로 보면 됩니다. 이때 클라이언트는 자신의 브라우저가 지원할 수 있는 암호화 방식(Cipher Suite)을 먼저 제시합니다. 그리고 랜덤 데이터를 생성하여 추가로 전송합니다.

- Server hello : 서버가 클라이언트에게 연락합니다. 서버는 클라이언트가 제시한 암호화 방식 중 하나를 선정하여 알려줍니다. 또한, 서버 자신의 인증서를 전달합니다. 이 인증서에는 서버의 공개 키가 포함되어 있습니다. 클라이언트와 마찬가지로 서버 측에서 생성한 랜덤 데이터 또한 전달합니다.

- Client key exchange : 클라이언트는 미리 주고받은 자신과 서버의 랜덤 데이터를 참고하여 서버와 암호화 통신을 할 때 사용할 키를 생성한 후 서버에게 전달합니다. 이때 키는 서버로부터 받은 공개키로 암호화되어 보내집니다.

- Finished : 마지막으로 핸드셰이크 과정이 정상적으로 마무리되면, 클라이언트와 서버 모두 “finished” 메시지를 보냅니다. 그 후부턴 클라이언트가 생성한 키를 이용하여 암호화된 데이터를 주고받게 됩니다.

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
