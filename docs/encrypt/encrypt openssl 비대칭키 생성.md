# openssl

## 즉시 키와 인증서 생성하기 (self-signed)

> 서버내에서 tls를 위한 키는 self-signed로 생성할 수 있다.

```sh
# -keyout : 개인키 파일명
# -out : 인증서 파일명
openssl req -x509 -newkey rsa:4096 -nodes -keyout private.pem -out cert.pem
```

## 인증 기관을 통해서 인증서 생성하기 (CA-Signed)

> https같은 암호화를 위해서는 공인 인증기관의 인증서를 사용해야 한다.
>
> > 이럴땐 csr을 생성해서 인증기관에 보내서 인증서를 받아야 한다.

```sh
# CA가 될 사람/기관의 개인키 생성
openssl genrsa -out ca_private.pem 4096
# CA가 될 사람/기관의 인증서 생성 (self-signed)
openssl req -x509 -new -nodes -key ca_private.pem -sha256 -days 3650 -out ca_cert.pem
# [ca_private.pem, ca_cert.pem]

## 서버의 개인키 생성
openssl genrsa -out server_private.pem 4096
## 서버의 CSR(인증요청서) 생성
openssl req -new -key server_private.pem -out server_csr.pem
## 서버의 CRT(인증서) 생성
openssl x509 -req -in server_csr.pem -CA ca_cert.pem -CAkey ca_private.pem -CAcreateserial -out server_cert.pem -days 365 -sha256
```
