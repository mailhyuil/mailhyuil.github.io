# flutter State Riverpod ProviderContainer

- Provider를 저장, 관리하는 컨테이너 객체 기본으로 하나가 생성된다.
- Riverpod의 “독립 실행 환경”
- ref 없는 곳에서 provider 쓰라고 만든 비상용 컨테이너
- test code 작성 시에 provider를 갈아끼우는 용도로도 사용된다.

## 직접 생성하여 주입하기

- ProviderScope대신 UncontrolledProviderScope를 사용하여 주입
- 전역에서 provider를 사용할 수 있게된다.
- 이 방식은 riverpod의 철학을 벗어나는 방식으로 안전성, 테스트 용이성, 유지보수성 등을 해칠 수 있으니 사용하지 않는 것을 권장한다.

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
