# flutter Animation Explicit AnimationController

> Animation을 멈추거나 되돌아가거나 반복 등의 작업이 가능
>
> > 메소드를 통해 value값을 변경

## usage

> with SingleTickerProviderStateMixin 추가 // 페이지에 들어왔을 때 Ticker를 하나만 생성 하고 페이지를 벗어나면 Ticker를 제거
>
> > forward(), reverse(), stop() 메소드를 사용하면 \_animationController의 value가 변한다.
> >
> > > 하지만 UI 업데이트는 따로 해줘야한다!!! // ..addListener((){})를 사용하면 값이 변경될 때마다 콜백을 호출
> > >
> > > > 콜백으로 setState()를 호출하여 UI를 업데이트 // 이는 나쁜 방법이다 매 프레임마다 전체 UI를 업데이트(전체 위젯이 build가 다시 됨)하기 때문에 성능이 떨어진다.
> > > >
> > > > > 대신 AnimatedBuilder를 사용하라!!

```dart
import 'package:flutter/material.dart';
import 'package:flutter_my_test/widgets/custom_scaffold.dart';

class ExplicitAnimationScreen extends StatefulWidget {
  const ExplicitAnimationScreen({Key? key}) : super(key: key);

  @override
  _ExplicitAnimationScreenState createState() =>
      _ExplicitAnimationScreenState();
}

class _ExplicitAnimationScreenState extends State<ExplicitAnimationScreen>
    with SingleTickerProviderStateMixin {
  late final AnimationController _animationController = AnimationController(
    duration: const Duration(seconds: 1),
    vsync: this,
    lowerBound: 0.0,
    upperBound: 100.0,
  )..addListener(() {
      setState(() {});
    });

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  void _play() {
    _animationController.forward();
  }

  void _pause() {
    _animationController.stop();
  }

  void _rewind() {
    _animationController.reverse();
  }

  @override
  Widget build(BuildContext context) {
    return CustomScaffold(
      appBarTitle: 'Explicit Animation',
      body: Center(
        child: Column(
          children: [
            Text("${_animationController.value}"),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                ElevatedButton(
                  onPressed: _play,
                  child: const Text('Play'),
                ),
                ElevatedButton(
                  onPressed: _pause,
                  child: const Text('Pause'),
                ),
                ElevatedButton(
                  onPressed: _rewind,
                  child: const Text('Rewind'),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}

```
