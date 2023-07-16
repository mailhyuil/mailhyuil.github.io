# flutter key

> 위젯 트리에서 위젯이 움직일 때마다 현 상태를 보존하는 역할
>
> > Stateless하면 필요없지만 Stateful하면 필요하다.
> >
> > > UniqueKey() : 위젯이 생성될 때마다 새로운 키를 생성한다.
> > >
> > > > GlobalKey는 위젯의 상태를 유지하고 업데이트하는 데 사용되는 반면, UniqueKey는 위젯을 고유하게 식별하는 데 사용됩니다.

## super.key

> super.key는 상위 클래스의 생성자를 호출하여 해당 위젯에 부여된 키를 그대로 사용하는 것을 의미합니다.
>
> > 이는 위젯 트리에서의 위치나 키의 유지를 위해 부모 클래스의 키를 재사용하고자 할 때 유용합니다.

```dart
MyCustomWidget({Key? key}) : super(key: key);
MyCustomWidget({super.key});
```

## GlobalKey

> GlobalKey<T extends State<StatefulWidget>> 클래스를 상속받는다.
>
> > 전체 앱을 통틀어 유일한 키
> >
> > > BuildContext, Element, State 인스턴스를 찾을 때 사용

## UniqueKey()

> 마땅히 키로 사용할 값이 없지만 확실하게 위젯을 구별할 때 사용하는 키
>
> > Unique key는 주로 리스트나 컬렉션의 아이템들을 구별하는 데 사용되는 것이며, 위젯 트리의 각 노드를 고유하게 식별하는 데에는 필요하지 않을 수 있습니다.

## ValueKey

## ObjectKey

## PageStorageKey
