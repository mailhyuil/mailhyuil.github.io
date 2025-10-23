# flutter DI (get_it)

> get_it : flutter에서 의존성 주입을 위한 패키지

## install

```sh
flutter pub add get_it
```

## usage

> 최상위 레벨에 get_it을 import하고, get_it을 사용하여 의존성 주입
>
> > 최상위 레벨 : main.dart

```dart
final locator = GetIt.instance;

void initLocator() {
  locator.registerSingleton<HttpService>(HttpService());
}

void main() {
  initLocator();
  runApp(const App());
}
```

```dart
final HttpService _httpService = locator<HttpService>();
```
