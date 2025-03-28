# flutter Animation Explicit Animation

> animationController의 값을 매핑하여 새로운 애니메이션 값을 만들어낸다.
>
> > Tween

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
  // Tween Animation
  late final Animation<Color?> _color = ColorTween(
    begin: Colors.amber,
    end: Colors.red,
  ).animate(_animationController);

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
              animation: _color,
              builder: (context, child) {
                return Container(
                  color: _color.value,
                  width: 400,
                  height: 400,
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
