# Liftcycle

## initState()

> before build

```dart
@override
void initState() {
  super.initState();
  print('initState()');
}
```

## didChangeDependencies()

## build()

## didUpdateWidget()

## deactivate()

## reassemble()

## didChangeAppLifecycleState()

## setState()

## dispose()

> api나 이벤트 등을 사용할 때 dispose()를 사용해 메모리 누수를 방지한다.

```dart
@override
void dispose() {
  super.dispose();
  print('dispose()');
}
```
