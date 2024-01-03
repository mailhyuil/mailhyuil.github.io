# tcp connection

> 소켓쌍(a pair of sockets)을 사용하여 3-way handshake를 통해 생성
>
> > 하나의 컴퓨터에는 여러 개의 tcp connection이 존재할 수 있음 (ip:port로 구분)
> >
> > > 소켓은 앱이 tcp통신을 요청할 때 생성되고, 그 소켓을 통해 tcp connection이 생성됨

## TCB (Transmission Control Block)

> tcp connection을 관리하기 위한 정보를 담고 있는 구조체
>
> > 메모리에 생성되며, 소켓쌍과 1:1로 대응됨

## 3-way handshake

```
클라이언트: SYN
서버: SYN + ACK
클라이언트: ACK
```

## 4-way handshake

```
클라이언트: FIN
서버: ACK
서버: FIN
클라이언트: ACK
```
