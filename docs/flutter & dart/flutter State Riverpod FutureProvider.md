# flutter State Riverpod FutureProvider

- 비동기로 데이터를 받아올 때 사용
- `state = AsyncValue.data(value)` 로 데이터 변경
- `state = value`는 사용 불가

```dart
// Future를 반환하는 함수를 전달
final someFutureProvider = FutureProvider<List<UserState>>((ref) async {
  await Future.delayed(Duration(seconds: 3));
  return [UserState(name: 'hyuil', age: 20)];
});
// 인자를 전달할 수 있음
final someFutureProvider = FutureProvider<List<UserState>>((ref, String name) async {
  await Future.delayed(Duration(seconds: 3));
  return [UserState(name: name, age: 20)];
});
```

## ConsumerWidget에서 사용

```dart
class SomeScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Text(ref.watch(someFutureProvider).name);
  }
}
```
