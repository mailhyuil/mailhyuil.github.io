# transaction

> 데이터베이스에서 하나의 논리적 기능을 수행하기 위한 작업의 단위

## ACID

1. 원자성(automicity) : 작업이 모두 반영되던지 아니면 전혀 반영되지 않아야한다. (commit & rollback)
2. 일관성(Consistency) : 실행이 완료되면 상태가 언제나 같아야한다
3. 독립성(Isolation) : 트랜잭션은 서로의 연산에 끼어들 수 없다.
4. 영속성(Durability) : 완료된 결과는 영구적으로 반영되어야한다.