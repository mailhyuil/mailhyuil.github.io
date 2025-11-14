# cache base LRU & LFU

| 구분            | **TTL (Time To Live)**     | **LRU (Least Recently Used)**       | **LFU (Least Frequently Used)** |
| --------------- | -------------------------- | ----------------------------------- | ------------------------------- |
| **기준**        | 시간(time)                 | 최근 사용 시점                      | 사용 빈도(frequency)            |
| **삭제 트리거** | 일정 시간이 지나면         | 오랫동안 안 쓰이면                  | 거의 안 쓰이면                  |
| **목적**        | 데이터의 **유효기간** 제어 | **메모리 초과 시** 오래된 항목 제거 | **자주 안 쓰인** 항목 제거      |
| **대표 구현**   | `EXPIRE key 60` (Redis)    | `maxmemory-policy allkeys-lru`      | `maxmemory-policy allkeys-lfu`  |
| **유형**        | ⏰ **시간 기반 만료**      | 📆 **접근 패턴 기반 만료**          | 📊 **통계 기반 만료**           |
