# flutter State Inherited Widget

> 최상위 위젯에 있는 데이터를 최하위 위젯이 사용하고 싶다면 Props Drilling을 해야한다.
>
> > 최상위 위젯을 InheritedWidget으로 상속
> >
> > > of() 메소드를 정의해서 쉽게 사용 가능
> > >
> > > > Stateless, Stateful 위젯 대신 InheritedWidget을 사용

## 부모

```dart
class ParentWidget extends InheritedWidget {

    const ParentWidget({
        super.key,
        required super.child,
    });

    final parentData = 'parent data';

    // of() 메소드 정의
    static ParentWidget of(BuildContext context) {
        return context.dependOnInheritedWidgetOfExactType<ParentWidget>()!;
    }

    @override // should be rebuilt or not
    bool updateShouldNotify(ParentWidget oldWidget){
        return true;
    };
}
```

## 자식

```dart
ParentWidget(
    child: ChildWidget(),
)
```

```dart
final parent = context.dependOnInheritedWidgetOfExactType<ParentWidget>()!;
final data = parent?.parentData;

// of() 메소드 사용
final data = ParentWidget.of(context).parentData;
```
