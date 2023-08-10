# flutter Props

> 생성자 매개변수로 전달

## stateless Props

```dart
final String title;
const ChildWidget({super.key, required this.title});

Text(title)
```

## Stateful Props

```dart
final String title;
const ChildWidget({super.key, required this.title});

Text(widget.title)
```
