# nest provider scope

## Scope.DEFAULT

> 기본 값
>
> > 싱그톤 프로바이더가 모듈이 로드될 때 생성된다.

## Scope.REQUEST

> 요청마다 새로운 인스턴스가 생성된다.
>
> > 작업이 끝나면 가비지 컬렉터에 의해 제거된다.
> >
> > > durable: true로 설정하면 가비지 컬렉터에 의해 제거되지 않는다.
> > >
> > > > multi tenancy를 구현할 때 유용하다.

## Scope.TRANSIENT

> inject된 곳(consumer)마다 새로운 인스턴스가 생성된다.
>
> > 무조건 새로운 인스턴스 생성이 보장되어야 할 때 사용한다. ex) logger
> >
> > > Logger 클래스는 Transient Scope로 구현되어있다. 따라서 각 service에서 config를 다르게 지정할 수 있다.
