# db 동시성 제어 lock 2PL vs S2PL vs SS2PL

## 2PL

> 한 번 unlock하면 더 이상 lock 불가

## S2PL (Static 2PL)

> X-lock은 커밋/롤백 시까지 유지, S-lock은 중간에 해제 가능

## SS2PL (Snapshot Serialization) (Rigorous 2PL)

> S-lock과 X-lock 모두 커밋까지 유지

## Conservative 2PL (Static 2PL)

> 트랜잭션 시작 전에 필요한 모든 락을 한꺼번에 획득
