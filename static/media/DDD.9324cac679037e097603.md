# DDD (Domain Driven Design)

## Domain / Subdomain

> Domain:
> ex) 쇼핑몰
>
> > Subdomain: 핵심 도메인을 성공적으로 해결하기 위해 필요한 도메인
> > ex) 주문, 결제, 배송

## Bounded Context

> 도메인의 경계를 일컫는다.

## 정책/규정

> 정책은 이벤트 뒤에 따라오는 비즈니스 로직을 의미한다.
> 어딘가에 존재하는 커맨드를 동작시킨다.
>
> > ex) 구매가 완료되거나 구매가 취소되면, 재고를 증가시킨다.
> >
> > > [도메인 이벤트]할 때는 항상 [커맨드]한다.

## Aggregates

> transactional boundary를 가지는 객체들의 집합
>
> > post, comment, like 를 하나의 aggregate로 묶을 수 있다.
> >
> > > post는 aggregate root가 되고, comment, like를 조작하기 위해서는 post를 통해서만 가능하다.

## Ubiquitous Language

## Context Map
