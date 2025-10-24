# db 분산 시스템 cluster replication logical replica

```txt
테이블 단위 복제 → 특정 테이블만 선택적으로 복제 가능
Schema 변환 가능 → 원본 DB와 대상 DB의 테이블 구조가 달라도 OK
이기종 데이터베이스 복제 가능 → PostgreSQL → MongoDB, MySQL 등으로 전송 가능
CDC(Change Data Capture) 기반 → INSERT, UPDATE, DELETE 이벤트만 전송
```
