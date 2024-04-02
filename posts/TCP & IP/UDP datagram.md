# UDP datagram

> UDP에서 IP로 데이터를 보내는 단위

## 구조

> 헤더 + 데이터(페이로드)로 이루어져 있다.

```sh
========= header ============
Source port number: 16 bits
Destination port number: 16 bits
Length: 16 bits
Checksum: 16 bits
========== data =============
Data: 0-65,535 bytes
```
