# db base ACID

```sh
Atomicity # 원자성
Consistency # 정합성
Isolation # 독립성
Durability # 지속성
```

## 원자성 (Atomicity)

> 전부 다 성공하거나 전부 다 실패해야 한다.
>
> > Transaction 내의 작업은 하나라도 실패하면 전부 실패한다.

## 정합성/일관성 (Consistency)

> 여러 테이블, 서버, 시스템 간의 데이터의 일관성을 유지해야 한다.

## 독립성 (Isolation)

> 트랜잭션은 다른 트랜잭션의 연산에 영향을 받지 않는다.
>
> > 트랜잭션 중에 다른 트랜잭션의 변경 사항을 볼 수 있는게 좋을까??

## 지속성 (Durability)

> commit된 트랜잭션은 영구적으로 반영되어야 한다.
>
> > commit된 동시에 crush가 발생하더라도 데이터는 유지되어야 한다.

## 무결성 (Integrity)

> 무결성 = 데이터베이스에서 저장된 데이터가 정확하고 일관된 상태를 유지하는 것을 의미
>
> > 관계형 데이터베이스의 가장 큰 목표는 "데이터 무결성을 높이는 것"

```sh
Entity Integrity (개체 무결성)
Referential Integrity (참조 무결성)
Domain Integrity (도메인 무결성)
Transaction Integrity (트랜잭션 무결성)
```
