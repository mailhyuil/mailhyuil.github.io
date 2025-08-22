# certbot options

```txt
certbot certonly
인증서만 발급하고 웹 서버 설정은 자동으로 하지 않음.

--server https://acme-v02.api.letsencrypt.org/directory
Let's Encrypt의 ACME v2 API 서버를 사용하여 인증서를 발급함.
ACME v2는 와일드카드 인증서(*.dep.team)를 지원하는 최신 프로토콜.

--agree-tos
서비스 이용 약관(TOS)에 자동 동의.

--email dep.agile@gmail.com
발급된 인증서와 관련된 알림(만료, 갱신 등)을 받을 이메일 주소.

--standalone
certbot이 임시 웹 서버를 실행하여 인증을 받음.

--webroot -w /var/www/html (default)
웹 서버의 특정 디렉토리에 파일을 생성하여 인증을 받음.

--preferred-challenges http (default)
HTTP-01 방식으로 인증을 받음.

--preferred-challenges dns
DNS-01 방식으로 인증을 받음.

--manual
수동으로 인증을 진행

--force-renewal
만료되지 않은 인증서도 강제로 갱신.

--rsa-key-size
RSA 키 크기를 지정. (default: 2048)
```
