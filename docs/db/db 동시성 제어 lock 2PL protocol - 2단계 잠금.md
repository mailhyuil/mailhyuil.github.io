# db 동시성 제어 lock 2PL protocol - 2단계 잠금

> lock을 먼저 수행하고 로직을 전부 처리 후 마지막으로 unlock을 하는 패턴
>
> Expand And Contract Pattern과 같은 느낌이다.
>
> > 직렬성을 보장하기 위한 패턴
> >
> > > double booking problem (이중 예약 문제)를 해결: 두 명의 사용자가 동시에 같은 자원을 예약하는 문제
> > >
> > > > lost updates, read and write skews를 방지할 수 있다.
> > > >
> > > > > recoverability를 방지하기 위해서 S2PL, deadlock을 방지하기 위해서 SS2PL을 사용한다.
> > > > >
> > > > > > Postgres같은 MVCC 데이터베이스에서는 2PL이 아닌 스냅샷 방식을 통해서 직렬성을 보장한다.

```sql
lock()
lock()
.. do something ..
unlock()
unlock()
```

## strict 2PL

> 모든 쓰기 잠금(write lock)을 트랜잭션이 커밋하거나 중단(commit or abort)할 때까지 유지합니다.
> deadlock 발생 가능성 있음

## rigorous 2PL

> 모든 잠금(읽기 및 쓰기)을 트랜잭션이 커밋하거나 중단할 때까지 유지합니다.
> deadlock 발생 가능성 있음

## conservative 2PL (static 2PL)

> 트랜잭션 시작 시점에 모든 잠금을 미리 선언하고, 트랜잭션 실행 전에 모든 필요한 잠금을 취득합니다.
> deadlock 발생 가능성 없음
