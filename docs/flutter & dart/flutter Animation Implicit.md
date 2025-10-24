# flutter Animation Implicit

> 애니메이션이란 하나의 상태에서 다른 상태로 변환하는 것
>
> > Animated로 시작하는 위젯
> >
> > > 여러 AnimatedWidget은 함께 사용 가능

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
            AnimatedAlign(
              duration: const Duration(seconds: 1),
              alignment: _visible ? Alignment.topLeft : Alignment.bottomRight,
              child: AnimatedOpacity(
                duration: const Duration(seconds: 1),
                opacity: _visible ? 1 : 0.2,
                child: Container(
                  width: size.width * 0.8,
                  height: size.width * 0.8,
                  color: Colors.amber,
                ),
              ),
            ),
            const SizedBox(
              height: 10,
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
