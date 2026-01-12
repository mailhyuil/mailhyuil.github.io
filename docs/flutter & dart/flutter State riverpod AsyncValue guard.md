# flutter State riverpod AsyncValue guard

```dart
try {
  return AsyncData(result);
} catch (e, st) {
  return AsyncError(e, st);
}
// 이 코드를 단순하게 쓸 수 있게 해준다.
AsyncValue<T> value = AsyncValue.guard(() async {
  return result;
});
```
