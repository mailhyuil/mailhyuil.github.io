# flutter State Riverpod read & watch & listen

- ref는 WidgetRef 혹은 ProviderRef 타입

## read

- provider의 값을 읽어옴
- provider의 값이 변해도 위젯 또는 outer_provider를 다시 그리지 않음
- provider.notifier의 경우 항상 read가 맞음

```dart
ref.read(provider);
```

## watch

- 위젯안에서 watch -> provider 값이 변하면 위젯은 build()를 다시 호출
- outer_provider내의 watch -> inner_provider의 값이 변하면 outer_provider는 기존 인스턴스 dispose → 새 인스턴스 create (교체)
- 위젯이나 outer_provider가 여전히 watch/listen 하고 있으면, provider는 garbage collected 되지 않는다.

```dart
ref.watch(provider);
```

## listen

- side effect 처리
- provider의 값이 변해도 위젯 또는 outer_provider를 다시 그리지 않음
- initState에서는 listenManual 사용
- 위젯이나 outer_provider가 여전히 watch/listen 하고 있으면, provider는 garbage collected 되지 않는다.

```dart
ref.listen(provider, (previous, next) {
  // side effect 처리
});
```
