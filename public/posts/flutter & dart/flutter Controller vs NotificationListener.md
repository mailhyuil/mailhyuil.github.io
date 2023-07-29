# flutter Controller vs NotificationListener

## Controller

> Stateful 위젯내에서 사용
>
> > ChangeNotifier또는 ValueNotifier를 상속 함 // ValueNotifier는 하나의 값을 가지고 있는 ChangeNotifier
> >
> > > addListener에 콜백을 등록해서 사용

## NotificationListener

> 위젯 클래스를 상속한다. (즉 위젯이다.)
>
> > onNotification에 콜백을 등록 Notification 객체를 전달해서 사용 (metrics 데이터를 얻을 수 있다.)

```dart
import 'package:flutter/material.dart';

class AnimationScreen extends StatefulWidget {
  const AnimationScreen({super.key});

  @override
  _AnimationScreenState createState() => _AnimationScreenState();
}

class _AnimationScreenState extends State<AnimationScreen> {
  double spaceBetween = 10.0;
  final _duration = const Duration(milliseconds: 200);

  _onStartScroll(ScrollMetrics metrics) {
    // if you need to do something at the start
  }

  _onUpdateScroll(ScrollMetrics metrics) {
    // do your magic here to change the value
    if (spaceBetween == 30.0) return;
    spaceBetween = 30.0;
    setState(() {});
  }

  _onEndScroll(ScrollMetrics metrics) {
    // do your magic here to return the value to normal
    spaceBetween = 10.0;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return NotificationListener<ScrollNotification>(
      onNotification: (scrollNotification) {
        if (scrollNotification is ScrollStartNotification) {
          _onStartScroll(scrollNotification.metrics);
        } else if (scrollNotification is ScrollUpdateNotification) {
          _onUpdateScroll(scrollNotification.metrics);
        } else if (scrollNotification is ScrollEndNotification) {
          _onEndScroll(scrollNotification.metrics);
        }
        return true; // see docs
      },
      child: ListView(
        children: [
          Container(height: 100, width: 100, color: Colors.red),
          AnimatedContainer(duration: _duration, height: spaceBetween),
          Container(height: 100, width: 100, color: Colors.blue),
          AnimatedContainer(duration: _duration, height: spaceBetween),
          Container(height: 100, width: 100, color: Colors.red),
          AnimatedContainer(duration: _duration, height: spaceBetween),
          Container(height: 100, width: 100, color: Colors.blue),
          AnimatedContainer(duration: _duration, height: spaceBetween),
          Container(height: 100, width: 100, color: Colors.red),
          AnimatedContainer(duration: _duration, height: spaceBetween),
          Container(height: 100, width: 100, color: Colors.blue),
          AnimatedContainer(duration: _duration, height: spaceBetween),
          Container(height: 100, width: 100, color: Colors.red),
          AnimatedContainer(duration: _duration, height: spaceBetween),
          Container(height: 100, width: 100, color: Colors.blue),
          AnimatedContainer(duration: _duration, height: spaceBetween),
          Container(height: 100, width: 100, color: Colors.red),
          AnimatedContainer(duration: _duration, height: spaceBetween),
          Container(height: 100, width: 100, color: Colors.blue),
          AnimatedContainer(duration: _duration, height: spaceBetween),
        ],
      ),
    );
  }
}

```
