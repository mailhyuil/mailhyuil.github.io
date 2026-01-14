# dart error handling

- isolate/zone 에러는 try-catch로 못 잡음 (runZonedGuarded 사용)

## try catch finally

```dart
try {
  // 예외가 발생할 수 있는 코드
} catch (e, stackTrace) {
  // 예외 처리 로직
} finally {
  // 예외 발생 여부와 상관없이 실행되는 코드
}
```

## 특정 타입의 에러만 처리

```dart
try {
  parse();
} on FormatException catch (e) {
  ...
} on SocketException {
  ...
} catch (e) {
  ...
}

```

## rethrow

```dart
try {
  doSomething();
} catch (e, stack) {
  log(e, stack);
  rethrow;
}
```

## custom exception

```dart
class AuthException implements Exception {
  final String message;
  AuthException(this.message);

  @override
  String toString() => 'AuthException: $message';
}
```
