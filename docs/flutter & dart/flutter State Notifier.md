# flutter State Notifier

- Listenable을 상속받은 클래스
- ScrollController, AnimationController, StreamController 도 Notifier의 일종이다.
- Angular의 BehaviorSubject와 같다

## ValueNotifier

```dart
final counter = ValueNotifier<int>(0);

counter.addListener(() {
  print(counter.value);
});

counter.value++; // .value를 수정하면 자동으로 notifyListeners()가 실행됨

counter.dispose();
```

## ChangeNotifier

```dart
class UserProfile extends ChangeNotifier {
  String name = "";
  int age = 0;

  void updateName(String newName) {
    name = newName;
    notifyListeners(); // 직접 호출해야 화면이 바뀜
  }
}
```
