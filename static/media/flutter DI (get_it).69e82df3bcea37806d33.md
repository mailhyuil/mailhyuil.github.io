# flutter DI (get_it)

> get_it : flutter에서 의존성 주입을 위한 패키지

## install

```sh
flutter pub add get_it
```

## 사용법

> 최상위 레벨에 get_it을 import하고, get_it을 사용하여 의존성 주입
>
> > 최상위 레벨 : main.dart

```dart
final getIt = GetIt.instance;

void setupLocator() {
  getIt.registerSingleton<HttpService>(HttpService());
}

void main() {
  setupLocator();
  runApp(const App());
}
```

```dart
final HttpService _httpService = getIt<HttpService>();
```
