# flutter State Riverpod select

- 상태의 일부만 구독
- 불필요한 rebuild 방지

```dart
final someProvider = Provider<String>((ref) {
  final uid = ref.watch(authProvider.select((state) => state.value?.uid));
  return ref.watch(someNotifierProvider);
});
```
