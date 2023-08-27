# flutter Animation Explicit CurvedAnimation

> animationController를 curvedAnimation으로 감싸서 새로운 애니메이션 값을 만들어낸다.

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
    reverseDuration: const Duration(seconds: 5),
    vsync: this,
  );

  late final CurvedAnimation _curved = CurvedAnimation(
    parent: _animationController,
    curve: Curves.elasticOut,
    reverseCurve: Curves.easeOut,
  );

  late final Animation<Decoration> _decoration = DecorationTween(
    begin: BoxDecoration(
      color: Colors.red,
      borderRadius: BorderRadius.circular(100),
    ),
    end: BoxDecoration(
      color: Colors.amber,
      borderRadius: BorderRadius.circular(50),
    ),
  ).animate(_curved);

  late final Animation<double> _rotation = Tween(
    begin: 0.0,
    end: 1.0,
  ).animate(_curved);

  late final Animation<double> _scale = Tween(
    begin: 1.0,
    end: 1.5,
  ).animate(_curved);

  late final Animation<Offset> _offset = Tween(
    begin: Offset.zero,
    end: const Offset(0, -0.5),
  ).animate(_curved);

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
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SlideTransition(
              position: _offset,
              child: ScaleTransition(
                scale: _scale,
                child: RotationTransition(
                  turns: _rotation,
                  child: DecoratedBoxTransition(
                      decoration: _decoration,
                      child: const SizedBox(
                        height: 300,
                        width: 300,
                      )),
                ),
              ),
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
