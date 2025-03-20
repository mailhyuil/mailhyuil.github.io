# postgres TLS & SSL

> cloud 환경에서 서버간의 거리가 멀어지면서 server, database 사이의 보안이 중요해짐

## postgresql.conf

```conf
ssl = on
ssl_cert_file = 'server.crt' # cert.pem
ssl_key_file = 'server.key' # private.pem

sslmode = require
# sslmode = prefer : SSL을 사용하지만 인증서가 없으면 평문으로 연결
# sslmode = require : SSL을 사용하지만 인증서는 확인하지 않음
# sslmode = verify-ca : SSL을 사용하고 인증서를 확인하지만 서버 이름은 확인하지 않음
# sslmode = verify-full : SSL을 사용하고 인증서를 확인하고 서버 이름도 확인

sslrootcert=/etc/ssl/certs/ca-bundle.pem # 신뢰하는 인증서를 모아놓은 파일
```

## openssl

```sh
openssl req -x509 -newkey rsa:4096 -nodes -keyout private.pem -out cert.pem
chmod 600 private.pem
chown postgres:postgres private.pem
```
