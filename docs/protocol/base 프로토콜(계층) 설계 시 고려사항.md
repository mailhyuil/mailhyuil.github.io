# 프로토콜

## Data format

```sh
Text based # plain text, JSON, XML
Binary based # Protocol Buffers, RESP, BSON, h2, h3
```

## Transfer mode

```sh
Message based # UDP, HTTP
Stream based # TCP, WebRTC
```

## Addressing system

```sh
DNS name
IP
MAC
...
```

## Directionality

```sh
Bidirectional
Unidirectional
Full/Half duplex
```

## State

> stateful은 메모리에 상태를 저장하고, stateless는 상태를 저장하지 않는다.

```sh
Stateful # TCP, gRPC, apache thrift
Stateless # UDP, HTTP
```

## Routing

```sh
Proxies
Gateways
```

## Flow & Congestion control

```sh
Flow & Congestion control # TCP, QUIC
No Flow & Congestion control # UDP
```

## Error Management

```sh
Error code
Retries and timeouts
```
