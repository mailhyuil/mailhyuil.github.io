# TLS openssl 서버의 tls 상태 확인

```sh
openssl s_client -connect seo-dev.dep.team:443 -alpn h2
```

## output

```sh
CONNECTED(000001F0) # 연결 성공

ALPN protocol: h2 # ALPN를 지원하면 프로토콜이 h2로 설정되어 있다.

SSL-Session:
    Protocol  : TLSv1.3 # TLS 버전이 1.3으로 설정되어 있다.
```
