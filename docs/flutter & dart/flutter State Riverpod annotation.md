# flutter State Riverpod annotation

## install

```sh
dart pub add riverpod_annotation
dart pub add riverpod_generator --dev

flutter pub run build_runner watch
```

## 사용

```dart
part 'file_name.g.dart';

@riverpod
String hello(HelloRef ref) {
  return 'hello riverpod';
}
// final helloProvider = Provider<String>(...);
@riverpod
Future<int> number(NumberRef ref) async {
  await Future.delayed(const Duration(seconds: 1));
  return 42;
}
// final numberProvider = FutureProvider<int>(...);
@riverpod
Stream<User?> authState(AuthStateRef ref) {
  return FirebaseAuth.instance.authStateChanges();
}
// final authStateProvider = StreamProvider<User?>(...);
@riverpod
Future<User> user(UserRef ref, String uid) async {
  return fetchUser(uid);
}
// final userProvider = FutureProvider<User>.family<User, String>(...);
@Riverpod(keepAlive: true)
Future<String> cached(CachedRef ref) async {
  return 'keep';
}
// 기본이 autoDispose이므로 keepAlive: true 옵션 추가하여 non-autoDispose로 변경
// final cachedProvider = FutureProvider<String><String>(...);
```

## Notifier / AsyncNotifier

```dart
// Notifier
@riverpod
class Counter extends _$Counter {
  @override
  int build() => 0;

  void increment() {
    state++;
  }
}

// AsyncNotifier
@riverpod
class UserController extends _$UserController {
  @override
  Future<User?> build() async {
    final auth = ref.watch(authStateProvider).value;
    if (auth == null) return null;

    return fetchUser(auth.uid);
  }

  Future<void> refresh() async {
    state = const AsyncLoading();
    state = await AsyncValue.guard(() => fetchUser(...));
  }
}
```
