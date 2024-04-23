# tcp connection

> tcp는 애플리케이션 계층으로부터 받은 데이터를 스트림으로 읽어들이지만
>
> > 그 다음 계층인 ip는 메시지 중심 프로토콜이므로 tcp의 스트림을 메시지 단위로 분할해야 한다.
> >
> > > 이때 나눈 메시지를 **segment**라고 한다.

## 구조

> 헤더 + 데이터(페이로드)로 이루어져 있다.

```sh
========= header ============
Source port: 16 bits
Destination port: 16 bits
Sequence number: 32 bits
Acknowledgment number: 32 bits
Data offset: 4 bits
Reserved: 6 bits
Control bits: 6 bits
Window: 16 bits
Checksum: 16 bits
Urgent pointer: 16 bits
Options: 0-320 bits
Padding: 0-256 bits
========== data =============
Data: 0-65,535 bytes
```
