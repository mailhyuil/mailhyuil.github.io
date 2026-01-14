# flutter error handling

```txt
┌─────────────────────────────┐
│ Dart Zone (비동기 로직)        │ ← runZonedGuarded
├─────────────────────────────┤
│ Flutter Framework 에러       │ ← FlutterError.onError
├─────────────────────────────┤
│ Platform / Isolate 에러      │ ← PlatformDispatcher.onError
└─────────────────────────────┘
```

## Sync/Async Error Handler

- `FlutterError.onError`로 동기 오류 처리
- `PlatformDispatcher.instance.onError`로 비동기 오류 처리
- `FlutterError.presentError`를 사용 시 error를 device logs로 dump하고 IDE를 사용하고 있다면 IDE Console로 override된다.

```dart

void main() {
  FlutterError.onError = (details) {
    FlutterError.dumpErrorToConsole(details);
  };

  PlatformDispatcher.instance.onError = (error, stack) {
    FlutterError.dumpErrorToConsole(
      FlutterErrorDetails(exception: error, stack: stack),
    );
    return true;
  };

  runZonedGuarded(
    () async {
      WidgetsFlutterBinding.ensureInitialized();

      await _initServices();

      runApp(
        ProviderScope(
          observers: [GlobalErrorHandler(), RiverpodDevToolsObserver()],
          child: const MyApp(),
        ),
      );
    },
    (Object error, StackTrace stack) {
      debugPrint('🔥 Uncaught Zone error: $error');
      debugPrint('🔥 STACK:\n$stack');
    },
  );
}
```

## Riverpod Error Handling

### GlobalErrorHandler

```dart
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final class GlobalErrorHandler extends ProviderObserver {
  GlobalErrorHandler() {
    debugPrint('GlobalErrorHandler 초기화');
  }

  @override
  void providerDidFail(
    ProviderObserverContext context,
    Object error,
    StackTrace stackTrace,
  ) {
    // 콘솔 출력
    FlutterError.dumpErrorToConsole(
      FlutterErrorDetails(exception: error, stack: stackTrace),
    );

    // Crashlytics / Sentry 등 리포팅 가능
  }
}
```

### observer 등록

```dart
void main() {
  runApp(
      ProviderScope(observers: [GlobalErrorHandler()], child: MyApp()),
    ); // riverpod scope 설정
}
```

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
