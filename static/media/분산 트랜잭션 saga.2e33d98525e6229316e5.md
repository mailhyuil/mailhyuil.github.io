# 분산 트랜잭션 saga pattern

> 트랜잭션 관리 주체가 DBMS가 아닌 애플리케이션에 있다.
>
> > 각 애플리케이션 하위에 존재하는 DB는 로컬 트랜잭션 처리만 담당

## Choreography-based saga pattern

## Orchestration-based saga pattern

## 보상 트랜잭션

> commit 한 데이터나 이미 반영한 데이터를 보정하는 트랜잭션
>
> > 분산 환경에서 rollback을 구현하기 위한 것
