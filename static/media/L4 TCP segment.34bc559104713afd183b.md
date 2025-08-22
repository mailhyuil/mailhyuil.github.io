# tcp segment

> tcp는 애플리케이션 계층으로부터 받은 데이터를 스트림으로 읽어들이지만
>
> > 그 다음 계층인 ip는 메시지 중심 프로토콜(패킷)이므로 tcp의 스트림을 메시지 단위(세그먼트)로 분할해야 한다.
> >
> > > 하나의 패킷에는 여러 개의 세그먼트가 포함되고 receiver는 패킷을 받은 후 몇개를 받았는지 갯수를 세어 ACK를 보낸다.
> > >
> > > > 보낸 세그먼트의 갯수와 ACK를 비교하여 누락된 세그먼트를 재전송한다.

## 구조

> 헤더 + 데이터(페이로드)로 이루어져 있다.

```sh
========= header ============
Source port: 16 bits
Destination port: 16 bits

Sequence number: 32 bits # 세그먼트 순서 번호

Acknowledgment number(if ACK set): 32 bits

Data offset: 4 bits
Reserved: 6 bits

Control bits(flags): 9 bits
  - NS: 1 bit # ECN-nonce 플래그
  - CWR: 1 bit # Congestion Window Reduced 플래그
  - ECE: 1 bit # ECN-Echo 플래그
  - URG: 1 bit # Urgent pointer 필드가 유효하다.
  - ACK: 1 bit # ACK가 설정되어 있으면 Acknowledgment number 필드가 유효하다.
  - PSH: 1 bit # 수신자에게 데이터를 즉시 전달하라는 표시
  - RST: 1 bit # 연결을 재설정하라는 표시
  - SYN: 1 bit # 연결을 설정하라는 표시
  - FIN: 1 bit # 연결을 종료하라는 표시

Window Size: 16 bits # 서버가 한번에 받을 수 있는 데이터의 양 (크기를 늘리면 빠르게 전송 가능)

Checksum: 16 bits
Urgent pointer: 16 bits
Options: 0-320 bits
Padding: 0-256 bits
========== data =============
Data: 0-65,535 bytes
```
