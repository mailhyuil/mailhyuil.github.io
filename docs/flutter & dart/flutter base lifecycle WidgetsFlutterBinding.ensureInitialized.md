# flutter base lifecycle WidgetsFlutterBinding.ensureInitialized

- Flutter 앱에서 runApp()을 호출하기 전에 Flutter 엔진과 위젯 바인딩을 초기화하는 메서드
- 일반적인 Flutter 앱에서는 runApp()이 자동으로 바인딩을 초기화하기 때문에 이 메서드를 직접 호출할 필요가 없다.
- 하지만 runApp() 전에 Flutter의 네이티브 기능을 사용해야 할 때는 반드시 호출해야한다.

## runApp()

```dart
void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Flutter의 네이티브 기능들을 사용
  await Firebase.initializeApp();
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
  ]);

  runApp(MyApp());
}
```

## runZonedGuarded 사용 시

```dart
runZonedGuarded(
  () async {
    WidgetsFlutterBinding.ensureInitialized(); // Zone 안에서 호출

    await _initServices();

    runApp(MyApp());
  },
  (error, stack) {
    // 초기화 중 발생하는 에러도 여기서 캐치됨
    debugPrint('🔥 Uncaught Zone error: $error');
  },
);
```
