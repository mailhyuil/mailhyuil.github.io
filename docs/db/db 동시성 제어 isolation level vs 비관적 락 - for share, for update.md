# db 동시성 제어 isolation level vs 비관적 락 - for share, for update

## 격리수준 (Isolation Level)

- 읽는 연산에 대해서 전역적인 데이터 정합성(일관성)을 보장할 때 필요
- 트랜잭션에 포함된 모든 데이터를 lock
- 읽기(SELECT) 연산이 중요한 경우
- (트랜잭션 간 간섭을 줄이면서도 동시 읽기 성능을 최대한 유지할 수 있다.)

## 비관적 락 (Pessimistic Locking)

- 쓰기 연산에 대해서 데이터 무결성을 보장하고 동시성 충돌을 방지
- 특정 데이터에 대한 lock을 획득
- 변경 연산(UPDATE, DELETE)이 중요한 경우
- (동시에 같은 데이터를 수정하는 경우 충돌을 방지할 수 있다.)
