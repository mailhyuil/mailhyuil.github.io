## AsyncNotifierProvider

> 비동기로 데이터를 받아올 때 사용
>
> > state = AsyncValue.data(value) 로 데이터 변경 // state = value는 사용 불가

```dart
class User {
  name: String;
  age: int;
  User({required this.name, required this.age});
}

class SomeAsyncNotifier extends AsyncNotifier<List<User>> {
  List<User> _list = [];

  @override
  FutureOr<List<User>> build() async {
    await Future.delayed(Duration(seconds: 3));
    return _list;
  }

  void addUser(User user) {
    state = AsyncValue.loading(); // 값을 받아올 때까지 로딩 상태로 변경
    await Future.delayed(Duration(seconds: 3));
    _list = [..._list, user];
    state = AsyncValue.data(_list);
  }
}

// Provider 생성
final someAsyncNotifierProvider = AsyncNotifierProvider<SomeAsyncNotifier, List<User>>(() => SomeAsyncNotifier());
```

## ConsumerStatefulWidget

> StatefulWidget에서는 WidgetRef ref 없이 바로 접근 가능
>
> > ref.watch().when 을 사용해서 listen

```dart
class SomeScreen extends ConsumerStatefulWidget {
  @override
  SomeScreenState createState() => SomeScreenState();
}

class SomeScreenState extends ConsumerState<SomeScreen> {
  @override
  Widget build(BuildContext context) {
    return ref.watch(someNotifierProvider).when(
      loading: () => CircularProgressIndicator(),
      error: (error, stackTrace) => Text('Could not load data: $error'),
      data: (data) {
        return ListView.builder(
          itemCount: data.length,
          itemBuilder: (context, index) {
            return TextButton(
              child: Text(data[index].name),
              onPressed: () {
                ref.read(someNotifierProvider.notifier).addUser('hyuil');
              },
            );
          },
        );
      },
    );
  }
}
```
