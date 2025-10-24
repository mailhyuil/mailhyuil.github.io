# quic 0-RTT

> http3와 tls 1.3을 사용 시 0-RTT를 사용할 수 있다.
>
> 이전에 접속한 적이 있는 서버라면 0-RTT로 연결할 수 있다.
>
> > 모바일 앱이 자주 같은 서버에 reconnect 할 때
> >
> > CDN과 서버 간 빠른 연결
> >
> > 반복적으로 GET 요청이 필요한 IoT 디바이스

## 기존 방식

```txt
ClientHello → [ServerHello, EncryptedExtensions, Finished] → Client Finished → 데이터
```

## 0-RTT 방식

```txt
ClientHello + Early Data (0-RTT 데이터 같이 보냄) → 서버가 바로 처리할 수도 있음
```

## nginx config

```conf
ssl_early_data on;
```
