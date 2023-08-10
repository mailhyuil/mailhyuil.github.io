# flutter of()

> of() 에 대한 해석
>
> > "현재 주어진 context에서 위로 올라가면서 가장 가까운 Widget를 찾아서 반환하라"
> >
> > > closest() 와 비슷한 개념
> > >
> > > > Inherited Widget으로 구현된 위젯들은 of() 메소드를 가지고 있다.

```dart
color: Theme.of(context).textTheme.titleLarge.color,
Scaffold.of(context),
Text.of(context),
```
