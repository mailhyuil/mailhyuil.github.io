# flutter ValueNotifier

```dart
class MyController extends ValueNotifier<int> {
  MyController() : super(0);

  void increment(){
    value++;
    // value를 set할 경우에는 notifyListeners();를 자동으로 해준다.
  }
}

void main() {
  final _controller = MyController();
  
  print(_contoller.value); // 0
  _controller.increment();
  print(_controller.value); // 1
}
```