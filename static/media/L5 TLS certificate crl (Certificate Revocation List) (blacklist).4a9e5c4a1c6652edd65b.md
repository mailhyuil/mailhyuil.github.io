# TLS crl (Certificate Revocation List)

> 신뢰할 수 없는(폐기된) 인증서들의 목록을 포함하는 파일
>
> > 신뢰할 수 없는 인증서를 차단하기 위해 사용된다.

```sh
openssl ca -gencrl -out crl.pem
```
