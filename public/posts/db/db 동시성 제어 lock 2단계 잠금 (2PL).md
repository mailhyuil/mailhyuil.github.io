# db 동시성 제어 lock 2단계 잠금 (2PL)

> lock 과 unlock의 단계를 나누는 방식으로 직렬성을 보장 (확장/축소 패턴)
>
> > 배타적 락(x-lock)을 사용하여 동시성 제어
> >
> > > double booking problem (이중 예약 문제)를 해결

```sql
SELECT * FROM table_name FOR UPDATE;
```
