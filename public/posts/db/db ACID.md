# db ACID

```sh
Atomicity # 원자성
Consistency # 정합성
Isolation # 독립성
Durability # 지속성
```

## 원자성 (Atomicity)

> 전부 다 성공하거나 전부 다 실패해야 한다.

## 정합성 (Consistency)

## 독립성 (Isolation)

> 트랜잭션은 다른 트랜잭션의 연산에 영향을 받지 않는다.
>
> > 트랜잭션 중에 다른 트랜잭션의 변경 사항을 볼 수 있는게 좋을까 ??

## 지속성 (Durability)

## 무결성 (Integrity)

```sh
*Integrity # 무결성 /// 데이터베이스에서 저장된 데이터가 정확하고 일관된 상태를 유지하는 것을 의미
           # 관계형 데이터베이스의 가장 큰 목표는 "데이터 무결성을 높이는 것"

Entity Integrity (개체 무결성)
Referential Integrity (참조 무결성)
Domain Integrity (도메인 무결성)
Transaction Integrity (트랜잭션 무결성)
```
