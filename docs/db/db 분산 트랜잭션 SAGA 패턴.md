# db 분산 트랜잭션 SAGA 패턴

> 단일 DB가 아닌 여러 DB를 사용하는 경우 분산 트랜잭션 처리하기 위한 패턴
>
> > 트랜잭션 관리 주체가 DBMS가 아닌 애플리케이션에 있다.
> >
> > > 각 애플리케이션 하위에 존재하는 DB는 로컬 트랜잭션 처리만 담당

## Choreography-based saga pattern

> message broker를 통해 각 서비스가 서로 통신하며 트랜잭션을 처리하는 패턴

## Orchestration-based saga pattern

> 하나의 saga orchestrator(server)가 각 서비스에게 트랜잭션 처리를 지시하는 패턴

## 보상 트랜잭션

> commit 한 데이터나 이미 반영한 데이터를 보정하는 트랜잭션
>
> > 분산 환경에서 rollback을 구현하기 위한 것
> >
> > > http 방식 (동기)과 message broker 방식 (비동기)
