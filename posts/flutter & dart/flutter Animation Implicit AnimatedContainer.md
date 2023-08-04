# flutter Animation Implicit AnimatedContainer

> 변경되는 모든 항목에 애니메이션을 추가 (transition-all)

```dart
import 'package:flutter/material.dart';

class ImplicitAnimationScreen extends StatefulWidget {
  const ImplicitAnimationScreen({Key? key}) : super(key: key);

  @override
  _ImplicitAnimationScreenState createState() =>
      _ImplicitAnimationScreenState();
}

class _ImplicitAnimationScreenState extends State<ImplicitAnimationScreen> {
  bool _visible = false;
  void _trigger() {
    setState(() {
      _visible = !_visible;
    });
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      appBar: AppBar(
        title: const Text('Implicit Animations'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            AnimatedContainer(
              duration: const Duration(seconds: 1),
              width: _visible ? size.width : size.width * 0.8,
              height: _visible ? size.width : size.width * 0.8,
              transform: Matrix4.rotationZ(_visible ? 0 : 0.5),
              transformAlignment: Alignment.center,
              decoration: BoxDecoration(
                  color: _visible ? Colors.amber : Colors.blue,
                  borderRadius: BorderRadius.circular(_visible ? 0 : 300)),
            ),
            const SizedBox(
              height: 50,
            ),
            ElevatedButton(
              onPressed: _trigger,
              child: const Text('Go!'),
            ),
          ],
        ),
      ),
    );
  }
}
```
