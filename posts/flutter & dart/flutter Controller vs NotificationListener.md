# flutter Controller vs NotificationListener

## Controller

> Stateful 위젯내에서 사용
>
> > ChangeNotifier또는 ValueNotifier를 상속 함 // ValueNotifier는 하나의 값을 가지고 있는 ChangeNotifier
> >
> > > Controller에 listener를 등록하는 방법 : 해당 이벤트가 발생했을 때 콜백 수행하기 위해 사용

## NotificationListener

> 위젯 클래스를 상속한다. (즉 위젯이다.)
>
> > NotificationListener 에 notification을 등록하는 방법 : info(Metrics)를 얻기 위해 사용

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
