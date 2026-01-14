# flutter State Riverpod ProviderScope

- 하나의 ProviderScope내에서 provider는 싱글톤으로 동작한다.
- 만약 다른 인스턴스의 provider를 사용해야한다면 .family를 사용하여 생성해야한다. (권장)
- 다른 방법으로는 내부에서 ProviderScope를 생성하여 사용할 수 있다.

```dart
class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ProviderScope(child: child);
  }
}
```
