# firebase Crashlytics

- Firebase의 오류 추적 서비스
- Sentry와 유사한 서비스

## install

```sh
dart pub add firebase_crashlytics
```

## usage

```dart
void main() {
  FlutterError.onError = (details) {
    FlutterError.dumpErrorToConsole(details); // 항상 콘솔 출력

    // 프로덕션에서만 Firebase 전송
    if (kReleaseMode) {
      FirebaseCrashlytics.instance.recordFlutterError(details);
    }
  };

  PlatformDispatcher.instance.onError = (error, stack) {
    final details = FlutterErrorDetails(
      library: 'Flutter',
      context: ErrorDescription('Uncaught error'),
      exception: error,
      stack: stack,
    );
    FlutterError.dumpErrorToConsole(details);
    FlutterError.reportError(details);
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
      if (kReleaseMode) {
        FirebaseCrashlytics.instance.recordError(error, stack);
      }
    },
  );
}
```

## 테스트

```dart
// 테스트용 버튼
ElevatedButton(
  onPressed: () {
    FirebaseCrashlytics.instance.crash(); // 강제 크래시
  },
  child: Text('Test Crash'),
)
```
