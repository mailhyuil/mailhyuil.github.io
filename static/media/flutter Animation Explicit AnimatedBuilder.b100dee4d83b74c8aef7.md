# flutter Animation Explicit AnimatedBuilder

> 전체 UI를 계속 build 하지 않고 AnimatedBuilder로 감싼 부분만 업데이트 된다.

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
  );

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  void _play() {
    setState(() {
      _animationController.forward();
    });
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
            AnimatedBuilder(
              animation: _animationController,
              builder: (context, child) {
                return Opacity(
                  opacity: _animationController.value,
                  child: Container(
                    color: Colors.amber,
                    width: 400,
                    height: 400,
                  ),
                );
              },
            ),
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
