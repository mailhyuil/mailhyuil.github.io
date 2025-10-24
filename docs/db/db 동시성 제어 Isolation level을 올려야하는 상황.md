# db 동시성 제어 Isolation level을 올려야하는 상황

> 기본으로 Read Committed를 사용하고, 특정 상황에 따라 다른 Isolation level을 사용해야한다.
>
> > database의 설계에 따라 다르다는 것을 인지하고 있어야 한다.

## Repeatable Read

1. 같은 ROW에 여러 사용자가 동시에 접근할 가능성이 있을 때
   - 같은 은행계좌에서 동시 입금/출금이 발생할 때
2. 다른 ROW에 접근하더라도 두 ROW가 서로 의존성이 있을 때
   - 주문이 생성될 때 재고가 감소하는 상황
   - 경매 시스템에서 입찰이 진행되는 상황

## Serializable (Postgres에서는 Repeatable Read로 구현)

1. 누군가 ROW를 INSERT하거나 DELETE하면 현재 실행 중인 트랜잭션의 결과에 영향을 미칠 때
   - 보고서를 생성할 때 데이터가 변경되면 안되는 상황

## Serializable (Postgres에서도)

> 또는 FOR UPDATE

1. write skew 문제
   - double booking problem
   - 예약 시스템에서 좌석이 예약할 때
