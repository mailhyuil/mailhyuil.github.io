# db 식별자 관계 vs 비식별자 관계

## 식별자 관계 (Identifying Relationship)

> 부모 테이블의 PK 또는 Unique Key를 자식 테이블의 PK로 사용하는 관계
>
> > 많을 수록 SQL문이 복잡해짐

## 비식별자 관계 (Non-Identifying Relationship)

> 부모 테이블의 PK 또는 Unique Key를 자식 테이블의 FK로 사용하는 관계
>
> > 자식 테이블은 고유의 PK를 가짐
> >
> > > 많을 수록 성능이 떨어짐
