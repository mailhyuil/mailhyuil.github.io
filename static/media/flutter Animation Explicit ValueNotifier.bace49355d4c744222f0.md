# flutter Animation Explicit ValueNotifier

> 값을 setState하는 대신 변화를 알려줌
>
> > setState를 사용하면 전체 UI가 다시 빌드되는 걸 방지하기 위한 최적화 방법
> >
> > > ValueListenableBuilder를 사용하면 해당 위젯만 다시 빌드됨

```dart
import 'package:flutter/material.dart';

class ExplicitAnimationScreen extends StatefulWidget {
  const ExplicitAnimationScreen({Key? key}) : super(key: key);

  @override
  _ExplicitAnimationScreenState createState() =>
      _ExplicitAnimationScreenState();
}

class _ExplicitAnimationScreenState extends State<ExplicitAnimationScreen>
    with SingleTickerProviderStateMixin {
  late final AnimationController _controller = AnimationController(
    vsync: this,
    duration: const Duration(seconds: 1),
  )..addListener(() {
      _range.value = _controller.value;
    });

  void _play() {
    _controller.forward();
  }

  void _pause() {
    _controller.stop();
  }

  void _rewind() {
    _controller.reverse();
  }

  late final Animation<double> _scale = Tween(
    begin: 1.0,
    end: 5.0,
  ).animate(_curve);
  late final CurvedAnimation _curve =
      CurvedAnimation(parent: _controller, curve: Curves.elasticOut);
  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  final ValueNotifier<double> _range = ValueNotifier(0.0);

  void _onChanged(double value) {
    _range.value = 0;
    _controller.animateTo(value);
    // _controller.value = value;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Explicit Animations')),
      body: Column(
        children: [
          ScaleTransition(
            scale: _scale,
            child: const SizedBox(
              height: 150,
              child: Center(
                child: Text('Hello'),
              ),
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              ElevatedButton(
                onPressed: _play,
                child: const Text('Go!'),
              ),
              ElevatedButton(
                onPressed: _rewind,
                child: const Text('Back!'),
              ),
            ],
          ),
          const SizedBox(
            height: 50,
          ),
          ValueListenableBuilder(
            valueListenable: _range,
            builder: (context, value, child) {
              return Slider(
                value: value,
                onChanged: _onChanged,
                min: 0,
                max: 1,
              );
            },
          )
        ],
      ),
    );
  }
}
```
