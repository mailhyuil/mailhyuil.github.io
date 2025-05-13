# grpc 통신 방식

## Unary

> 기본 요청/응답

```txt
client --> server
server --> client
```

## Server Streaming

> 서버의 결과가 많은 경우

```txt
client --> server
server --> client
server --> client
...
```

## Client Streaming

> 클라이언트가 데이터 누적 보낼 때

```txt
client --> server
client --> server
...
server --> client
```

## Bi-directional Streaming

> 채팅, 실시간 스트리밍

```txt
client --> server
server --> client
client --> server
server --> client
...
```
