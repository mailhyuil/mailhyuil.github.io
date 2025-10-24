# Self-Signed Certificate

> CSR을 보내서 인증서를 받는 것이 아니라, 인증서를 직접 만드는 것
>
> (개발 및 테스트 환경에서 사용)
>
> (CA-Signed Certificate에 비해서 안전하지 않음)
>
> > public 암호화 방식

## 순서

```sh
1. key 생성
2. csr 생성
3. csr로 crt 생성
4. crt 파일을 변수에 사용
```

## command

```sh
# key 파일 생성 (개인키)
openssl genrsa -out test.key 2048

# csr 파일 생성
openssl req -new -key test.key -out test.csr

# crt 파일 생성
openssl x509 -req -days 365 -in test.csr -signkey test.key  -out test.crt

# csr없이 key,crt 파일 한번에 생성
openssl req -new -x509 -days 365 -nodes -keyout test.key -out test.crt
```
