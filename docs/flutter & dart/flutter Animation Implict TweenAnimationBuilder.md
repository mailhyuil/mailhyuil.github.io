# flutter Animation Implict TweenAnimationBuilder

> Tween = (Between)

```dart
 TweenAnimationBuilder(
              tween: Tween(begin: 10.0, end: 20.0),
              //tween: ColorTween(begin: Colors.red, end: Colors.blue),
              curve: Curves.elasticOut,
              duration: const Duration(seconds: 2),
              builder: (context, value, child) {
                return Text('$value');
              },
            ),
```
