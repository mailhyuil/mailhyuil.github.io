# Domain & Entity & DAO & DTO & VO & MODEL

> 각 계층을 설계시에 그 계층에서 다룰 data format을 정의하는게 중요하다
>
> > 밑의 개념들은 전부 각 계층에서 사용할 data format을 정의하는 객체들이다.

## DTO

> 레이어 또는 프로세스와 프로세스 간 데이터 전달을 위한 객체
>
> > 이론적으로 모든 계층은 자신만의 data format을 가진 DTO를 사용하는게 관심사의 분리를 위해 좋다.
> >
> > 하지만 단순한 아키텍쳐에서는 DTO를 너무 나눠버리면 복잡도가 증가하기 때문에 환경에 따라 적절히 사용해야한다.
> >
> > > 데이터 '전달' 용도로만 사용하기 때문에 메서드로 getter/setter 만 갖는다.
> > >
> > > > frontend 단에서는 api로부터 받은 DTO를 viewmodel로서 사용한다.

## Domain

> 소프트웨어로 해결하고자하는 문제 영역

## Domain Model (Object)

> 도메인의 개념을 표현하는 객체
>
> > 로직을 포함한다.
> >
> > > 하나의 aggregate로 집합을 만들어서 관리한다.

## AggregateRoot

> 같은 도메인(Aggregate)에 속하는 Model(Entity)들 묶어주는 최상위 객체
>
> > AggregateRoot를 통해서 같은 Aggregate에 속한 모델들을 조작한다.
> >
> > > Entity의 일종이다.

## Entity (도메인의 개념을 표현하는 객체)

> 도메인의 상태와 행위를 가지는 객체
>
> > 비즈니스 로직을 포함한다.

## Entity (데이터베이스의 Row와 매핑되는 객체)

> Database의 Row와 매핑되어있는 객체 (e.g. prisma의 model)
>
> > 로직을 포함하지 않는다.
> >
> > > Repository 계층의 DTO로 사용된다.

## DAO

> === Repository

## VO

> 값 그 자체를 나태는 객체 e.g. Money, Address, URL ...
>
> > 로직을 포함한다.
> >
> > > 불변성 보장을 위해 생성자를 사용해 인스턴스로 만든다.
> > >
> > > > 모든 값이 같은 두개의 vo는 같은 객체로 취급한다.
