# flutter base WidgetTree, ElementTree, RenderTree

> 퍼모먼스 최적화를 위해 알아야 할 것들
>
> > 위젯 트리만으로 구성이 되어있다면 하나의 위젯이 바뀌면 그 자손의 위젯을 모두 다시 그려야 한다.

## Widget Tree

> 불변
>
> > 생성 및 파기 비용이 작다
> >
> > > setState() 가 호출될 때 변경된다.
> > >
> > > > 위젯의 Type이 같은지 비교해서 업데이트

## Element Tree

> 가변
>
> > 위젯 트리의 상태를 관리
> >
> > > RenderTree의 라이프 사이클을 관리
> > >
> > > > 위젯의 Key가 다른지 비교해서 업데이트
> > > >
> > > > > StatelessWidget은 하나의 StatelessElement를 가진다.
> > > > >
> > > > > > StatefulElement는 Stateful Element와 State 오브젝트(createState()로 생성된)의 인스턴스를 가진다.

## Render Tree

> 가변
>
> > 렌더링, 페인팅 역할
> >
> > > flutter가 실제로 참조하는 것은 RenderObject Tree이다
