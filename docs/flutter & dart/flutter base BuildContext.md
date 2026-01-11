# flutter base BuildContext

- 위젯 트리에서 현재 위젯의 위치를 나타내는 객체
- BuildContext는 stateless 위젯이나 state 빌드 메서드에 의해서 리턴된 위젯의 부모가 된다.

## mounted

- 위젯이 화면에 붙어 있는지 확인한다.

```dart
if (mounted) {
  context.pop();
}
```

## ancestorWidgetOfExactType

- 특정 유형의 상위 위젯을 찾을 수 있다

```dart
final myWidget = context.ancestorWidgetOfExactType(MyWidget);
```
