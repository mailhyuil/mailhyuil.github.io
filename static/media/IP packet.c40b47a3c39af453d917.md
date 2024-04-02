# IP packet

## 구조

> 헤더 + 데이터(페이로드)

```sh
========= header ============
version: 4 bits
header length: 4 bits
type of service: 8 bits
total length: 16 bits
identification: 16 bits
flags: 3 bits
fragment offset: 13 bits
time to live: 8 bits
protocol: 8 bits
header checksum: 16 bits
source address: 32 bits
destination address: 32 bits
options: 0-320 bits
========== data =============
Data: 0-65,535 bytes
```
