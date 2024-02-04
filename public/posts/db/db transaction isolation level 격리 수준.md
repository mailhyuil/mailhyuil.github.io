# db transaction isolation level

> 트랜잭션 격리 수준

## Read Uncommitted (레벨 0):

> 가장 낮은 격리 수준입니다.
> 다른 트랜잭션에서 변경 중인 데이터를 읽을 수 있으며, 이로 인해 더러운 읽기(Dirty Read) 문제가 발생할 수 있습니다.

## Read Committed (레벨 1):

> RDB에서 대부분 기본적으로 사용되고 있는 격리 수준
>
> > 다른 트랜잭션에서 변경 중인 데이터를 읽을 수 없습니다.
> > 데이터를 읽을 때, 해당 데이터는 커밋된 상태여야 합니다.s
> > Dirty Read 문제는 해결되지만, Non-Repeatable Read 문제는 여전히 발생할 수 있습니다.

## Repeatable Read (레벨 2):

> 트랜잭션이 시작될 때 읽은 데이터를 트랜잭션이 종료될 때까지 유지합니다.
> 다른 트랜잭션에서 데이터를 수정해도 현재 트랜잭션에서는 수정 내용이 반영되지 않습니다.
> Non-Repeatable Read 문제는 해결되지만, Phantom Read 문제는 여전히 발생할 수 있습니다.

## Serializable (레벨 3):

> 가장 높은 격리 수준으로, 모든 트랜잭션을 순차적으로 처리합니다.
> 다른 트랜잭션과의 충돌을 방지하며, 데이터 무결성을 최대한 보장합니다.
> Dirty Read, Non-Repeatable Read, Phantom Read 문제가 발생하지 않습니다.
> 하지만, 동시성이 저하될 수 있고, 성능에 부담을 줄 수 있습니다.
