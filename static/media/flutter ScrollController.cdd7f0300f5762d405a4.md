# flutter ScrollController

> scrollController.addListener()를 사용하여 스크롤 이벤트를 감지할 수 있다.

```dart
import 'package:flutter/material.dart';

class AnimationScreen extends StatefulWidget {
  const AnimationScreen({Key? key}) : super(key: key);

  @override
  _AnimationScreenState createState() => _AnimationScreenState();
}

class _AnimationScreenState extends State<AnimationScreen> {
  final ScrollController _scrollController = ScrollController();
  double _scrollOffset = 0.0;

  @override
  void initState() {
    super.initState();
    _scrollController.addListener(() {
      setState(() {
        _scrollOffset = _scrollController.offset;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView(
        controller: _scrollController,
        children: [
          _buildAnimatedContainer(0, Colors.red),
          _buildAnimatedContainer(1, Colors.blue),
          _buildAnimatedContainer(2, Colors.red),
          _buildAnimatedContainer(3, Colors.blue),
          _buildAnimatedContainer(4, Colors.red),
          _buildAnimatedContainer(5, Colors.blue),
          _buildAnimatedContainer(6, Colors.red),
          _buildAnimatedContainer(7, Colors.blue),
          _buildAnimatedContainer(8, Colors.red),
          _buildAnimatedContainer(9, Colors.blue),
        ],
      ),
    );
  }

  Widget _buildAnimatedContainer(int index, Color color) {
    double offset = 100.0 * index;
    double direction = _scrollOffset - offset;
    double opacity = 1.0 - (direction.abs() / 100.0);
    opacity = opacity.clamp(
        0.0, 1.0); // Clamp opacity to ensure it stays between 0.0 and 1.0

    return Transform(
      transform: Matrix4.translationValues(-direction, 0, 0),
      child: Opacity(
        opacity: opacity,
        child: Container(height: 100, width: 100, color: color),
      ),
    );
  }
}
```
