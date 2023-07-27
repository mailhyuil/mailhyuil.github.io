# flutter Animation custom

```dart
import 'package:flutter/material.dart';

class AnimationScreen extends StatefulWidget {
  const AnimationScreen({Key? key}) : super(key: key);

  @override
  _AnimationScreenState createState() => _AnimationScreenState();
}

class _AnimationScreenState extends State<AnimationScreen> {
  var x = 0;

  void _startAnimation() {
    setState(() {
      x++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Animation')),
      body: Center(
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 500),
          width: 50 + x * 10,
          height: 50 + x * 10,
          decoration: const BoxDecoration(
            color: Colors.blue,
            shape: BoxShape.circle,
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _startAnimation,
        child: const Icon(Icons.play_arrow),
      ),
    );
  }
}
```

```dart
import 'package:flutter/material.dart';

class AnimationScreen extends StatefulWidget {
  const AnimationScreen({super.key});

  @override
  _AnimationScreenState createState() => _AnimationScreenState();
}

class _AnimationScreenState extends State<AnimationScreen>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  double _xPosition = 0;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    );

    // 애니메이션이 완료될 때마다 움직이는 x 좌표를 변경합니다.
    _controller.addListener(() {
      setState(() {
        _xPosition = _controller.value * 200; // 200은 이동할 x 범위입니다.
      });
    });

    // 애니메이션 반복 설정
    _controller.addStatusListener((status) {
      if (status == AnimationStatus.completed) {
        _controller.reverse(); // 애니메이션을 끝에서 시작으로 반복하려면 forward()를 사용합니다.
      } else if (status == AnimationStatus.dismissed) {
        _controller.forward(); // 애니메이션을 시작에서 끝으로 반복하려면 reverse()를 사용합니다.
      }
    });

    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Circle Animation'),
      ),
      body: Center(
        child: Stack(
          children: [
            Positioned(
              left: _xPosition,
              top: 100,
              child: Container(
                width: 100,
                height: 100,
                decoration: BoxDecoration(
                  color: Colors.blue,
                  borderRadius: BorderRadius.circular(50),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
```
