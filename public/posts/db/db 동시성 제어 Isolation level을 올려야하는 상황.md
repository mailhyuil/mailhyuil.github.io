# db 동시성 문제를 고려해야하는 상황

> 기본으로 Read Committed를 사용하고, 특정 상황에 따라 다른 Isolation level을 사용해야한다.

## Repeatable Read

1. 같은 ROW에 여러 사용자가 동시에 접근할 가능성이 있을 때
   - 은행계좌에서 동시 입금/출금이 발생할 때
2. 다른 ROW에 접근하더라도 두 ROW가 서로 의존성이 있을 때
   - 주문이 생성될 때 재고가 감소하는 상황
   - 예약 시스템에서 좌석이 예약되었는지 확인할 때
   - 경매 시스템에서 입찰이 진행되는 상황

## Serializable (Postgres에서는 Repeatable Read로 구현)

1. 여러개의 테이블을 건드리는 복잡한 로직
   - 주문 생성 시 주문 상품 재고 감소, 결제 생성, 포인트 적립 등 여러 테이블을 건드리는 로직
   - 보고서를 생성할 때 데이터가 변경되면 안되는 상황

## Serializable

2. write skew 문제
   - double booking problem
