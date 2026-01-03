# flutter State Riverpod NotifierProvider

- build 메소드에서 초기화
- state로 접근 (e.g. state.name)

```dart
class UserState {
  name: String;
  age: int;
  UserState({required this.name, required this.age});
}

class SomeNotifier extends Notifier<UserState> {

  @override
  SomeNotifier build(){
    return UserState(
      name: 'hyuil',
      age: 2,
    );
  }

  void increaseAge(){
    state = UserState(
      name: state.name,
      age: state.age + 1,
    );
  }

  void setName(String value){
    // 값을 변경시에는 새로운 참조값 할당해주기
    state = UserState(
      name: value,
      age: state.age,
    );
  }
}

// Provider 생성
final someNotifierProvider = NotifierProvider<SomeNotifier, UserState>(() => SomeNotifier());
```

## ConsumerWidget

> WidgetRef ref로 접근

```dart
class SomeScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return TextButton(
      child: Text(ref.watch(someNotifierProvider).name),
      onPressed: () {
        // 메소드에 접근 시에는 someNotifierProvider.notifier
        ref.read(someNotifierProvider.notifier).setName('hyuil');
      },
    );
  }
}
```

## ConsumerStatefulWidget

- WidgetRef ref 없이 바로 접근 가능
- StatefulWidget에서는 context에 바로 접근 가능한 것과 마찬가지다.

```dart
class SomeScreen extends ConsumerStatefulWidget {
  @override
  SomeScreenState createState() => SomeScreenState();
}

class SomeScreenState extends ConsumerState<SomeScreen> {
  @override
  Widget build(BuildContext context) {
    return TextButton(
      child: Text(ref.watch(someNotifierProvider).name),
      onPressed: () {
        // 메소드에 접근 시에는 someNotifierProvider.notifier
        ref.read(someNotifierProvider.notifier).setName('hyuil');
      },
    );
  }
}
```
