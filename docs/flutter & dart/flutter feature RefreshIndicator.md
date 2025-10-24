# flutter feature RefreshIndicator

> 전체 위젯을 RefreshIndicator로 감싸서 사용

```dart
RefreshIndicator(
  onRefresh: () async {
    // refresh logic
  },
  child: ListView(
    children: [
      // ...
    ],
  ),
)
```
