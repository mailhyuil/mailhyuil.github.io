# flutter State of()

> Inherited Widget으로 구현된 메소드
>
> > 특정 Inherited Widget이 가진 데이터를 가져올 수 있다.

## 구현

```dart
static ParentWidget of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<ParentWidget>()!;
}
```

## usage

```dart
Theme.of(context).textTheme.titleLarge.color,
Scaffold.of(context),
MediaQuery.of(context),
```
