# db 동시성 제어 lock 2단계 잠금 (2PL)

> Serializable 고립 수준을 사용하지 않고도 직렬성을 보장하는 방법
>
> > lock 과 unlock의 단계를 나누는 방식으로 직렬성을 보장 (확장/축소 패턴)
> >
> > > 배타적 락(x-lock)을 사용하여 동시성 제어
> > >
> > > > double booking problem (이중 예약 문제)를 해결: 두 명의 사용자가 동시에 같은 자원을 예약하는 문제
> > > >
> > > > > lost updates, read and write skews를 방지할 수 있다.
> > > > >
> > > > > > Postgres같은 MVCC 데이터베이스에서는 필요 없다.

```sql
SELECT * FROM table_name FOR UPDATE;
```
