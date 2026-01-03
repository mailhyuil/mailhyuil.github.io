# flutter base lifecycle

## App

1. main()
2. runApp()
3. MaterialApp()
4. Scaffold()
5. AppBar()
6. Body()
7. Text()
8. Button()
9. Icon()

## Statueful Widget

1. createState()

2. initState()

before build

```dart
@override
void initState() {
  super.initState();
  _controller = TextEditingController();
}
```

1. build()

2. dispose()

api나 이벤트 등을 사용할 때 dispose()를 사용해 메모리 누수를 방지한다.

```dart
@override
void dispose() {
  _controller.dispose();
  super.dispose();
}
```

1. didChangeDependencies()

2. didUpdateWidget()

## Stateless Widget

1. build()
2. createElement()
3. debugFillProperties()
