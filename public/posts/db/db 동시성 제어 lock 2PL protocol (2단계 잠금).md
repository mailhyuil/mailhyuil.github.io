# db 동시성 제어 lock 2단계 잠금 (2PL)

> lock을 통해서 직렬성을 보장하는 방법
>
> > lock 과 unlock의 단계를 나누는 방식으로 직렬성을 보장 (확장/축소 패턴)
> >
> > > 배타적 락(x-lock)을 사용하여 동시성 제어
> > >
> > > > double booking problem (이중 예약 문제)를 해결: 두 명의 사용자가 동시에 같은 자원을 예약하는 문제
> > > >
> > > > > lost updates, read and write skews를 방지할 수 있다.
> > > > >
> > > > > > recoverability를 방지하기 위해서 S2PL, deadlock을 방지하기 위해서 SS2PL을 사용한다.
> > > > > >
> > > > > > > Postgres같은 MVCC 데이터베이스에서는 2PL이 아닌 스냅샷 방식을 통해서 직렬성을 보장한다.

```sql
lock()
lock()
.. do something ..
unlock()
unlock()
```
