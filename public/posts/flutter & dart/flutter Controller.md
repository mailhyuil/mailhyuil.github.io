# flutter Controller

> 데이터와 UI 간의 상호작용을 제어하는 역할을 하는 클래스들
>
> > 주로 사용자 입력 및 비즈니스 로직과 관련된 동작을 처리하며, UI 상태의 변경 및 업데이트를 조정

## 종류

```
TextEditingController
AnimationController
ScrollController
PageController
TabController

StatefulWidget
StatelessWidget
ValueNotifier
Animation
```

## 사용법

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
