# TCP 연결 & 해제

## 연결 (3-way handshake)

```md
1. SYN
   - 클라이언트가 Sequence Number를 임의의 순자로 지정하고 SYN 플래그 비트를 1로 설정한 세그먼트를 서버에 전송한다.
   - e.g. SYN = 1, SEQ = 1000
2. SYN + ACK
   - 서버는 SYN을 받고 클라이언트에게 ACK와 SYN을 모두 설정한 세그먼트를 전송한다.
   - e.g. SYN = 1, ACK = 1, SEQ = 2000, ACK = 1001
3. ACK
   - 클라이언트는 서버의 SYN을 받고 ACK 플래그 비트를 1로 설정한 세그먼트를 서버에 전송한다.
   - e.g. SYN = 0, ACK = 1, SEQ = 1001, ACK = 2001
4. 연결 완료
```

## 해제 (4-way handshake)

> TCP는 "신뢰성 있는 연결"을 제공하기 때문에 갑작스러운 연결 종료는 문제가 될 수 있다.
>
> > 문제점
> >
> > 데이터 손실: 연결 종료 전에 전송된 데이터가 손실될 수 있다.
> >
> > 연결 상태 불일치: 클라이언트나 서버가 지속해서 연결을 재시도할 수 있다.
> >
> > 메모리 누수: 연결 종료 후에도 메모리가 해제되지 않을 수 있다.
> >
> > > 따라서 4-way handshake를 통해 연결을 안전하게 종료하고 갑작스러운 종료는 Abrupt 방식을 사용한다.

```md
## Graceful

> 정상적인 연결 종료

1. Client FIN
   - 클라이언트가 FIN 플래그 비트를 1로 설정한 세그먼트를 서버에 전송한다.
   - 더 이상 보낼게 없으니 연결을 종료하겠다고 알림
2. Server ACK
   - 서버는 FIN을 받고 ACK 플래그 비트를 1로 설정한 세그먼트를 클라이언트에 전송한다.
   - 연결 종료 알림을 받았다고 응답 (나머지 데이터를 전부 보내고 추후 FIN을 보냄)
3. Server FIN
   - 서버가 FIN 플래그 비트를 1로 설정한 세그먼트를 클라이언트에 전송한다.
   - 더 이상 보낼게 없으니 연결을 종료하겠다고 알림
4. Client ACK
   - 클라이언트는 FIN을 받고 ACK 플래그 비트를 1로 설정한 세그먼트를 서버에 전송한다.
   - 연결 종료 알림을 받았다고 응답
   - 마지막 ACK 이후에도 클라이언트는 TIME_WAIT 상태로 잠깐 대기함
   - 혹시 마지막 패킷이 유실돼도 재전송을 감지해서 다시 보낼 수 있게끔
5. 연결 종료

## Abrupt

> 비정상적인 연결 종료
>
> > RST (TCP Reset) 세그먼트를 전송하여 즉시 연결을 종료한다.
> >
> > > 데이터 손실 가능성이 있다
```
