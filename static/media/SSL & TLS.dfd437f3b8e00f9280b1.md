# SSL/TLS

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
> > > > >
> > > > > > HTTPS는 TLS와 HTTP가 조합된 프로토콜
> > > > > >
> > > > > > > ssl 인증서는 보험이다 -> 안전 배상금이 클 수록 비싸다.

## SSL/TLS 통신 단계

1. 핸드셰이크
2. 전송
3. 종료

![](/img/ssl.png)

1. Client hello

   > 클라이언트가 서버에게 연락합니다. 브라우저 검색창에 도메인을 입력하는 것으로 보면 됩니다. 이때 클라이언트는 자신의 브라우저가 지원할 수 있는 암호화 방식(Cipher Suite)을 먼저 제시합니다. 그리고 랜덤 데이터를 생성하여 추가로 전송합니다.

2. Server hello

   > 서버가 클라이언트에게 연락합니다. 서버는 클라이언트가 제시한 암호화 방식 중 하나를 선정하여 알려줍니다. 또한, 서버 자신의 인증서를 전달합니다. 이 인증서에는 서버의 공개 키가 포함되어 있습니다. 클라이언트와 마찬가지로 서버 측에서 생성한 랜덤 데이터 또한 전달합니다.

3. Client key exchange

   > 클라이언트는 미리 주고받은 자신과 서버의 랜덤 데이터를 참고하여 서버와 암호화 통신을 할 때 사용할 키를 생성한 후 서버에게 전달합니다. 이때 키는 서버로부터 받은 공개키로 암호화되어 보내집니다.

4. Finished
   > 마지막으로 핸드셰이크 과정이 정상적으로 마무리되면, 클라이언트와 서버 모두 “finished” 메시지를 보냅니다. 그 후부턴 클라이언트가 생성한 키를 이용하여 암호화된 데이터를 주고받게 됩니다.

## openssl

## key 생성

```sh
openssl genrsa -des3 -out 파일이름.key

openssl genrsa -out 파일이름.key # 패스워드 제거 생성
openssl rsa -in 기존파일이름.key -des3 -out 새로운파일이름.key # 기존에 생성된 key파일에 암호 추가하여 재생성
openssl rsa -in 기존파일이름.key -out 새로운파일이름.key # 기존에 생성된 key파일의 암호를 제거하여 재생성
```

## CSR(인증요청서) 생성

```sh
openssl req -new -key server.key -out server.csr

# Enter pass phrase for server.key:  # 서버의 개인키 비밀번호 입력
# -> 사용자의 경우에 맞게 적절히 입력
# You are about to be asked to enter information that will be incorporated
# into your certificate request.
# What you are about to enter is what is called a Distinguished Name or a DN.
# There are quite a few fields but you can leave some blank
# For some fields there will be a default value,
# If you enter '.', the field will be left blank.
# -----
# Country Name (2 letter code) [XX]:
# State or Province Name (full name) []:
# Locality Name (eg, city) [Default City]:
# Organization Name (eg, company) [Default Company Ltd]:
# Organizational Unit Name (eg, section) []:
# Common Name (eg, your name or your server's hostname) []:
# Email Address []:
# -> 아래 내용이 필요할 시 비밀번호를 추가적으로 생성할 수 있지만 보통경우 그냥 엔터를 쳐서 넘어가도 무관
# Please enter the following 'extra' attributes
# to be sent with your certificate request
# A challenge password []:
# An optional company name []:
# 서버 인증요청서인 server.csr 파일 생성
```

## CRT(인증서) 생성

```sh
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```
