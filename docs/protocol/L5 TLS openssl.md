# L5 TLS openssl

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
