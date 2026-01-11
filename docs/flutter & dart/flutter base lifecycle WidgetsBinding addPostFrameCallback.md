# flutter base lifecycle WidgetsBinding addPostFrameCallback

- View가 그려진 후 실행되는 콜백
- Angular의 AfterViewInit과 유사

```dart
class MyPageState extends State<MyPage> with WidgetsBindingObserver {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
        // code
    });
  }
}
```
