# flutter UI toast

## install

```sh
flutter pub add flutter_styled_toast
```

## usage

```dart
import 'package:flutter/material.dart';
import 'package:flutter_styled_toast/flutter_styled_toast.dart';

void showMessageToast(BuildContext context, String message) {
  showToast(
    message,
    context: context,
    animation: StyledToastAnimation.scale,
    reverseAnimation: StyledToastAnimation.fade,
    position: StyledToastPosition.bottom,
    animDuration: Duration(seconds: 1),
    duration: Duration(seconds: 4),
    curve: Curves.elasticOut,
    reverseCurve: Curves.linear,
  );
}
```
