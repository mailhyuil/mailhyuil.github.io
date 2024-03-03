# db transaction lock shared lock vs exclusive lock

## Shared Lock (공유 락, S Lock, Read Lock)

> 게임을 예로 들면 여러 플레이어가 동시에 사용할 수 있는 방어 기술이다.
>
> > 상대방이 플레이어를 볼 수 있지만 (read o), 공격할 수 없다. (write x)

## Exclusive Lock (배타 락, X Lock, Write Lock)

> 오직 한 플레이어만 사용할 수 있는 은신 기술
>
> > 다른 플레이어가 볼 수도 없고 공격할 수도 없다. (read x, write x)
