# Liftcycle

## Statueful

### createState()

### initState()

> before build

```dart
@override
void initState() {
  super.initState();
  _controller = TextEditingController();
}
```

### build()

### dispose()

> api나 이벤트 등을 사용할 때 dispose()를 사용해 메모리 누수를 방지한다.

```dart
@override
void dispose() {
  _controller.dispose();
  super.dispose();
}
```

### didChangeDependencies()

### didUpdateWidget()

## Stateless

### build()

### createElement()

### debugFillProperties()
