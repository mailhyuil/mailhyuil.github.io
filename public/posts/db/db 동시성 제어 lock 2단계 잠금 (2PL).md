# db 동시성 제어 lock 2단계 잠금 (2PL)

> 데이터베이스 및 트랜잭션 처리에서 직렬성을 보장하는 동시성 제어 방법
>
> > 배타적 락을 사용하여 동시성 제어
> >
> > > double booking problem (이중 예약 문제)를 해결

```sql
SELECT * FROM table_name FOR UPDATE;
```
