# flutter error

## try catch

```dart
try {
  // 예외가 발생할 수 있는 코드
} catch (e, stackTrace) {
  // 예외 처리 로직
}
```

## Future

```dart
future.then((result) {
  // 비동기 작업 완료 후 로직
}).catchError((e) {
  // 오류 처리 로직
});
```

## ErrorWidgetBuilder

```dart
ErrorWidgetBuilder builder = (FlutterErrorDetails details) {
  return Container(
    child: Text('오류가 발생했습니다.'),
  );
};

ErrorWidget.builder = builder;
```

## zone 기반 오류

```dart
runZonedGuarded(() {
  runApp(MyApp());
}, (error, stackTrace) {
  // 오류 처리 로직
});
```
