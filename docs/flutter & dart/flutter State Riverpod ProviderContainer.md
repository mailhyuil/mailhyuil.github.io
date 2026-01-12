# flutter State Riverpod ProviderContainer

- Riverpod의 “독립 실행 환경”
- ref 없는 곳에서 provider 쓰라고 만든 비상용 컨테이너
- test code 작성 시에 provider를 갈아끼우는 용도로도 사용된다.

## usage

```dart
late final ProviderContainer container;

void main() {
  container = ProviderContainer();
  runApp(
    UncontrolledProviderScope(
      container: container,
      child: MyApp(),
    ),
  );
}
```

## test

```dart
test('example', () {
  final container = ProviderContainer(
    overrides: [
      authProvider.overrideWithValue(MockAuth()),
    ],
  );

  expect(container.read(authProvider), isA<MockAuth>());
});
```
