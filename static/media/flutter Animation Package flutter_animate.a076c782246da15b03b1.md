# flutter Animation Package flutter_animate

## install

```sh
flutter pub add flutter_animate
```

## usage

```dart
Animate(
    effects:[
        FadeEffect(
            begin: 0,
            end: 1,
            duration: 300.milliseconds,
            curve: Curves.easeInOut,
        ),
    ],
    child: Text('hello'),
)
```
