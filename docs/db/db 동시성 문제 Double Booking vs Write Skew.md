# db 동시성 문제 Double Booking vs Write Skew

## Double Booking

- 하나의 자원에 두개의 트랜잭션이 동시에 접근하여 발생하는 동시성 문제
- e.g. 같은 좌석에 두명의 사용자가 동시에 예약하려고 할 때

## Write Skew

- 서로 다른 자원에 논리적 제약을 가지고 있을 때 발생하는 동시성 문제
- e.g. 같은 날짜에 연차를 사용이 불가능한 조건에서 두명의 사용자가 연차를 사용하려고 할 때
- 연차를 사용한 직원이 있는지를 찾을 때 발생
- Serializable, X-Lock, Table 스키마 레벨에서 해결할 수 있다.
