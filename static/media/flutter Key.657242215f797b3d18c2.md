# flutter key

> 위젯 트리에서 위젯이 움직일 때마다 현 상태를 보존하는 역할
>
> > Stateless하면 필요없지만 Stateful하면 필요하다.
> >
> > > UniqueKey() : 위젯이 생성될 때마다 새로운 키를 생성한다.

## GlobalKey

> GlobalKey<T extends State<StatefulWidget>> 클래스를 상속받는다.
>
> > 전체 앱을 통틀어 유일한 키
> >
> > > BuildContext, Element, State 인스턴스를 찾을 때 사용

## UniqueKey()

> : 마땅히 키로 사용할 값이 없지만 확실하게 위젯을 구별할 때 사용하는 키

## ValueKey

## ObjectKey

## PageStorageKey
