# flutter VisibilityDetector

> 위젯이 화면에 보이는지 감지
>
> > IntersectionObserver와 비슷한 기능

## install

```sh
flutter pub add visibility_detector
```

## usage

```dart
@override
Widget build(BuildContext context) {
  return VisibilityDetector(
    key: Key('my-widget-key'),
    onVisibilityChanged: (visibilityInfo) {
      var visiblePercentage = visibilityInfo.visibleFraction * 100;
      debugPrint(
          'Widget ${visibilityInfo.key} is ${visiblePercentage}% visible');
    },
    child: someOtherWidget,
  );
}
```
