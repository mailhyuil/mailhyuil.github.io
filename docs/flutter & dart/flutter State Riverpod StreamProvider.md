# flutter State Riverpod StreamProvider

- Stream 기반 상태 관리
- 실시간으로 값이 계속 바뀌는 데이터에 적합
- socket, firestore 같은 실시간 데이터에 적합

```dart
final someStreamProvider = StreamProvider<List<UserState>>((ref) {
  return Stream.periodic(Duration(seconds: 1)).map((event) => [UserState(name: 'hyuil', age: 20)]);
});
```
