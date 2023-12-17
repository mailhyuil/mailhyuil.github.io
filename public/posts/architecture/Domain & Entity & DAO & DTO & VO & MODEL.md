# Domain & Entity & DTO & VO

## Domain

> 소프트웨어로 해결하고자하는 문제 영역

## Entity

> Database와 연동되는 객체
>
> > 실제 DB의 테이블과 매칭될 클래스

## DAO

> === Repository

## DTO

> 레이어 간 데이터 전달을 위한 객체
>
> > controller <-> service <-> repository
> >
> > > 데이터 '전달' 용도로만 사용하기 때문에 메서드로 getter/setter 만 갖는다.

## VO === MODEL

> 값 그 자체를 나태는 객체
>
> > 로직을 포함한다.
> >
> > > 불변성 보장을 위해 생성자를 사용해 인스턴스로 만든다.
> > >
> > > > 모든 값이 같은 두개의 vo는 같은 객체로 취급한다.
> > > >
> > > > > 모델이라고도 한다.
