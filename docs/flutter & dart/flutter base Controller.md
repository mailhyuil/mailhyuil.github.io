# flutter base Controller

- 데이터와 UI 간의 상호작용을 제어하는 역할을 하는 클래스들
- UI 위젯(TextField, Animation)이 있고 그 값, 상태를 가져오고나 변경할 때!!!
- UI 위젯에 등록하는 과정이 있음 (e.g. TextField(controller: \_controller), Tween(begin: 0, end: 1).animate(\_controller))
- 무언가를 동적으로 제어하고 싶다면 controller가 있는지 확인해보자

## 종류

```txt
TextEditingController
AnimationController
ScrollController
PageController
TabController
StreamController
```

## usage

```dart
// controller 선언
TextEditingController _controller;

// controller 초기화
@override
void initState() {
    super.initState();
    _controller = TextEditingController();
}

// 위젯이 dispose 될 때 controller도 dispose 해줘야 함
@override
void dispose() {
    _controller.dispose();
    super.dispose();
}

// controller 달기
TextField(
    controller: _controller,
    onChanged: (text) {
        setState(() {
            _text = text;
        });
    },
),

// text 필드로 확인해서 로직 처리
if(_controller.text.isNotEmpty) {
    // do something
    showSnackBar(context, 'text is not empty');
}
```
