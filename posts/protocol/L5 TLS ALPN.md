# TLS ALPN (Application-Layer Protocol Negotiation)

## 기존 방식

```txt
[1] TCP 연결
 ↓
[2] TLS 핸드셰이크
 ↓
[3] 연결은 열림
 ↓
[4] 클라이언트가 HTTP 요청 헤더에
    Upgrade: h2c 같은 걸 붙여서 "나 HTTP/2 하고 싶어"라고 제안
 ↓
[5] 서버가 응답하면 그때서야 HTTP/2로 업그레이드
```

## ALPN 방식

> TLS 핸드셰이크 도중에 HTTP 프로토콜 버전을 협상하는 방식
>
> > 모던 브라우저에서는 기본으로 ALPN을 넣어서 요청하기 때문에 ALPN 없이는 HTTP2, HTTP3을 사용할 수 없음

```txt
[1] TCP 연결
 ↓
[2] TLS ClientHello → "나 http/1.1, h2 둘 다 가능함" (ALPN 확장 포함)
 ↓
[3] TLS ServerHello → "그럼 h2로 가자!" (서버 선택)
 ↓
[4] TLS 핸드셰이크 끝 → 바로 HTTP/2 시작! 🚀
```

## ALPN 지원 확인

```sh
openssl s_client -connect example.com:443 -alpn 'h2,http/1.1'
```
