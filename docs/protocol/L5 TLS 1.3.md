# L5 TLS 1.3

> 대칭키 암호화 사용
>
> > 항상 디피-헬만(Diffie-Hellman) 키교환 사용
> >
> > > one round trip or zero round trip (0-RTT)

```sh
# TCP 3-way handshake
SYN
SYN/ACK
ACK
# TLS Handshake (키교환)
Client Hello
Server Hello
# Data Transfer
GET
200 OK
```
